import { memo } from 'react';

import { Props } from './LocationDetails.types';

const LocationDetails:React.FC<Props> = ({ locationData }) => (
  <div>
    <div>Your location details:</div>
    {locationData?.ip && <div>{`IP Address: ${locationData?.ip}`}</div>}
    {locationData?.countryName && <div>{`Country: ${locationData?.countryName}`}</div>}
    {locationData?.city && <div>{`City: ${locationData?.city}`}</div>}
    {locationData?.latitude && <div>{`Latitude: ${locationData?.latitude}`}</div>}
    {locationData?.longitude && <div>{`Longitude: ${locationData?.longitude}`}</div>}
  </div>
);

export default memo(LocationDetails);
