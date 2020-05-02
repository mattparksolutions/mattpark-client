import React from 'react'
import renderer from 'react-test-renderer'

import AboutPage from './index'



describe("AboutPage", () => {
  // beforeEach(() => {
  //   jest.mock('./index', () => 'AboutPage')
  // })

  it("renders correctly", () => {
    const tree = renderer.create(<AboutPage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})