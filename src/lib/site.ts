export const SITE = {
  name: "Realwave",
  parent: "ePlus",
  tagline: "Process while you record.",
  email: "realwave@eplus.com",
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
    image: "/media/gsoc.jpg",
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
  physec: ["IMRON", "DMP", "Singlewire", "Critical Response Group"],
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
  {
    name: "Singlewire",
    src: "/partners/singlewire.png",
    href: "https://www.singlewire.com/",
    large: true,
  },
  {
    name: "Critical Response Group",
    src: "/partners/crg.png",
    href: "https://www.crgplans.com/",
    large: true,
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

export const verticalUseCases = [
  {
    name: "Retail",
    lede: "Shrink, customer flow, and the exceptions a store actually works. Cameras become a loss-prevention program, not a wall of video.",
    image: "/media/retail.jpg",
    imageAlt: "Retail stock floor with boxed inventory on industrial shelving",
    proof: null,
    cases: [
      {
        title: "Loss prevention and theft",
        body: "Loitering, bag-drop, and suspicious behavior on the store cameras, while the shift is happening.",
      },
      {
        title: "Internal theft and sweethearting",
        body: "POS fused with video, so an unscanned item or an unusual transaction arrives as an exception.",
      },
      {
        title: "Organized retail crime",
        body: "Repeat offenders and group activity, found with behavior on the track and forensic search.",
      },
      {
        title: "Queue, dwell, and flow",
        body: "People counting and path analytics for staffing, layout, and conversion.",
      },
      {
        title: "Known offenders",
        body: "Watchlists and attributes where policy allows. Fuse with POS only when that policy says so.",
      },
      {
        title: "Self-checkout and high-value goods",
        body: "A mismatch at the scanner, or handling that should not be happening on a protected display.",
      },
    ],
  },
  {
    name: "Logistics",
    lede: "Yards, docks, terminals, and hubs. The job runs from the ID on the trailer to the wait at the door.",
    image: "/media/yard.jpg",
    imageAlt: "Container yard and dock doors seen from above",
    proof: null,
    cases: [
      {
        title: "Trailer, container, and vehicle ID",
        body: "Plate and OCR matched to the manifest. Plate and container ID at 99%, trailer ID at 95%, in production use.",
      },
      {
        title: "Perimeter and the gate",
        body: "Track plus LiDAR for intrusion, loitering, or tailgating at gates and docks.",
      },
      {
        title: "Yard and dock occupancy",
        body: "Vehicle counts and dwell, so congestion and turnaround are measured instead of guessed.",
      },
      {
        title: "Cargo and asset theft",
        body: "Object tracking and abandoned-behavior alerts on high-value shipments.",
      },
      {
        title: "Driver and personnel safety",
        body: "Aggression, falls, or unsafe behavior in the loading zone.",
      },
      {
        title: "Flow and congestion",
        body: "Path and dwell through the terminal or the hub, while it is busy.",
      },
    ],
  },
  {
    name: "Healthcare",
    lede: "Patient safety, drug diversion, workplace violence, and compliance. Process the stream without making privacy a footnote.",
    image: "/media/healthcare.jpg",
    imageAlt: "Hospital corridor with clinical staff and a patient in a wheelchair",
    proof: null,
    cases: [
      {
        title: "Falls and wandering",
        body: "Privacy-first tracking, video or LiDAR, so a response starts when the event starts.",
      },
      {
        title: "Staff and patient safety",
        body: "Behavior in waiting areas, hallways, and other high-risk zones.",
      },
      {
        title: "Restricted areas",
        body: "Pharmacies, ICUs, and drug storage. Face or a credential where policy allows, on the same timeline as the video.",
      },
      {
        title: "Equipment",
        body: "Tagless recognition for wheelchairs, pumps, and other high-value devices in view of a camera.",
      },
      {
        title: "PPE",
        body: "Missing protection in the zones where it is required.",
      },
      {
        title: "Waiting rooms",
        body: "Counts and dwell, so throughput is staffed from the floor instead of a clipboard.",
      },
    ],
  },
  {
    name: "Manufacturing",
    lede: "Safety, quality, downtime, and the flow of the line. Video as the exception layer on the floor.",
    image: "/media/manufacturing.jpg",
    imageAlt: "Worker in a hard hat between racks on a manufacturing floor",
    proof: null,
    cases: [
      {
        title: "Worker safety and PPE",
        body: "Falls, hazards, missing PPE, and unsafe behavior while the line is running.",
      },
      {
        title: "Quality and defects",
        body: "Visual inspection for surface flaws or assembly errors, scoped to the line.",
      },
      {
        title: "Equipment condition",
        body: "Video next to the sensors you already have, to flag wear or a condition that looks wrong.",
      },
      {
        title: "Tools and inventory",
        body: "Track what walks away, or what is used where it should not be.",
      },
      {
        title: "Perimeter and access",
        body: "Intrusion and unauthorized entry in restricted zones.",
      },
      {
        title: "Process and bottlenecks",
        body: "Heat and dwell on the floor, for layout and the pace of the line.",
      },
    ],
  },
  {
    name: "Financial",
    lede: "Branches, ATMs, and the halls around them. Fraud, compliance, and customer flow on one glass.",
    image: "/media/financial.jpg",
    imageAlt: "Queue stanchions in a branch lobby, with faces out of focus",
    proof: null,
    cases: [
      {
        title: "ATMs and tellers",
        body: "Face fused with the transaction where policy allows, so the anomaly is an event instead of a hunch.",
      },
      {
        title: "Lobby and perimeter",
        body: "Loitering and aggression, with an alert while the branch is open.",
      },
      {
        title: "Queues",
        body: "Traffic and staffing. Demographic attributes only where policy allows.",
      },
      {
        title: "Forensics",
        body: "Search across video and the transaction record for an audit or an incident.",
      },
      {
        title: "Skimming and tampering",
        body: "A device or a behavior at the ATM that should not be there.",
      },
      {
        title: "PCI checks",
        body: "Video next to the control, so the audit is a clip and a record.",
      },
    ],
  },
  {
    name: "SLED",
    lede: "State and local government, education, and public safety. Placement that fits a regulated site and a real budget.",
    image: "/media/sled.jpg",
    imageAlt: "Police station entrance",
    proof: null,
    cases: [
      {
        title: "Perimeter intrusion",
        body: "Track plus LiDAR on the fence line. Video verification so a false alarm is not a dispatch.",
      },
      {
        title: "Unauthorized entry",
        body: "Face or plate at a restricted door or a gate, where policy allows.",
      },
      {
        title: "Crowd and occupancy",
        body: "Privacy-first counts, dwell, and capacity. Not a poster about a smart city.",
      },
      {
        title: "Remote sites",
        body: "Verification and a notification for locations that are not staffed.",
      },
      {
        title: "Emergency coordination",
        body: "Maps and the alerts that belong on them, for the people responding.",
      },
      {
        title: "Threats in public space",
        body: "Aggression, loitering, and weapons cues, so the response starts earlier.",
      },
    ],
  },
  {
    name: "Critical Infrastructure",
    lede: "Energy, water, pipelines, substations, and communications. Uptime, and sites that are often empty.",
    image: "/media/critical-infrastructure.jpg",
    imageAlt: "Electrical substation behind a locked gate and fence",
    proof: null,
    cases: [
      {
        title: "Perimeter at scale",
        body: "Track plus LiDAR or thermal on a long fence or open ground, then video to verify.",
      },
      {
        title: "Gates and control rooms",
        body: "A credential or a face event on the same timeline as the camera.",
      },
      {
        title: "Equipment",
        body: "Transformers, switchgear, generators, and pumps. Tampering and theft, not a nightly drive-by.",
      },
      {
        title: "Unstaffed sites",
        body: "Health, notify, and archive on an outbound-only path. Camera-to-cloud where there is no local server.",
      },
      {
        title: "Hazards",
        body: "Visual context for fire, smoke, a leak, or an environmental alarm you already receive.",
      },
      {
        title: "Audit trails",
        body: "Timestamped events and an export for NERC CIP and the frameworks that look like it.",
      },
    ],
  },
  {
    name: "Data Centers",
    lede: "From the fence line to the cage. Hyperscale, colocation, edge sites, and the gray space that keeps them up.",
    image: "/media/data-center.jpg",
    imageAlt: "Aisle of server cabinets in a data hall",
    proof: null,
    cases: [
      {
        title: "Perimeter and campus",
        body: "Track plus LiDAR or thermal on a large or poorly lit boundary, then video to verify.",
      },
      {
        title: "Tailgating",
        body: "Access events fused with video, so one badge and two people is an exception.",
      },
      {
        title: "Halls, aisles, and cabinets",
        body: "An open door, a person who should not be there, or airflow that is blocked.",
      },
      {
        title: "Gray space",
        body: "Generators, switchgear, UPS, and cooling. A camera on the alarm you already trust.",
      },
      {
        title: "Visitors and contractors",
        body: "Face or a process rule checked against the permit that is actually active.",
      },
      {
        title: "Environmental hazards",
        body: "Smoke, fire, water, or a leak, with context for the building sensors.",
      },
    ],
  },
] as const;
