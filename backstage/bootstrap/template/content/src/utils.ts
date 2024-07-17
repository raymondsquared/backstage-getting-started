const getName = (): string => {
  return "${{ values.name | safe | lower | replace(' ', '-') }}";
};

export { getName };
