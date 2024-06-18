export const words = "Hello World";

export function reverseWords() {
  return words.trim().split(/\s+/).reverse().join(' ');
}
