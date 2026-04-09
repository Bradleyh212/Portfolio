export const content = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact Me',
      langToggle: 'FR',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Bradley',
      role: 'Innovative Software',
      roleHighlight: 'Engineer',
    },
    about: {
      heading: 'Work Experience',
      jobs: [
        {
          title: 'Production Engineer (Part Time) – Voith Paper',
          location: 'Hawkesbury, ON | Jan 2026 – Present',
          bullets: [],
        },
        {
          title: 'Production Engineering Intern – Voith Paper',
          location: 'Hawkesbury, ON | Aug 2025 – Dec 2025',
          bullets: [
            'Led a cloud migration project to move the local shared drive to a dual-cloud environment using AWS and SharePoint',
            'Replaced legacy Excel VBA systems with cloud-based workflows using Power Apps, Power Automate, and SharePoint',
            'Built a centralized SharePoint database and automated reporting pipeline, reducing report generation time by 50%',
          ],
        },
        {
          title: 'Co-op Instructor – uOttawa Engineering Outreach',
          location: 'Ottawa, ON | Jan 2025 – Apr 2025',
          bullets: [
            'Delivered 300+ engaging STEM workshops across 50+ Ontario schools, reaching 7,000+ students',
            'Adapted to diverse classrooms and coordinated travel logistics daily',
            'Strengthened public speaking, time management, and critical thinking skills',
          ],
        },
        {
          title: 'Pharmacy Assistant – Shoppers Drug Mart & Guardian Pharmacy',
          location: 'Ottawa & Hawkesbury, ON | Jul 2021 – Present',
          bullets: [
            '4+ years handling sensitive patient data and resolving insurance issues',
            'Built strong communication and multitasking skills in fast-paced settings',
            'Trained numerous new employees over the years',
          ],
        },
      ],
    },
    projects: {
      heading: 'Projects',
    },
    footer: '© 2026 Bradley-Hans Desmornes. Tous droits réservés.',
  },

  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
      contact: 'Contactez-moi',
      langToggle: 'EN',
    },
    hero: {
      greeting: 'Salut, Je suis',
      name: 'Bradley',
      role: 'Ingénieur',
      roleHighlight: 'Logiciel Innovant',
      roleReversed: true,
    },
    about: {
      heading: 'Expérience professionnelle',
      jobs: [
        {
          title: 'Ingénieur de production (temps partiel) – Voith Paper',
          location: 'Hawkesbury, ON | Janv. 2026 – Présent',
          bullets: [],
        },
        {
          title: 'Stagiaire en ingénierie de production – Voith Paper',
          location: 'Hawkesbury, ON | Août 2025 – Déc. 2025',
          bullets: [
            'Dirigé un projet de migration infonuagique pour déplacer le lecteur partagé local vers un environnement double-cloud (AWS et SharePoint)',
            'Remplacé des systèmes Excel VBA hérités par des flux de travail infonuagiques avec Power Apps, Power Automate et SharePoint',
            'Construit une base de données SharePoint centralisée et automatisé le pipeline de reporting, réduisant le temps de génération des rapports de 50 %',
          ],
        },
        {
          title: 'Instructeur coop – uOttawa Engineering Outreach',
          location: 'Ottawa, ON | Janv. 2025 – Avr. 2025',
          bullets: [
            'Animé 300+ ateliers STEM dans 50+ écoles en Ontario, rejoignant 7 000+ élèves',
            'Adapté le contenu à des classes variées et coordonné la logistique des déplacements au quotidien',
            'Renforcé mes compétences en prise de parole, gestion du temps et pensée critique',
          ],
        },
        {
          title: 'Assistant en pharmacie – Shoppers Drug Mart & Guardian Pharmacy',
          location: 'Ottawa & Hawkesbury, ON | Juil. 2021 – Présent',
          bullets: [
            "4+ ans à gérer des données sensibles de patients et à résoudre des enjeux d'assurance",
            'Développé de solides compétences en communication et en multitâche dans un environnement à rythme rapide',
            'Formé de nombreux nouveaux employés au fil des années',
          ],
        },
      ],
    },
    projects: {
      heading: 'Projets',
    },
    footer: '© 2026 Bradley-Hans Desmornes. Tous droits réservés.',
  },
}

export const projects = [
  {
    id: 'project1',
    label: { en: 'Narc Recon', fr: 'Narc Recon' },
    href: 'https://github.com/Bradleyh212/Narc_Recon',
  },
  {
    id: 'project2',
    label: { en: 'Service Website', fr: 'Site de service' },
    href: 'https://bradleyh212.github.io/seg_3525_devoir2/',
  },
  {
    id: 'project3',
    label: { en: 'Memory game', fr: 'Jeu de mémoire' },
    href: 'https://bradleyh212.github.io/seg_3525_devoir3/',
  },
  {
    id: 'project4',
    label: { en: 'Geen Mind', fr: 'Geen Mind' },
    href: 'https://bradleyh212.github.io/seg_3525_devoir4/',
  },
]
