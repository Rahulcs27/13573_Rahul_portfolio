function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

  window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
      navbar.classList.add("nav-scrolled");
    } else {
      navbar.classList.remove("nav-scrolled");
    }
  });

  window.onload = function () {
    window.scrollTo(0, 0); // Start at the top of the page
};

// document.addEventListener("DOMContentLoaded", function () {
//   const text = "Passionate Full-Stack Developer crafting stunning, interactive web experiences";
//   const typingElement = document.getElementById("typing-effect");
//   let index = 0;

//   function typeText() {
//     if (index < text.length) {
//       typingElement.innerHTML = text.substring(0, index + 1); // Update text
//       index++;
//       setTimeout(typeText, 50); // Adjust speed here (lower = faster)
//     }
//   }

//   // Start typing after a small delay to ensure smooth rendering
//   setTimeout(typeText, 500);
// });

  
  