import { defineStore } from 'pinia';

export interface NProgressStore {
    isAnimating: boolean;
    progress: number;
}

export const useNProgressStore = defineStore('nprogress', {
    state: (): NProgressStore => ({
        isAnimating: false,
        progress: 0,
    }),
    actions: {
        setIsAnimating(isAnimating: boolean) {
            this.isAnimating = isAnimating;
        },
        setProgress(progress: number) {
            this.progress = progress;
        },
    },
});
