export interface Theme {
  id: string;
  name: string;
  brand: string;
  dark: string;
  card: string;
  border: string;
  borderLight: string;
  glowColor: string;
}

export const THEMES: Theme[] = [
  {
    id: "cyberpunk",
    name: "Cyber Orange",
    brand: "#FF4E00",
    dark: "#050505",
    card: "#0a0a0a",
    border: "#333333",
    borderLight: "#444444",
    glowColor: "rgba(255, 78, 0, 0.15)",
  },
  {
    id: "matrix",
    name: "Matrix Green",
    brand: "#00FF66",
    dark: "#030c05",
    card: "#07170a",
    border: "#133519",
    borderLight: "#1d4e25",
    glowColor: "rgba(0, 255, 102, 0.15)",
  },
  {
    id: "nordic",
    name: "Nordic Frost",
    brand: "#38BDF8",
    dark: "#080c14",
    card: "#0f1624",
    border: "#1e293b",
    borderLight: "#334155",
    glowColor: "rgba(56, 189, 248, 0.15)",
  },
  {
    id: "amber",
    name: "Retro Amber",
    brand: "#F59E0B",
    dark: "#0a0805",
    card: "#120f0a",
    border: "#291f0f",
    borderLight: "#3d2e16",
    glowColor: "rgba(245, 158, 11, 0.15)",
  },
  {
    id: "rose",
    name: "Rose Velvet",
    brand: "#EC4899",
    dark: "#080407",
    card: "#130911",
    border: "#291021",
    borderLight: "#3d1831",
    glowColor: "rgba(236, 72, 153, 0.15)",
  },
];
