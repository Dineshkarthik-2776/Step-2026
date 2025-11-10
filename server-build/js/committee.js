document.addEventListener("DOMContentLoaded", () => {
  const tabsContainer = document.getElementById("committee-tabs");
  const contentContainer = document.getElementById("committee-content");

  // === Load JSON dynamically ===
  fetch("./data/committeData.json")
    .then(response => {
      if (!response.ok) throw new Error("Failed to load committee data");
      return response.json();
    })
    .then(data => {
      const committees = data.committees;

      // === Render Tabs ===
      committees.forEach((c, idx) => {
        const tab = document.createElement("li");
        tab.className = `tab-item ${idx === 0 ? "active" : ""}`;
        tab.textContent = c.title;
        tab.dataset.id = c.id;
        tabsContainer.appendChild(tab);
      });

      // === Render Content ===
      function renderContent(id) {
        const committee = committees.find(c => c.id === id);
        contentContainer.innerHTML = "";

        const tabPane = document.createElement("div");
        tabPane.className = "tab-pane active";

        const row = document.createElement("div");
        row.className = "committee-grid";

        if (committee.sections) {
          committee.sections.forEach(section => {
            section.members.forEach(member => {
              row.innerHTML += `
                <div class="committee-member">
                  <h3 class="member-name">${member.name}</h3>
                  <p class="member-role">${member.role}</p>
                </div>
              `;
            });
          });
        } else if (committee.members) {
          committee.members.forEach(member => {
            row.innerHTML += `
              <div class="committee-member">
                <h3 class="member-name">${member.name}</h3>
                <p class="member-role">${member.role}</p>
              </div>
            `;
          });
        }

        tabPane.appendChild(row);
        contentContainer.appendChild(tabPane);
      }

      // === Tab Click ===
      tabsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("tab-item")) {
          document.querySelectorAll(".tab-item").forEach(tab => tab.classList.remove("active"));
          e.target.classList.add("active");
          renderContent(e.target.dataset.id);
        }
      });

      // === Load Default Tab ===
      renderContent(committees[0].id);
    })
    .catch(err => console.error("Error loading committee data:", err));
});
