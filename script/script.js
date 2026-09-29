/* =========================
MOBILE MENU
========================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active");

```
const icon = menuToggle.querySelector("i");

if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
} else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
}
```

});

/* =========================
CLOSE MOBILE MENU
========================= */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
link.addEventListener("click", () => {

```
    navLinks.classList.remove("active");

    const icon = menuToggle.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

});
```

});

/* =========================
ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

```
let currentSection = "";

sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
    ) {
        currentSection = section.getAttribute("id");
    }

});

navigationLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("active");
    }

});
```

});

/* =========================
SCROLL REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
".section-heading, " +
".about-content, " +
".skill-card, " +
".timeline-item, " +
".project-card, " +
".education-card, " +
".organization-card, " +
".contact-content"
);

const revealObserver = new IntersectionObserver(
(entries, observer) => {

```
    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

},
{
    threshold: 0.15
}
```

);

revealElements.forEach(element => {

```
element.classList.add("reveal");

revealObserver.observe(element);
```

});

/* =========================
CURRENT YEAR
========================= */

const footerText = document.querySelector("footer p");

if (footerText) {

```
const currentYear = new Date().getFullYear();

footerText.textContent =
    `© ${currentYear} Nandana.K A. All Rights Reserved.`;
```

}
