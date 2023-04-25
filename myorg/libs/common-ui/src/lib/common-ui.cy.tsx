import * as React from 'react'
import CommonUi, { CommonUiProps } from './common-ui'


describe(CommonUi.name, () => {
  let props: CommonUiProps;

  beforeEach(() => {
    props = {
    }
  })

  it('renders', () => {
    cy.mount(<CommonUi {...props}/>)
  })
})

