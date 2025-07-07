document.addEventListener('DOMContentLoaded', function() {
      const app = document.getElementById('app');

      const header = document.createElement('header');
      header.innerHTML = `
        <h1>Arizona Sunshine: Exterior Estate Management</h1>
        <p>Window Cleaning, Pressure Washing & More!</p>
      `;
      app.appendChild(header);

      const servicesSection = document.createElement('section');
      servicesSection.id = 'services';
      servicesSection.innerHTML = `
        <h2>Our Services</h2>
        <ul>
          <li>Exterior Windows</li>
          <li>Driveways</li>
          <li>Concrete</li>
          <li>Exterior Walls</li>
          <li>Fences, Fixtures & Trash Cans</li>
        </ul>
      `;
      app.appendChild(servicesSection);

      const contactSection = document.createElement('section');
      contactSection.id = 'contact';
      contactSection.innerHTML = `
        <h2>Contact Us</h2>
        <form id="contact-form">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
          <label for="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <button type="submit">Submit</button>
        </form>
      `;
      app.appendChild(contactSection);

      const footer = document.createElement('footer');
      footer.innerHTML = '<p>&copy; 2023 Arizona Sunshine. All rights reserved.</p>';
      app.appendChild(footer);

      document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for contacting us! We will get back to you soon.');
        this.reset();
      });
    });
