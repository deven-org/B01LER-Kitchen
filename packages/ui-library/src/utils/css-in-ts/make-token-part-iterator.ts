export type cssAttributeValue = string | number;

export const joinCss = (strings: TemplateStringsArray, ...values: cssAttributeValue[]): string => {
  let result = '';

  for (let i = 0; i < values.length; i++) {
    result += strings[i] + values[i];
  }

  result += strings[values.length];

  return result;
};

export const makeIterator = <TokenPart extends object>() => {
  return (
    tokenPartType: TokenPart,
    renderFunction: <T extends keyof TokenPart>(
      key: keyof TokenPart,
      tokenPart: TokenPart[T],
      css: typeof joinCss,
    ) => string,
  ) => {
    let returnValue = '';

    Object.keys(tokenPartType).forEach(function (key) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      returnValue += renderFunction(key, tokenPartType[key], joinCss);
    });

    return returnValue;
  };
};
