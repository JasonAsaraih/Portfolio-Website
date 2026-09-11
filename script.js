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

function filterProjects(category) {
  const projects = document.querySelectorAll('.project-card');

  projects.forEach(project => {
    const tags = project.dataset.tags.split(',');

    if (category === 'all' || tags.includes(category)) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}

document.querySelectorAll('.timeline-logo').forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.classList.add('stopped'); // stops animation forever
  });
});

const container = document.getElementById("projects-container");

if (container) {
  projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.dataset.tags = project.tags.join(',');

    card.innerHTML = `
      <img src="${project.image}" />
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;

    container.appendChild(card);
  });
}
document.querySelectorAll('.timeline-logo').forEach(img => {
  img.addEventListener('click', () => {
    
    const category = img.getAttribute('data-filter');

    // 1. Scroll to projects
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });

    // 2. Wait for scroll, then filter
    setTimeout(() => {
      filterProjects(category);
    }, 400); // small delay so it feels smooth
  });
});