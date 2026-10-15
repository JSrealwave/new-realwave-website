export const SITE = {
  name: "Realwave",
  parent: "ePlus",
  tagline: "Process while you record.",
  email: "john@realwave.com",
  trialUrl: "https://vue.realwave.io/",
  cloudUrl: "https://vue.realwave.io/",
  resourcesUrl: "https://resources.gorealwave.com/login",
};

export const nav = [
  { href: "/platform", label: "Platform" },
  { href: "/edge", label: "Edge" },
  { href: "/vue", label: "Vue" },
  { href: "/intelligence", label: "Intelligence" },
  { href: "/operate", label: "Operate" },
  {
    href: "/solutions",
    label: "Solutions",
    children: [
      {
        href: "/solutions/gsoc",
        label: "GSOC",
        desc: "Video, access, and alarms. One site or many.",
      },
      {
        href: "/solutions/ot",
        label: "Exceptions",
        desc: "The events that should not have happened.",
      },
      {
        href: "/solutions/flow",
        label: "Flow",
        desc: "Counts, queues, and how long things wait.",
      },
    ],
  },
  { href: "/partners", label: "Partners" },
] as const;

export const stack = [
  {
    key: "edge",
    href: "/edge",
    kicker: "01",
    name: "Edge",
    line: "Sensors and compute — cameras, GPU servers, LiDAR — where inference actually runs.",
  },
  {
    key: "vue",
    href: "/vue",
    kicker: "02",
    name: "Vue",
    line: "The operator glass. Video, access, maps, and archive. Complete as video-only.",
  },
  {
    key: "intelligence",
    href: "/intelligence",
    kicker: "03",
    name: "Intelligence",
    line: "The engineered layer: models, POS and access fusion, rules for this site.",
  },
  {
    key: "operate",
    href: "/operate",
    kicker: "04",
    name: "Operate",
    line: "Your instance, watched: health, workflows, dashboards, 24/7.",
  },
] as const;

export const jobs = [
  {
    href: "/solutions/gsoc",
    kicker: "01",
    name: "GSOC",
    lede: "Video, access, and alarms — one site or many.",
    image: "/media/intel-track-lot.jpg",
  },
  {
    href: "/solutions/ot",
    kicker: "02",
    name: "Exceptions",
    lede: "The events that should not have happened.",
    image: "/media/retail.jpg",
  },
  {
    href: "/solutions/flow",
    kicker: "03",
    name: "Flow",
    lede: "Counts, queues, and how long things wait.",
    image: "/media/intel-track-highway.jpg",
  },
] as const;

export const proof = [
  { value: "45,000+", label: "Supported devices" },
  { value: "790+", label: "Camera manufacturers" },
  { value: "167+", label: "POS integrations" },
  { value: "5M", label: "Cameras on the Nx platform*", note: "Network Optix figure, not ours." },
] as const;

export const posNames = [
  "Micros",
  "Aloha",
  "Radiant",
  "Ruby",
  "Gilbarco",
  "Sicom",
  "PAR",
];

export const partners = {
  cameras: ["Axis", "Hanwha", "Digital Watchdog"],
  sensors: ["Quanergy"],
  compute: ["NVIDIA", "Velasea"],
  analytics: ["VCA", "CVEDIA", "Vaxtor"],
  physec: ["IMRON", "DMP"],
  platform: ["Network Optix"],
};

export const partnerLogos = [
  {
    name: "Network Optix",
    src: "/partners/network-optix.png",
    href: "https://www.networkoptix.com/",
  },
  {
    name: "NVIDIA",
    src: "/partners/nvidia.png",
    href: "https://www.nvidia.com/",
  },
  {
    name: "Velasea",
    src: "/partners/velasea.png",
    href: "https://velasea.com/",
  },
  {
    name: "Axis Communications",
    src: "/partners/axis.png",
    href: "https://www.axis.com/",
  },
  {
    name: "Hanwha Vision",
    src: "/partners/hanwha.png",
    href: "https://www.hanwhavision.com/",
  },
  {
    name: "Digital Watchdog",
    src: "/partners/digital-watchdog.png",
    href: "https://digital-watchdog.com/",
  },
  {
    name: "Quanergy",
    src: "/partners/quanergy.png",
    href: "https://quanergy.com/",
  },
  {
    name: "VCA Technology",
    src: "/partners/vca.png",
    href: "https://vcatechnology.com/",
  },
  {
    name: "CVEDIA",
    src: "/partners/cvedia.png",
    href: "https://www.cvedia.com/",
  },
  {
    name: "Vaxtor",
    src: "/partners/vaxtor.png",
    href: "https://www.vaxtor.com/",
  },
  {
    name: "IMRON",
    src: "/partners/imron.png",
    href: "https://www.imron.com/",
  },
  {
    name: "DMP",
    src: "/partners/dmp.png",
    href: "https://www.dmp.com/",
  },
] as const;

export const customerLogos = [
  {
    name: "County of San Diego",
    src: "/customers/san-diego.png",
  },
  {
    name: "New Jersey Turnpike Authority",
    src: "/customers/njta.png",
  },
  {
    name: "Exxon",
    src: "/customers/exxon.png",
  },
  {
    name: "Robbinsville Public Schools",
    src: "/customers/robbinsville.png",
  },
] as const;

export const verticals = [
  "Retail",
  "Logistics",
  "Transit",
  "Campus",
  "Healthcare",
  "Financial",
  "SLED",
] as const;

export const verticalLenses = [
  {
    name: "Retail",
    image: "/media/retail.jpg",
    imageAlt: "Retail stock floor with boxed inventory on industrial shelving",
    proof: "Yesway",
    scene: null,
    lines: {
      "/solutions/gsoc":
        "Shoplifting, repeat offenders, and after-hours alarms, verified on the store cameras.",
      "/solutions/ot":
        "Refunds, voids, and sweethearting. The receipt and the clip come together.",
      "/solutions/flow":
        "Checkout lines, dwell, and how people move through the store.",
    },
  },
  {
    name: "Logistics",
    image: "/media/yard.jpg",
    imageAlt: "Container yard and dock doors seen from above",
    proof: null,
    scene: "Yard and dock",
    lines: {
      "/solutions/gsoc":
        "Gates, docks, and the fence. An intrusion opens the camera instead of sending a truck.",
      "/solutions/ot":
        "A trailer or container that does not match the manifest, with the clip on the same event.",
      "/solutions/flow":
        "Yard occupancy, dock wait, and which direction the trucks are moving.",
    },
  },
] as const;
