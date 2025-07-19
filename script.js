const approved = JSON.parse(localStorage.getItem("approved") || "[]");
const notes = JSON.parse(localStorage.getItem("notes") || "{}");

const structure = [
  {
    semester: "Semestre I",
    courses: [
      { id: "cat_fjc", name: "Cátedra Francisco José de Caldas", prerequisites: [] },
      { id: "textos", name: "Producción y Comprensión de Textos", prerequisites: [] },
      { id: "mat1", name: "Matemáticas I", prerequisites: [] },
      { id: "quim1", name: "Química Básica I", prerequisites: [] },
      { id: "bio", name: "Biología", prerequisites: [] },
      { id: "hist_quim", name: "Historia de la Química", prerequisites: [] },
      { id: "educ_cult", name: "Educación y Cultura", prerequisites: [] }
    ]
  },
  {
    semester: "Semestre II",
    courses: [
      { id: "mat2", name: "Matemáticas II", prerequisites: ["mat1"] },
      { id: "fisica", name: "Física Clásica", prerequisites: [] },
      { id: "quim2", name: "Química Básica II", prerequisites: ["quim1"] },
      { id: "teo_cog", name: "Teoría Cognitiva del Aprendizaje", prerequisites: [] },
      { id: "hist_ped", name: "Historia de la Pedagogía", prerequisites: ["educ_cult"] },
      { id: "epis_quim", name: "Epistemología de la Química", prerequisites: ["hist_quim"] },
      { id: "ppdi", name: "PPDI – Laboratorio Acercamiento", prerequisites: [] },
      { id: "mod_did", name: "Modelos Didácticos", prerequisites: ["hist_quim"] }
    ]
  },
  {
    semester: "Semestre III",
    courses: [
      { id: "quim_inor1", name: "Química Inorgánica I", prerequisites: ["quim2"] },
      { id: "estadistica", name: "Estadística Descriptiva", prerequisites: ["mat2"] },
      { id: "fis_mod", name: "Física Moderna", prerequisites: ["fisica"] },
      { id: "ppdii", name: "PPDII – Diagnóstico", prerequisites: ["ppdi"] },
      { id: "dis_did", name: "Diseño Diagnóstico y Unidades Didácticas", prerequisites: ["mod_did"] },
      { id: "soc_edu", name: "Sociología de la Educación", prerequisites: ["hist_ped"] }
    ]
  },
  {
    semester: "Semestre IV",
    courses: [
      { id: "quim_inor2", name: "Química Inorgánica II", prerequisites: ["quim_inor1"] },
      { id: "termo1", name: "Fisicoquímica I: Termodinámica", prerequisites: ["mat2", "fis_mod", "quim_inor1"] },
      { id: "analitica", name: "Química Analítica", prerequisites: [] },
      { id: "bioetica", name: "Bioética", prerequisites: [] },
      { id: "ppdiii", name: "PPDIII – Metodologías Aplicadas", prerequisites: ["ppdii"] },
      { id: "metodologias", name: "Metodologías y Estrategias", prerequisites: ["dis_did"] }
    ]
  },
  {
    semester: "Semestre V",
    courses: [
      { id: "cat_ctx", name: "Cátedra de Contexto", prerequisites: [] },
      { id: "org1", name: "Química Orgánica I", prerequisites: ["quim_inor2"] },
      { id: "termo2", name: "Fisicoquímica II: Espontaneidad y Equilibrio", prerequisites: ["termo1"] },
      { id: "met_inv", name: "Metodología de Investigación Cualitativa/Cuantitativa", prerequisites: [] },
      { id: "ppdiv", name: "PPDIV – Investigación Educativa", prerequisites: ["ppdiii"] },
      { id: "inv_aula", name: "Investigación Educativa y en el Aula", prerequisites: ["metodologias"] }
    ]
  },
  {
    semester: "Semestre VI",
    courses: [
      { id: "org2", name: "Química Orgánica II", prerequisites: ["org1"] },
      { id: "ppe", name: "Políticas Públicas Educativas", prerequisites: [] },
      { id: "instrum", name: "Análisis Químico Instrumental", prerequisites: ["analitica", "org1"] },
      { id: "ppdv", name: "PPDV – Lineamientos Curriculares", prerequisites: ["ppdiv"] },
      { id: "curricular", name: "Modelos Curriculares y Diseño Curricular", prerequisites: ["inv_aula"] },
      { id: "lineas", name: "Líneas de Investigación en Didáctica de las Ciencias", prerequisites: [] }
    ]
  },
  {
    semester: "Semestre VII",
    courses: [
      { id: "nees", name: "Necesidades Educativas Especiales (NEES)", prerequisites: ["ppdiii"] },
      { id: "bioq", name: "Bioquímica", prerequisites: ["org2", "instrum"] },
      { id: "amb_sust", name: "Química Ambiental y Sostenible", prerequisites: [] },
      { id: "practica", name: "Práctica Social", prerequisites: [] },
      { id: "ppvi", name: "PPVI – Gestión de la Evaluación Educativa", prerequisites: ["ppdv"] },
      { id: "eval", name: "Evaluación de Aprendizaje", prerequisites: ["lineas"] }
    ]
  },
  {
    semester: "Semestre VIII",
    courses: [
      { id: "demo", name: "Cátedra Democracia y Ciudadanía", prerequisites: [] },
      { id: "trab1", name: "Trabajo de Grado I", prerequisites: [] },
      { id: "ppd_escuela", name: "PPD – Inmersión en la Escuela", prerequisites: [] },
      { id: "tic", name: "TIC en las Enseñanza de las Ciencias Experimentales", prerequisites: [] }
    ]
  },
  {
    semester: "Semestre IX",
    courses: [
      { id: "trab2", name: "Trabajo de Grado II", prerequisites: ["trab1", "bioq", "ppvi", "eval", "amb_sust", "practica", "nees"] },
      { id: "ppd_invest", name: "PPD – Inmersión en la Investigación en la Escuela", prerequisites: ["ppd_escuela"] }
    ]
  }
];

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
        card.appendChild(note
