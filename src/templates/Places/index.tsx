import { NextSeo } from 'next-seo'
import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import Image from 'next/image'
import { useRouter } from 'next/router'

import * as S from './styles'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter()
  const base_url = 'https://my-trips-five.vercel.app.com'

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={place.name}
        description={
          place.description?.text ||
          'A simple project to show some places in a map with informations about the cities'
        }
        canonical={base_url}
        openGraph={{
          url: base_url,
          title: place.name,
          description:
            place.description?.text ||
            'A simple project to show some places in a map with informations about the cities',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: place.name
            }
          ]
        }}
      />

      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />

          <S.Gallery>
            {place.gallery.map((image, index) => {
              // const proportion = 1000 / image.height
              // const height = image.height * proportion

              return (
                <Image
                  src={image.url}
                  alt={place.name}
                  key={index}
                  width={image.width}
                  height={image.height}
                  quality={75}
                  objectFit="contain"
                />
              )
            })}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
