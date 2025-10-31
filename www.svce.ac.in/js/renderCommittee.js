async function renderCommittee() {
  try {
    const response = await fetch('www.svce.ac.in/json/committee.json');
    const data = await response.json();

    const tabList = document.querySelector('.nav-tabs');
    const tabContent = document.querySelector('.tab-content');
    tabList.innerHTML = '';
    tabContent.innerHTML = '';

    const isMobile = window.innerWidth <= 768;

    data.committees.forEach((committee, index) => {
      // Tab header
      const li = document.createElement('li');
      li.className = index === 0 ? 'active' : '';
      li.innerHTML = `
        <a href="#${committee.id}" aria-controls="${committee.id}" role="tab" data-toggle="tab">
          ${committee.title}
        </a>
      `;
      tabList.appendChild(li);

      // Tab content
      const tabPane = document.createElement('div');
      tabPane.className = `tab-pane ${index === 0 ? 'active' : ''}`;
      tabPane.id = committee.id;
      tabPane.setAttribute('role', 'tabpanel');

      if (committee.sections) {
        // Organising Committee with sections
        const row = document.createElement('div');
        row.className = 'row';

        committee.sections.forEach((section, secIndex) => {
          const col = document.createElement('div');
          col.className = 'col-lg-6 col-md-12 mb-4';

          if (isMobile) {
            // Mobile: make section collapsible
            const dropdownBtn = document.createElement('button');
            dropdownBtn.className = 'section-dropdown';
            dropdownBtn.textContent = section.title;
            dropdownBtn.addEventListener('click', () => {
              const membersDiv = col.querySelector('.members-container');
              membersDiv.style.display = membersDiv.style.display === 'none' ? 'block' : 'none';
            });
            col.appendChild(dropdownBtn);

            const membersDiv = document.createElement('div');
            membersDiv.className = 'members-container';
            membersDiv.style.display = 'none'; // hidden initially
            section.members.forEach(member => {
              const div = document.createElement('div');
              div.className = 'committee-member small';
              div.innerHTML = `
                <h5 class="member-name">${member.name}</h5>
                <p class="member-role">${member.role}</p>
              `;
              membersDiv.appendChild(div);
            });
            col.appendChild(membersDiv);
          } else {
            // Desktop: show section title + members directly
            const sectionTitle = document.createElement('h4');
            sectionTitle.textContent = section.title;
            sectionTitle.className = 'section-title';
            col.appendChild(sectionTitle);

            section.members.forEach(member => {
              const memberDiv = document.createElement('div');
              memberDiv.className = 'committee-member small';
              memberDiv.innerHTML = `
                <h5 class="member-name">${member.name}</h5>
                <p class="member-role">${member.role}</p>
              `;
              col.appendChild(memberDiv);
            });
          }

          row.appendChild(col);
        });

        tabPane.appendChild(row);
      } else {
        // Standard members
        const row = document.createElement('div');
        row.className = 'row';

        const sizeClassMap = {
          fday: 'largest',
          sday: 'large',
          tday: 'medium',
          uday: 'small',
          xday: 'smallest'
        };
        const sizeClass = sizeClassMap[committee.id] || 'small';

        committee.members.forEach(member => {
          const col = document.createElement('div');
          col.className = 'col-lg-6 col-md-12 mb-3';
          col.innerHTML = `
            <div class="committee-member ${sizeClass}">
              <h3 class="member-name">${member.name}</h3>
              <p class="member-role">${member.role}</p>
            </div>
          `;
          row.appendChild(col);
        });

        tabPane.appendChild(row);
      }

      tabContent.appendChild(tabPane);
    });
  } catch (error) {
    console.error('Error rendering committee:', error);
  }
}

document.addEventListener('DOMContentLoaded', renderCommittee);
window.addEventListener('resize', renderCommittee); // re-render on resize
