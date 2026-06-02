import type { GlobeConfig } from "@/components/ui/globe";

export type GlobeArc = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

/** Honolulu — hub for all national reach arcs (matches GeoJSON CRS84 lng/lat). */
export const GLOBE_HUB = {
  lat: 21.3069,
  lng: -157.8583,
} as const;

/** VYCL brand-aligned globe styling — tokens mirror app/globals.css (--vycl-*). */
export const GLOBE_CONFIG: GlobeConfig = {
  pointSize: 1.5,
  globeColor: "#1c3f30",
  showAtmosphere: true,
  atmosphereColor: "#d4f54a",
  atmosphereAltitude: 0.14,
  emissive: "#1a3d2e",
  emissiveIntensity: 0.32,
  shininess: 0.85,
  polygonColor: "rgba(212, 245, 74, 0.5)",
  hexPolygonResolution: 4,
  hexPolygonMargin: 0.55,
  pointRadius: 2.2,
  ambientLight: "#ffffff",
  directionalLeftLight: "#d4f54a",
  directionalTopLight: "#ffffff",
  pointLight: "#d4f54a",
  arcTime: 1600,
  arcLength: 0.55,
  rings: 2,
  maxRings: 4,
  autoRotate: true,
  autoRotateSpeed: 0.65,
};

const LIME = "#d4f54a";
const LIME_MUTED = "#e8f9a0";

/** Arcs radiating from Honolulu to U.S. deployment locations only. */
export const GLOBE_ARCS: GlobeArc[] = [
  {
    order: 1,
    startLat: GLOBE_HUB.lat,
    startLng: GLOBE_HUB.lng,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.28,
    color: LIME,
  },
  {
    order: 2,
    startLat: GLOBE_HUB.lat,
    startLng: GLOBE_HUB.lng,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.3,
    color: LIME_MUTED,
  },
  {
    order: 3,
    startLat: GLOBE_HUB.lat,
    startLng: GLOBE_HUB.lng,
    endLat: 32.7767,
    endLng: -96.797,
    arcAlt: 0.34,
    color: LIME,
  },
  {
    order: 4,
    startLat: GLOBE_HUB.lat,
    startLng: GLOBE_HUB.lng,
    endLat: 41.8781,
    endLng: -87.6298,
    arcAlt: 0.36,
    color: LIME_MUTED,
  },
  {
    order: 5,
    startLat: GLOBE_HUB.lat,
    startLng: GLOBE_HUB.lng,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.38,
    color: LIME,
  },
  {
    order: 6,
    startLat: GLOBE_HUB.lat,
    startLng: GLOBE_HUB.lng,
    endLat: 33.749,
    endLng: -84.388,
    arcAlt: 0.32,
    color: LIME_MUTED,
  },
  {
    order: 7,
    startLat: GLOBE_HUB.lat,
    startLng: GLOBE_HUB.lng,
    endLat: 47.6062,
    endLng: -122.3321,
    arcAlt: 0.3,
    color: LIME,
  },
  {
    order: 8,
    startLat: GLOBE_HUB.lat,
    startLng: GLOBE_HUB.lng,
    endLat: 25.7617,
    endLng: -80.1918,
    arcAlt: 0.4,
    color: LIME_MUTED,
  },
  {
    order: 9,
    startLat: GLOBE_HUB.lat,
    startLng: GLOBE_HUB.lng,
    endLat: 42.3601,
    endLng: -71.0589,
    arcAlt: 0.38,
    color: LIME,
  },
  {
    order: 10,
    startLat: GLOBE_HUB.lat,
    startLng: GLOBE_HUB.lng,
    endLat: 39.7392,
    endLng: -104.9903,
    arcAlt: 0.34,
    color: LIME_MUTED,
  },
  {
    order: 11,
    startLat: GLOBE_HUB.lat,
    startLng: GLOBE_HUB.lng,
    endLat: 33.4484,
    endLng: -112.074,
    arcAlt: 0.32,
    color: LIME,
  },
  {
    order: 12,
    startLat: GLOBE_HUB.lat,
    startLng: GLOBE_HUB.lng,
    endLat: 29.7604,
    endLng: -95.3698,
    arcAlt: 0.36,
    color: LIME_MUTED,
  },
];
