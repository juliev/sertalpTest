export const siteImages = {
  hero: "/images/hero/hero-banner.webp",
} as const;

export type WorkImage = {
  src: string;
  width: number;
  height: number;
  objectPosition: string;
};

export const workImages = {
  alegriaDoor: {
    src: "/images/works/doors/alegria-porta-entrada-aluminio.webp",
    width: 1080,
    height: 1919,
    objectPosition: "center 55%",
  },
  ademaDoor: {
    src: "/images/works/doors/adema-do-meio-porta-arqueada-aluminio.webp",
    width: 1600,
    height: 3291,
    objectPosition: "center",
  },
  misericordiaDoor: {
    src: "/images/works/doors/misericordia-porta-ogival-pvc.webp",
    width: 1456,
    height: 2592,
    objectPosition: "center",
  },
  infanteDoor: {
    src: "/images/works/doors/infante-santo-porta-correr-aluminio.webp",
    width: 692,
    height: 922,
    objectPosition: "center",
  },
  macieirasDoor: {
    src: "/images/works/doors/macieiras-porta-entrada-aluminio.webp",
    width: 720,
    height: 960,
    objectPosition: "center 42%",
  },
  unnamedArchedDoor: {
    src: "/images/works/doors/porta-arqueada-envidracada-pvc.webp",
    width: 960,
    height: 1280,
    objectPosition: "center",
  },
  unnamedSlidingDoor: {
    src: "/images/works/doors/porta-correr-aluminio-terraco.webp",
    width: 1600,
    height: 1200,
    objectPosition: "center 55%",
  },
  diogoDoor: {
    src: "/images/works/doors/diogo-velasques-porta-envidracada-pvc.webp",
    width: 1456,
    height: 2592,
    objectPosition: "center",
  },
  almoinhasSliding: {
    src: "/images/works/doors/almoinhas-velhas-porta-correr-aluminio.webp",
    width: 1600,
    height: 1200,
    objectPosition: "center",
  },
  diogoWindows: {
    src: "/images/works/windows/diogo-velasques-janelas-pvc.webp",
    width: 1600,
    height: 899,
    objectPosition: "center",
  },
  almoinhasFixed: {
    src: "/images/works/windows/almoinhas-velhas-janela-fixa-aluminio.webp",
    width: 1600,
    height: 1200,
    objectPosition: "center",
  },
  casalGlazing: {
    src: "/images/works/windows/casal-do-paul-envidracado-aluminio.webp",
    width: 1600,
    height: 1200,
    objectPosition: "center",
  },
  sobredaWindow: {
    src: "/images/works/windows/sobreda-janela-pvc-portadas.webp",
    width: 1600,
    height: 1200,
    objectPosition: "center",
  },
  egasWindows: {
    src: "/images/works/windows/egas-moniz-janelas-pvc.webp",
    width: 1600,
    height: 899,
    objectPosition: "center 30%",
  },
  santaRitaGlazing: {
    src: "/images/works/windows/santa-rita-envidracado-aluminio.webp",
    width: 1456,
    height: 2592,
    objectPosition: "center",
  },
} as const satisfies Record<string, WorkImage>;
