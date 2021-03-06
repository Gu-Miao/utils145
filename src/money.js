/**
 * Convert number to money with thousand mark.
 *
 * @param {string|number} number Money number.
 * @return {string} Money with thousand mark.
 */
export function convertNumberToMoney(number) {
  const num = parseFloat(number?.toString())
  const negative = num < 0 ? '-' : ''
  const float = Math.abs(num).toFixed(2)
  const [intPart, floatPart] = float.split('.')
  const intPartArray = Array.from(intPart)

  let i = intPartArray.length
  let parsedInt = ''

  while (i--) {
    const len = intPartArray.length

    if ((len - i) % 3 === 0 && len > 3) {
      parsedInt = `,${intPartArray.splice(i, 3).join('')}${parsedInt}`
    }
    if (!i) {
      parsedInt = `${intPartArray.join('')}${parsedInt}`
    }
  }

  return `${negative}${parsedInt}.${floatPart}`
}
