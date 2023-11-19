export const formatColor = (
  color: string | null | undefined,
  defaultColor: string = 'bg-white',
  prefix: string = 'bg'
): string => {
  if (!color) {
    return defaultColor;
  }
  if (color.startsWith('#')) {
    return `${prefix}-[${color}]`;
  } else {
    return `${prefix}-${color}`;
  }
};
