const bg = document.getElementById('bg-image');

document.querySelectorAll('.timeline-link').forEach(link => {
  const img = link.querySelector('.timeline-logo');
  const showBackground = () => {
    bg.style.backgroundImage = `url(${img.dataset.bg})`;
    bg.classList.add('active');
    img.classList.add('stopped'); // stops animation forever
  };

  link.addEventListener('mouseenter', showBackground);
  link.addEventListener('mouseleave', () => bg.classList.remove('active'));
  link.addEventListener('focus', showBackground);
  link.addEventListener('blur', () => bg.classList.remove('active'));
});

const container = document.getElementById("projects-container");

if (container) {
  projects.forEach(project => {
    const card = document.createElement("a");
    card.classList.add("project-card");
    const projectTags = project.tags
      .map(tag => `<span class="project-tag">${tag}</span>`)
      .join("");

    card.href = project.link;

    card.innerHTML = `
      <img src="${project.image}" alt="${project.title} project preview" loading="lazy" />
      <div class="project-tags">${projectTags}</div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;

    container.appendChild(card);
  });
}
const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.getElementById('primary-nav');

if (navToggle && primaryNav) {
  const closeNavigation = () => {
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation');
    primaryNav.classList.remove('open');
  };

  navToggle.addEventListener('click', () => {
    const willOpen = navToggle.getAttribute('aria-expanded') !== 'true';
    navToggle.setAttribute('aria-expanded', String(willOpen));
    navToggle.setAttribute('aria-label', willOpen ? 'Close navigation' : 'Open navigation');
    primaryNav.classList.toggle('open', willOpen);
  });

  primaryNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNavigation);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeNavigation();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) closeNavigation();
  });
}
