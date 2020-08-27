import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Wave from "../components/wave"

export default () => {
  return (
    <Layout>
      <div>I am as curios as you are</div>
      <Wave />
      <br />
      <Link to="/">&larr; get to home</Link>
    </Layout>
  )
}
