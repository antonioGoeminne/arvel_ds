export const convertSx = (sx: Record<string, string>): string => {
  if (!sx) return ''

  return Object.entries(sx)
    .map(([key, v]) => `${key}: "${v || ''}";`)
    .join('\n')
}
