import blessed from 'blessed'
import contrib from 'blessed-contrib'

export const screen = blessed.screen({ smartCSR: true })

screen.title = 'FreeboxTerm'

export const loader = blessed.box({
  width: '100%',
  height: '100%',
  align: 'center',
  valign: 'middle',
  content: 'Checking for Freebox around   /'
})

/**
 * Menu section
 */
export const menuPage = blessed.layout({
  width: '40%',
  height: '20%',
  top: 'center',
  left: 'center'
})

const menuBoxBase = {
  width: `${100 / 3}%`,
  height: '100%',
  border: { type: 'line', fg: 'blue' },
  align: 'center',
  valign: 'middle',
  fg: 'gray'
}

export const menus = [
  blessed.box({ label: 'downloads', content: '⇓', ...menuBoxBase }),
  blessed.box({ label: 'status', content: '!', ...menuBoxBase }),
  blessed.box({ label: 'settings', content: '?', ...menuBoxBase })
]

menus.forEach(m => menuPage.append(m))

/**
 * Dowload section
 */
export const dlPage = blessed.layout({
  width: '100%',
  height: '100%',
  top: 'center',
  left: 'center'
})

export const dlList = blessed.layout({ height: '60%', width: '100%' })
export const diskGauge = contrib.gauge({ width: '100%', height: '10%' })

const dlBottom = blessed.layout({ height: '30%', width: '100%' })

export const dlChart = contrib.line({
  width: '50%',
  height: '100%',
  left: 'center',
  showLegend: true,
  border: 'bg',
  legend: { width: 12 }
})

export const downloads = []

export const txtBase = { fg: 'white', height: '100%', align: 'center', valign: 'middle' }

dlPage.append(dlList)
dlPage.append(diskGauge)
dlPage.append(dlBottom)
dlBottom.append(dlChart)
