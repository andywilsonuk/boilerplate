import { render } from 'preact'
import { createRootFragment } from 'preact-root-fragment'
import { Ui } from './ui/ui'
import 'preact/debug'

const rootElement = document.getElementsByTagName('body')[0]
const appElement: Element | null = rootElement.firstElementChild
if (appElement === null) { throw new Error('Missing body child') }
render(<Ui />, createRootFragment(rootElement, appElement))
