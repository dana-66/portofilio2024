document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// in the experience section 
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.experienceNav a');
    const sections = document.querySelectorAll('.expe');

    console.log(sections);
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            navLinks.forEach(link => link.classList.remove('active'));

            link.classList.add('active');
            sections.forEach(section => section.classList.remove('active'));

            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            targetSection.classList.add('active');
            
        });
    });
    if (navLinks.length > 0) {
        navLinks[0].click();
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".experience .experienceNav a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(link => link.classList.remove("firstChild"));
            this.classList.add("firstChild");
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
      threshold: 0.1 
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, observerOptions);
  
    document.querySelectorAll('.pop-in').forEach(element => {
      observer.observe(element);
    });
  });
