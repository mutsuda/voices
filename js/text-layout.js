import { prepare, layout } from 'https://esm.sh/@chenglou/pretext'

function fitCardTitles() {
  document.querySelectorAll('.card-content .card-title').forEach(el => {
    const text = el.textContent.trim()
    if (!text) return

    // Reset any previously-set font size before measuring
    el.style.fontSize = ''

    const availableWidth = el.getBoundingClientRect().width
    if (availableWidth === 0) return

    const computed = window.getComputedStyle(el)
    const baseFontSize = Math.round(parseFloat(computed.fontSize) || 18)
    const lineHeight = parseFloat(computed.lineHeight) || baseFontSize * 1.4
    const fontFamily = computed.fontFamily
    const fontWeight = computed.fontWeight

    for (let size = baseFontSize; size >= 12; size--) {
      const font = `${fontWeight} ${size}px ${fontFamily}`
      const prepared = prepare(text, font)
      const { lineCount } = layout(prepared, availableWidth, lineHeight)

      if (lineCount <= 1 || size <= 12) {
        if (size !== baseFontSize) {
          el.style.fontSize = `${size}px`
        }
        break
      }
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  // Use requestAnimationFrame to ensure the layout has been painted
  requestAnimationFrame(fitCardTitles)
})

let resizeTimer
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(fitCardTitles, 150)
})
