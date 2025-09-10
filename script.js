// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Enhanced Startup Animation
window.addEventListener('load', () => {
    const animatedLogo = document.getElementById('animated-logo');
    const heroLogo = document.querySelector('.hero-logo'); // Target hero logo instead of nav logo
    const body = document.body;

    if (animatedLogo && heroLogo) {
        // Wait for layout to settle
        setTimeout(() => {
            // Get position of the target logo in the hero section
            const heroLogoRect = heroLogo.getBoundingClientRect();
            const animatedLogoRect = animatedLogo.getBoundingClientRect();

            // Calculate the translation needed to move to hero logo position
            const translateX = heroLogoRect.left - animatedLogoRect.left + (heroLogoRect.width - animatedLogoRect.width) / 2;
            const translateY = heroLogoRect.top - animatedLogoRect.top + (heroLogoRect.height - animatedLogoRect.height) / 2;

            // Calculate the scale factor to match hero logo size
            const scale = heroLogoRect.width / animatedLogoRect.width;

            // Set CSS custom properties for the animation
            document.documentElement.style.setProperty('--logo-translate-x', `${translateX}px`);
            document.documentElement.style.setProperty('--logo-translate-y', `${translateY}px`);
            document.documentElement.style.setProperty('--logo-scale', scale);

            // Start the animation after a brief delay
            setTimeout(() => {
                body.classList.add('animation-started');
            }, 500);

            // Complete animation and reveal content
            setTimeout(() => {
                body.classList.add('animation-complete');
            }, 4000);
        }, 200);
    } else {
        // Fallback if elements aren't found
        setTimeout(() => {
            body.classList.add('animation-complete');
        }, 1000);
    }

    // Add a delay to ensure the animation completes before showing the content
    setTimeout(() => {
        body.classList.add('animation-complete');
    }, 1000); // Matches the new duration of the smoothZoomIn animation
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add functionality to the lightning icon
const lightningIcon = document.querySelector('.nav-logo .logo');

if (lightningIcon) {
    lightningIcon.addEventListener('click', () => {
        scrollToSection('download');
    });
}

// Form submission functions (updated with correct URLs)
function openPreRegistration() {
    const preRegistrationUrl = 'https://forms.gle/AEcCiR62GRZAxjmV6';
    window.open(preRegistrationUrl, '_blank');
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            event_category: 'CTA',
            event_label: 'Pre-register as User'
        });
    }
}

function openCreatorRegistration() {
    const creatorRegistrationUrl = 'https://forms.gle/B5yBxk3Yq9AZsq1C8';
    window.open(creatorRegistrationUrl, '_blank');
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            event_category: 'CTA',
            event_label: 'Become a Creator'
        });
    }
}

function openAnonymousStory() {
    const anonymousStoryUrl = 'https://forms.gle/ocE22iqRHeXtWq348';
    window.open(anonymousStoryUrl, '_blank');
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            event_category: 'CTA',
            event_label: 'Submit Anonymous Story'
        });
    }
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Navbar background stays dark on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.background = 'var(--primary-black)';
    navbar.style.boxShadow = 'none';
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.option-card, .benefits-list li, .creator-benefits li');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');

    if (hero && heroContent) {
        const rate = scrolled * -0.5;
        heroContent.style.transform = `translateY(${rate}px)`;
    }
});

// QR Code generation (simple placeholder)
function generateQRCode() {
    const qrPlaceholder = document.querySelector('.qr-placeholder');
    if (qrPlaceholder) {
        // In a real implementation, you would use a QR code library
        // For now, we'll just add a click handler
        qrPlaceholder.addEventListener('click', () => {
            // Replace with actual app download URL
            const downloadUrl = 'https://switchapp.com/download';
            window.open(downloadUrl, '_blank');
        });
    }
}

// App Store button handlers
document.addEventListener('DOMContentLoaded', () => {
    const appStoreBtn = document.querySelector('.download-btn.app-store');
    const playStoreBtn = document.querySelector('.download-btn.play-store');

    if (appStoreBtn) {
        appStoreBtn.addEventListener('click', () => {
            // Redirect to pre-registration form
            const formUrl = 'https://forms.gle/AEcCiR62GRZAxjmV6';
            window.open(formUrl, '_blank');
        });
    }

    if (playStoreBtn) {
        playStoreBtn.addEventListener('click', () => {
            // Redirect to pre-registration form
            const formUrl = 'https://forms.gle/AEcCiR62GRZAxjmV6';
            window.open(formUrl, '_blank');
        });
    }

    // Initialize QR code
    generateQRCode();
});

// Typing animation for tagline
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        const originalText = tagline.textContent;
        typeWriter(tagline, originalText, 150);
    }
});

// Smooth reveal animation for sections
function revealOnScroll() {
    const reveals = document.querySelectorAll('.section-title, .about-description, .benefits-intro, .creator-intro, .stories-subtitle');

    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Add CSS for reveal animation
const style = document.createElement('style');
style.textContent = `
    .section-title, .about-description, .benefits-intro, .creator-intro, .stories-subtitle {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .section-title.active, .about-description.active, .benefits-intro.active, .creator-intro.active, .stories-subtitle.active {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Counter animation for statistics
function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current).toLocaleString();
        }, 16);
    });
}

// Initialize counter animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Add data-count attributes to numbers you want to animate
    // Example: <span data-count="1078">0</span>
    animateCounters();
});

// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Error handling for external links
document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="http"]')) {
        e.preventDefault();
        const url = e.target.href;

        // Check if URL is accessible
        fetch(url, { method: 'HEAD', mode: 'no-cors' })
            .then(() => {
                window.open(url, '_blank');
            })
            .catch(() => {
                console.warn('External link may not be accessible:', url);
                // Still open the link, but log the warning
                window.open(url, '_blank');
            });
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    revealOnScroll();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading animation
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(loadingStyle);

// Enhanced button state management
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn, .btn-primary, .btn-secondary, .btn-accent');

    buttons.forEach(button => {
        // Handle click events
        button.addEventListener('click', function (e) {
            // Remove hover class if it exists
            this.classList.remove('force-hover');
            this.classList.add('force-reset');

            // Force immediate reset
            this.style.transition = 'all 0.1s ease';

            // Reset after animation
            setTimeout(() => {
                this.style.transition = '';
                this.classList.remove('force-reset');
                this.blur(); // Remove focus
            }, 100);
        });

        // Handle touch devices
        button.addEventListener('touchstart', function () {
            this.classList.add('touching');
        });

        button.addEventListener('touchend', function () {
            this.classList.remove('touching');
            this.classList.add('force-reset');
            setTimeout(() => {
                this.classList.remove('force-reset');
                this.blur();
            }, 50);
        });

        // Handle mouse leave
        button.addEventListener('mouseleave', function () {
            this.classList.remove('force-hover');
            this.classList.add('force-reset');
            setTimeout(() => {
                this.classList.remove('force-reset');
            }, 100);
        });

        // Handle blur event
        button.addEventListener('blur', function () {
            this.classList.add('force-reset');
            setTimeout(() => {
                this.classList.remove('force-reset');
            }, 50);
        });
    });

    // Reset all button states on scroll
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            buttons.forEach(button => {
                button.classList.add('force-reset');
                button.blur();
                setTimeout(() => {
                    button.classList.remove('force-reset');
                }, 50);
            });
        }, 50);
    });

    // Reset button states on window focus change
    window.addEventListener('blur', () => {
        buttons.forEach(button => {
            button.classList.add('force-reset');
            button.blur();
        });
    });
});