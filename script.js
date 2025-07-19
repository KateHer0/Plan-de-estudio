const structure = [
  {
    semester: "Primer Año – I Semestre",
    courses: [
      { id: "cat_fjc", name: "Cátedra Francisco José de Caldas", prerequisites: [] },
      { id: "textos", name: "Producción y Comprensión de Textos", prerequisites: [] },
      { id: "mat1", name: "Matemáticas I", prerequisites: [] },
      { id: "quim1", name: "Química Básica I", prerequisites: [] },
      { id: "bio", name: "Biología", prerequisites: [] },
      { id: "hist_quim", name: "Historia de la Química", prerequisites: [] },
      { id: "educ_cult", name: "Educación y Cultura", prerequisites: [] },
    ]
  },
  {
    semester: "Primer Año – II Semestre",
    courses: [
      { id: "mat2", name: "Matemáticas II", prerequisites: ["mat1"] },
      { id: "fisica", name: "Física Clásica", prerequisites: [] },
      { id: "quim2", name: "Química Básica II", prerequisites: ["quim1"] },
      { id: "teo_cog", name: "Teoría Cognitiva del Aprendizaje", prerequisites: [] },
      { id: "hist_ped", name: "Historia de la Pedagogía", prerequisites: ["educ_cult"] },
      { id: "epis_quim", name: "Epistemología de la Química", prerequisites: ["hist_quim"] },
      { id: "ppdi", name: "PPDI – Laboratorio Acercamiento", prerequisites: [] },
      { id: "mod_did", name: "Modelos Didácticos", prerequisites: ["hist_quim"] },
    ]
  },
  // Continúa agregando los semestres y cursos restantes aquí siguiendo el mismo formato...
];

const approved = JSON.parse(localStorage.getItem("approved") || "[]");

function isUnlocked(course) {
  return course.prerequisites.every(pr => approved.includes(pr));
}

function render() {
  const container = document.getElementById('container');
  container.innerHTML = "";

  structure.forEach(sem => {
    const section = document.createElement('div');
    section.className = "semester";

    const title = document.createElement('h2');
    title.textContent = sem.semester;

    const grid = document.createElement('div');
    grid.className = "grid";

    sem.courses.forEach(course => {
      const card = document.createElement('div');
      card.className = "course";
      card.textContent = course.name;

      if (approved.includes(course.id)) {
        card.classList.add("approved");
      } else if (isUnlocked(course)) {
        card.classList.add("unlocked");
        card.onclick = () => {
          approved.push(course.id);
          localStorage.setItem("approved", JSON.stringify(approved));
          render();
        };
      }

      grid.appendChild(card);
    });

    section.appendChild(title);
    section.appendChild(grid);
    container.appendChild(section);
  });
}

render();
