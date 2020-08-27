import React from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Quotes from "./quotes"

const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top 20% center;
  background-attachment: fixed;
  height: 100vh;
  + * {
    margin-top: 0;
  }
`
const HeroText = styled("div")`
  background: linear-gradient(
    to bottom,
    rgba(25, 25, 25, 0.2),
    rgba(25, 25, 25, 0.2),
    rgba(25, 25, 25, 0.4),
    rgba(25, 25, 25, 0.5),
    rgba(25, 25, 25, 0.6),
    rgba(25, 25, 25, 0.7),
    rgba(25, 25, 25, 0.8)
  );
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin: 0;

  h1 {
    color: #ddd;
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
  button {
    width: 100%;
    background-color: #663399ff;
    border: none;
    padding: 1rem;
    font-size: 1rem;
    color: whitesmoke;
    border-radius: 12px;
    outline: none;
  }
  @media only screen and (max-width: 518px) {
    padding: 0 calc((100vw - 300px) / 2);
    h1 {
      color: #ddd;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`

function Hero() {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "colorfulmountains.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  console.log(Quotes)
  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn>
      <HeroText>
        <h1>
          ALL KNOWLEDGE IS CONNECTED TO ALL OTHER KNOWLEDGE. THE FUN IS IN
          MAKING THE CONNECTIONS.
        </h1>
      </HeroText>
    </ImageBackground>
  )
}

export default Hero
