interface IFragmentsiyaConfig {
    text: string;
    processor?: (spanElement: HTMLSpanElement, charIndex: number, charCount: number) => void;
    randomize?: boolean;
}
export declare class Fragmentsiya {
    private static instance;
    private constructor();
    static getInstance(): Fragmentsiya;
    split(config: IFragmentsiyaConfig): string;
    private createWordSpan;
    private createCharSpan;
    private createSpaceSpan;
    private createRandomIndices;
}
export {};
