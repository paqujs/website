import { useNProgressStore } from '@/store';
import { generateProgress } from './generate-progress';

export const useNProgress = () => {
    const router = useRouter();
    const store = useNProgressStore();

    let timer: number;

    router.beforeEach(async (_, __, next) => {
        if (timer) {
            clearInterval(timer);
        }

        store.setProgress(0);
        store.setIsAnimating(true);

        store.setProgress(generateProgress(store.progress));
        timer = window.setInterval(() => store.setProgress(generateProgress(store.progress)), 800);

        next();
    });

    router.afterEach(() => {
        if (timer) {
            clearInterval(timer);
        }

        store.setProgress(100);

        setTimeout(() => {
            store.setIsAnimating(false);
        }, 300);
    });
};
