export const compareStringAndBoolean = (
  dataA: boolean | string,
  dataB: boolean | string,
) => {
  return (
    String(dataA).toLocaleLowerCase() === String(dataB).toLocaleLowerCase()
  );
};
