export const cutString = (string, maxChar) => {
  if (string.length <= maxChar) return string;
  const fPart = string.substring(0, 7);
  return `${fPart}…${string.substring(string.length - 5)}`;
};
