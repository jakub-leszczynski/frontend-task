import { memo } from 'react';
import ReactMapGL from 'react-map-gl';
import { Props, Viewport } from './Map.types';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map: React.FC<Props> = ({ viewport, setViewport }) => (
  <ReactMapGL
    latitude={viewport.latitude}
    longitude={viewport.longitude}
    zoom={viewport.zoom}
    width="100%"
    height="100%"
    onViewportChange={(newViewport: Viewport) => setViewport(newViewport)}
  />
);

export default memo(Map);
