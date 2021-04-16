import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: var(--large) var(--medium);
`

export const Container = styled.section`
  max-width: var(--container);
  margin: auto;
`

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--medium);
`

export const Body = styled.div`
  margin-bottom: var(--large);
  p {
    margin-bottom: var(--medium);
  }
`

export const Gallery = styled.div`
  display: grid;
  grid-gap: var(--medium);
  width: auto;
  height: auto;
  img {
    background: #212121;
    background-image: linear-gradient(
      to right,
      #212121 0%,
      #292929 20%,
      #212121 40%,
      #212121 100%
    );
    background-size: 700px auto;
    animation: placeholderShimmer 7s linear infinite forwards;
    @keyframes placeholderShimmer {
      0% {
        background-position: -700px 0;
      }
      100% {
        background-position: 700px 0;
      }
    }
  }
`
