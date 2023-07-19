interface IFragmentsiyaConfig {
  text: string;
  processor?: (spanElement: HTMLSpanElement, charIndex: number, charCount: number) => void;
  randomize?: boolean;
}

class Fragmentsiya {
  private static instance: Fragmentsiya;

  private constructor() { }

  public static getInstance(): Fragmentsiya {
    if (!Fragmentsiya.instance) {
      Fragmentsiya.instance = new Fragmentsiya();
    }

    return Fragmentsiya.instance;
  }

  public split(config: IFragmentsiyaConfig): string {
    if (config.text.length === 0) return "";

    const element = document.createElement('span');
    const words = config.text.split(' ');

    let globalCharIndex = 0;
    const randomizedIndices = config.randomize ? this.createRandomIndices(config.text.length) : null;

    words.forEach((word, wordIndex) => {
      const wordSpan = this.createWordSpan(word, globalCharIndex, randomizedIndices, config.processor);
      element.appendChild(wordSpan);

      globalCharIndex += word.length;

      if (wordIndex !== words.length - 1) {
        wordSpan.appendChild(this.createSpaceSpan());
      }
    });

    return element.innerHTML;
  }

  private createWordSpan(word: string, startCharIndex: number, randomizedIndices: number[] | null, processor?: IFragmentsiyaConfig['processor']): HTMLSpanElement {
    const span = document.createElement('span');
    span.classList.add('-splitted-wrap');

    Array.from(word).forEach((char, charIndex) => {
      const charSpan = this.createCharSpan(char, startCharIndex + charIndex);
      if (randomizedIndices) {
        charSpan.style.setProperty('--char-random-index', String(randomizedIndices[startCharIndex + charIndex]));
      }
      span.appendChild(charSpan);

      if (processor) {
        processor(charSpan, charIndex, word.length);
      }
    });

    return span;
  }

  private createCharSpan(char: string, globalCharIndex: number): HTMLSpanElement {
    const span = document.createElement('span');
    span.innerText = char;
    span.classList.add('-splitted-char');
    span.style.setProperty('--char-index', String(globalCharIndex));

    return span;
  }

  private createSpaceSpan(): HTMLSpanElement {
    const spaceSpan = document.createElement('span');
    spaceSpan.innerHTML = '\u00a0';

    return spaceSpan;
  }

  private createRandomIndices(size: number): number[] {
    const indices = Array.from({ length: size }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  }
}

export default Fragmentsiya