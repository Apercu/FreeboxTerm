import { screen } from 'components'

import store from 'store'
import { deleteTorrent, toggleTorrent, downloadTorrent, toggleWifi, toggleMode } from 'core/api'
import { left, right, enter, q, down, up } from 'actions/ui'

screen.key(['escape', 'C-c'], () => process.exit(0))
screen.key('left', () => store.dispatch(left()))
screen.key('right', () => store.dispatch(right()))
screen.key('enter', () => store.dispatch(enter()))
screen.key('down', () => store.dispatch(down()))
screen.key('up', () => store.dispatch(up()))
screen.key('q', () => store.dispatch(q()))

screen.key('m', () => toggleMode())
screen.key('S-m', () => toggleMode(true))

screen.key('t', toggleTorrent)
screen.key('d', downloadTorrent)
screen.key('delete', deleteTorrent)

screen.key('w', toggleWifi)
