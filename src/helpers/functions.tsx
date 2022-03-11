export const capitalize = (string: string): string => {
  if (typeof string !== "string") return
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const decapitalize = (string: string): string => {
  if (typeof string !== "string") return
  return string.charAt(0).toLowerCase() + string.slice(1);
};

export const coinAudio = () => new Audio("https://themushroomkingdom.net/sounds/wav/smw/smw_coin.wav").play();