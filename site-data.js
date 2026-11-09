/* =====================================================================
   EDIT THIS FILE to update your portfolio. You never need to touch
   index.html or style.css.

   - For each project, paste the repo URL into `repo`.
     Leave a link as "" and its button is hidden automatically.
   - status: "done" | "in-progress" | "planned"
   - Add a new project by copying one { ... } block.
   ===================================================================== */

window.SITE = {
  name: "Daisy Ranawat",
  role: "Automotive embedded engineer moving into autonomy",
  location: "Dearborn, MI",
  summary:
    "Seven years writing production firmware for vehicles, from inverter control on heavy-duty trucks to radar diagnostics. Now an MS student at the University of Michigan-Dearborn, working on perception and vehicle control for autonomous systems.",

  links: {
    github: "https://github.com/DaisyR30",
    linkedin: "", // e.g. "https://www.linkedin.com/in/your-profile"
    scholar: "", // Google Scholar or IEEE author page
    resume: "", // e.g. "resume.pdf" (upload the PDF to the repo)
    email: "" // e.g. "you@example.com"
  },

  stats: [
    { value: "7", unit: "yrs", label: "automotive embedded software" },
    { value: "2", unit: "", label: "IEEE papers" },
    { value: "60+", unit: "", label: "citations" }
  ],

  projects: [
    {
      title: "Camera Object Detection",
      context: "Autonomous Vehicle Perception · Fall 2026",
      status: "done",
      summary:
        "Detects vehicles, pedestrians and cyclists in driving images with a deep-learning detector, evaluated with mAP.",
      tags: ["Python", "PyTorch", "YOLO", "OpenCV"],
      repo: "",
      demo: ""
    },
    {
      title: "Tractor-Semitrailer Path Following & Sway Control",
      context: "Research Assistant · Vehicle dynamics lab",
      status: "done",
      summary:
        "Dynamic model of an articulated tractor-semitrailer and an LQI steering controller for path following and lateral (sway) stability.",
      tags: ["MATLAB", "Simulink", "LQI", "Vehicle dynamics"],
      repo: "",
      demo: ""
    },
    {
      title: "LiDAR Object Detection",
      context: "Autonomous Vehicle Perception · Nov 2026",
      status: "in-progress",
      summary:
        "3D object detection on point clouds, with bounding boxes drawn on LiDAR frames.",
      tags: ["Python", "Point clouds", "KITTI"],
      repo: "",
      demo: ""
    },
    {
      title: "Camera-LiDAR Sensor Fusion",
      context: "Autonomous Vehicle Perception · Dec 2026",
      status: "planned",
      summary:
        "Combines camera and LiDAR detections: calibration, projecting points into the image, and fusing results.",
      tags: ["Python", "Calibration", "Sensor fusion"],
      repo: "",
      demo: ""
    }
  ],

  experience: [
    {
      company: "Continental Autonomous Mobility",
      focus: "Radar software and diagnostics"
    },
    {
      company: "KPIT Technologies",
      focus: "Inverter firmware for heavy-duty vehicles, low-level and complex device drivers"
    },
    {
      company: "Embitel (for CARIAD)",
      focus: "AUTOSAR integration"
    }
  ],

  education: [
    {
      school: "University of Michigan-Dearborn",
      degree: "MS Engineering, Automotive & Mobility Systems",
      detail: "Intelligent Vehicle Systems · Expected May 2028"
    },
    {
      school: "",
      degree: "MS, Embedded Systems",
      detail: ""
    }
  ],

  skills: [
    { group: "Embedded", items: ["C", "AUTOSAR", "Infineon AURIX TC3x", "TI C2000", "Multi-core / real-time"] },
    { group: "Networks", items: ["CAN", "Automotive Ethernet", "J1939"] },
    { group: "Autonomy", items: ["Python", "PyTorch", "Object detection", "Point clouds", "Sensor fusion"] },
    { group: "Controls", items: ["MATLAB / Simulink", "LQR / LQI", "Vehicle dynamics modeling"] }
  ]
};
