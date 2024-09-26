export function convertToTitleCase(text: string = '') {
  if (!text.includes('_')) {
    return text // Return the original string if it doesn't contain an underscore
  }

  const words = text.split('_')
  const capitalizedWords = words.map(
    (word: string) => word.charAt(0).toUpperCase() + word.slice(1),
  )
  return capitalizedWords.join(' ')
}
