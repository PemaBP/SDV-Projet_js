import React from 'react';
import Link from 'next/link';

const PlaceList = ({ place }) => {
  <Link href={`/place/${_id}`}>
    <ul>
      <li>
        <h1>{place.name}</h1>
        <h2>{place.type}</h2>
        <p>{place.address}</p>
        <p>{place.city}</p>
        <p>{place.country}</p>
      </li>
    </ul>
  </Link>
};

export default PlaceList;