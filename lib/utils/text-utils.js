export const capitalize = (str) => {
  const safeText = String(str).trim()
  return safeText.charAt(0).toUpperCase() + safeText.slice(1)
}
