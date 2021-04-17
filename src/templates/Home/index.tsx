import { NextSeo } from 'next-seo'
import LinkWrapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  const base_url = 'https://my-trips-five.vercel.app.com'

  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show some places in a map with informations about the cities"
        canonical={base_url}
        openGraph={{
          url: base_url,
          title: 'My Trips',
          description:
            'A simple project to show some places in a map with informations about the cities',
          images: [
            {
              url: `${base_url}/images/my-trips-cover.jpg`,
              width: 1280,
              height: 720,
              alt: 'My Trips map'
            }
          ],
          site_name: 'SiteName'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
