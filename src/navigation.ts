document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link');
  const contentSections = document.querySelectorAll<HTMLDivElement>('.content-section');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e: Event) {
      // Check if this is an external link (like resume PDF)
      if (!this.getAttribute('data-section')) {
        // Don't prevent default for external links
        return;
      }
      
      e.preventDefault();
      
      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
      
      // Hide all content sections
      contentSections.forEach(section => section.classList.add('d-none'));
      
      // Show the selected content section
      const sectionId = this.getAttribute('data-section') + '-content';
      const selectedSection = document.getElementById(sectionId);
      if (selectedSection) {
        selectedSection.classList.remove('d-none');
      }
    });
  });
});