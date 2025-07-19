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
      { id: "educ_cult", name: "Educación y Cultura", prerequisites: [] },
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
      { id: "mod_did", name: "Modelos Didácticos", prerequisites: ["hist_quim"] },
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
      { id: "soc_edu", name: "Sociología de la Educación", prerequisites: ["hist_ped"] },
    ]
  },
  {
    semester: "Semestre IV",
    courses: [
      { id: "quim_inor2", name: "Química Inorgánica II", prerequisites: ["quim_inor1"] },
      { id: "termo", name: "Fisicoquímica I: Termodinámica", prerequisites: ["mat2", "fis_mod", "quim_inor1"] },
      { id: "analitica", name: "Química Analítica", prerequisites: [] },
      { id: "bioetica", name: "Bioética", prerequisites: [] },
      { id: "ppdiii", name: "PPDIII – Metodologías Aplicadas", prerequisites: ["ppdii"] },
      { id: "metodologias", name: "Metodologías y Estrategias", prerequisites: ["dis_did"] },
    ]
  },
  {
    semester: "Semestre V",
    courses: [
      { id: "catedra_ctx", name: "Cátedra de Contexto", prerequisites: [] },
      { id: "org1", name: "Química Orgánica I", prerequisites: ["quim_inor2"] },
      { id: "termo2", name: "Fisicoquímica II", prerequisites: ["termo"] },
      { id: "inv_met", name: "Metodología de Investigación", prerequisites: [] },
      { id: "ppdiv", name: "PPDIV – Investigación Educativa", prerequisites: ["ppdiii"] },
      { id: "inv_aula", name: "Investigación en el Aula", prerequisites: ["metodologias"] },
    ]
  },
  {
    semester: "Semestre VI",
    courses: [
      { id: "org2", name: "Química Orgánica II", prerequisites: ["org1"] },
      { id: "pp", name: "Políticas Públicas", prerequisites: [] },
      { id: "analis_instr", name: "Análisis Químico Instrumental", prerequisites: ["analitica", "org1"] },
      { id: "ppdv", name: "PPDV – Lineamientos Curriculares", prerequisites: ["ppdiv"] },
      { id: "curricular", name: "Modelos y Diseño Curricular", prerequisites: ["inv_aula"] },
      { id: "lineas_inv", name: "Líneas Didácticas", prerequisites: [] },
    ]
  },
  {
    semester: "Semestre VII",
    courses: [
      { id: "nees", name: "Necesidades Educativas Especiales", prerequisites: ["ppdiii"] },
      { id: "bioquimica", name: "Bioquímica", prerequisites: ["org2", "analis_instr"] },
      { id: "amb_sust", name: "Química Ambiental y Sostenible", prerequisites: [] },
      { id: "practica", name: "Práctica Social", prerequisites: [] },
      { id: "ppvi", name: "PPVI – Gestión Evaluación", prerequisites: ["ppdv"] },
      { id: "eval_apr", name: "Evaluación del Aprendizaje", prerequisites: ["lineas_inv"] },
    ]
  },
  {
    semester: "Semestre VIII",
    courses: [
      { id: "cat_demo", name: "Cátedra Democracia y Ciudadanía", prerequisites: [] },
      { id: "trab_grado1", name: "Trabajo de Grado I", prerequisites: [] },
      { id:
