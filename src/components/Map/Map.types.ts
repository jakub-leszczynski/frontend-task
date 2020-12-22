export interface Props {
  viewport: Viewport
  setViewport: (viewport: Viewport) => void
}

export interface Point {
  latitude: number
  longitude: number
}

export interface Viewport extends Point {
  zoom: number
}
