# Fragmentsiya

Fragmentsiya is a robust JavaScript library that splits text into unique fragments, providing fine-grained control and customization over individual characters with unique and randomized indexing capabilities.

## Installation

To install Fragmentsiya, you can use npm:

```
npm install @penev_palemiya/fragmentsiya
```

## Usage

First, import the Fragmentsiya library in your file:

```javascript
import { Fragmentsiya } from '@penev_palemiya/fragmentsiya';
```

Create an instance of Fragmentsiya:

```javascript
const fragmentsiya = Fragmentsiya.getInstance();
```

Then, use the `split` function to split your text into fragments. Here's an example:

```javascript
spliter.split({
  text: "Your text goes here",
  processor: (span, charIndex, totalChars) => {
    // Your custom logic here
  },
  randomize: true
});
```

## Configuration

The `split` function accepts a configuration object with the following properties:

- `text` (String) - The text to split into fragments.
- `processor` (Function) - A callback function that gets executed on each character. This function gets three arguments:
  - `span` (HTMLElement): The span element that wraps the character.
  - `charIndex` (Number): The index of the current character in the word.
  - `totalChars` (Number): The total number of characters in the word.
- `randomize` (Boolean) - If set to `true`, assigns each character a unique random index. Default is `false`.

## Contribution

Contributions are welcome. Please fork this repository and submit your PR.

## License

Fragmentsiya is [MIT licensed](./LICENSE).

## Author

Penev Vladislav

## Contact

For any inquiries, you can reach out to Penev at penev.vladislav@gmail.com
