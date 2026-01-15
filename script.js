document.addEventListener("DOMContentLoaded", () => {

    AOS.init({
      duration: 1200,
      once: true
    });
  
    gsap.from(".hero h1", {
      y: 100,
      opacity: 0,
      duration: 1.5
    });
  
    gsap.from(".hero p", {
      y: 50,
      opacity: 0,
      delay: 0.5
    });
  
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll(".navbar a");
  
    window.addEventListener("scroll", () => {
      let current = "";
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const id = section.getAttribute("id");
  
        if (id && window.scrollY >= sectionTop) {
          current = id;
        }
      });
  
      links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        }
      });
    });
  
  });
  
  