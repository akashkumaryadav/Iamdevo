import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React from "react"
import Typewriter from "typewriter-effect"

const BannerImage = styled(BackgroundImage)`
  display: flex;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  align-items: center;
  height: 60vh;
  background-size: cover;
  color: white;
  text-align: center;
  word-wrap: wrap;
  font-family: "Poppins";
`

const Banner = () => {
  const data = useStaticQuery(graphql`
    {
      allImageSharp(
        filter: { fluid: { originalName: { eq: "banner.jpeg" } } }
      ) {
        nodes {
          id
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <BannerImage
      fluid={data.allImageSharp.nodes[0].fluid}
      alt="hero image"
      className="text-white "
    >
      <h1
        id="banner-text"
        className="text-3xl md:text-4xl lg:text-5xl align-middle justify-center"
      >
        <span className="text-6xl" style={{ fontFamily: "Pacifico" }}>
          I
        </span>
        <span id="banner-text-animated" className="text-warning">
          <Typewriter
            options={{
              strings: ["am Web Developer", "am CS Graduate", "write blogs"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h1>
    </BannerImage>
  )
}

export default Banner
