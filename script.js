// Translations data
const translations = {
  "en": {
    "hero-title": "Planting seeds of hope, together.",
    "hero-subtitle": "Sowing love, reaping change—we offer free assistance to those in need.",
    "get-involved-btn": "Get involved",
    "about-title": "About us",
    "about-content": "At Shared Hope, we believe that every act of kindness can grow into lasting change. United by compassion and a commitment to community, we provide practical support to individuals and families facing hardship. Our mission is simple, to serve with empathy, uplift with dignity, and build a shared future rooted in hope.",
    "services-title": "What we do",
    "food-title": "Food distribution",
    "food-desc": "Nutritious meals and groceries for those in need.",
    "meals-title": "Hot meals for the homeless",
    "meals-desc": "Freshly prepared food served with care.",
    "supplies-title": "School supplies",
    "supplies-desc": "Essential materials to help students thrive.",
    "hospital-title": "Hospital aid",
    "hospital-desc": "Supplying healthcare facilities with needed items.",
    "contact-title": "Get involved",
    "contact-quote": "'You shall love your neighbor as yourself'",
    "phone": "+49 176 878 20948 / +244 923 701 518",
    "email": "info@shared-hope.org",
    "website": "www.shared-hope.org",
    "contact-btn": "Contact us"
  },
  "de": {
    "hero-title": "Samen der Hoffnung zusammen pflanzen.",
    "hero-subtitle": "Liebe säen, Wandel ernten – wir bieten kostenlose Hilfe für Bedürftige an.",
    "get-involved-btn": "Mitmachen",
    "about-title": "Über uns",
    "about-content": "Bei Shared Hope glauben wir, dass jede gute Tat zu nachhaltigem Wandel werden kann. Vereint durch Mitgefühl und Engagement für die Gemeinschaft, bieten wir praktische Unterstützung für Einzelpersonen und Familien, die mit Schwierigkeiten kämpfen. Unsere Mission ist einfach: mit Empathie dienen, mit Würde aufbauen und eine gemeinsame Zukunft auf der Grundlage von Hoffnung schaffen.",
    "services-title": "Was wir tun",
    "food-title": "Lebensmittelverteilung",
    "food-desc": "Nahrhafte Mahlzeiten und Lebensmittel für Bedürftige.",
    "meals-title": "Warmes Essen für Obdachlose",
    "meals-desc": "Frisch zubereitetes Essen, das mit Sorgfalt serviert wird.",
    "supplies-title": "Schulbedarf",
    "supplies-desc": "Wichtige Materialien, um Schülern zum Erfolg zu verhelfen.",
    "hospital-title": "Krankenhausunterstützung",
    "hospital-desc": "Versorgung von medizinischen Einrichtungen mit benötigten Artikeln.",
    "contact-title": "Mitmachen",
    "contact-quote": "'Du sollst deinen Nächsten lieben wie dich selbst'",
    "phone": "+49 176 878 20948 / +244 923 701 518",
    "email": "info@shared-hope.org",
    "website": "www.shared-hope.org",
    "contact-btn": "Kontaktieren Sie uns"
  },
  "es": {
    "hero-title": "Sembrando semillas de esperanza, juntos.",
    "hero-subtitle": "Sembrando amor, cosechando cambio—ofrecemos ayuda gratuita a quienes lo necesitan.",
    "get-involved-btn": "Participa",
    "about-title": "Sobre nosotros",
    "about-content": "En Shared Hope, creemos que cada acto de bondad puede convertirse en un cambio duradero. Unidos por la compasión y el compromiso con la comunidad, brindamos apoyo práctico a personas y familias que enfrentan dificultades. Nuestra misión es sencilla: servir con empatía, elevar con dignidad y construir un futuro compartido arraigado en la esperanza.",
    "services-title": "Lo que hacemos",
    "food-title": "Distribución de alimentos",
    "food-desc": "Comidas nutritivas y provisiones para quienes lo necesitan.",
    "meals-title": "Comidas calientes para los sin hogar",
    "meals-desc": "Comida recién preparada servida con cuidado.",
    "supplies-title": "Suministros escolares",
    "supplies-desc": "Materiales esenciales para ayudar a los estudiantes a prosperar.",
    "hospital-title": "Ayuda hospitalaria",
    "hospital-desc": "Suministro de artículos necesarios a las instalaciones de atención médica.",
    "contact-title": "Participa",
    "contact-quote": "'Amarás a tu prójimo como a ti mismo'",
    "phone": "+49 176 878 20948 / +244 923 701 518",
    "email": "info@shared-hope.org",
    "website": "www.shared-hope.org",
    "contact-btn": "Contáctenos"
  },
  "pt": {
    "hero-title": "Plantando sementes de esperança, juntos.",
    "hero-subtitle": "Semeando amor, colhendo mudança—oferecemos assistência gratuita às pessoas necessitadas.",
    "get-involved-btn": "Envolva-se",
    "about-title": "Sobre nós",
    "about-content": "Na Shared Hope, acreditamos que todo ato de bondade pode crescer e se tornar uma mudança duradoura. Unidos pela compaixão e pelo compromisso com a comunidade, oferecemos apoio prático a indivíduos e famílias que enfrentam dificuldades. Nossa missão é simples: servir com empatia, elevar com dignidade e construir um futuro compartilhado enraizado na esperança.",
    "services-title": "O que fazemos",
    "food-title": "Distribuição de alimentos",
    "food-desc": "Refeições nutritivas e mantimentos para quem precisa.",
    "meals-title": "Refeições quentes para os sem-teto",
    "meals-desc": "Alimentos frescos preparados e servidos com cuidado.",
    "supplies-title": "Material escolar",
    "supplies-desc": "Materiais essenciais para ajudar os alunos a prosperar.",
    "hospital-title": "Ajuda hospitalar",
    "hospital-desc": "Fornecimento de itens necessários às instalações de saúde.",
    "contact-title": "Envolva-se",
    "contact-quote": "'Amarás ao teu próximo como a ti mesmo'",
    "phone": "+49 176 878 20948 / +244 923 701 518",
    "email": "info@shared-hope.org",
    "website": "www.shared-hope.org",
    "contact-btn": "Entre em contato"
  }
};

// Set default language on page load
updateLanguage('en');

function updateLanguage(lang) {
  const t = translations[lang];
  if (!t) return;
  for (const [key, value] of Object.entries(t)) {
    const el = document.getElementById(key);
    if (el) el.textContent = value;
  }

  // sync select value if present
  const select = document.getElementById('language-select');
  if (select && select.value !== lang) {
    select.value = lang;
  }

  // update active button styles
  document.querySelectorAll('.language-selector button').forEach(btn => {
    btn.classList.toggle('active', btn.id === `lang-${lang}`);
  });
}

// Custom image-based language selector functionality
function setupLanguageDropdown() {
  const dropdownToggle = document.querySelector('.language-dropdown-toggle');
  const dropdownMenu = document.querySelector('.language-dropdown-menu');
  const languageOptions = document.querySelectorAll('.language-option');
  
  if (!dropdownToggle || !dropdownMenu) return;
  
  // Function to update dropdown menu based on selected language
  function updateDropdownMenu(selectedLang) {
    // Hide all options first
    languageOptions.forEach(option => {
      option.parentElement.style.display = 'block';
    });
    
    // Hide the selected language option
    const selectedOption = dropdownMenu.querySelector(`.language-option[data-lang="${selectedLang}"]`);
    if (selectedOption) {
      selectedOption.parentElement.style.display = 'none';
    }
  }
  
  // Initialize dropdown menu
  updateDropdownMenu('en');
  
  // Toggle dropdown menu
  dropdownToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = dropdownMenu.classList.contains('show');
    dropdownMenu.classList.toggle('show', !isExpanded);
    dropdownToggle.setAttribute('aria-expanded', !isExpanded);
  });
  
  // Handle language selection
  languageOptions.forEach(option => {
    option.addEventListener('click', (e) => {
      e.stopPropagation();
      const lang = option.getAttribute('data-lang');
      if (lang) {
        updateLanguage(lang);
        
        // Update dropdown toggle with selected language
        const flagImg = option.querySelector('.flag-icon');
        if (flagImg) {
          const currentFlag = dropdownToggle.querySelector('.flag-icon');
          if (currentFlag) {
            currentFlag.src = flagImg.src;
            currentFlag.alt = flagImg.alt;
            currentFlag.setAttribute('data-lang', lang);
          }
        }
        
        // Update dropdown menu to hide selected language
        updateDropdownMenu(lang);
        
        // Close dropdown
        dropdownMenu.classList.remove('show');
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
    dropdownMenu.classList.remove('show');
    dropdownToggle.setAttribute('aria-expanded', 'false');
  });
  
  // Prevent dropdown from closing when clicking inside
  dropdownMenu.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}

// Initialize language dropdown
setupLanguageDropdown();

// Smooth scroll for get involved button
const getInvolvedBtn = document.getElementById('get-involved-btn');
if (getInvolvedBtn) {
    getInvolvedBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector('.contact');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
}