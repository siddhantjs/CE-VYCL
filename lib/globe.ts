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

/** VYCL brand-aligned globe styling   dark green base with lime accents. */
export const GLOBE_CONFIG: GlobeConfig = {
  pointSize: 1.2,
  globeColor: "#163328",
  showAtmosphere: true,
  atmosphereColor: "#d4f54a",
  atmosphereAltitude: 0.14,
  emissive: "#1a3d2e",
  emissiveIntensity: 0.22,
  shininess: 0.85,
  polygonColor: "rgba(212, 245, 74, 0.22)",
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

/** Arcs radiating from Honolulu and cross-country connections for continuous motion. */
export const GLOBE_ARCS: GlobeArc[] = [
  {
    order: 1,
    startLat: 21.3069,
    startLng: -157.8583,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.28,
    color: LIME,
  },
  {
    order: 2,
    startLat: 21.3069,
    startLng: -157.8583,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.3,
    color: LIME_MUTED,
  },
  {
    order: 3,
    startLat: 21.3069,
    startLng: -157.8583,
    endLat: 32.7767,
    endLng: -96.797,
    arcAlt: 0.34,
    color: LIME,
  },
  {
    order: 4,
    startLat: 21.3069,
    startLng: -157.8583,
    endLat: 41.8781,
    endLng: -87.6298,
    arcAlt: 0.36,
    color: LIME_MUTED,
  },
  {
    order: 5,
    startLat: 21.3069,
    startLng: -157.8583,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.38,
    color: LIME,
  },
  {
    order: 6,
    startLat: 21.3069,
    startLng: -157.8583,
    endLat: 33.749,
    endLng: -84.388,
    arcAlt: 0.32,
    color: LIME_MUTED,
  },
  {
    order: 7,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.42,
    color: LIME,
  },
  {
    order: 8,
    startLat: 37.7749,
    startLng: -122.4194,
    endLat: 47.6062,
    endLng: -122.3321,
    arcAlt: 0.22,
    color: LIME_MUTED,
  },
  {
    order: 9,
    startLat: 32.7767,
    startLng: -96.797,
    endLat: 25.7617,
    endLng: -80.1918,
    arcAlt: 0.4,
    color: LIME,
  },
  {
    order: 10,
    startLat: 41.8781,
    startLng: -87.6298,
    endLat: 42.3601,
    endLng: -71.0589,
    arcAlt: 0.35,
    color: LIME_MUTED,
  },
  {
    order: 11,
    startLat: 39.7392,
    startLng: -104.9903,
    endLat: 33.4484,
    endLng: -112.074,
    arcAlt: 0.26,
    color: LIME,
  },
  {
    order: 12,
    startLat: 29.7604,
    startLng: -95.3698,
    endLat: 30.2672,
    endLng: -97.7431,
    arcAlt: 0.18,
    color: LIME_MUTED,
  },
];
