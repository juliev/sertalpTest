import type { Dictionary } from "../types";

export const en = {
  global: {
    navigation: {
      home: "Home",
      windows: "Windows",
      doors: "Doors",
      projects: "Projects",
      about: "About Us",
      contacts: "Contacts",
      quote: "Request a quote",
      whatsapp: "Chat on WhatsApp",
    },
    common: {
      learnMore: "Learn more",
      viewProjects: "View projects",
      contactUs: "Contact us",
      openMap: "Open in Google Maps",
      viewImage: "Enlarge image",
      close: "Close",
      previous: "Previous",
      next: "Next",
      previousImage: "Previous image",
      nextImage: "Next image",
      imageOf: "Image {current} of {total}",
      phone: "Phone",
      mobileWhatsapp: "Mobile and WhatsApp",
      email: "Primary email",
      legacyEmail: "Alternative email",
      factoryAddress: "Factory address",
      facebook: "Facebook",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      navigationLabel: "Main navigation",
      skipToContent: "Skip to content",
      externalLink: "Opens in a new window",
    },
    notFound: {
      title: "Returning to the home page",
      text: "The requested address does not exist. You will be redirected to the home page.",
      link: "Go to home",
    },
    footer: {
      summary:
        "Manufacture and installation of PVC and aluminium windows and doors, with solutions tailored to each project.",
      navigation: "Navigation",
      contacts: "Contacts",
      legal: "Legal information",
      privacy: "Privacy Policy",
      cookies: "Cookies Policy",
      copyright: "© {year} Sertalp. All rights reserved.",
    },
  },
  shared: {
    warranties: {
      title: "Warranties",
      intro:
        "The stated periods apply according to the supplied solution and the relevant manufacturer's terms and conditions.",
      labels: {
        glass: "Glass",
        aluminium: "Aluminium",
        whitePvc: "White PVC",
        colouredPvc: "Coloured PVC",
        years: "years",
      },
    },
  },
  home: {
    seo: {
      title: "Sertalp | PVC and Aluminium Windows and Doors",
      description:
        "Manufacture and installation of PVC and aluminium windows and doors, tailored solutions and installation in Portugal.",
    },
    hero: {
      eyebrow: "PVC and aluminium frames",
      title: "Windows and doors made to measure for every space",
      description:
        "Sertalp manufactures PVC and aluminium solutions in its own production facility and supports each project from the site assessment through to installation.",
      primaryCta: "Request a quote",
      secondaryCta: "Explore solutions",
      trustLine: "Experience in the sector since February 1978",
      imageAlt: "House with white PVC windows and doors with exterior shutters",
    },
    benefits: {
      title: "Solutions designed for your project",
      intro:
        "In-house production, close support and a solution defined around the space, its use and the intended result.",
      items: [
        {
          title: "In-house production",
          description:
            "We manufacture the frames in our own facility, with direct control over each solution.",
        },
        {
          title: "Made to measure",
          description:
            "We adapt dimensions, materials, glazing, hardware and finishes to the needs of each project.",
        },
        {
          title: "Complete service",
          description:
            "We support the work from the initial assessment through to delivery and on-site installation.",
        },
      ],
    },
    products: {
      title: "PVC and aluminium windows and doors",
      intro:
        "Two product families, multiple configuration options and an approach adapted to each building.",
      windows: {
        title: "Windows",
        description:
          "PVC and aluminium solutions for homes, renovation and new projects, manufactured to suit the dimensions and style of each building.",
        link: "View windows",
      },
      doors: {
        title: "Doors",
        description:
          "Entrance doors, balcony doors and sliding systems in PVC or aluminium, with customised dimensions and finishes.",
        link: "View doors",
      },
    },
    process: {
      title: "How we work",
      intro:
        "A straightforward process that turns the needs of the space into a solution ready to install.",
      steps: [
        {
          title: "Site visit and assessment",
          description:
            "We assess the openings, solar orientation, exposure to wind and noise, and the existing conditions.",
        },
        {
          title: "Recommendation and quotation",
          description:
            "We define suitable materials, configuration, glazing and finishes and present a proposal.",
        },
        {
          title: "Made-to-measure production",
          description:
            "We manufacture each element according to the approved dimensions and specifications.",
        },
        {
          title: "Delivery and installation",
          description:
            "We coordinate delivery and carry out the installation on site.",
        },
      ],
    },
    projects: {
      title: "Projects",
      intro:
        "A selection of PVC and aluminium solutions for different spaces and types of use.",
      link: "View all projects",
      items: {
        alegria: {
          title: "Aluminium entrance door",
          description:
            "A contemporary entrance door with an anthracite finish, vertical handle and glazed side panel.",
          alt: "Anthracite aluminium entrance door with side glazing",
        },
        "almoinhas-velhas": {
          title: "Aluminium and PVC solutions",
          description: "Different frame solutions for a contemporary house.",
          alt: "Contemporary house with dark aluminium windows and doors",
        },
        "bernardim-ribeiro": {
          title: "Made-to-measure arched aluminium doors",
          description: "Glazed doors made to measure for the arched openings.",
          alt: "Glazed aluminium doors made for arched interior openings",
        },
      },
    },
    experience: {
      eyebrow: "Experience and production",
      title: "Experience in the sector since February 1978",
      text: "With experience in the sector since February 1978, Sertalp develops made-to-measure PVC and aluminium frame solutions, from technical assessment through manufacture and installation. Sertalp carries out work throughout mainland Portugal, from north to south, and also has experience with projects and deliveries to Madeira, the Azores, Spain, Israel and Angola.",
      link: "About Sertalp",
    },
    warranty: {
      title: "Warranty periods suited to each material",
      text: "The periods vary according to the glazing, aluminium and type of PVC. See the conditions on the product pages.",
      windowsLink: "Window warranties",
      doorsLink: "Door warranties",
    },
    cta: {
      title: "Planning a window or door project?",
      text: "Contact us so we can assess the space and find a suitable solution.",
      primary: "Request a quote",
      secondary: "Chat on WhatsApp",
    },
  },
  windows: {
    seo: {
      title: "PVC and Aluminium Windows | Sertalp",
      description:
        "Made-to-measure PVC and aluminium windows with technical assessment, in-house production and installation.",
    },
    hero: {
      eyebrow: "Windows",
      title: "Made-to-measure PVC and aluminium windows",
      description:
        "Solutions for new construction, renovation and window replacement, defined around the dimensions, use and characteristics of the space.",
      points: [
        "PVC and aluminium",
        "In-house production",
        "Delivery and installation",
      ],
      cta: "Request a quote",
      imageAlt: "PVC windows with exterior shutters",
    },
    pvc: {
      title: "PVC windows",
      text: "PVC supports versatile solutions for different homes and uses. Each window is manufactured to suit the opening, selected configuration and intended finish.",
      items: [
        "Custom dimensions and configurations",
        "White or coloured options",
        "Different opening types according to the project",
        "Glazing and hardware selected for the solution",
      ],
    },
    aluminium: {
      title: "Aluminium windows",
      text: "Aluminium is a versatile option for openings of different sizes and for projects that value contemporary-looking profiles.",
      items: [
        "A range of colours and finishes",
        "Integration with traditional or contemporary architecture",
        "Made-to-measure configurations",
        "Visual continuity with doors and sliding systems",
      ],
    },
    assessment: {
      eyebrow: "Technical assessment",
      title: "The right solution starts with understanding the space",
      text: "During the site visit, we assess solar orientation, the thickness and composition of the openings, the suitable system and number of chambers, the type of glazing and, where applicable, solar-control or reflective glass solutions.",
      supporting:
        "The aim is to recommend a configuration that fits the building, its use and the client's priorities, rather than applying the same solution to every project.",
    },
    benefits: {
      title: "A solution defined for each opening",
      items: [
        {
          title: "Custom configuration",
          description:
            "Dimensions, opening and finish defined for the project.",
        },
        {
          title: "Guided selection",
          description:
            "Materials, glazing and hardware recommended after assessment.",
        },
        {
          title: "Manufacture and installation",
          description: "Production in our facility and installation on site.",
        },
      ],
    },
    workGallery: {
      title: "Completed work",
    },
    cta: {
      title: "Looking for windows for a new build or renovation?",
      text: "Tell us about the space and we will arrange an assessment.",
      primary: "Request a quote",
      secondary: "View contacts",
    },
  },
  doors: {
    seo: {
      title: "PVC and Aluminium Doors | Sertalp",
      description:
        "Made-to-measure entrance doors, balcony doors and sliding systems in PVC and aluminium, installed by Sertalp.",
    },
    hero: {
      eyebrow: "Doors",
      title:
        "PVC and aluminium doors for entrances, balconies and large openings",
      description:
        "Made-to-measure solutions with materials, configuration and finishes defined for the space and its use.",
      points: [
        "Entrance and balcony doors",
        "Sliding systems",
        "Custom dimensions",
      ],
      cta: "Request a quote",
      imageAlt:
        "Aluminium sliding doors opening onto a balcony with a sea view",
    },
    solutions: {
      title: "Solutions for different uses",
      intro:
        "Each door is defined around the opening, frequency of use, exposure and integration with the building.",
      items: [
        {
          title: "Entrance doors",
          description:
            "Made-to-measure solutions for the main entrance, with panel, glazing, colour and hardware options.",
        },
        {
          title: "Balcony doors",
          description:
            "Glazed doors connecting interior spaces with balconies, patios or terraces.",
        },
        {
          title: "Sliding systems",
          description:
            "Solutions for wide openings and a more open connection between inside and outside.",
        },
        {
          title: "PVC doors",
          description:
            "PVC configurations adapted to the dimensions, opening type and intended finish.",
        },
        {
          title: "Aluminium doors",
          description:
            "Aluminium solutions with a range of colour, design and architectural-integration options.",
        },
        {
          title: "Special solutions",
          description:
            "Doors and assemblies manufactured for non-standard dimensions or geometries.",
        },
      ],
    },
    materials: {
      pvc: {
        title: "PVC doors",
        text: "A versatile option for glazed doors, balcony access and other configurations integrated with PVC windows.",
      },
      aluminium: {
        title: "Aluminium doors",
        text: "A suitable solution for entrances, sliding systems and projects seeking continuity with aluminium frames.",
      },
    },
    assessment: {
      eyebrow: "Custom manufacture",
      title: "Each door is defined for the space where it will be installed",
      text: "We consider dimensions, type of use, exposure, opening direction, glazing, finish and integration with existing openings.",
      supporting:
        "After the assessment, we present a proposal and manufacture the solution according to the approved specifications.",
    },
    workGallery: {
      title: "Completed work",
    },
    cta: {
      title: "Let us find the right door for your project",
      text: "Contact us to assess dimensions, use and finish options.",
      primary: "Request a quote",
      secondary: "Chat on WhatsApp",
    },
  },
  projects: {
    seo: {
      title: "Window and Door Projects | Sertalp",
      description:
        "Examples of projects with PVC and aluminium windows, doors and sliding systems.",
    },
    hero: {
      eyebrow: "Projects",
      title: "Solutions adapted to different spaces",
      description:
        "A selection of PVC and aluminium windows, doors and systems.",
      imageAlt: "Glazed aluminium doors made for arched interior openings",
    },
    gallery: {
      title: "Featured projects",
      text: "Explore different types of solution and open each image to see the project in more detail.",
    },
    categories: {
      windows: "Windows",
      doors: "Doors",
      "windows-and-doors": "Windows and doors",
    },
    materials: {
      PVC: "PVC",
      Alumínio: "Aluminium",
      "Alumínio e PVC": "Aluminium and PVC",
    },
    items: {
      "casal-do-paul": {
        title: "Large aluminium glazing",
        description:
          "A large glazed solution designed to create a broad visual connection between the interior and the landscape.",
        alts: ["Large aluminium glazing overlooking the landscape"],
      },
      "almoinhas-velhas": {
        title: "Aluminium and PVC solutions for a contemporary house",
        description:
          "A project with different aluminium and PVC solutions, including panoramic openings, sliding systems and dark-finished frame assemblies.",
        alts: [
          "Contemporary house with dark aluminium windows and doors",
          "Panoramic PVC opening during installation",
          "Aluminium sliding system beside a terrace",
          "Large aluminium glazed opening beside a staircase",
        ],
      },
      "linda-a-velha": {
        title: "Aluminium sliding doors with a sea view",
        description:
          "A large glazed sliding system creating a broad connection between the interior, balcony and seascape.",
        alts: [
          "Aluminium sliding doors opening onto a balcony with a sea view",
        ],
      },
      "bernardim-ribeiro": {
        title: "Made-to-measure arched aluminium doors",
        description:
          "A set of glazed aluminium doors made to measure for the arched openings in the interior.",
        alts: ["Glazed aluminium doors made for arched interior openings"],
      },
      "fernando-ferreira": {
        title: "PVC windows and doors with shutters",
        description:
          "A set of white PVC openings with exterior shutters, integrated into a traditionally styled house.",
        alts: ["House with white PVC windows and doors with exterior shutters"],
      },
      "diogo-velasques": {
        title: "PVC openings with exterior shutters",
        description:
          "A set of PVC windows and glazed doors integrated with exterior shutters and the existing facade.",
        alts: [
          "PVC windows with exterior shutters",
          "PVC glazed door with exterior shutters",
        ],
      },
      alegria: {
        title: "Aluminium entrance door",
        description:
          "A contemporary entrance door with an anthracite finish, vertical handle and glazed side panel.",
        alts: ["Anthracite aluminium entrance door with side glazing"],
      },
      castanheiros: {
        title: "Made-to-measure PVC door and glazing",
        description:
          "A glazed PVC composition with a geometric design and curved details, made to measure for the architecture of the space.",
        alts: ["White PVC door and glazed composition with curved details"],
      },
      misericordia: {
        title: "PVC glazed door with an ogival top",
        description:
          "A made-to-measure solution for a tall opening, combining two glazed leaves with an ogival fanlight.",
        alts: ["Two-leaf PVC glazed door with an ogival fanlight"],
      },
      "santa-rita": {
        title: "Large aluminium glazing",
        description:
          "A large glazed opening that increases natural light and the visual connection with the exterior.",
        alts: ["Large aluminium glazing"],
      },
      "duque-do-cadaval": {
        title: "Aluminium balcony enclosure",
        description:
          "A dark-finished aluminium framing system that creates a protected space while retaining the breadth of the exterior view.",
        alts: [
          "Enclosed balcony with aluminium frames overlooking the landscape",
        ],
      },
      lisboa: {
        title: "PVC window renovation",
        description:
          "A set of white PVC windows integrated into a traditionally styled urban façade.",
        alts: ["Traditional urban façade with multiple white PVC windows"],
      },
      sobreda: {
        title: "PVC window with exterior shutters",
        description:
          "A two-leaf PVC window integrated with exterior adjustable-louvre shutters.",
        alts: ["White PVC window with exterior shutters"],
      },
      "egas-moniz": {
        title: "Set of PVC windows",
        description:
          "A set of large PVC windows designed to increase natural light in the interior.",
        alts: ["Set of white PVC windows in a living room"],
      },
      alcoutins: {
        title: "Glazed aluminium façade",
        description:
          "A continuous set of glazed aluminium openings integrated into a contemporary façade.",
        alts: ["Façade with multiple glazed aluminium openings"],
      },
      "infante-santo": {
        title: "Aluminium sliding system",
        description:
          "A glazed aluminium sliding solution designed to increase natural light and connection with the exterior.",
        alts: ["Glazed aluminium sliding system"],
      },
      "adema-do-meio": {
        title: "Arched aluminium door",
        description:
          "An arched aluminium entrance door with traditional styling and a wood-effect finish.",
        alts: ["Arched aluminium door with a wood-effect finish"],
      },
      faias: {
        title: "Corner glazing solution in PVC",
        description:
          "A composition of large corner-glazed openings designed to increase natural light and the connection to the exterior.",
        alts: ["Corner glazing solution with white PVC frames"],
      },
      barril: {
        title: "Aluminium frames for a contemporary house",
        description:
          "A set of dark-finished aluminium doors and windows integrated into a contemporary house.",
        alts: ["Contemporary house with dark aluminium doors and windows"],
      },
      ulgueir: {
        title: "Aluminium frames for a house",
        description:
          "A set of dark-finished aluminium doors and windows installed in a traditionally styled house.",
        alts: ["House with dark-finished aluminium doors and windows"],
      },
      "pascoal-de-melo": {
        title: "Aluminium and PVC frame assembly",
        description:
          "A made-to-measure composition combining a dark-finished exterior structure with white glazed leaves.",
        alts: ["Dark aluminium structure with white glazed windows"],
      },
      macieiras: {
        title: "Aluminium entrance door with glazed panels",
        description:
          "An aluminium entrance door with a wood-effect finish, glazed side panel and fanlight.",
        alts: ["Aluminium entrance door with side glazing and fanlight"],
      },
      "riba-fria": {
        title: "Panoramic PVC opening",
        description:
          "Installation of a large panoramic opening designed to connect the interior with the surrounding landscape.",
        alts: ["Panoramic PVC opening during installation"],
      },
    },
    productExamples: {
      "unnamed-sliding-door": {
        title: "Large aluminium sliding system",
        alt: "Aluminium sliding door opening onto a terrace",
      },
      "unnamed-arched-door": {
        title: "Made-to-measure PVC glazed door",
        alt: "Two-leaf PVC glazed door with an arched top",
      },
    },
  },
  about: {
    seo: {
      title: "About Sertalp | Experience and In-house Production",
      description:
        "With experience in the sector since February 1978, Sertalp develops made-to-measure PVC and aluminium frame solutions, from technical assessment through manufacture and installation.",
    },
    hero: {
      eyebrow: "About Sertalp",
      title: "Experience, in-house production and tailored solutions",
      description: "Experience in the sector since February 1978",
      imageAlt: "Traditional urban façade with multiple white PVC windows",
    },
    story: {
      title: "An approach built on experience",
      paragraphs: [
        "Sertalp manufactures and installs PVC and aluminium frames for homes, renovation and other projects.",
        "With experience in the sector since February 1978, Sertalp develops made-to-measure PVC and aluminium frame solutions, from technical assessment through manufacture and installation.",
        "Frame components are manufactured in the company's facility according to the dimensions and specifications defined for each project.",
      ],
    },
    capabilities: {
      title: "What guides our work",
      items: [
        {
          title: "In-house production",
          description:
            "We manufacture frame solutions in our own facility according to the approved dimensions and specifications.",
        },
        {
          title: "Tailored solutions",
          description:
            "We assess the space and adapt materials, configurations and finishes to the project.",
        },
        {
          title: "Complete service",
          description:
            "We support the assessment, proposal, manufacture, delivery and installation.",
        },
        {
          title: "Projects and deliveries",
          description:
            "Sertalp carries out work throughout mainland Portugal, from north to south, and also has experience with projects and deliveries to Madeira, the Azores, Spain, Israel and Angola.",
        },
      ],
    },
    markets: {
      eyebrow: "Where we work",
      title: "Projects in Portugal and abroad",
      text: "Sertalp carries out work throughout mainland Portugal, from north to south, and also has experience with projects and deliveries to Madeira, the Azores, Spain, Israel and Angola.",
    },
    certifications: {
      title: "Certifications",
      items: [
        {
          title: "Participating company in the CLASSE+ system",
          body: "Sertalp is a participating company in ADENE's CLASSE+ system, dedicated to product energy labelling and the promotion of energy efficiency.",
        },
        {
          title: "IMPIC certificate",
          body: "Private works contractor certificate no. 136169-PAR, registered on 2 July 2021.",
        },
      ],
    },
    cta: {
      title: "Talk to us about your project",
      text: "We are available to assess the space and prepare a tailored solution.",
      primary: "Contact us",
      secondary: "Chat on WhatsApp",
    },
  },
  contacts: {
    seo: {
      title: "Contacts | Sertalp",
      description:
        "Contact Sertalp to request a quotation for PVC or aluminium windows and doors.",
    },
    hero: {
      eyebrow: "Contacts",
      title: "Talk to us about your project",
      description:
        "Contact us by telephone, WhatsApp or email to arrange an assessment or request information.",
      imageAlt:
        "Enclosed balcony with aluminium frames overlooking the landscape",
    },
    information: {
      title: "Contact information",
      intro: "Choose the most convenient way to contact us.",
      heading: "Contacts",
      mobileLabel: "Mobile and WhatsApp",
      socialTitle: "Social networks",
      facebookAriaLabel: "Sertalp on Facebook",
    },
    map: {
      title: "Location",
      factoryLabel: "Factory",
      iframeTitle: "Location of the Sertalp factory in Terrugem",
      link: "Open in Google Maps",
    },
  },
  privacy: {
    seo: {
      title: "Privacy Policy | Sertalp",
      description:
        "Information about personal-data processing on the Sertalp website.",
    },
    title: "Privacy Policy",
    updated: "Last updated: 18 July 2026",
    intro:
      "This Privacy Policy provides general information about how personal data connected with the use of the Sertalp website is processed.",
    contactLabel: "Privacy contact",
    websiteLabel: "Website",
    sections: [
      {
        kind: "controller",
        title: "1. Data controller",
        paragraphs: ["The controller is:"],
        bullets: [],
        linkLabels: [],
      },
      {
        kind: "data",
        title: "2. Data processed through the website",
        paragraphs: [
          "This website does not provide user accounts, a newsletter, a restricted area, a contact form or an online quotation form.",
          "Sertalp does not directly request personal data through website forms. However, the following processing may occur:",
          "The use of email, WhatsApp, Facebook and Google Maps may also be governed by the privacy policies of the relevant providers.",
        ],
        bullets: [
          "when a user contacts Sertalp by email, telephone or WhatsApp, the information they choose to provide is processed to answer the request, prepare a proposal, arrange a visit or manage the commercial relationship;",
          "the hosting provider and website-security and delivery services may process technical data such as IP address, access date and time, browser type, requested pages and information required to operate and protect the service;",
          "the Contacts page includes an embedded Google Maps map. When this content loads, the browser may connect to Google services and transmit technical data to Google.",
        ],
        linkLabels: [],
      },
      {
        kind: "purposes",
        title: "3. Purposes and legal bases",
        paragraphs: [
          "Data may be processed to:",
          "Depending on the circumstances, processing may be based on pre-contractual steps or performance of a contract, compliance with a legal obligation, or Sertalp's legitimate interest in responding to contacts and protecting its systems.",
        ],
        bullets: [
          "answer information requests and take pre-contractual steps requested by the user;",
          "prepare quotations, arrange assessments and manage commercial communications initiated by the user;",
          "comply with legal and accounting obligations;",
          "ensure operation, security and prevention of abusive use of the website and associated systems.",
        ],
        linkLabels: [],
      },
      {
        kind: "sharing",
        title: "4. Data sharing",
        paragraphs: [
          "Data is not sold.",
          "It may be processed or accessed, where necessary, by providers supporting hosting, security, communications or other technical services. When the embedded map loads, Google processes data under its own policies and terms.",
          "Data may also be disclosed when required by law, a competent authority or the defence of legal rights.",
        ],
        bullets: [],
        linkLabels: [],
      },
      {
        kind: "transfers",
        title: "5. International transfers",
        paragraphs: [
          "Some external providers, including communication services or embedded content, may process data outside the European Economic Area. In those cases, processing is governed by the mechanisms and safeguards adopted by the provider and applicable law.",
          "Review the external service's privacy policy before using it.",
        ],
        bullets: [],
        linkLabels: [],
      },
      {
        kind: "retention",
        title: "6. Retention",
        paragraphs: [
          "Data is retained only for as long as necessary to answer the request, manage the commercial relationship, comply with legal obligations or protect rights.",
          "Specific periods depend on the nature of the communication, whether a proposal or contract exists, and the applicable legal obligations.",
        ],
        bullets: [],
        linkLabels: [],
      },
      {
        kind: "rights",
        title: "7. Data-subject rights",
        paragraphs: [
          "Under applicable law, a person may request, where relevant:",
          "To exercise rights or ask a question, contact",
          "Sertalp may request information needed to verify the requester's identity and protect data from unauthorised access.",
        ],
        bullets: [
          "access to personal data;",
          "correction of inaccurate or incomplete data;",
          "erasure;",
          "restriction of processing;",
          "objection to processing;",
          "portability;",
          "withdrawal of consent where consent is the legal basis used.",
        ],
        linkLabels: [],
      },
      {
        kind: "complaint",
        title: "8. Complaint",
        paragraphs: [
          "A person may submit a complaint to the Portuguese data protection authority:",
        ],
        bullets: [],
        linkLabels: ["CNPD — Comissão Nacional de Proteção de Dados"],
      },
      {
        kind: "security",
        title: "9. Security",
        paragraphs: [
          "Technical and organisational measures appropriate to the type of website and processed data are used. However, no Internet-connected system can guarantee absolute security.",
        ],
        bullets: [],
        linkLabels: [],
      },
      {
        kind: "external",
        title: "10. External links and services",
        paragraphs: [
          "The website may include links to external websites and embedded content, including Google Maps and Facebook. Sertalp does not control the privacy practices of those services.",
        ],
        bullets: [],
        linkLabels: ["Google Privacy Policy", "Google Maps additional terms"],
      },
      {
        kind: "changes",
        title: "11. Changes",
        paragraphs: [
          "This policy may be updated when the website, services used or applicable requirements change. The latest update date is shown at the beginning of the page.",
        ],
        bullets: [],
        linkLabels: [],
      },
    ],
  },
  cookies: {
    seo: {
      title: "Cookies Policy | Sertalp",
      description:
        "Information about cookies and external services used on the Sertalp website.",
    },
    title: "Cookies Policy",
    updated: "Last updated: 18 July 2026",
    sections: [
      {
        kind: "definition",
        title: "1. What cookies are",
        paragraphs: [
          "Cookies are small files or identifiers that may be stored or accessed on a user's device when they visit a website. Similar technologies may be used to provide features, remember preferences, protect services or measure use.",
        ],
        bullets: [],
        linkLabels: [],
      },
      {
        kind: "current",
        title: "2. Current use on this website",
        paragraphs: [
          "In the current version, Sertalp does not intentionally use first-party cookies for advertising, profiling or traffic analytics.",
          "The website does not integrate Google Analytics, Google Tag Manager or an advertising platform.",
          "Technical operations required to deliver, secure and operate the website may occur through the browser, hosting provider or delivery network.",
        ],
        bullets: [],
        linkLabels: [],
      },
      {
        kind: "maps",
        title: "3. Google Maps",
        paragraphs: [
          "The Contacts page displays an embedded Google Maps map.",
          "When the map loads, the browser connects to Google services. Google may process technical data and use cookies or similar technologies under its own policies, settings and terms.",
          "Sertalp does not control cookies or technologies set directly by Google.",
        ],
        bullets: [],
        linkLabels: ["Google Privacy Policy", "Google Maps additional terms"],
      },
      {
        kind: "browser",
        title: "4. Browser management",
        paragraphs: [
          "Users can view, block or delete cookies through their browser settings. Blocking third-party technologies may prevent the embedded map or other external features from displaying correctly.",
        ],
        bullets: [],
        linkLabels: [],
      },
      {
        kind: "future",
        title: "5. Future changes",
        paragraphs: [
          "If the website begins using analytics, advertising or other non-essential technologies, this policy will be updated and the applicable consent mechanism will be implemented before those technologies are enabled.",
        ],
        bullets: [],
        linkLabels: [],
      },
      {
        kind: "contact",
        title: "6. Contact",
        paragraphs: ["For privacy or cookie questions, contact:"],
        bullets: [],
        linkLabels: [],
      },
    ],
  },
} as const satisfies Dictionary;
