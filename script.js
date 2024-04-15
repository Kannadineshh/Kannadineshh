//Script.js
// Simulated data for template names
const templates = ['Template 1', 'Template 2', 'Template 3'];

// Function to generate template elements dynamically
function generateTemplates() {
  const templateList = document.querySelector('.template-list');
  templateList.innerHTML = ''; // Clear existing template list
  
  templates.forEach(template => {
    const templateElement = document.createElement('div');
    templateElement.classList.add('template');
    templateElement.innerHTML = `
      <img src="template.jpg" alt="${template}">
      <button>Select ${template}</button>
    `;
    templateList.appendChild(templateElement);
  });
}

// Call the function to generate templates when the page loads
document.addEventListener('DOMContentLoaded', generateTemplates);

// Event listener for form submission
const customizeForm = document.getElementById('customize-form');
customizeForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Retrieve user input
  const name = document.getElementById('name').value;
  const font = document.getElementById('font').value;
  const color = document.getElementById('color').value;
  const layout = document.getElementById('layout').value;
  const sections = document.getElementById('sections').value;
  const image = document.getElementById('image').files[0];

  // Generate and display customized resume preview
  const previewContainer = document.getElementById('resume-preview');
  previewContainer.innerHTML = `
    <h3>Resume Preview</h3>
    <p style="font-family: ${font}; color: ${color};">Name: ${name}</p>
    <!-- Add more preview sections based on user input -->
    <p>${sections}</p>
  `;
  
  // Check if image is uploaded
  if (image) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const imagePreview = document.createElement('img');
      imagePreview.src = e.target.result;
      imagePreview.style.maxWidth = '100%';
      previewContainer.appendChild(imagePreview);
    }
    reader.readAsDataURL(image);
  }
});
