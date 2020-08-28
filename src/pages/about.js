import React from "react"
import Layout from "../components/layout"
import { Link, useStaticQuery, graphql } from "gatsby"
import Wave from "../components/wave"
import Img from "gatsby-image"
import { css } from "@emotion/core"

export default () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allFile(
  //       filter: {
  //         sourceInstanceName: { eq: "images" }
  //         relativePath: { eq: "profile.jpg" }
  //       }
  //     ) {
  //       nodes {
  //         image: childImageSharp {
  //           fluid {
  //             srcSetWebp
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // const { image } = data.allFile.nodes[0]
  return (
    <Layout>
      <div className="flex-col p-5 ">
        <blockquote className="text-teal-600 text-xl ">
          about page is under construction{" "}
        </blockquote>
        <h1 className="text-xl">Till then why not read a story?</h1>
      </div>
      <p
        css={css`
          span::before {
            content: open-quote;
            font-size: 5rem;
            top: 10%;
            color: #ffdf2b;
          }
          span::after {
            content: close-quote;
            font-size: 5rem;
            top: 10%;
            color: #ffdf2b;
          }
        `}
      >
        <span className="text-sm sm:text-lg lg:text-3xl md:text-2xl text-gray-800 font-semibold">
          My favorite things do not cost money.
        </span>
        <br />
        It is clear that the most precious resource that we all have is time.
        Steve Jobs! This name needs no introduction. He was born in California
        to an unmarried interracial couple; Syrian father. According to Steve’s
        biological father, it was her girlfriend’s parents who were not in
        favoring of their marriage; they disallowed her to marry an Arab. This
        is why, her biological mother, Schieble traveled to San Francisco to
        have the baby. Lately, he was put for an adoption; Paul and Clara Jobs
        adopted Steve. For most of my childhood was tormented by thoughts and
        search for their biological parents. He had poor results in school and
        was a rebellious person in primary school. When he was in fourth grade,
        one of the teachers noted his potential, and later Steve was able to
        skip a year of school because his intelligence level was too high for
        that class. He gave up school because his parents could not afford to
        have him financial support. He had the first job as an auditor. His
        girlfriend abandoned him, and he led a modest lifestyle in those
        moments. He along with his friends and Wayne Wozniak invented an
        electronic device called Apple Computer in a garage. And, this is when
        the journey of Apple started; a multi-billion dollar company.
      </p>
      <br />
      <Link to="/">&larr; get to home</Link>
    </Layout>
  )
}
