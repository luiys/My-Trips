import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/images/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />

    <S.Title>React Avançado</S.Title>

    <S.Description>
      TypeScript, ReactJS, NextsJS e Styled Components
    </S.Description>

    <S.Illustration
      src="/images/hero-illustration.svg"
      alt="Imagem de um homem sentado numa cadeira mexendo no computador"
    />
  </S.Wrapper>
)

export default Main
