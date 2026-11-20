const translations = {
  en: {
    navAbout: "About", navSkills: "Skills", navProjects: "Projects", navContact: "Contact",
    heroEyebrow: "Business Intelligence & Data Engineering",
    heroTitle: "I turn data into reliable solutions that drive results.",
    heroDescription: "I hold a degree in Computer Science and a postgraduate degree in Data Engineering. I currently work with Business Intelligence in the guarantees area and am building my transition to Analytical Data Engineering.",
    viewProjects: "View projects", linkedinProfile: "My LinkedIn",
    aboutKicker: "About me", aboutTitle: "Between business vision and engineering",
    aboutParagraph1: "My career combines Computer Science, a postgraduate degree in Data Engineering, and practical experience in BI, public administration, security, and banking.",
    aboutParagraph2: "Today I work on data structuring, modeling, processing, and analysis to support business needs. I aim to expand my work in pipelines, distributed processing, medallion architectures, and scalable data platforms.",
    emailMe: "Send an email", githubProfile: "View GitHub",
    skillsKicker: "Technical skills", skillsTitle: "Technologies I use and study",
    skillDataTitle: "Data and querying", skillDataText: "Querying, modeling, transformation, and data quality.",
    skillEngineeringTitle: "Data engineering", skillEngineeringText: "Building data foundations, pipelines, and analytical architectures.",
    skillPlatformTitle: "Platforms and cloud", skillPlatformText: "Distributed environments, containers, and infrastructure as code.",
    skillAnalyticsTitle: "Analytics and ML", skillAnalyticsText: "Metrics, visualization, and machine learning experiments.",
    projectsKicker: "Projects", projectsTitle: "From analysis to deployment",
    projectEngineeringLabel: "Data engineering", projectEngineeringDescription: "An initial laboratory for studying data pipelines and infrastructure, with Docker Compose and environment documentation.",
    projectMLLabel: "Machine Learning", projectMLDescription: "A collection of experiments covering classification, recommendation, NLP, optimization, and evaluation metrics.",
    projectMLOpsLabel: "MLOps", projectMLOpsDescription: "A reproducible project structure for data preparation, model training, evaluation, and model organization.",
    projectDataLabel: "Data analysis", projectDataDescription: "Practical exercises covering statistics, clustering, data cleaning, visualization, and exploratory analysis.",
    contactKicker: "Contact", contactTitle: "Let's talk about data?", contactButton: "Send a message"
  }
};

const languageButton = document.querySelector(".language-toggle");
let isEnglish = false;

function applyLanguage() {
  document.documentElement.lang = isEnglish ? "en" : "pt-BR";
  languageButton.textContent = isEnglish ? "PT" : "EN";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (isEnglish && translations.en[key]) {
      element.innerHTML = translations.en[key];
    } else {
      location.reload();
    }
  });
  document.title = isEnglish ? "Victor Buitoni | Data Engineer" : "Victor Buitoni | Engenheiro de Dados";
}

languageButton.addEventListener("click", () => {
  if (!isEnglish) {
    isEnglish = true;
    applyLanguage();
  } else {
    isEnglish = false;
    location.reload();
  }
});

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
