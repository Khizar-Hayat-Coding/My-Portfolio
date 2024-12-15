document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("active");
});


document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.querySelector('.projects-container');
  
    const projects = [
      {
        title: "Mobile Selling Website",
        description: "This is the mobile phone selling website.",
        link: "https://github.com/Khizar-Hayat-Coding/Mobile-Phone-Selling-Website",
        image: "img1.png"
      },
      {
        title: "Water Bottle Store",
        description: "A water bottle store website.",
        link: "https://github.com/Khizar-Hayat-Coding/Water-Bottle-Store",
        image: "img2.png" 

      },
      {
        title: "Form Validator",
        description: "This is the form validator using javascript.",
        link: "https://github.com/Khizar-Hayat-Coding/Form-Validation-Using-JS",
        image: "img3.png" 

      }
    ];
  
    projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.classList.add('project-card');
      projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      `;
      projectsContainer.appendChild(projectCard);
    });
  });
  