const sections = document.querySelectorAll('.section');

for (const section of sections) {
    section.addEventListener('click', function() {
        if (window.innerWidth < 768) {
            sections.forEach(s => s.classList.remove('active'));
            this.classList.toggle('active');
        }
    });
}
