import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis qui sed
        necessitatibus molestias! Vero, laboriosam aperiam sequi eius, dolor
        commodi omnis sit ipsa totam animi enim, quidem inventore aspernatur
        quas?
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
