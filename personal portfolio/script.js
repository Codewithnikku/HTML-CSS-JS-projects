document.getElementById('scroll-contact').addEventListener('click', function () {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('download-cv').addEventListener('click', function () {
    window.open('assets/your-cv.pdf', '_blank');
});
const navLinks = document.querySelectorAll('header nav ul li a');
const sections = ['home', 'projects', 'experience-icons', 'contact'].map(id => document.getElementById(id));
window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 120;
    sections.forEach((section, idx) => {
        if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[idx].classList.add('active');
        }
    });
});
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const status = document.getElementById('form-status');
    status.textContent = "Sending...";
    status.style.color = "#ff6347";
    setTimeout(() => {
        status.textContent = "Thank you! Your message has been sent.";
        status.style.color = "#4caf50";
        this.reset();
    }, 1200);
});
function animateOnScroll() {
    const animatedSections = document.querySelectorAll('.section-animate');
    const trigger = window.innerHeight * 0.85;
    animatedSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < trigger) {
            section.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);