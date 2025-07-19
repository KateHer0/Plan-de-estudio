const approved = JSON.parse(localStorage.getItem("approved") || "[]");
const notes = JSON.parse(localStorage.getItem("notes") || "{}");

function isUnlocked(course) {
  return course.prerequisites.every(pr => approved.includes(pr));
}

function editNote(courseId) {
  const currentNote = notes[courseId] || "";
  const updated = prompt("Escribe tu nota personal:", currentNote);
  if (updated !== null) {
    notes[courseId] = updated;
    localStorage.setItem("notes", JSON.stringify(notes));
    render();
  }
}

function render() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  structure.forEach(sem => {
    const section = document.createElement("div");
    section.className = "semester";

    const title = document.createElement("h2");
    title.textContent = sem.semester;

    const grid = document.createElement("div");
    grid.className = "grid";

    sem.courses.forEach(course => {
      const card = document.createElement("div");
      card.className = "course";
      card.textContent = course.name;

      const isApproved = approved.includes(course.id);
      const unlocked = isUnlocked(course);

      if (isApproved) {
        card.classList.add("approved");
      } else if (unlocked) {
        card.classList.add("unlocked");
        card.onclick = () => {
          approved.push(course.id);
          localStorage.setItem("approved", JSON.stringify(approved));
          render();
        };
      }

      const editBtn = document.createElement("button");
      editBtn.className = "edit-note";
      editBtn.textContent = "📝";
      editBtn.onclick = (e) => {
        e.stopPropagation();
        editNote(course.id);
      };
      card.appendChild(editBtn);

      if (notes[course.id]) {
        const noteEl = document.createElement("div");
        noteEl.className = "note";
        noteEl.textContent = `Nota: ${notes[course.id]}`;
        card.appendChild(noteEl);
      }

      grid.appendChild(card);
    });

    section.appendChild(title);
    section.appendChild(grid);
    container.appendChild(section);
  });
}

render();
