// Mobile Navbar Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.getElementById('nav');
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
}

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 220) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Animated Statistics Counter (homepage)
document.querySelectorAll('.stat-number').forEach(function(stat) {
    const updateCount = () => {
        const target = +stat.getAttribute('data-target');
        const count = +stat.innerText;
        const increment = target / 40;

        if (count < target) {
            stat.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 30);
        } else {
            stat.innerText = target;
        }
    };
    updateCount();
});

// Form Validation/Submission (shows success client-side only)
function handleFormSubmission(formId, successId, validationMsg = "Submitted successfully!") {
    const form = document.getElementById(formId);
    const successMsg = document.getElementById(successId);
    if (form && successMsg) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (form.checkValidity()) {
                form.reset();
                successMsg.innerText = validationMsg;
                setTimeout(() => { successMsg.innerText = ""; }, 4800);
            }
        });
    }
}
handleFormSubmission('contactForm', 'formSuccessContact', "Thank you for contacting us! We'll get back to you soon.");
handleFormSubmission('truckOwnerForm', 'formSuccessTruckOwner', "Truck registration submitted!");
handleFormSubmission('shipperForm', 'formSuccessShipper', "Quote request received! We'll respond soon.");

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
        const item = btn.parentElement;
        item.classList.toggle('open');
    });
});
