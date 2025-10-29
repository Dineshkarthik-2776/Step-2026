async function renderCommittee() {
  try {
    const response = await fetch('www.svce.ac.in/json/committee.json');
    const data = await response.json();
    
    // Render tab headers
    const tabList = document.querySelector('.nav-tabs');
    tabList.innerHTML = '';
    
    data.committees.forEach((committee, index) => {
      const li = document.createElement('li');
      li.className = index === 0 ? 'active' : '';
      li.innerHTML = `
        <a href="#${committee.id}" aria-controls="${committee.id}" role="tab" data-toggle="tab">
          ${committee.title}
        </a>
      `;
      tabList.appendChild(li);
    });

    // Render tab content
    const tabContent = document.querySelector('.tab-content');
    tabContent.innerHTML = '';

    data.committees.forEach((committee, index) => {
      const tabPane = document.createElement('div');
      tabPane.setAttribute('role', 'tabpanel');
      tabPane.className = `tab-pane ${index === 0 ? 'active' : ''}`;
      tabPane.id = committee.id;

      if (committee.id === 'wday') {
        // Special handling for organizing committee with two columns
        committee.sections.forEach(section => {
          const column = document.createElement('div');
          column.className = 'col-md-6 col-sm-6';
          
          section.members.forEach(member => {
            const h4 = document.createElement('h4');
            h4.className = 'com1';
            h4.textContent = `${member.name}, ${member.role}`;
            column.appendChild(h4);
          });
          
          tabPane.appendChild(column);
        });
      } else {
        // Standard rendering for other committees
        committee.members.forEach(member => {
          const div = document.createElement('div');
          div.className = 'col-md-10 col-sm-10 com-text';
          div.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.role}</p>
          `;
          tabPane.appendChild(div);
        });

        // Add program divider if it's the patrons section
        if (committee.id === 'sday') {
          const divider = document.createElement('div');
          divider.className = 'program-divider col-md-12 col-sm-12';
          tabPane.appendChild(divider);
        }
      }

      tabContent.appendChild(tabPane);
    });
  } catch (error) {
    console.error('Error rendering committee:', error);
  }
}

// Call the render function when the document is ready
document.addEventListener('DOMContentLoaded', renderCommittee);