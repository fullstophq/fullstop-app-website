import * as React from 'react'

import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { Heading, SubHeading } from '.'

const stories = storiesOf('Heading', module)

stories.addDecorator(withKnobs)

stories.add('with text', () => {
  return (
    <Heading>
      {text('Label', 'The quick brown fo jumps over the lazy dog.')}
    </Heading>
  )
})

stories.add('with subheading', () => {
  return (
    <React.Fragment>
      <SubHeading>{text('Label', 'intelligent data capture')}</SubHeading>
      <Heading>
        {text('Label', 'Meet content owners in their natural environment')}
      </Heading>
    </React.Fragment>
  )
})
