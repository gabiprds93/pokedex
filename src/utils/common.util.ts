// Common utility functions

/** Function to capitalize some text.
 * @since 0.1.0
 * @param text The text to capitalize.
 * @returns Returns text capitalized.
 */
export const capitalize = (text: string) => {
  let textArray = text.split(" ");
  textArray = textArray.map(
    (item) => `${item.charAt(0).toUpperCase()}${item.substr(1)}`
  );
  const textCapitalize = textArray.join(" ");

  return textCapitalize;
};
