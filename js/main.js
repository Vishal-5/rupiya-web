// ============================================
// RUPIYA.APP - MAIN JAVASCRIPT
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // NAVIGATION
    // ============================================
    
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    const langBtn = document.getElementById('langBtn');
    const langMenu = document.getElementById('langMenu');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Language selector
    if (langBtn && langMenu) {
        langBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            langMenu.classList.toggle('active');
        });
        
        // Close language menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
                langMenu.classList.remove('active');
            }
        });
        
        // Language selection
        const langLinks = langMenu.querySelectorAll('a');
        langLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.getAttribute('data-lang');
                const langText = lang === 'hi' ? 'HI' : 'EN';
                langBtn.innerHTML = `<i class="fas fa-globe"></i> ${langText} <i class="fas fa-chevron-down"></i>`;
                langMenu.classList.remove('active');
                // In a real application, this would trigger language change
                console.log('Language changed to:', lang);
            });
        });
    }
    
    // Dropdown menu for mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle) {
            toggle.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }
    });
    
    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe all elements with scroll-animate class
    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach(el => observer.observe(el));
    
    // ============================================
    // ANIMATED COUNTERS
    // ============================================
    
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString();
            }
        };
        
        updateCounter();
    }
    
    // Trigger counters when stats section is visible
    const statsSection = document.getElementById('statsSection');
    if (statsSection) {
        let counterTriggered = false;
        
        const statsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && !counterTriggered) {
                    counterTriggered = true;
                    
                    const statNumbers = document.querySelectorAll('.stat-number');
                    statNumbers.forEach(stat => {
                        const target = parseInt(stat.getAttribute('data-count'));
                        animateCounter(stat, target);
                    });
                }
            });
        }, { threshold: 0.3 });
        
        statsObserver.observe(statsSection);
    }
    
    // ============================================
    // STORIES CAROUSEL
    // ============================================
    
    const storiesTrack = document.getElementById('storiesTrack');
    const storiesPrev = document.getElementById('storiesPrev');
    const storiesNext = document.getElementById('storiesNext');
    const storiesDots = document.getElementById('storiesDots');
    
    if (storiesTrack) {
        const storyCards = storiesTrack.querySelectorAll('.story-card');
        let currentStory = 0;
        const totalStories = storyCards.length;
        
        // Create dots
        if (storiesDots) {
            for (let i = 0; i < totalStories; i++) {
                const dot = document.createElement('div');
                dot.className = 'carousel-dot';
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToStory(i));
                storiesDots.appendChild(dot);
            }
        }
        
        function updateCarousel() {
            storiesTrack.style.transform = `translateX(-${currentStory * 100}%)`;
            
            // Update dots
            const dots = storiesDots.querySelectorAll('.carousel-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentStory);
            });
        }
        
        function goToStory(index) {
            currentStory = index;
            updateCarousel();
        }
        
        if (storiesPrev) {
            storiesPrev.addEventListener('click', function() {
                currentStory = (currentStory - 1 + totalStories) % totalStories;
                updateCarousel();
            });
        }
        
        if (storiesNext) {
            storiesNext.addEventListener('click', function() {
                currentStory = (currentStory + 1) % totalStories;
                updateCarousel();
            });
        }
        
        // Auto-advance carousel every 5 seconds
        setInterval(function() {
            currentStory = (currentStory + 1) % totalStories;
            updateCarousel();
        }, 5000);
    }
    
    // ============================================
    // NEWSLETTER FORM
    // ============================================
    
    const newsletterForms = document.querySelectorAll('#newsletterForm');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Show success message
            alert(`Thank you for subscribing! We'll send updates to ${email}`);
            this.reset();
        });
    });
    
    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ============================================
    // FORM VALIDATION
    // ============================================
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function validatePhone(phone) {
        const re = /^[0-9]{10}$/;
        return re.test(phone.replace(/\s/g, ''));
    }
    
    // Add form validation to all forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.style.borderColor = 'var(--color-error)';
                } else if (this.type === 'email' && this.value && !validateEmail(this.value)) {
                    this.style.borderColor = 'var(--color-error)';
                } else if (this.type === 'tel' && this.value && !validatePhone(this.value)) {
                    this.style.borderColor = 'var(--color-error)';
                } else {
                    this.style.borderColor = 'var(--color-border)';
                }
            });
            
            input.addEventListener('focus', function() {
                this.style.borderColor = 'var(--color-primary)';
            });
        });
    });
    
    // ============================================
    // PARALLAX EFFECT
    // ============================================
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-background');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format number with Indian number system
function formatIndianNumber(num) {
    return num.toLocaleString('en-IN');
}

// Format currency
function formatCurrency(amount) {
    return '₹' + formatIndianNumber(Math.round(amount));
}

// Debounce function for performance
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

// Export utility functions
window.RupiyaUtils = {
    formatIndianNumber,
    formatCurrency,
    debounce
};