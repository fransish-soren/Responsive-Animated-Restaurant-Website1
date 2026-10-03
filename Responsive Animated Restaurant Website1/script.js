
// ===== FILTER =====
const header = document.getElementById("header");
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");

const openIcon = hamburger.querySelector(".open");
const closeIcon = hamburger.querySelector(".close");

let lastScroll = 0;

/* 🔽 Scroll Hide / Show Header */
window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        header.classList.add("hide"); // scroll down
    } else {
        header.classList.remove("hide"); // scroll up
    }

    lastScroll = currentScroll;
});

/* 🍔 Toggle Menu */
hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        openIcon.style.display = "none";
        closeIcon.style.display = "block";
    } else {
        openIcon.style.display = "block";
        closeIcon.style.display = "none";
    }
});

/* 🔗 Active Link Click */
const links = document.querySelectorAll(".navbar a");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(nav => nav.classList.remove("active"));
        link.classList.add("active");

        // Close menu on mobile after click
        navbar.classList.remove("active");
        openIcon.style.display = "block";
        closeIcon.style.display = "none";
    });
});
// FILTER BUTTON
  const filterButtons = document.querySelectorAll(".filter-buttons button");
  const cards = document.querySelectorAll(".card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {

      // Remove active from all buttons
      filterButtons.forEach(btn => btn.classList.remove("active"));

      // Add active to clicked button
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      cards.forEach(card => {
        if (filter === "all") {
          card.classList.remove("hide");
          card.classList.add("show");
        } else {
          if (card.classList.contains(filter)) {
            card.classList.remove("hide");
            card.classList.add("show");
          } else {
            card.classList.add("hide");
            card.classList.remove("show");
          }
        }
      });

    });
  });


//   // Active navigation highlighting
 const sections = document.querySelectorAll('section');
 const navLinks = document.querySelectorAll('.navbar a');

 window.addEventListener('scroll', () => {
     let current = '';
    
     sections.forEach(section => {
         const sectionTop = section.offsetTop;
         const sectionHeight = section.clientHeight;
         if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');         }
     });

      navLinks.forEach(link => {
         link.classList.remove('active');
         if (link.getAttribute('href').slice(1) === current) {
             link.classList.add('active');
         }
      });
  });

 // Smooth scroll for navigation links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             target.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         }
//     });
// });
 


  // ALERT BUTTON

  //  function placeOrder() {
  //    alert("✅ Your order has been placed successfully!");
  // }
  function placeOrder() {
    let confirmOrder = confirm("Do you want to place this order?");
    
    if (confirmOrder) {
      alert("🎉 Order placed successfully!");
    } else {
      alert("❌ Order cancelled.");
    }
  }

  


// Initialize ScrollReveal
const sr = ScrollReveal({
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: false
});

// Animations
sr.reveal('.hero-content h2', {
    origin: 'top'
});

sr.reveal('.hero-content h1', {
    origin: 'left',
    delay: 400
});

sr.reveal('.buttons', {
    origin: 'bottom',
    delay: 600
});

sr.reveal('.about-image ', {
    origin: 'right',
   
});
sr.reveal('.about-text h1 ', {
    origin: 'left',
    delay: 200
   
});
sr.reveal('.about-text p ', {
    origin: 'right',
    delay: 400
   
});
sr.reveal('.about-text .feature ', {
    origin: 'bottom',
    delay: 600
   
});
sr.reveal('.service-box ', {
    origin: 'bottom',
   
   
});
sr.reveal('.card ', {
    origin: 'bottom',
   
   
});

sr.reveal('.contact-info h3', {
    origin: 'left'
});

sr.reveal('.contact-info .info-item', {
    origin: 'right',
    delay: 200
});
sr.reveal('.contact-form', {
    origin: 'bottom',
    delay: 400
});
sr.reveal('.footer-content h3', {
    origin: 'right',
    
});
sr.reveal('.footer-content p', {
    origin: 'left',
    delay: 200
    
});
sr.reveal('.footer-content ul', {
    origin: 'right',
    delay: 400
    
});
sr.reveal('.footer-content .social-links', {
    origin: 'bottom',
    delay: 600
    
});
sr.reveal('.footer-bottom p', {
    origin: 'bottom',
   
    
});


// back to button 
 
       
const btn = document.getElementById("backToTop");

// Show button on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btn.classList.add("show");
    } else {
        btn.classList.remove("show");
    }
});

// Scroll to top
btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});