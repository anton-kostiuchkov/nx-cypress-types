import * as React from 'react'
import CommonUi, { CommonUiProps } from './common-ui'


describe(CommonUi.name, () => {
  let props: CommonUiProps;
  const x: boolean = 1;

  beforeEach(() => {
    props = {
    }
  })

  it('renders', () => {
    cy.mount(<CommonUi {...props}/>)
  })
})

