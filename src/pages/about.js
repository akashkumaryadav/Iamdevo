import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default () => {
  return (
    <Layout>
      <div>This is about page ....</div>
      <Link to="/">&larr; get to home</Link>
    </Layout>
  )
}
