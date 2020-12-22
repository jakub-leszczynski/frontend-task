import { useState, useCallback, useEffect } from 'react';

import { Viewport, Point } from './Map.types';

export const useMap = (center: Point): [
  viewport: Viewport,
  handleSetViewport: (viewport: Viewport) => void,
] => {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 11,
  });

  const handleSetViewport = useCallback(
    (newViewport: Viewport) => {
      setViewport(newViewport);
    },
    [],
  );

  useEffect(() => {
    setViewport((prev) => ({
      ...prev,
      latitude: center?.latitude,
      longitude: center?.longitude,
    }));
  }, [center.latitude, center.longitude]);

  return [
    viewport,
    handleSetViewport,
  ];
};
