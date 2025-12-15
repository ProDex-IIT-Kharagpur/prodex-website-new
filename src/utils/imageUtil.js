export const getImageUrl = (imageName, prefix) => {
  return new URL(`../assets/${prefix}/${imageName}`, import.meta.url).href;
};
