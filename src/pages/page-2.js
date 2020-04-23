import React from "react"
import { Link } from "gatsby"

import Index from "../Layout"
import SEO from "../Layout/seo"

const SecondPage = () => (
  <Index>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Index>
)

export default SecondPage
