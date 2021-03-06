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

const BannerText = styled("div")`
  display: flex;
  justify-content: center;
  letter-spacing: 0.15rem;
  align-items: center;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.9)
  );
  width: 100%;
  height: 100%;
  @media (max-width: 560px) {
    flex-direction: column;
  }
`

const Banner = () => {
  const data = useStaticQuery(graphql`
    {
      allImageSharp(filter: { fluid: { originalName: { eq: "banner.jpg" } } }) {
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
      <BannerText className="text-3xl md:text-5xl lg:text-6xl">
        <span className="mx-4" style={{ fontFamily: "Pacifico" }}>
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
      </BannerText>
    </BannerImage>
  )
}

export default Banner
