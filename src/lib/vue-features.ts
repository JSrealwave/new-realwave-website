export type VueFeature = {
  title: string;
  body: string;
};

export type VueFeatureGroup = {
  id: string;
  kicker: string;
  title: string;
  summary: string;
  features: VueFeature[];
};

export const vueFeatureGroups: VueFeatureGroup[] = [
  {
    id: "install",
    kicker: "Install",
    title: "Install & connect",
    summary: "Discover cameras, add streams, run on Windows, Linux, macOS, or ARM at the edge.",
    features: [
      {
        title: "Device autodiscovery",
        body: "The media server finds IP cameras, I/O modules, and other servers on the local subnet. Add anything missed by IP, URL, RTSP, or a subnet scan.",
      },
      {
        title: "ONVIF camera settings",
        body: "Imaging, WDR, exposure, and maintenance actions that the camera exposes over ONVIF — from inside Vue, not a vendor web page.",
      },
      {
        title: "Edge and ARM",
        body: "The same media server runs on selected ARM cameras and appliances as well as Intel/AMD servers. Camera-to-cloud is a placement choice, not a different product.",
      },
      {
        title: "Win, Mac, Linux",
        body: "Desktop client and server on Windows and Ubuntu; desktop client on macOS. Operators are not locked to a browser for the work they do all day.",
      },
    ],
  },
  {
    id: "live",
    kicker: "Live",
    title: "Live & layouts",
    summary: "Flex GRID up to 64 cells, video walls, PTZ, fisheye dewarp, maps as layout backgrounds.",
    features: [
      {
        title: "Flex GRID layouts",
        body: "Drag any camera, server, or local file onto a grid. Stretch cells, mix 16:9 and 9:16, save unlimited named layouts, run them as tabs or separate windows.",
      },
      {
        title: "Video wall",
        body: "Drive remote displays from the operator desk. Push a layout or a whole screen; license is per two monitors and one concurrent user.",
      },
      {
        title: "PTZ — ONVIF and advanced",
        body: "ONVIF PTZ on any supporting camera. Advanced low-latency and draw-to-zoom on calibrated devices. PTZ presets can fire as a rule action.",
      },
      {
        title: "Fisheye dewarping",
        body: "Ceiling, wall, or table mount with auto-calibration or five-slider manual. Dewarp live, archive, and exports — what you see is what you get.",
      },
      {
        title: "Digital maps",
        body: "Drop a floor plan or GIS image behind a layout and place cameras on it. Operators navigate space, not a camera tree.",
      },
    ],
  },
  {
    id: "record",
    kicker: "Record",
    title: "Record & storage",
    summary: "Schedules, dual-stream, failover, backup, and storage forecasting on local, NAS, or hybrid.",
    features: [
      {
        title: "Recording schedules",
        body: "Always, motion-only, motion plus low-res, or off. Per-camera fps and quality, pre/post roll, and a fixed archive length if you need one. Apply to many cameras at once.",
      },
      {
        title: "Automatic failover",
        body: "Hive architecture: any server can take cameras from a failed peer. Priority high/medium/low; cap devices per failover host.",
      },
      {
        title: "Storage analytics",
        body: "See what each camera is actually writing and forecast how long current storage will last. Model the effect of adding disks before you buy them.",
      },
      {
        title: "Archive backup",
        body: "Scheduled or real-time backup of high-res, low-res, or both to local, NAS, or cloud targets.",
      },
    ],
  },
  {
    id: "review",
    kicker: "Review",
    title: "Review & investigate",
    summary: "Smart motion, preview search, bookmarks, rapid review, and court-ready export.",
    features: [
      {
        title: "Smart motion search",
        body: "Paint a region on a cell and search a year of motion index in about five seconds. Hits paint on the Flex Timeline.",
      },
      {
        title: "Preview / thumbnail search",
        body: "Highlight a span on the timeline and Vue slices it into even segments down to ten seconds — useful when motion was never enabled.",
      },
      {
        title: "Bookmarks",
        body: "Name, describe, and tag a span. Operators create them by hand; the rules engine can create them on an event.",
      },
      {
        title: "Export and rapid review",
        body: "Single-camera AVI/MKV with optional timestamp, or multi-camera .nov executables. Rapid review time-compresses hours into a minute. Dewarped stays dewarped.",
      },
    ],
  },
  {
    id: "rules",
    kicker: "Rules",
    title: "Rules & alarms",
    summary: "Events to actions: notify, bookmark, overlay, alarm layout, HTTP, email, sound.",
    features: [
      {
        title: "Events & rules engine",
        body: "Motion, input, disconnect, storage, network, license, generic HTTP events. Actions: notify, email, bookmark, overlay, sound, speak, PTZ preset, I/O pulse, alarm layout, HTTP GET.",
      },
      {
        title: "Alarm layout",
        body: "Pop the relevant cameras onto a dedicated layout for a named user when a rule fires — the GSOC pattern, built in.",
      },
      {
        title: "HTTP in and out",
        body: "Third-party systems post generic events into Vue. Vue can fire a custom HTTP GET as an action. That is how POS, access, and Intelligence land on the same glass.",
      },
    ],
  },
  {
    id: "users",
    kicker: "Admin",
    title: "Users & audit",
    summary: "Roles, custom rights, LDAP, and a searchable audit trail of every operator action.",
    features: [
      {
        title: "Roles and custom rights",
        body: "Administrator, Advanced Viewer, Viewer, Live Viewer — or a custom role: device settings, PTZ, archive, export, video wall, per user.",
      },
      {
        title: "LDAP / Active Directory",
        body: "Bind, search, fetch users, keep passwords in the directory. Required for any campus or enterprise GSOC.",
      },
      {
        title: "Audit trail",
        body: "Administrators search every user interaction. Combined with archive export, that is the chain you hand to counsel or a regulator.",
      },
    ],
  },
  {
    id: "mobile",
    kicker: "Access",
    title: "Mobile, web & audio",
    summary: "iOS and Android live and archive, browser client, two-way audio on supporting cameras.",
    features: [
      {
        title: "Mobile app",
        body: "Sessions to one or many systems. Thumbnail or tree navigation, live and recorded, resolution that follows the network.",
      },
      {
        title: "Web client",
        body: "Browser live and archive with the same resource tree and timeline. One camera at a time, with transcoded resolutions on x86 servers.",
      },
      {
        title: "Two-way audio",
        body: "Push-to-talk on supporting cameras — talk-down from the desk or the phone.",
      },
    ],
  },
  {
    id: "health",
    kicker: "Health",
    title: "Health & hive",
    summary: "Equal servers, one-click updates, merge systems, CPU/RAM/disk/net on the grid.",
    features: [
      {
        title: "Hive architecture",
        body: "Every server is a peer. Config, users, layouts, rules, devices, and video walls sync when they change. No master to fail.",
      },
      {
        title: "Health on the grid",
        body: "Drop a server onto a layout. CPU, RAM, disk, and network as a live graph, plus logs and issues.",
      },
      {
        title: "One-click updates",
        body: "Push the published build, a patch, or a beta to every media server in the system from one dialog.",
      },
      {
        title: "Merge systems",
        body: "Combine or expand systems without a forklift. A system can hold an unlimited number of servers.",
      },
    ],
  },
  {
    id: "dev",
    kicker: "Build",
    title: "Developers",
    summary: "Server API, video-source SDK, storage SDK, and generic HTTP events.",
    features: [
      {
        title: "Server API and SDKs",
        body: "Documented from the web admin: Server API, Video Source Integration SDK, Storage SDK. Integrators extend Vue instead of replacing it.",
      },
      {
        title: "Look and feel",
        body: "Fourteen languages, light or dark skin, and lite branding on the desktop client so the operator glass can carry your mark.",
      },
    ],
  },
];
