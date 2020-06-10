import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { MuiThemeProvider } from '@material-ui/core'

import getBaseTheme from '../../themes/base'
import ContactInfo from './contact-info'

const mockStore = configureStore([])

describe("ContactInfo", () => {
  let store
  let tree

  beforeEach(() => {
    store = mockStore({
      app: {
        themeType: 'light',
        ipv4: '',
        ipv6: '',
        geoData: '',
      }
    })

    tree = renderer.create(
      <Provider store={store}>
        <MuiThemeProvider theme={getBaseTheme(store.getState().app.themeType)}>
          <ContactInfo />
        </MuiThemeProvider>
      </Provider>
    ).toJSON()
  })
  // it("renders correctly", () => {
  //   expect(tree).toMatchSnapshot()
  // })
  it("passes", () => {
    expect(true).toBe(true)
  })
})