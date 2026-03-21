// Smits & Wouters — Translation Dictionary
// Languages: en (default), nl, es, tr

const TRANSLATIONS = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.tagline': 'Vastgoed · Investment · Consultancy',

    // Footer
    'footer.established': 'Established 1989',
    'footer.address': 'Pastoriestraat 1, 6921BV Duiven, The Netherlands',
    'footer.phone': '+31(0)6 50698090',
    'footer.copyright': '© 1989–2026 Smits & Wouters. All rights reserved.',
    'footer.tagline': 'International commercial real estate — discreet, expert, results-driven.',

    // Language labels
    'lang.en': 'EN',
    'lang.nl': 'NL',
    'lang.es': 'ES',
    'lang.tr': 'TR',

    // ── HOME ─────────────────────────────────────────────────────────
    'home.hero.eyebrow': 'International Commercial Real Estate',
    'home.hero.headline': 'Where Capital Meets Opportunity',
    'home.hero.subline': 'Discreet, expert guidance across European markets since 1989.',
    'home.hero.cta.primary': 'View Our Services',
    'home.hero.cta.secondary': 'Contact Us',

    'home.trust.eyebrow': 'Trusted Since 1989',
    'home.trust.headline': '37 Years of Market Expertise',
    'home.trust.body': 'Smits & Wouters has guided investors, developers, and institutions through complex European commercial real estate transactions for over three decades. Our approach is personal, discreet, and results-driven.',
    'home.trust.stat1.number': '37',
    'home.trust.stat1.label': 'Years Active',
    'home.trust.stat2.number': '100%',
    'home.trust.stat2.label': 'Off-Market Focus',
    'home.trust.stat3.number': '4',
    'home.trust.stat3.label': 'Languages Served',

    'home.services.eyebrow': 'What We Do',
    'home.services.headline': 'Full-Spectrum Real Estate Expertise',
    'home.services.s1.title': 'Development',
    'home.services.s1.body': 'Strategic guidance and co-investment in commercial property development across Europe.',
    'home.services.s2.title': 'Land Positions',
    'home.services.s2.body': 'Acquisition and positioning of strategic land for future commercial development.',
    'home.services.s3.title': 'Consultancy',
    'home.services.s3.body': 'Independent advice on market entry, asset valuation, and portfolio strategy.',
    'home.services.s4.title': 'Buying & Selling',
    'home.services.s4.body': 'Discreet representation in off-market acquisitions and disposals across Europe.',
    'home.services.cta': 'See All Services',

    'home.about.eyebrow': 'About the Firm',
    'home.about.headline': 'A Firm Built on Discretion and Trust',
    'home.about.body': 'Founded in 1989 in Duiven, the Netherlands, Smits & Wouters has grown through referral and reputation — never advertising, always delivering. Our network spans Europe and beyond, enabling access to opportunities that never reach the open market.',
    'home.about.cta': 'Learn More',
    'home.about.since': 'Est. 1989 — Duiven, Netherlands',
    'home.about.photoCaption': 'International Commercial Real Estate',

    'home.contact.eyebrow': 'Get In Touch',
    'home.contact.headline': 'Let\'s Discuss Your Opportunity',
    'home.contact.body': 'Whether you are an investor, developer, or institution, we welcome a confidential first conversation.',
    'home.contact.cta': 'Contact Us',

    // ── SERVICES ──────────────────────────────────────────────────────
    'services.hero.eyebrow': 'What We Do',
    'services.hero.headline': 'Our Services',
    'services.hero.subline': 'Comprehensive expertise across the full commercial real estate lifecycle.',

    'services.dev.eyebrow': 'Service 01',
    'services.dev.headline': 'Real Estate Development',
    'services.dev.body': 'We partner with landowners, municipalities, and capital partners to unlock the development potential of commercial properties across Europe. Our experience spans office parks, retail anchors, logistics hubs, and mixed-use schemes. We add value at every phase: from feasibility to planning consent to delivery.',
    'services.dev.p1': 'Feasibility studies and market analysis',
    'services.dev.p2': 'Planning and permitting strategy',
    'services.dev.p3': 'Capital structuring and co-investment',
    'services.dev.p4': 'Project delivery oversight',

    'services.land.eyebrow': 'Service 02',
    'services.land.headline': 'Land Positions',
    'services.land.body': 'Strategic land represents one of Europe\'s most complex and rewarding asset classes. We identify, assess, and secure positions that others miss — primarily through our off-market network. From agricultural re-designation to brownfield conversion, we navigate the full complexity of land acquisition.',
    'services.land.p1': 'Off-market land sourcing across the Netherlands, Belgium, Germany, and Spain',
    'services.land.p2': 'Agricultural, industrial, and mixed-use re-designation advisory',
    'services.land.p3': 'Brownfield and greenfield acquisition',
    'services.land.p4': 'Long-position structuring for development pipelines',

    'services.consult.eyebrow': 'Service 03',
    'services.consult.headline': 'Consultancy',
    'services.consult.body': 'Our consultancy practice provides independent, conflict-free advice to institutional investors, family offices, and corporates navigating the European commercial real estate market. We have no brokerage agenda — our only interest is your outcome.',
    'services.consult.p1': 'Market entry strategy for new geographies',
    'services.consult.p2': 'Independent asset and portfolio valuation',
    'services.consult.p3': 'Due diligence and risk assessment',
    'services.consult.p4': 'Vendor and acquisition-side advisory',

    'services.offmarket.eyebrow': 'Service 04',
    'services.offmarket.headline': 'Off-Market Transactions',
    'services.offmarket.body': 'The most significant commercial real estate deals are never listed. Our network of principals, landowners, and institutions allows us to match buyers and sellers with complete discretion. We handle the full transaction lifecycle from identification through completion.',
    'services.offmarket.p1': 'Exclusive off-market deal sourcing',
    'services.offmarket.p2': 'Confidential buyer and seller representation',
    'services.offmarket.p3': 'Transaction structuring and negotiation',
    'services.offmarket.p4': 'Cross-border due diligence coordination',

    'services.cta.headline': 'Ready to Talk?',
    'services.cta.body': 'We welcome a confidential first conversation.',
    'services.cta.button': 'Contact Us',

    // ── PROJECTS ──────────────────────────────────────────────────────
    'projects.hero.eyebrow': 'Portfolio',
    'projects.hero.headline': 'Selected Projects',
    'projects.hero.subline': 'A curated selection from our 37-year portfolio of European commercial real estate transactions.',
    'projects.filter.all': 'All',
    'projects.filter.development': 'Development',
    'projects.filter.land': 'Land',
    'projects.filter.consultancy': 'Consultancy',
    'projects.filter.offmarket': 'Off-Market',

    // ── ABOUT ─────────────────────────────────────────────────────────
    'about.hero.eyebrow': 'The Firm',
    'about.hero.headline': 'About Smits & Wouters',
    'about.hero.subline': 'Three decades of European commercial real estate expertise.',
    'about.firm.eyebrow': 'About the Firm',
    'about.placeholder.headline': 'Our Story — Coming Soon',
    'about.placeholder.body': 'We are preparing our full story for you. In the meantime, we welcome you to contact us directly to learn more about the firm, our approach, and our history since 1989.',
    'about.contact.cta': 'Get In Touch',

    // ── CONTACT ───────────────────────────────────────────────────────
    'contact.hero.eyebrow': 'Reach Out',
    'contact.hero.headline': 'Contact Us',
    'contact.hero.subline': 'We welcome a confidential first conversation.',
    'contact.info.address.label': 'Address',
    'contact.info.phone.label': 'Phone',
    'contact.info.hours.label': 'Office Hours',
    'contact.info.hours.value': 'Monday – Friday, 9:00 – 17:30',
    'contact.form.name.label': 'Full Name',
    'contact.form.name.placeholder': 'Your full name',
    'contact.form.email.label': 'Email Address',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.phone.label': 'Phone (optional)',
    'contact.form.phone.placeholder': '+31 ...',
    'contact.form.subject.label': 'Subject',
    'contact.form.subject.opt1': 'General Enquiry',
    'contact.form.subject.opt2': 'Real Estate Development',
    'contact.form.subject.opt3': 'Land Positions',
    'contact.form.subject.opt4': 'Consultancy',
    'contact.form.subject.opt5': 'Buying / Selling',
    'contact.form.message.label': 'Message',
    'contact.form.message.placeholder': 'How can we help you?',
    'contact.form.submit': 'Send Message',
    'contact.form.success': 'Thank you — we\'ll be in touch shortly.',
    'contact.form.error': 'Something went wrong. Please try again.',
  },

  // ── DUTCH ──────────────────────────────────────────────────────────
  nl: {
    'nav.home': 'Home',
    'nav.services': 'Diensten',
    'nav.projects': 'Projecten',
    'nav.about': 'Over Ons',
    'nav.contact': 'Contact',
    'nav.tagline': 'Vastgoed · Investment · Consultancy',
    'footer.established': 'Opgericht in 1989',
    'footer.address': 'Pastoriestraat 1, 6921BV Duiven, Nederland',
    'footer.phone': '+31(0)6 50698090',
    'footer.copyright': '© 1989–2026 Smits & Wouters. Alle rechten voorbehouden.',
    'footer.tagline': 'Internationaal commercieel vastgoed — discreet, deskundig, resultaatgericht.',
    'lang.en': 'EN', 'lang.nl': 'NL', 'lang.es': 'ES', 'lang.tr': 'TR',

    'home.hero.eyebrow': 'Internationaal Commercieel Vastgoed',
    'home.hero.headline': 'Waar Kapitaal Kansen Ontmoet',
    'home.hero.subline': 'Discrete, deskundige begeleiding op Europese markten sinds 1989.',
    'home.hero.cta.primary': 'Onze Diensten',
    'home.hero.cta.secondary': 'Neem Contact Op',

    'home.trust.eyebrow': 'Vertrouwd Sinds 1989',
    'home.trust.headline': '37 Jaar Marktexpertise',
    'home.trust.body': 'Smits & Wouters begeleidt investeerders, ontwikkelaars en instellingen al meer dan drie decennia bij complexe Europese vastgoedtransacties. Onze aanpak is persoonlijk, discreet en resultaatgericht.',
    'home.trust.stat1.number': '37',
    'home.trust.stat1.label': 'Jaar Actief',
    'home.trust.stat2.number': '100%',
    'home.trust.stat2.label': 'Off-Market Focus',
    'home.trust.stat3.number': '4',
    'home.trust.stat3.label': 'Talen Bediend',

    'home.services.eyebrow': 'Wat Wij Doen',
    'home.services.headline': 'Volledige Vastgoedexpertise',
    'home.services.s1.title': 'Ontwikkeling',
    'home.services.s1.body': 'Strategische begeleiding en co-investering bij commerciële vastgoedontwikkeling in Europa.',
    'home.services.s2.title': 'Grondposities',
    'home.services.s2.body': 'Verwerving en positionering van strategische grond voor toekomstige commerciële ontwikkeling.',
    'home.services.s3.title': 'Consultancy',
    'home.services.s3.body': 'Onafhankelijk advies over markttoegang, activawaardering en portfoliostrategie.',
    'home.services.s4.title': 'Aan- en Verkoop',
    'home.services.s4.body': 'Discrete vertegenwoordiging bij off-market aankopen en verkopen in Europa.',
    'home.services.cta': 'Alle Diensten',

    'home.about.eyebrow': 'Over Het Kantoor',
    'home.about.headline': 'Een Kantoor Gebouwd op Discretie en Vertrouwen',
    'home.about.body': 'Opgericht in 1989 in Duiven heeft Smits & Wouters zich ontwikkeld via doorverwijzingen en reputatie — nooit adverteren, altijd leveren. Ons netwerk beslaat Europa en daarbuiten, met toegang tot kansen die de open markt nooit bereiken.',
    'home.about.cta': 'Meer Informatie',
    'home.about.since': 'Opgericht 1989 — Duiven, Nederland',
    'home.about.photoCaption': 'Internationaal Commercieel Vastgoed',

    'home.contact.eyebrow': 'Neem Contact Op',
    'home.contact.headline': 'Laten We Uw Kans Bespreken',
    'home.contact.body': 'Of u nu een investeerder, ontwikkelaar of instelling bent, we verwelkomen een vertrouwelijk eerste gesprek.',
    'home.contact.cta': 'Neem Contact Op',

    'services.hero.eyebrow': 'Wat Wij Doen',
    'services.hero.headline': 'Onze Diensten',
    'services.hero.subline': 'Uitgebreide expertise over de volledige levenscyclus van commercieel vastgoed.',
    'services.dev.eyebrow': 'Dienst 01',
    'services.dev.headline': 'Vastgoedontwikkeling',
    'services.dev.body': 'Wij werken samen met grondeigenaren, gemeenten en kapitaalpartners om het ontwikkelingspotentieel van commercieel vastgoed in Europa te ontsluiten. Onze ervaring omvat kantoorparken, retailcentra, logistieke hubs en gemengde projecten.',
    'services.dev.p1': 'Haalbaarheidsstudies en marktanalyse',
    'services.dev.p2': 'Plannings- en vergunningsstrategie',
    'services.dev.p3': 'Kapitaalstructurering en co-investering',
    'services.dev.p4': 'Projectoplevering en toezicht',
    'services.land.eyebrow': 'Dienst 02',
    'services.land.headline': 'Grondposities',
    'services.land.body': 'Strategische grond is een van Europa\'s meest complexe en waardevolle activaklassen. Wij identificeren, beoordelen en verwerven posities die anderen missen — voornamelijk via ons off-market netwerk.',
    'services.land.p1': 'Off-market grondverwerving in Nederland, België, Duitsland en Spanje',
    'services.land.p2': 'Advisering bij agrarische, industriële en gemengde herbestemming',
    'services.land.p3': 'Verwerving van brownfield- en greenfield-locaties',
    'services.land.p4': 'Structurering van langetermijnposities voor ontwikkelingspipelines',
    'services.consult.eyebrow': 'Dienst 03',
    'services.consult.headline': 'Consultancy',
    'services.consult.body': 'Onze consultancypraktijk biedt onafhankelijk, conflictvrij advies aan institutionele investeerders, family offices en bedrijven die de Europese commerciële vastgoedmarkt navigeren.',
    'services.consult.p1': 'Markttoetredingsstrategie voor nieuwe gebieden',
    'services.consult.p2': 'Onafhankelijke activa- en portefeuillewaardering',
    'services.consult.p3': 'Due diligence en risicobeoordeling',
    'services.consult.p4': 'Advisering aan verkoper- en koperszijde',
    'services.offmarket.eyebrow': 'Dienst 04',
    'services.offmarket.headline': 'Off-Market Transacties',
    'services.offmarket.body': 'De meest significante commerciële vastgoeddeals worden nooit aangeboden. Ons netwerk van principalen, grondeigenaren en instellingen stelt ons in staat kopers en verkopers samen te brengen met volledige discretie.',
    'services.offmarket.p1': 'Exclusieve off-market dealverwerving',
    'services.offmarket.p2': 'Vertrouwelijke vertegenwoordiging van kopers en verkopers',
    'services.offmarket.p3': 'Transactiestructurering en onderhandeling',
    'services.offmarket.p4': 'Grensoverschrijdende due diligence-coördinatie',
    'services.cta.headline': 'Klaar om te Spreken?',
    'services.cta.body': 'We verwelkomen een vertrouwelijk eerste gesprek.',
    'services.cta.button': 'Neem Contact Op',

    'projects.hero.eyebrow': 'Portfolio',
    'projects.hero.headline': 'Geselecteerde Projecten',
    'projects.hero.subline': 'Een selectie uit ons 37-jarig portfolio van Europese commerciële vastgoedtransacties.',
    'projects.filter.all': 'Alle',
    'projects.filter.development': 'Ontwikkeling',
    'projects.filter.land': 'Grond',
    'projects.filter.consultancy': 'Consultancy',
    'projects.filter.offmarket': 'Off-Market',

    'about.hero.eyebrow': 'Het Kantoor',
    'about.hero.headline': 'Over Smits & Wouters',
    'about.hero.subline': 'Drie decennia Europese commerciële vastgoedexpertise.',
    'about.firm.eyebrow': 'Over het Kantoor',
    'about.placeholder.headline': 'Ons Verhaal — Binnenkort Beschikbaar',
    'about.placeholder.body': 'Wij bereiden ons volledige verhaal voor. In de tussentijd nodigen wij u uit om direct contact met ons op te nemen om meer te weten te komen over het kantoor, onze aanpak en onze geschiedenis sinds 1989.',
    'about.contact.cta': 'Neem Contact Op',

    'contact.hero.eyebrow': 'Contact',
    'contact.hero.headline': 'Neem Contact Op',
    'contact.hero.subline': 'We verwelkomen een vertrouwelijk eerste gesprek.',
    'contact.info.address.label': 'Adres',
    'contact.info.phone.label': 'Telefoon',
    'contact.info.hours.label': 'Kantooruren',
    'contact.info.hours.value': 'Maandag – Vrijdag, 9:00 – 17:30',
    'contact.form.name.label': 'Volledige Naam',
    'contact.form.name.placeholder': 'Uw volledige naam',
    'contact.form.email.label': 'E-mailadres',
    'contact.form.email.placeholder': 'uw@email.com',
    'contact.form.phone.label': 'Telefoon (optioneel)',
    'contact.form.phone.placeholder': '+31 ...',
    'contact.form.subject.label': 'Onderwerp',
    'contact.form.subject.opt1': 'Algemene Vraag',
    'contact.form.subject.opt2': 'Vastgoedontwikkeling',
    'contact.form.subject.opt3': 'Grondposities',
    'contact.form.subject.opt4': 'Consultancy',
    'contact.form.subject.opt5': 'Aan- en Verkoop',
    'contact.form.message.label': 'Bericht',
    'contact.form.message.placeholder': 'Hoe kunnen wij u helpen?',
    'contact.form.submit': 'Verstuur Bericht',
    'contact.form.success': 'Dank u — we nemen spoedig contact met u op.',
    'contact.form.error': 'Er is iets misgegaan. Probeer het opnieuw.',
  },

  // ── SPANISH ────────────────────────────────────────────────────────
  es: {
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.projects': 'Proyectos',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.tagline': 'Vastgoed · Investment · Consultancy',
    'footer.established': 'Fundada en 1989',
    'footer.address': 'Pastoriestraat 1, 6921BV Duiven, Países Bajos',
    'footer.phone': '+31(0)6 50698090',
    'footer.copyright': '© 1989–2026 Smits & Wouters. Todos los derechos reservados.',
    'footer.tagline': 'Inmobiliaria comercial internacional — discreta, experta, orientada a resultados.',
    'lang.en': 'EN', 'lang.nl': 'NL', 'lang.es': 'ES', 'lang.tr': 'TR',

    'home.hero.eyebrow': 'Inmobiliaria Comercial Internacional',
    'home.hero.headline': 'Donde el Capital Encuentra la Oportunidad',
    'home.hero.subline': 'Asesoramiento experto y discreto en mercados europeos desde 1989.',
    'home.hero.cta.primary': 'Nuestros Servicios',
    'home.hero.cta.secondary': 'Contáctenos',

    'home.trust.eyebrow': 'De Confianza Desde 1989',
    'home.trust.headline': '37 Años de Experiencia en el Mercado',
    'home.trust.body': 'Smits & Wouters ha guiado a inversores, promotores e instituciones en transacciones inmobiliarias comerciales europeas complejas durante más de tres décadas. Nuestro enfoque es personal, discreto y orientado a resultados.',
    'home.trust.stat1.number': '37',
    'home.trust.stat1.label': 'Años Activos',
    'home.trust.stat2.number': '100%',
    'home.trust.stat2.label': 'Enfoque Fuera del Mercado',
    'home.trust.stat3.number': '4',
    'home.trust.stat3.label': 'Idiomas',

    'home.services.eyebrow': 'Lo Que Hacemos',
    'home.services.headline': 'Experiencia Inmobiliaria Integral',
    'home.services.s1.title': 'Desarrollo',
    'home.services.s1.body': 'Orientación estratégica y coinversión en el desarrollo de propiedades comerciales en Europa.',
    'home.services.s2.title': 'Posiciones de Terreno',
    'home.services.s2.body': 'Adquisición y posicionamiento de terrenos estratégicos para el desarrollo comercial futuro.',
    'home.services.s3.title': 'Consultoría',
    'home.services.s3.body': 'Asesoramiento independiente sobre entrada al mercado, valoración de activos y estrategia de cartera.',
    'home.services.s4.title': 'Compra y Venta',
    'home.services.s4.body': 'Representación discreta en adquisiciones y ventas fuera del mercado en Europa.',
    'home.services.cta': 'Ver Todos los Servicios',

    'home.about.eyebrow': 'Sobre la Empresa',
    'home.about.headline': 'Una Empresa Construida Sobre la Discreción y la Confianza',
    'home.about.body': 'Fundada en 1989 en Duiven, Países Bajos, Smits & Wouters ha crecido a través de referencias y reputación — nunca publicitando, siempre entregando. Nuestra red abarca Europa y más allá.',
    'home.about.cta': 'Más Información',
    'home.about.since': 'Est. 1989 — Duiven, Países Bajos',
    'home.about.photoCaption': 'Inmobiliaria Comercial Internacional',

    'home.contact.eyebrow': 'Póngase en Contacto',
    'home.contact.headline': 'Hablemos de Su Oportunidad',
    'home.contact.body': 'Ya sea inversor, promotor o institución, le damos la bienvenida a una primera conversación confidencial.',
    'home.contact.cta': 'Contáctenos',

    'services.hero.eyebrow': 'Lo Que Hacemos',
    'services.hero.headline': 'Nuestros Servicios',
    'services.hero.subline': 'Experiencia integral en todo el ciclo de vida inmobiliario comercial.',
    'services.dev.eyebrow': 'Servicio 01',
    'services.dev.headline': 'Desarrollo Inmobiliario',
    'services.dev.body': 'Nos asociamos con propietarios de terrenos, municipios y socios de capital para desbloquear el potencial de desarrollo de propiedades comerciales en Europa. Nuestra experiencia abarca parques de oficinas, centros comerciales, centros logísticos y proyectos de uso mixto.',
    'services.dev.p1': 'Estudios de viabilidad y análisis de mercado',
    'services.dev.p2': 'Estrategia de planificación y permisos',
    'services.dev.p3': 'Estructuración de capital y coinversión',
    'services.dev.p4': 'Supervisión de entrega del proyecto',
    'services.land.eyebrow': 'Servicio 02',
    'services.land.headline': 'Posiciones de Terreno',
    'services.land.body': 'El terreno estratégico representa una de las clases de activos más complejas y gratificantes de Europa. Identificamos, evaluamos y aseguramos posiciones que otros pasan por alto, principalmente a través de nuestra red fuera del mercado.',
    'services.land.p1': 'Obtención de terrenos fuera del mercado en Países Bajos, Bélgica, Alemania y España',
    'services.land.p2': 'Asesoramiento en reclasificación agrícola, industrial y de uso mixto',
    'services.land.p3': 'Adquisición de suelos industriales y terrenos nuevos',
    'services.land.p4': 'Estructuración de posiciones a largo plazo para pipelines de desarrollo',
    'services.consult.eyebrow': 'Servicio 03',
    'services.consult.headline': 'Consultoría',
    'services.consult.body': 'Nuestra práctica de consultoría proporciona asesoramiento independiente y libre de conflictos a inversores institucionales, family offices y corporaciones que navegan por el mercado inmobiliario comercial europeo.',
    'services.consult.p1': 'Estrategia de entrada al mercado en nuevas geografías',
    'services.consult.p2': 'Valoración independiente de activos y carteras',
    'services.consult.p3': 'Due diligence y evaluación de riesgos',
    'services.consult.p4': 'Asesoramiento al vendedor y al comprador',
    'services.offmarket.eyebrow': 'Servicio 04',
    'services.offmarket.headline': 'Transacciones Fuera del Mercado',
    'services.offmarket.body': 'Los acuerdos de bienes raíces comerciales más significativos nunca se publican. Nuestra red de propietarios, terratenientes e instituciones nos permite unir compradores y vendedores con total discreción.',
    'services.offmarket.p1': 'Obtención exclusiva de operaciones fuera del mercado',
    'services.offmarket.p2': 'Representación confidencial de compradores y vendedores',
    'services.offmarket.p3': 'Estructuración y negociación de transacciones',
    'services.offmarket.p4': 'Coordinación de due diligence transfronterizo',
    'services.cta.headline': '¿Listo para Hablar?',
    'services.cta.body': 'Le damos la bienvenida a una primera conversación confidencial.',
    'services.cta.button': 'Contáctenos',

    'projects.hero.eyebrow': 'Portfolio',
    'projects.hero.headline': 'Proyectos Seleccionados',
    'projects.hero.subline': 'Una selección de nuestro portfolio de 37 años en transacciones inmobiliarias comerciales europeas.',
    'projects.filter.all': 'Todos',
    'projects.filter.development': 'Desarrollo',
    'projects.filter.land': 'Terreno',
    'projects.filter.consultancy': 'Consultoría',
    'projects.filter.offmarket': 'Fuera del Mercado',

    'about.hero.eyebrow': 'La Empresa',
    'about.hero.headline': 'Sobre Smits & Wouters',
    'about.hero.subline': 'Tres décadas de experiencia en inmobiliaria comercial europea.',
    'about.firm.eyebrow': 'Sobre la Empresa',
    'about.placeholder.headline': 'Nuestra Historia — Próximamente',
    'about.placeholder.body': 'Estamos preparando nuestra historia completa para usted. Mientras tanto, le invitamos a contactarnos directamente para conocer más sobre la empresa, nuestro enfoque e historia desde 1989.',
    'about.contact.cta': 'Póngase en Contacto',

    'contact.hero.eyebrow': 'Contacto',
    'contact.hero.headline': 'Contáctenos',
    'contact.hero.subline': 'Le damos la bienvenida a una primera conversación confidencial.',
    'contact.info.address.label': 'Dirección',
    'contact.info.phone.label': 'Teléfono',
    'contact.info.hours.label': 'Horario de Oficina',
    'contact.info.hours.value': 'Lunes – Viernes, 9:00 – 17:30',
    'contact.form.name.label': 'Nombre Completo',
    'contact.form.name.placeholder': 'Su nombre completo',
    'contact.form.email.label': 'Correo Electrónico',
    'contact.form.email.placeholder': 'su@correo.com',
    'contact.form.phone.label': 'Teléfono (opcional)',
    'contact.form.phone.placeholder': '+31 ...',
    'contact.form.subject.label': 'Asunto',
    'contact.form.subject.opt1': 'Consulta General',
    'contact.form.subject.opt2': 'Desarrollo Inmobiliario',
    'contact.form.subject.opt3': 'Posiciones de Terreno',
    'contact.form.subject.opt4': 'Consultoría',
    'contact.form.subject.opt5': 'Compra / Venta',
    'contact.form.message.label': 'Mensaje',
    'contact.form.message.placeholder': '¿Cómo podemos ayudarle?',
    'contact.form.submit': 'Enviar Mensaje',
    'contact.form.success': 'Gracias — nos pondremos en contacto en breve.',
    'contact.form.error': 'Algo salió mal. Por favor, inténtelo de nuevo.',
  },

  // ── TURKISH ────────────────────────────────────────────────────────
  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.services': 'Hizmetler',
    'nav.projects': 'Projeler',
    'nav.about': 'Hakkımızda',
    'nav.contact': 'İletişim',
    'nav.tagline': 'Vastgoed · Investment · Consultancy',
    'footer.established': '1989\'dan Beri',
    'footer.address': 'Pastoriestraat 1, 6921BV Duiven, Hollanda',
    'footer.phone': '+31(0)6 50698090',
    'footer.copyright': '© 1989–2026 Smits & Wouters. Tüm hakları saklıdır.',
    'footer.tagline': 'Uluslararası ticari gayrimenkul — gizli, uzman, sonuç odaklı.',
    'lang.en': 'EN', 'lang.nl': 'NL', 'lang.es': 'ES', 'lang.tr': 'TR',

    'home.hero.eyebrow': 'Uluslararası Ticari Gayrimenkul',
    'home.hero.headline': 'Sermayenin Fırsatla Buluştuğu Yer',
    'home.hero.subline': '1989\'dan bu yana Avrupa pazarlarında uzman ve gizli rehberlik.',
    'home.hero.cta.primary': 'Hizmetlerimiz',
    'home.hero.cta.secondary': 'Bize Ulaşın',

    'home.trust.eyebrow': '1989\'dan Beri Güvenilir',
    'home.trust.headline': '37 Yıllık Piyasa Uzmanlığı',
    'home.trust.body': 'Smits & Wouters, üç onı aşkın süredir yatırımcıları, geliştiricileri ve kurumları karmaşık Avrupa ticari gayrimenkul işlemlerinde yönlendirmektedir. Yaklaşımımız kişisel, gizli ve sonuç odaklıdır.',
    'home.trust.stat1.number': '37',
    'home.trust.stat1.label': 'Yıl Aktif',
    'home.trust.stat2.number': '100%',
    'home.trust.stat2.label': 'Piyasa Dışı Odak',
    'home.trust.stat3.number': '4',
    'home.trust.stat3.label': 'Dil',

    'home.services.eyebrow': 'Ne Yapıyoruz',
    'home.services.headline': 'Tam Kapsamlı Gayrimenkul Uzmanlığı',
    'home.services.s1.title': 'Geliştirme',
    'home.services.s1.body': 'Avrupa genelinde ticari mülk geliştirmede stratejik rehberlik ve ortak yatırım.',
    'home.services.s2.title': 'Arazi Pozisyonları',
    'home.services.s2.body': 'Gelecekteki ticari gelişim için stratejik arazi edinimi ve konumlandırma.',
    'home.services.s3.title': 'Danışmanlık',
    'home.services.s3.body': 'Pazar girişi, varlık değerlemesi ve portföy stratejisi konularında bağımsız danışmanlık.',
    'home.services.s4.title': 'Alım ve Satım',
    'home.services.s4.body': 'Avrupa genelinde piyasa dışı edinimler ve elden çıkarmalarda gizli temsil.',
    'home.services.cta': 'Tüm Hizmetler',

    'home.about.eyebrow': 'Firma Hakkında',
    'home.about.headline': 'Takdir ve Güven Üzerine Kurulu Bir Firma',
    'home.about.body': '1989\'da Hollanda\'nın Duiven şehrinde kurulan Smits & Wouters, referans ve itibar yoluyla büyümüştür — hiç reklam vermeden, her zaman teslim ederek. Ağımız Avrupa ve ötesine uzanmaktadır.',
    'home.about.cta': 'Daha Fazla Bilgi',
    'home.about.since': 'Est. 1989 — Duiven, Hollanda',
    'home.about.photoCaption': 'Uluslararası Ticari Gayrimenkul',

    'home.contact.eyebrow': 'İletişime Geçin',
    'home.contact.headline': 'Fırsatınızı Konuşalım',
    'home.contact.body': 'İster yatırımcı, ister geliştirici, ister kurum olun, gizli bir ilk görüşmeye hoş geldiniz.',
    'home.contact.cta': 'Bize Ulaşın',

    'services.hero.eyebrow': 'Ne Yapıyoruz',
    'services.hero.headline': 'Hizmetlerimiz',
    'services.hero.subline': 'Ticari gayrimenkul yaşam döngüsünün tamamında kapsamlı uzmanlık.',
    'services.dev.eyebrow': 'Hizmet 01',
    'services.dev.headline': 'Gayrimenkul Geliştirme',
    'services.dev.body': 'Avrupa genelinde ticari mülklerin gelişim potansiyelini açığa çıkarmak için arazi sahipleri, belediyeler ve sermaye ortaklarıyla iş birliği yapıyoruz. Deneyimimiz ofis parkları, perakende merkezleri, lojistik merkezler ve karma kullanımlı projeleri kapsamaktadır.',
    'services.dev.p1': 'Fizibilite çalışmaları ve pazar analizi',
    'services.dev.p2': 'Planlama ve izin stratejisi',
    'services.dev.p3': 'Sermaye yapılandırma ve ortak yatırım',
    'services.dev.p4': 'Proje teslim gözetimi',
    'services.land.eyebrow': 'Hizmet 02',
    'services.land.headline': 'Arazi Pozisyonları',
    'services.land.body': 'Stratejik arazi, Avrupa\'nın en karmaşık ve ödüllendirici varlık sınıflarından birini temsil etmektedir. Diğerlerinin gözden kaçırdığı pozisyonları, ağırlıklı olarak piyasa dışı ağımız aracılığıyla tespit edip güvence altına alıyoruz.',
    'services.land.p1': 'Hollanda, Belçika, Almanya ve İspanya\'da piyasa dışı arazi temini',
    'services.land.p2': 'Tarımsal, endüstriyel ve karma kullanım yeniden tahsis danışmanlığı',
    'services.land.p3': 'Brownfield ve greenfield arazi edinimi',
    'services.land.p4': 'Geliştirme boru hatları için uzun pozisyon yapılandırma',
    'services.consult.eyebrow': 'Hizmet 03',
    'services.consult.headline': 'Danışmanlık',
    'services.consult.body': 'Danışmanlık pratiğimiz, Avrupa ticari gayrimenkul piyasasında ilerleyen kurumsal yatırımcılara, aile ofislerine ve şirketlere bağımsız, çıkar çatışmasız tavsiye sağlamaktadır.',
    'services.consult.p1': 'Yeni coğrafyalar için pazar giriş stratejisi',
    'services.consult.p2': 'Bağımsız varlık ve portföy değerlemesi',
    'services.consult.p3': 'Durum tespiti ve risk değerlendirmesi',
    'services.consult.p4': 'Satıcı ve alıcı tarafı danışmanlığı',
    'services.offmarket.eyebrow': 'Hizmet 04',
    'services.offmarket.headline': 'Piyasa Dışı İşlemler',
    'services.offmarket.body': 'En önemli ticari gayrimenkul anlaşmaları hiçbir zaman listelenmez. Anapara sahipleri, arazi sahipleri ve kurumlardan oluşan ağımız, alıcılar ve satıcıları tam bir gizlilikle eşleştirmemizi sağlar.',
    'services.offmarket.p1': 'Özel piyasa dışı işlem temini',
    'services.offmarket.p2': 'Gizli alıcı ve satıcı temsili',
    'services.offmarket.p3': 'İşlem yapılandırma ve müzakere',
    'services.offmarket.p4': 'Sınır ötesi durum tespiti koordinasyonu',
    'services.cta.headline': 'Görüşmeye Hazır mısınız?',
    'services.cta.body': 'Gizli bir ilk görüşmeye hoş geldiniz.',
    'services.cta.button': 'Bize Ulaşın',

    'projects.hero.eyebrow': 'Portföy',
    'projects.hero.headline': 'Seçilmiş Projeler',
    'projects.hero.subline': '37 yıllık Avrupa ticari gayrimenkul işlemleri portföyümüzden seçilmiş bir derleme.',
    'projects.filter.all': 'Tümü',
    'projects.filter.development': 'Geliştirme',
    'projects.filter.land': 'Arazi',
    'projects.filter.consultancy': 'Danışmanlık',
    'projects.filter.offmarket': 'Piyasa Dışı',

    'about.hero.eyebrow': 'Firma',
    'about.hero.headline': 'Smits & Wouters Hakkında',
    'about.hero.subline': 'Üç on yıllık Avrupa ticari gayrimenkul uzmanlığı.',
    'about.firm.eyebrow': 'Firma Hakkında',
    'about.placeholder.headline': 'Hikayemiz — Yakında',
    'about.placeholder.body': 'Sizin için tam hikayemizi hazırlıyoruz. Bu arada, firma, yaklaşımımız ve 1989\'dan bu yana tarihimiz hakkında daha fazla bilgi edinmek için doğrudan bizimle iletişime geçmenizi davet ediyoruz.',
    'about.contact.cta': 'İletişime Geçin',

    'contact.hero.eyebrow': 'İletişim',
    'contact.hero.headline': 'Bize Ulaşın',
    'contact.hero.subline': 'Gizli bir ilk görüşmeye hoş geldiniz.',
    'contact.info.address.label': 'Adres',
    'contact.info.phone.label': 'Telefon',
    'contact.info.hours.label': 'Çalışma Saatleri',
    'contact.info.hours.value': 'Pazartesi – Cuma, 9:00 – 17:30',
    'contact.form.name.label': 'Ad Soyad',
    'contact.form.name.placeholder': 'Adınız ve soyadınız',
    'contact.form.email.label': 'E-posta Adresi',
    'contact.form.email.placeholder': 'siz@email.com',
    'contact.form.phone.label': 'Telefon (isteğe bağlı)',
    'contact.form.phone.placeholder': '+31 ...',
    'contact.form.subject.label': 'Konu',
    'contact.form.subject.opt1': 'Genel Soru',
    'contact.form.subject.opt2': 'Gayrimenkul Geliştirme',
    'contact.form.subject.opt3': 'Arazi Pozisyonları',
    'contact.form.subject.opt4': 'Danışmanlık',
    'contact.form.subject.opt5': 'Alım / Satım',
    'contact.form.message.label': 'Mesaj',
    'contact.form.message.placeholder': 'Size nasıl yardımcı olabiliriz?',
    'contact.form.submit': 'Mesaj Gönder',
    'contact.form.success': 'Teşekkürler — kısa süre içinde sizinle iletişime geçeceğiz.',
    'contact.form.error': 'Bir şeyler ters gitti. Lütfen tekrar deneyin.',
  },
};

// ── i18n API ──────────────────────────────────────────────────────────

function getLang() {
  const stored = localStorage.getItem('sw_lang');
  if (stored && TRANSLATIONS[stored]) return stored;
  const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return TRANSLATIONS[browser] ? browser : 'en';
}

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  localStorage.setItem('sw_lang', lang);
  applyTranslations(lang);
  // Update language button active states
  document.querySelectorAll('[data-lang]').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('sw-lang-active', isActive);
  });
}

function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  // Placeholder text
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });
  // Aria labels
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
  });
  // Select options
  document.querySelectorAll('[data-i18n-opt]').forEach(el => {
    const key = el.dataset.i18nOpt;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  // Update html lang attribute
  document.documentElement.lang = lang;
}

// ── Auto-init on DOMContentLoaded ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const lang = getLang();
  applyTranslations(lang);
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.classList.toggle('sw-lang-active', btn.dataset.lang === lang);
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
});
