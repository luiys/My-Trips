import { useRouter } from 'next/dist/client/router'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Place[]
}

const Map = ({ places }: MapProps) => {
  const router = useRouter()

  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places?.map(({ name, slug, id, location }) => {
        const { latitude, longitude } = location

        return (
          <Marker
            eventHandlers={{
              click: () => {
                router.push(`/place/${slug}`)
              }
            }}
            key={`place-${id}`}
            position={[latitude, longitude]}
            title={name}
          />
        )
      })}
    </MapContainer>
  )
}

export default Map
