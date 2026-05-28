import type { ThreeElements } from "@react-three/fiber";

declare global {
  namespace React {
    namespace JSX {
      // eslint-disable-next-line @typescript-eslint/no-empty-object-type -- R3F element augmentation
      interface IntrinsicElements extends ThreeElements {}
    }
  }
}

export {};
