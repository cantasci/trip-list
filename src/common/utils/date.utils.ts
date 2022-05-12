export const formatDate = (date: Date | undefined, delimeter = '.'): string => {
  if (date) {
    return `${`0${date.getDate()}`.slice(-2)}${delimeter}${`0${date.getMonth() + 1}`.slice(
      -2
    )}${delimeter}${date.getFullYear()}`;
  }
  return '';
};

export const formatStringToDate = (date: string): Date => {
  if (!date || date.length !== 8) Date.now();
  return new Date(
    Number(date.substring(0, 4)),
    Number(date.substring(4, 6)) - 1,
    Number(date.substring(6, 8))
  );
};
