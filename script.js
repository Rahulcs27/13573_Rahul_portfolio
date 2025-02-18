function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

  // window.addEventListener("scroll", function () {
  //   const navbar = document.querySelector("nav");
  //   if (window.scrollY > 50) {
  //     navbar.classList.add("nav-scrolled");
  //   } else {
  //     navbar.classList.remove("nav-scrolled");
  //   }
  // });
  // window.addEventListener("scroll", function () {
  //   const navbar = document.querySelector("nav");
  //   const menuLinks = document.querySelector(".menu-links");

  //   if (window.scrollY > 50) {
  //     navbar.classList.add("nav-scrolled");
  //     if (menuLinks) menuLinks.classList.add("nav-scrolled"); // Apply to mobile menu
  //   } else {
  //     navbar.classList.remove("nav-scrolled");
  //     if (menuLinks) menuLinks.classList.remove("nav-scrolled"); // Remove from mobile menu
  //   }
  // });
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
      navbar.classList.add("nav-scrolled");
    } else {
      navbar.classList.remove("nav-scrolled");
    }
  });
  
  