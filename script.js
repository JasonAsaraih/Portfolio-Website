const bg = document.getElementById('bg-image');

document.querySelectorAll('.timeline-logo').forEach(img => {

  img.addEventListener('mouseenter', () => {
    const newBg = img.getAttribute('data-bg');

    bg.style.backgroundImage = `url(${newBg})`;
    bg.classList.add('active');
  });

  img.addEventListener('mouseleave', () => {
    bg.classList.remove('active');
  });

});

document.querySelectorAll('.timeline-logo').forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.classList.add('stopped'); // stops animation forever
  });
});

const container = document.getElementById("projects-container");

if (container) {
  projects.forEach(project => {
    const card = document.createElement("a");
    card.classList.add("project-card");

    card.href = project.link;

    card.innerHTML = `
      <img src="${project.image}" alt="${project.title} project preview" loading="lazy" />
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
