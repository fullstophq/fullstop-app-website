import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

setOptions({
  name: 'Punctuation',
  url: '#',
  showAddonPanel: true,
  addonPanelInRight: true,
})

const req = require.context('../punctuation', true, /\.stories.tsx?$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
