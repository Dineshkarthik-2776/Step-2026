async function renderResearchDomains() {
  try {
    const response = await fetch('www.svce.ac.in/json/domains.json');
    const data = await response.json();
    const container = document.querySelector('.PS');

    if (!container) {
      console.error('Container element not found');
      return;
    }

    // Clear existing content
    container.innerHTML = '';

    // Render each domain block
    data.researchDomains.forEach((domain) => {
      const domainBlock = document.createElement('div');
      domainBlock.className = 'domain-block';

      // Add domain title
      const title = document.createElement('h2');
      title.className = 'domain-title';
      title.textContent = domain.title;
      domainBlock.appendChild(title);

      // Add subtopics
      domain.subtopics.forEach((subtopic) => {
        const subtopicDiv = document.createElement('div');
        subtopicDiv.className = 'subtopic';

        // Add subtopic heading
        const heading = document.createElement('h3');
        heading.textContent = subtopic.name;
        subtopicDiv.appendChild(heading);

        // Add items list
        const list = document.createElement('ul');
        subtopic.items.forEach((item) => {
          const listItem = document.createElement('li');
          listItem.textContent = item;
          list.appendChild(listItem);
        });
        subtopicDiv.appendChild(list);

        domainBlock.appendChild(subtopicDiv);
      });

      container.appendChild(domainBlock);
    });
  } catch (error) {
    console.error('Error rendering research domains:', error);
  }
}

// Call the render function when the document is ready
document.addEventListener('DOMContentLoaded', renderResearchDomains);