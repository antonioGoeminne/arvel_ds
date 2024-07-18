export const convertSx = (sx: Record<string, string>): string => {
  return Object.entries(sx)
    .map(([key, v]) => `${key}: "${v}";`)
    .join('\n')
}
