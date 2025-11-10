document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("domains-container");

  fetch("./data/researchData.json")
    .then((res) => res.json())
    .then((data) => {
      data.researchDomains.forEach((domain) => {
        const card = document.createElement("div");
        card.classList.add("domain-card");

        const title = document.createElement("h2");
        title.textContent = domain.title;
        card.appendChild(title);

        domain.subtopics.forEach((sub) => {
          const subDiv = document.createElement("div");
          subDiv.classList.add("subtopic");

          const subTitle = document.createElement("h3");
          subTitle.textContent = sub.name;
          subDiv.appendChild(subTitle);

          const ul = document.createElement("ul");
          sub.items.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            ul.appendChild(li);
          });
          subDiv.appendChild(ul);

          card.appendChild(subDiv);
        });

        container.appendChild(card);
      });
    })
    .catch((err) => {
      console.error("Error loading research domains:", err);
      container.innerHTML = `<p style="color:red;">Failed to load research data.</p>`;
    });
});
