import * as React from 'react'

import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { PrimaryButton } from '.'

const stories = storiesOf('Buttons', module)

stories.addDecorator(withKnobs)

stories.add('Primary - Normal', () => {
  return <PrimaryButton />
})
