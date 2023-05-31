import { clamp } from "./clamp";

export const generateProgress = (progress: number) => {
    let amount = 0;

    if (progress >= 0 && progress < 0.2) {
        amount = 0.1;
    } else if (progress >= 0.2 && progress < 0.5) {
        amount = 0.07;
    } else if (progress >= 0.5 && progress < 0.8) {
        amount = 0.05;
    } else if (progress >= 0.8 && progress < 0.99) {
        amount = 0.03;
    }

    return clamp(progress + amount, 0, 0.994);
};
