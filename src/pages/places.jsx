import axios from "axios"
import clsx from "clsx"
import Link from "next/link"
import { useState } from "react"


export const getServerSideProps = async () => {
  const { data:places } = await axios("http://localhost:3002/api/places")

  return {
    props: { places, },
  }
}
const PlacesPage = ({ places: initialPlaces }) => {
  return (
    <ul className="flex flex-col gap-4">
      {places.map(({ id, type, name, address, city, postalCode, country }) => (
        <li key={id} className="group flex items-center gap-2">
          <Link href={`/places/${id}/edit`} className="flex gap-2 py-1">
            <div>
              #{id} {name}
              {type}
              {address}, {city}
              {postalCode}, {country}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default PlacesPage
