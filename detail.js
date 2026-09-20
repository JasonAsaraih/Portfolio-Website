const detailPages = {
  cubesat: {
    title: "CubeSat Project",
    image: "Projects/CubeSat.png",
    eyebrow: "California Baptist University",
    summary: "Working with a cross discplinary team to design school's first 1U CubeSat bus and payload to characterize COTS NVMe in low earth orbit.",
    skills: ["PCB Design", "Schematic Design", "Embedded Systems", "Systems Engineering", "Altium"],
    sectionLabel: "The work",
    sectionTitle: "Project details",
    projects: [{
      title: "CubeSat Avionics", image: "MiscMedia/ADCS.png",
      description: "For this CubeSat project I will be owning the developement of the Attitude Determination and Control System (ADCS) PCBs along with supporting the EE team with bus architecture and system designs. This project has recently been started and is in the preliminary design phase.",
      points: ["Designing board architecture around the size, power, and reliability constraints of a 1U platform", "Developing bus level trades for star tracking system", "Preliminary design of magnetourqers for attitude control"]
    }]
  },
  quadruped: {
    title: "Quadruped Robot", image: "Projects/QuadrupedalRobot.png", eyebrow: "Personal robotics project",
    summary: "A four-legged robot developed across its mechanical, electrical, and control layers.",
    source: "https://youtu.be/nQIeAxxUmYM", sourceLabel: "Watch the robot in action!",
    skills: ["C++", "Robotics", "Motor Control", "CAD & Prototyping"], sectionLabel: "The work", sectionTitle: "Project details",
    projects: [{ title: "Robot Design", description: "Designed mechanical structure, software, and electronics system for quadruped robot. Each of the four legs have 3 servo motors for precise gate control and balancing.", points: ["Designed mechanical system in Fusion360 and 3D printed componetns.", "Developed software with OOP principles to the behavior and timing of each joint.", "Used iterative testing to identify mechanical limits and tune gate parameters"] }]
  },
  "snake-robot": {
    title: "Snake-Like Robot", image: "Projects/Snake.png", eyebrow: "Personal robotics project",
    summary: "A modular robot that explores locomotion through coordinated, wave-like joint motion.",
    skills: ["Embedded Control", "Kinematics", "Mechanical Design", "Rapid Prototyping"], sectionLabel: "The work", sectionTitle: "Project details",
    projects: [{ title: "Robot Design", description: "The robot uses a chain of servo motors to recreate the movement of a snake.", points: ["Built a modular electrical and mechanical architecture that could grow dynamically by adding segments.", "Programmed motor control to generate sinosoidal pattern.", "Tested motion parameters and refined the design for dependable movement."] }]
  },
  "assistive-headset": {
    title: "Headset for the Visually Impaired", image: "Projects/Headset.png", eyebrow: "Personal assistive-technology project",
    summary: "A wearable concept designed to give visually impaired users useful environmental feedback.",
    skills: ["Assistive Technology", "Sensors", "Embedded Design", "Human-Centered Design"], sectionLabel: "The work", sectionTitle: "Project details",
    projects: [{ title: "Headset Design", description: "The headset includes a camera and Raspberry Pi Zero to run a TensorFlow Lite model which interfaces with a speaker to describe the surroudnings to the user. The headset also inclueded Tof sensors to provide audio feedback regarding the surroundings to the user as well.", points: ["Explored sensor placement and coverage for detecting nearby obstacles.", "Designed an embedded feedback workflow that turns distance information into intuitive cues.", "Balanced electronics packaging with wearability and user-centered constraints."] }]
  },
  "nlp-tweet-research": {
    title: "NLP and DNNs on Tweet Datasets", image: "Projects/gis.png", eyebrow: "Machine learning research",
    summary: "Read the published paper for the research methods, analysis, and findings.",
    skills: ["NLP", "Deep Learning", "Python", "Research"],
    source: "https://aisel.aisnet.org/amcis2025/intelfuture/intelfuture/27/", sourceLabel: "View the published research",
  },
  "arsenal-v1": {
    title: "Arsenal V1", image: "Projects/arsenal.png", eyebrow: "CBU Robotics",
    summary: "The first custom electronics foundation for a competition robotics platform.",
    skills: ["PCB Design", "Robotics Electronics", "System Integration", "Testing"], sectionLabel: "The work", sectionTitle: "Project details",
    projects: [{ title: "Custom Robot Electronics", description: "Arsenal V1 established a centralized approach to connecting sensors, actuators, power, and control hardware. It served as a practical baseline for learning what the team needed from future generations.", points: ["Developed the first-generation electrical system architecture.", "Consolidated common robot connections into a more serviceable layout.", "Captured lessons from competition use to guide the next revision."] }]
  },
  cbu: {
    title: "California Baptist University", image: "MiscMedia/CBU.jpg", eyebrow: "Fall 2023 – Spring 2027",
    summary: "B.S. Electrical & Computer Engineering supported by research, teaching, and technical mentorship.",
    skills: ["Electrical Engineering", "Computer Engineering", "Research", "Teaching & Mentorship"], sectionLabel: "The experience", sectionTitle: "Role details",
    projects: [{
      title: "Research, Teaching & Mentorship",
      description: "At California Baptist University, I am pursuing a B.S. in Electrical and Computer Engineering with a minor in Computer Science. My experience combines circuit theory, machine learning and biomedical research, laboratory instruction, tutoring, and hands-on technical mentorship.",
      points: [
        "Support students as an EGR 101 teaching assistant, EGR 182 lab instructor, and tutor for circuit theory and physics.",
        "Contribute to machine-learning research, including social-media sentiment analysis, computer-vision classification, and opioid-presence prediction.",
        "Conducted biomedical-engineering research on passive exoskeleton systems and presented the work at CBU's Open House.",
        "Mentor younger students through STEM education and robotics, including coaching FIRST LEGO League teams."
      ]
    }]  
  },
  robotics: {
    title: "CBU Robotics Team", image: "MiscMedia/CBUcompthumbnail2026.png", eyebrow: "Fall 2023 – Present",
    summary: "Technical leadership across multiple seasons, progressing from senior electrical lead and vice president to president.",
    source: "https://www.youtube.com/watch?v=Pme9x-fLtBs", sourceLabel: "Watch last season's robot reveal video!",
    skills: ["Technical Leadership", "Robotics", "Team Development", "Systems Integration"], sectionLabel: "The experience", sectionTitle: "Role details",
    projects: [{ title: "Data Acquisition PCB", image: "Projects/arsenal.png", description: "Led development of the data acquisition electronics for robot localization.", points: ["Led design of boards with USB, I2C, UART, and RS485 interfaces.", "Performed board bring up and validation testing.", "Interfaced with various kinds of sensors such as encoders and optical flow control sensors for robot localization"] }]
  },
  bourns: {
    title: "Bourns, Inc.", image: "MiscMedia/Bourns-bg.jpg", eyebrow: "Engineering Intern · Summer 2024",
    summary: "Product-development experience focused on circuit-protection applications and high-voltage component packaging.",
    skills: ["Circuit Protection", "Application Design", "Component Testing", "Technical Documentation"], sectionLabel: "Selected work", sectionTitle: "Bourns projects",
    note: "Public details are intentionally limited to respect program confidentiality.",
    projects: [
      { id: "thermal-protection", label: "Project 01", title: "Thermal Protection Component Application Design", image: "Projects/tco.png", description: "Designed application concepts around bourns thermal protection components while interfacing with potential clients ", points: ["Reviewed operating requirements and component behavior.", "Developed circuit concepts for protection use cases.", "Evaluated design tradeoffs and documented findings."] },
      { id: "high-voltage-packaging", label: "Project 02", title: "High-Voltage Component Packaging", image: "Projects/gdt.png", description: "Explored packaging for high-voltage protection components with attention to manufacturability, life cycle survival, and reliability.", points: ["Designed small PCBs for potential high voltage package", "Balanced electrical needs with mechanical packaging limits.", "Supported prototype evaluation and design refinement."] }
    ]
  },
  "spacex-dragon": {
    title: "SpaceX Dragon", image: "Projects/dragon.jpg", eyebrow: "Avionics Engineering Intern · Summer 2025",
    summary: "Avionics engineering work supporting the electrical systems behind SpaceX’s Dragon spacecraft.",
    skills: ["Avionics", "Wiring Harness Design", "Schematic Design", "Aerospace Systems", "Altium"], sectionLabel: "Selected work", sectionTitle: "Dragon projects",
    note: "Public details are intentionally limited to respect program confidentiality.",
    projects: [
      { id: "dragon-projects", label: "Program work", title: "Dragon Flight Harness Design", image: "Projects/Inside_Dragon.jpg", description: "Owned the design and development of flight harnesses and heaters for the Dragon spacecraft.", points: ["Designed flight harnesses to interface with various sensors on the Dragon capsule", "Coordinated with mechanical structures teams to ensure proper clearance requirements", "Worked closely with harness manufacturing teams to discuss manuacturability and reliability of unique sensor harness interfaces", "Created integration plan with launch engineering team to ensure proper harness integration"] },
      { id: "dragon-projects", label: "Program work", title: "USDV Interface Board", image: "Projects/USDV.jpg", description: "Designed schematic for interface board to test and validate new flight board for the USDV (United States Deorbit Vehicle)", points: ["Designed schematic for interface board with IsoSPI, SPI, and USB", "Designed schematic with testing and validation path forward in mind", "Designed board to withstand flight like thermal environment so board would survive qualification campaign with flight board"] }
    ]
  },
  "spacex-starshield": {
    title: "SpaceX Starshield", image: "Projects/Starshield.webp", eyebrow: "Electrical Engineering Intern · Summer 2026",
    summary: "End-to-end ownership of four prototype flight PCBs, plus two additional PCBs designed to test and validate the prototype flight boards.",
    skills: ['Electrical Engineering', 'Aerospace Hardware', 'Satellite Electronics', 'High-Speed PCB Design', 'Mixed-Signal Circuit Design', 'High-Speed Digital Interfaces', 'PCB Schematic Design', 'PCB Layout', 'Signal Integrity Validation', 'Hardware Validation', 'Manufacturing Coordination'], sectionLabel: "Selected work", sectionTitle: "Starshield projects",
    note: "Public details are intentionally limited to respect program confidentiality.",
    projects: [{ id: "starshield-projects", label: "Program work", title: "Prototype Flight PCB Development", image: "miscmedia/satellite.png", description: "Owned prototype flight-board development from architecture and schematic capture through fabrication, bring-up, and validation.", points: ["Designed mixed-signal circuitry with parallel LVDS, SPI, differential I²C, flash-memory interfaces, precision voltage/current references, and power sequencing.", "Coordinated board development with PCB layout, supply chain, PCBA manufacturers, and vendors through fabrication and assembly.", "Partnered with thermal and mechanical teams to address tight thermal-dissipation constraints through component placement, board sizing, connector selection, and high-speed harness selection.", "Designed and laid out two high-speed test-coupon PCBs to validate prototype-board interfaces and reduce development risk.", "Performed board bring-up and functional validation of power, digital communications, high-speed interfaces, and inter-board interconnects.", "Developed low-speed validation software and collaborated with FPGA engineers on high-speed signal-validation test plans."] }]
  }
};

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function renderProject(project, pageTitle) {
  const article = document.createElement("article");
  article.className = "experience-project";
  if (project.id) article.id = project.id;

  const image = document.createElement("img");
  image.src = `../${project.image || detailPages[document.body.dataset.page].image}`;
  image.alt = `${project.title || pageTitle} preview`;
  image.loading = "lazy";

  const copy = document.createElement("div");
  if (project.label) {
    const label = document.createElement("p");
    label.className = "section-label";
    label.textContent = project.label;
    copy.append(label);
  }
  const heading = document.createElement("h3");
  heading.textContent = project.title;
  const description = document.createElement("p");
  description.textContent = project.description;
  const list = document.createElement("ul");
  project.points.forEach(point => {
    const item = document.createElement("li");
    item.textContent = point;
    list.append(item);
  });
  copy.append(heading, description, list);
  article.append(image, copy);
  return article;
}

const page = detailPages[document.body.dataset.page];
if (page) {
  document.title = `${page.title} | Jason Asariah`;
  setText("[data-eyebrow]", page.eyebrow);
  setText("[data-title]", page.title);
  setText("[data-summary]", page.summary);
  setText("[data-section-label]", page.sectionLabel);
  setText("[data-section-title]", page.sectionTitle);

  const heroImage = document.querySelector("[data-image]");
  heroImage.src = `../${page.image}`;
  heroImage.alt = `${page.title} preview`;

  const skills = document.querySelector("[data-skills]");
  page.skills.forEach(skill => {
    const tag = document.createElement("span");
    tag.textContent = skill;
    skills.append(tag);
  });

  const projectList = document.querySelector("[data-project-list]");
  if (projectList && page.projects) {
    page.projects.forEach(project => projectList.append(renderProject(project, page.title)));
  }

  const note = document.querySelector("[data-note]");
  if (page.note) {
    note.textContent = page.note;
    note.hidden = false;
  }

  const source = document.querySelector("[data-source]");
  if (page.source) {
    source.href = page.source;
    source.textContent = page.sourceLabel;
    source.hidden = false;
  }
}
