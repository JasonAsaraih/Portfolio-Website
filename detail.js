const detailPages = {
  cubesat: {
    title: "CubeSat Project",
    image: "Projects/CubeSat.png",
    eyebrow: "California Baptist University",
    summary: "A 1U CubeSat avionics effort focused on reliable attitude sensing and power management in a tightly constrained spacecraft.",
    skills: ["PCB Design", "Power Electronics", "Embedded Systems", "Systems Engineering"],
    sectionLabel: "The work",
    sectionTitle: "Project details",
    projects: [{
      title: "CubeSat Avionics",
      description: "This project brings together schematic design, component selection, board-level interfaces, and system thinking. The work centers on the Attitude Determination Card and Electrical Power System PCBs—the electronics responsible for understanding spacecraft orientation and safely distributing limited power.",
      points: ["Designed board architecture around the size, power, and reliability constraints of a 1U platform.", "Developed schematic-level interfaces for sensors, processing, power conversion, and subsystem connections.", "Considered design-for-test, fault protection, and clear documentation throughout the PCB workflow."]
    }]
  },
  quadruped: {
    title: "Quadruped Robot", image: "Projects/QuadrupedalRobot.png", eyebrow: "Personal robotics project",
    summary: "A four-legged robot developed across its mechanical, electrical, and control layers.",
    source: "https://youtu.be/nQIeAxxUmYM", sourceLabel: "Watch the robot in action",
    skills: ["C++", "Robotics", "Motor Control", "CAD & Prototyping"], sectionLabel: "The work", sectionTitle: "Project details",
    projects: [{ title: "Integrated Robot Platform", description: "The quadruped is an end-to-end robotics build: joints and structure must support useful motion, electronics must deliver power safely, and software must coordinate multiple actuators in real time. Developing each layer together made it possible to iterate toward stable, repeatable movement.", points: ["Integrated actuator control, power distribution, and the mechanical frame as one system.", "Developed motion logic for coordinated leg trajectories and repeatable gait experiments.", "Used iterative testing to identify mechanical limits and improve control behavior."] }]
  },
  "snake-robot": {
    title: "Snake-Like Robot", image: "Projects/Snake.png", eyebrow: "Personal robotics project",
    summary: "A modular robot that explores locomotion through coordinated, wave-like joint motion.",
    skills: ["Embedded Control", "Kinematics", "Mechanical Design", "Rapid Prototyping"], sectionLabel: "The work", sectionTitle: "Project details",
    projects: [{ title: "Modular Locomotion System", description: "The robot uses a chain of actuated segments to recreate the body waves that let a snake move through constrained environments. The project required careful coordination between mechanical packaging, wiring, and software timing.", points: ["Built a modular electrical and mechanical architecture that could grow by adding segments.", "Programmed phase-offset joint commands to create smooth locomotion patterns.", "Tested motion parameters and refined the design for dependable movement."] }]
  },
  "emg-car": {
    title: "EMG Controlled Car", image: "Projects/EMG.png", eyebrow: "California Baptist University",
    summary: "A remote-controlled car driven by electrical activity measured from a user’s muscles.",
    skills: ["Biomedical Instrumentation", "Signal Processing", "Embedded Systems", "Analog Circuits"], sectionLabel: "The work", sectionTitle: "Project details",
    projects: [{ title: "Muscle-Signal Control System", description: "The system translates a biological signal into an intuitive vehicle command. Because surface EMG is small and noisy, the project depends on thoughtful electrode placement, analog conditioning, thresholding, and safe control behavior.", points: ["Captured surface EMG signals and conditioned them for dependable measurement.", "Processed muscle activation into discrete vehicle control commands.", "Integrated the sensing, embedded control, and mobile platform into a working demonstration."] }]
  },
  "assistive-headset": {
    title: "Headset for the Visually Impaired", image: "Projects/Headset.png", eyebrow: "Personal assistive-technology project",
    summary: "A wearable concept designed to give visually impaired users useful environmental feedback.",
    skills: ["Assistive Technology", "Sensors", "Embedded Design", "Human-Centered Design"], sectionLabel: "The work", sectionTitle: "Project details",
    projects: [{ title: "Wearable Obstacle Feedback", description: "The headset explores how compact sensing can identify nearby obstacles and communicate them without blocking the user’s hearing or movement. The design prioritizes comfort, clear feedback, and practical real-world use.", points: ["Explored sensor placement and coverage for detecting nearby obstacles.", "Designed an embedded feedback workflow that turns distance information into intuitive cues.", "Balanced electronics packaging with wearability and user-centered constraints."] }]
  },
  "nlp-tweet-research": {
    title: "NLP and DNNs on Tweet Datasets", image: "Projects/gis.png", eyebrow: "Machine learning research",
    summary: "Research combining natural-language processing, deep neural networks, and geospatial tweet data.",
    skills: ["NLP", "Deep Learning", "Python", "Research"], sectionLabel: "The research", sectionTitle: "Research details",
    source: "https://aisel.aisnet.org/amcis2025/intelfuture/intelfuture/27/", sourceLabel: "View the published research",
    projects: [{ title: "Geospatial Tweet Analysis", description: "Short social posts contain noisy language but can reveal useful geographic and behavioral patterns at scale. This research investigated preprocessing and learned representations for extracting insights from tweet datasets.", points: ["Prepared noisy social-text data for repeatable machine-learning experiments.", "Developed and compared NLP and deep-learning approaches.", "Contributed to research presented in the AMCIS 2025 proceedings."] }]
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
    projects: [{ title: "Research, Teaching & Mentorship", description: "At CBU, Jason combines a rigorous engineering curriculum with work that helps other students learn and contributes to applied research. The experience spans circuit theory, machine learning, biomedical systems, and laboratory instruction.", points: ["Tutors students in circuit theory and physics and supports courses as a teaching assistant.", "Contributes to machine-learning and biomedical-engineering research.", "Serves as a lab instructor and coaches FIRST LEGO League students."] }]
  },
  robotics: {
    title: "CBU Robotics Team", image: "MiscMedia/CBUcompthumbnail2026.png", eyebrow: "Fall 2023 – Present",
    summary: "Technical leadership across multiple seasons, progressing from senior electrical lead and vice president to president.",
    source: "https://www.youtube.com/watch?v=Pme9x-fLtBs", sourceLabel: "Watch the robot reveal",
    skills: ["Technical Leadership", "Robotics", "Team Development", "Systems Integration"], sectionLabel: "The experience", sectionTitle: "Role details",
    projects: [{ title: "Technical & Team Leadership", image: "Projects/arsenal.png", description: "CBU Robotics brings electrical, mechanical, and software students together to build competition systems under real deadlines. Jason’s role spans technical architecture, team coordination, mentorship, and long-term platform development.", points: ["Led custom electronics, power, sensing, and system-integration work as Senior Electrical Lead.", "Served as Vice President before advancing to President for the 2026 season.", "Mentored team members and coordinated electrical decisions with software and mechanical groups."] }]
  },
  bourns: {
    title: "Bourns, Inc.", image: "MiscMedia/Bourns-bg.jpg", eyebrow: "Engineering Intern · Summer 2024",
    summary: "Product-development experience focused on circuit-protection applications and high-voltage component packaging.",
    skills: ["Circuit Protection", "Application Design", "Component Testing", "Technical Documentation"], sectionLabel: "Selected work", sectionTitle: "Bourns projects",
    projects: [
      { id: "thermal-protection", label: "Project 01", title: "Thermal Protection Component Application Design", image: "Projects/tco.png", description: "Designed application concepts around thermal protection components, translating electrical and thermal requirements into practical circuit-level solutions.", points: ["Reviewed operating requirements and component behavior.", "Developed circuit concepts for protection use cases.", "Evaluated design tradeoffs and documented findings."] },
      { id: "high-voltage-packaging", label: "Project 02", title: "High-Voltage Component Packaging", image: "Projects/gdt.png", description: "Explored packaging for high-voltage protection components with attention to electrical isolation, mechanical fit, and a robust final assembly.", points: ["Considered clearance, insulation, and high-voltage constraints.", "Balanced electrical needs with mechanical packaging limits.", "Supported prototype evaluation and design refinement."] }
    ]
  },
  "spacex-dragon": {
    title: "SpaceX Dragon", image: "Projects/dragon.jpg", eyebrow: "Avionics Engineering Intern · Summer 2025",
    summary: "Avionics engineering work supporting the electrical systems behind SpaceX’s Dragon spacecraft.",
    skills: ["Avionics", "Wiring Harness Design", "Schematic Design", "Aerospace Systems"], sectionLabel: "Selected work", sectionTitle: "Dragon projects",
    projects: [{ id: "dragon-projects", label: "Program work", title: "Dragon Avionics Program Projects", image: "Projects/dragon.jpg", description: "Contributed to avionics engineering projects supporting spacecraft electrical systems and their integration.", points: ["Applied electrical design principles to flight-hardware constraints.", "Supported system interfaces through schematics and harness work.", "Collaborated within a multidisciplinary engineering environment."] }]
  },
  "spacex-starshield": {
    title: "SpaceX Starshield", image: "Projects/Starshield.webp", eyebrow: "Electrical Engineering Intern · Summer 2026",
    summary: "End-to-end ownership of four prototype flight PCBs, plus two additional PCBs designed to test and validate the prototype flight boards.",
    skills: ["PCB Design", "Mixed-Signal Design", "High-Speed Interfaces", "Board Bring-Up", "Cross-Functional Engineering"], sectionLabel: "Selected work", sectionTitle: "Starshield projects",
    note: "Public details are intentionally limited to respect program confidentiality.",
    projects: [{ id: "starshield-projects", label: "Program work", title: "Prototype Flight PCB Development", image: "Projects/Starshield.webp", description: "Owned prototype flight-board development from architecture and schematic capture through fabrication, bring-up, and validation.", points: ["Designed mixed-signal circuitry with parallel LVDS, SPI, differential I²C, flash-memory interfaces, precision voltage/current references, and power sequencing.", "Coordinated board development with PCB layout, supply chain, PCBA manufacturers, and vendors through fabrication and assembly.", "Partnered with thermal and mechanical teams to address tight thermal-dissipation constraints through component placement, board sizing, connector selection, and high-speed harness selection.", "Designed and laid out two high-speed test-coupon PCBs to validate prototype-board interfaces and reduce development risk.", "Performed board bring-up and functional validation of power, digital communications, high-speed interfaces, and inter-board interconnects.", "Developed low-speed validation software and collaborated with FPGA engineers on high-speed signal-validation test plans."] }]
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
  page.projects.forEach(project => projectList.append(renderProject(project, page.title)));

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
