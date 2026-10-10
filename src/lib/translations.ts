export const languages = ['en', 'hi'] as const;

export type Language = (typeof languages)[number];

export const languageLabels: Record<Language, string> = {
  en: 'EN',
  hi: 'हिं',
};

export const translations = {
  en: {
    meta: {
      title: 'S6 Infra | Infrastructure & Construction',
      description: 'Enterprise infrastructure and construction solutions',
    },
    nav: [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#services', label: 'Services' },
      { href: '#capabilities', label: 'Capabilities' },
      { href: '#projects', label: 'Projects' },
      { href: '#contact', label: 'Contact Us' },
    ],
    hero: {
      badge: 'Building Infrastructure. Creating Progress.',
      titleLine1: 'We Build',
      titleHighlight: 'What Matters.',
      description:
        'S6 Infra delivers civil construction and infrastructure solutions across roads, bridges, buildings, drainage, irrigation, EPC projects and allied works.',
      primaryCta: 'Explore Our Services →',
      secondaryCta: 'Discuss Your Project',
      stats: [
        { title: 'End-to-End', description: 'Project Execution' },
        { title: 'EPC & Turnkey', description: 'Project Solutions' },
        { title: 'Govt. & Private', description: 'Contracting' },
      ],
    },
    about: {
      label: 'About S6 Infra',
      title: 'Building the foundation for tomorrow.',
      visualTitle: 'Infrastructure With Purpose',
      visualDescription:
        'From groundwork to completion, S6 Infra is focused on dependable execution, quality workmanship and efficient project delivery.',
      paragraphs: [
        'S6 Infra is engaged in civil construction, infrastructure development, building construction, road and highway construction, bridge works, drainage, sewerage, water supply, irrigation, earthwork and related construction activities.',
        'We undertake construction contracts, works contracts, government and private projects, EPC contracts, turnkey projects, supply contracts and subcontract works.',
      ],
      highlights: [
        {
          title: 'Complete Project Execution',
          description:
            'From site development and earthwork to construction, installation and finishing.',
        },
        {
          title: 'Public & Private Sector',
          description:
            'Capability to participate in government, PSU, institutional and private contracts.',
        },
        {
          title: 'Integrated Services',
          description:
            'Civil, mechanical, electrical, plumbing, fabrication, installation and allied works.',
        },
      ],
    },
    services: {
      label: 'What We Do',
      title: 'Our Core Services',
      description:
        'A broad range of construction and infrastructure capabilities designed to support projects from concept through completion.',
      items: [
        {
          icon: '🏗',
          title: 'Civil Construction',
          description:
            'Comprehensive civil and structural construction for residential, commercial, industrial and institutional projects.',
        },
        {
          icon: '🛣',
          title: 'Roads & Highways',
          description:
            'Road construction, highway development, earthwork, site preparation and associated infrastructure works.',
        },
        {
          icon: '🌉',
          title: 'Bridges & Structures',
          description:
            'Construction and allied works for bridges, structural infrastructure and supporting civil works.',
        },
        {
          icon: '💧',
          title: 'Water & Irrigation',
          description:
            'Water supply, irrigation, drainage, sewerage and related infrastructure development.',
        },
        {
          icon: '🏢',
          title: 'Building Construction',
          description:
            'Residential, commercial, industrial, institutional and utility buildings, complexes and structures.',
        },
        {
          icon: '⚙',
          title: 'EPC & Turnkey Projects',
          description:
            'End-to-end execution of EPC, turnkey, works contracts and project-specific subcontracting requirements.',
        },
      ],
    },
    capabilities: {
      label: 'Our Capabilities',
      title: 'Built to execute.',
      description:
        'S6 Infra can support clients through contracting, procurement, material supply and integrated execution.',
      items: [
        {
          number: '01',
          title: 'Contracting',
          description:
            'Government, semi-government, PSU and private construction and works contracts.',
        },
        {
          number: '02',
          title: 'Tenders & Bids',
          description: 'Participation in tenders, e-tenders, bids and procurement processes.',
        },
        {
          number: '03',
          title: 'Material Supply',
          description:
            'Construction materials, steel, cement, aggregates, pipes, hardware and related supplies.',
        },
        {
          number: '04',
          title: 'Equipment & Assets',
          description:
            'Procurement, leasing and deployment of machinery, equipment, vehicles and project assets.',
        },
        {
          number: '05',
          title: 'Subcontracting',
          description:
            'Specialist and allied construction works through direct execution and subcontracting.',
        },
        {
          number: '06',
          title: 'Maintenance',
          description:
            'Repair, renovation, alteration, maintenance and development of existing structures.',
        },
        {
          number: '07',
          title: 'Multi-Discipline Works',
          description:
            'Civil, mechanical, electrical, plumbing, fabrication, installation and finishing works.',
        },
        {
          number: '08',
          title: 'Project Delivery',
          description:
            'Coordinated execution focused on quality, timelines and project requirements.',
        },
      ],
    },
    projects: {
      label: 'Our Work',
      title: 'Project Areas',
      description:
        'Our capabilities cover a wide range of infrastructure and construction project categories.',
      items: [
        { tag: 'Infrastructure', title: 'Road Development', description: 'Roads, highways and associated civil works.' },
        { tag: 'Structures', title: 'Bridge Construction', description: 'Structural and allied infrastructure works.' },
        { tag: 'Buildings', title: 'Commercial & Institutional', description: 'Modern building and structural construction.' },
        { tag: 'Water', title: 'Water & Irrigation', description: 'Water supply, drainage and irrigation infrastructure.' },
        { tag: 'Industrial', title: 'Industrial Construction', description: 'Industrial structures, factories and facilities.' },
        { tag: 'EPC', title: 'Turnkey Projects', description: 'Integrated project execution and delivery.' },
      ],
    },
    cta: {
      title: 'Have an infrastructure project?',
      description:
        'Tell us about your requirement and explore how S6 Infra can support your next project.',
      button: 'Start a Conversation →',
    },
    contact: {
      label: 'Get In Touch',
      title: "Let's build something meaningful.",
      description:
        'For project enquiries, contracts, tenders, material supply or other infrastructure requirements, contact S6 Infra.',
      details: [
        { icon: '☎', title: 'Phone', detail: '+91 8298804849' },
        { icon: '✉', title: 'Email', detail: 'info.s6infra@gmail.com' },
        { icon: '⌖', title: 'Office', detail: 'Dhanbad, JH, India' },
        { icon: '◷', title: 'Business Enquiries', detail: 'Construction • Infrastructure • EPC • Supply' },
      ],
      form: {
        name: 'Your Name',
        phone: 'Phone Number',
        email: 'Email Address',
        service: 'Project Requirement',
        message: 'Message',
        namePlaceholder: 'Enter your name',
        phonePlaceholder: 'Enter phone number',
        emailPlaceholder: 'Enter your email',
        messagePlaceholder: 'Tell us about your project...',
        servicePlaceholder: 'Select a service',
        submit: 'Send Enquiry →',
        whatsapp: 'WhatsApp Enquiry →',
        sending: 'Sending enquiry...',
        success: 'Thank you! Your enquiry has been received.',
        error: 'We could not send your enquiry right now. Please try again or email us directly.',
        tooManyRequests: 'Too many enquiries have been sent from your connection. Please wait a few minutes and try again.',
        spamBlocked: 'Your enquiry was blocked as suspicious. Please review the details and try again.',
        serviceOptions: [
          'Road & Highway Construction',
          'Bridge Construction',
          'Building Construction',
          'Water & Irrigation',
          'EPC / Turnkey Project',
          'Material Supply',
          'Government Contract',
          'Other',
        ],
        validation: {
          nameMin: 'Name must be at least 2 characters',
          nameMax: 'Name must not exceed 100 characters',
          email: 'Please enter a valid email address',
          phoneMin: 'Phone must be at least 10 digits',
          phoneMax: 'Phone must not exceed 20 digits',
          subjectMax: 'Subject must not exceed 200 characters',
          messageMin: 'Message must be at least 10 characters',
          messageMax: 'Message must not exceed 5000 characters',
        },
      },
    },
    footer: {
      about:
        'Civil construction and infrastructure development solutions covering roads, bridges, buildings, water infrastructure, EPC, turnkey projects and allied works.',
      quickLinksTitle: 'Quick Links',
      servicesTitle: 'Services',
      quickLinks: [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About Us' },
        { href: '#services', label: 'Services' },
        { href: '#capabilities', label: 'Capabilities' },
        { href: '#projects', label: 'Projects' },
      ],
      serviceLinks: [
        { href: '#services', label: 'Civil Construction' },
        { href: '#services', label: 'Roads & Highways' },
        { href: '#services', label: 'Bridge Construction' },
        { href: '#services', label: 'EPC & Turnkey' },
        { href: '#services', label: 'Water & Irrigation' },
      ],
      rights: 'All Rights Reserved.',
      tagline: 'Infrastructure • Construction • Development',
    },
    languageSwitcher: {
      label: 'Language',
    },
    ui: {
      openNavigation: 'Open navigation',
      backToTop: 'Back to top',
      dismissNotification: 'Dismiss notification',
    },
  },
  hi: {
    meta: {
      title: 'एस6 इन्फ्रा | इन्फ्रास्ट्रक्चर और कंस्ट्रक्शन',
      description: 'एंटरप्राइज़ इन्फ्रास्ट्रक्चर और निर्माण समाधान',
    },
    nav: [
      { href: '#home', label: 'होम' },
      { href: '#about', label: 'हमारे बारे में' },
      { href: '#services', label: 'सेवाएं' },
      { href: '#capabilities', label: 'क्षमताएं' },
      { href: '#projects', label: 'प्रोजेक्ट्स' },
      { href: '#contact', label: 'संपर्क करें' },
    ],
    hero: {
      badge: 'इन्फ्रास्ट्रक्चर बनाना। प्रगति को आकार देना।',
      titleLine1: 'हम बनाते हैं',
      titleHighlight: 'जो मायने रखता है।',
      description:
        'एस6 इन्फ्रा सड़क, पुल, भवन, ड्रेनेज, सिंचाई, ईपीसी प्रोजेक्ट्स और संबंधित कार्यों में सिविल कंस्ट्रक्शन और इन्फ्रास्ट्रक्चर समाधान प्रदान करता है।',
      primaryCta: 'हमारी सेवाएं देखें →',
      secondaryCta: 'अपने प्रोजेक्ट पर चर्चा करें',
      stats: [
        { title: 'एंड-टू-एंड', description: 'प्रोजेक्ट एक्ज़ीक्यूशन' },
        { title: 'ईपीसी और टर्नकी', description: 'प्रोजेक्ट सॉल्यूशंस' },
        { title: 'सरकारी और निजी', description: 'कॉन्ट्रैक्टिंग' },
      ],
    },
    about: {
      label: 'एस6 इन्फ्रा के बारे में',
      title: 'कल की नींव आज बना रहे हैं।',
      visualTitle: 'उद्देश्यपूर्ण इन्फ्रास्ट्रक्चर',
      visualDescription:
        'ग्राउंडवर्क से लेकर पूर्णता तक, एस6 इन्फ्रा भरोसेमंद निष्पादन, गुणवत्तापूर्ण कार्य और कुशल प्रोजेक्ट डिलीवरी पर केंद्रित है।',
      paragraphs: [
        'एस6 इन्फ्रा सिविल कंस्ट्रक्शन, इन्फ्रास्ट्रक्चर डेवलपमेंट, बिल्डिंग कंस्ट्रक्शन, रोड और हाईवे कंस्ट्रक्शन, ब्रिज वर्क्स, ड्रेनेज, सीवरेज, वाटर सप्लाई, सिंचाई, अर्थवर्क और संबंधित निर्माण गतिविधियों में कार्यरत है।',
        'हम कंस्ट्रक्शन कॉन्ट्रैक्ट्स, वर्क्स कॉन्ट्रैक्ट्स, सरकारी और निजी प्रोजेक्ट्स, ईपीसी कॉन्ट्रैक्ट्स, टर्नकी प्रोजेक्ट्स, सप्लाई कॉन्ट्रैक्ट्स और सबकॉन्ट्रैक्ट वर्क्स लेते हैं।',
      ],
      highlights: [
        {
          title: 'संपूर्ण प्रोजेक्ट निष्पादन',
          description: 'साइट डेवलपमेंट और अर्थवर्क से लेकर निर्माण, इंस्टॉलेशन और फिनिशिंग तक।',
        },
        {
          title: 'पब्लिक और प्राइवेट सेक्टर',
          description: 'सरकारी, पीएसयू, संस्थागत और निजी कॉन्ट्रैक्ट्स में भागीदारी की क्षमता।',
        },
        {
          title: 'इंटीग्रेटेड सर्विसेज',
          description: 'सिविल, मैकेनिकल, इलेक्ट्रिकल, प्लंबिंग, फैब्रिकेशन, इंस्टॉलेशन और संबद्ध कार्य।',
        },
      ],
    },
    services: {
      label: 'हम क्या करते हैं',
      title: 'हमारी प्रमुख सेवाएं',
      description:
        'निर्माण और इन्फ्रास्ट्रक्चर की विस्तृत क्षमताएं, जो कॉन्सेप्ट से लेकर कम्प्लीशन तक प्रोजेक्ट्स का समर्थन करती हैं।',
      items: [
        {
          icon: '🏗',
          title: 'सिविल कंस्ट्रक्शन',
          description:
            'रेजिडेंशियल, कमर्शियल, इंडस्ट्रियल और इंस्टीट्यूशनल प्रोजेक्ट्स के लिए व्यापक सिविल और स्ट्रक्चरल निर्माण।',
        },
        {
          icon: '🛣',
          title: 'रोड्स और हाईवे',
          description:
            'रोड कंस्ट्रक्शन, हाईवे डेवलपमेंट, अर्थवर्क, साइट प्रिपरेशन और संबंधित इन्फ्रास्ट्रक्चर कार्य।',
        },
        {
          icon: '🌉',
          title: 'ब्रिज और स्ट्रक्चर्स',
          description:
            'पुल, संरचनात्मक इन्फ्रास्ट्रक्चर और सहायक सिविल कार्यों के लिए निर्माण और संबद्ध सेवाएं।',
        },
        {
          icon: '💧',
          title: 'वॉटर और इरिगेशन',
          description:
            'वाटर सप्लाई, सिंचाई, ड्रेनेज, सीवरेज और संबंधित इन्फ्रास्ट्रक्चर डेवलपमेंट।',
        },
        {
          icon: '🏢',
          title: 'बिल्डिंग कंस्ट्रक्शन',
          description:
            'रेजिडेंशियल, कमर्शियल, इंडस्ट्रियल, इंस्टीट्यूशनल और यूटिलिटी बिल्डिंग्स, कॉम्प्लेक्स और स्ट्रक्चर्स।',
        },
        {
          icon: '⚙',
          title: 'ईपीसी और टर्नकी प्रोजेक्ट्स',
          description:
            'ईपीसी, टर्नकी, वर्क्स कॉन्ट्रैक्ट्स और प्रोजेक्ट-विशिष्ट सबकॉन्ट्रैक्टिंग आवश्यकताओं का एंड-टू-एंड निष्पादन।',
        },
      ],
    },
    capabilities: {
      label: 'हमारी क्षमताएं',
      title: 'निष्पादन के लिए तैयार।',
      description:
        'एस6 इन्फ्रा क्लाइंट्स को कॉन्ट्रैक्टिंग, प्रोक्योरमेंट, मटेरियल सप्लाई और इंटीग्रेटेड एक्ज़ीक्यूशन के माध्यम से समर्थन दे सकता है।',
      items: [
        {
          number: '01',
          title: 'कॉन्ट्रैक्टिंग',
          description: 'सरकारी, अर्ध-सरकारी, पीएसयू और निजी निर्माण तथा कार्य कॉन्ट्रैक्ट्स।',
        },
        {
          number: '02',
          title: 'टेंडर्स और बिड्स',
          description: 'टेंडर्स, ई-टेंडर्स, बिड्स और प्रोक्योरमेंट प्रक्रियाओं में भागीदारी।',
        },
        {
          number: '03',
          title: 'मटेरियल सप्लाई',
          description: 'कंस्ट्रक्शन मटेरियल, स्टील, सीमेंट, एग्रीगेट्स, पाइप्स, हार्डवेयर और संबंधित सप्लाई।',
        },
        {
          number: '04',
          title: 'इक्विपमेंट और एसेट्स',
          description: 'मशीनरी, उपकरण, वाहन और प्रोजेक्ट एसेट्स की खरीद, लीज़ और तैनाती।',
        },
        {
          number: '05',
          title: 'सबकॉन्ट्रैक्टिंग',
          description: 'प्रत्यक्ष निष्पादन और सबकॉन्ट्रैक्टिंग के माध्यम से विशेषज्ञ और संबद्ध निर्माण कार्य।',
        },
        {
          number: '06',
          title: 'मेंटेनेंस',
          description: 'मौजूदा संरचनाओं की मरम्मत, रेनोवेशन, परिवर्तन, रखरखाव और विकास।',
        },
        {
          number: '07',
          title: 'मल्टी-डिसिप्लिन कार्य',
          description: 'सिविल, मैकेनिकल, इलेक्ट्रिकल, प्लंबिंग, फैब्रिकेशन, इंस्टॉलेशन और फिनिशिंग कार्य।',
        },
        {
          number: '08',
          title: 'प्रोजेक्ट डिलीवरी',
          description: 'गुणवत्ता, समयसीमा और प्रोजेक्ट आवश्यकताओं पर केंद्रित समन्वित निष्पादन।',
        },
      ],
    },
    projects: {
      label: 'हमारा कार्य',
      title: 'प्रोजेक्ट क्षेत्र',
      description: 'हमारी क्षमताएं इन्फ्रास्ट्रक्चर और निर्माण प्रोजेक्ट्स की विस्तृत श्रेणियों को कवर करती हैं।',
      items: [
        { tag: 'इन्फ्रास्ट्रक्चर', title: 'रोड डेवलपमेंट', description: 'सड़कें, हाईवे और संबंधित सिविल कार्य।' },
        { tag: 'स्ट्रक्चर्स', title: 'ब्रिज कंस्ट्रक्शन', description: 'संरचनात्मक और संबद्ध इन्फ्रास्ट्रक्चर कार्य।' },
        { tag: 'बिल्डिंग्स', title: 'कमर्शियल और इंस्टीट्यूशनल', description: 'आधुनिक भवन और संरचनात्मक निर्माण।' },
        { tag: 'वॉटर', title: 'वॉटर और इरिगेशन', description: 'वाटर सप्लाई, ड्रेनेज और सिंचाई इन्फ्रास्ट्रक्चर।' },
        { tag: 'इंडस्ट्रियल', title: 'इंडस्ट्रियल कंस्ट्रक्शन', description: 'इंडस्ट्रियल स्ट्रक्चर्स, फैक्ट्री और सुविधाएं।' },
        { tag: 'ईपीसी', title: 'टर्नकी प्रोजेक्ट्स', description: 'इंटीग्रेटेड प्रोजेक्ट निष्पादन और डिलीवरी।' },
      ],
    },
    cta: {
      title: 'क्या आपके पास कोई इन्फ्रास्ट्रक्चर प्रोजेक्ट है?',
      description: 'अपनी आवश्यकता बताइए और जानिए कि एस6 इन्फ्रा आपके अगले प्रोजेक्ट में कैसे सहयोग कर सकता है।',
      button: 'बातचीत शुरू करें →',
    },
    contact: {
      label: 'संपर्क में रहें',
      title: 'आइए कुछ सार्थक बनाएं।',
      description: 'प्रोजेक्ट पूछताछ, कॉन्ट्रैक्ट्स, टेंडर्स, मटेरियल सप्लाई या अन्य इन्फ्रास्ट्रक्चर आवश्यकताओं के लिए एस6 इन्फ्रा से संपर्क करें।',
      details: [
        { icon: '☎', title: 'फोन', detail: '+91 XXXXX XXXXX' },
        { icon: '✉', title: 'ईमेल', detail: 'info.s6infra@gmail.com' },
        { icon: '⌖', title: 'ऑफिस', detail: 'भारत' },
        { icon: '◷', title: 'बिज़नेस पूछताछ', detail: 'कंस्ट्रक्शन • इन्फ्रास्ट्रक्चर • ईपीसी • सप्लाई' },
      ],
      form: {
        name: 'आपका नाम',
        phone: 'फोन नंबर',
        email: 'ईमेल पता',
        service: 'प्रोजेक्ट आवश्यकता',
        message: 'संदेश',
        namePlaceholder: 'अपना नाम दर्ज करें',
        phonePlaceholder: 'फोन नंबर दर्ज करें',
        emailPlaceholder: 'अपना ईमेल दर्ज करें',
        messagePlaceholder: 'अपने प्रोजेक्ट के बारे में बताएं...',
        servicePlaceholder: 'कोई सेवा चुनें',
        submit: 'पूछताछ भेजें →',
        whatsapp: 'व्हाट्सऐप पर भेजें →',
        sending: 'पूछताछ भेजी जा रही है...',
        success: 'धन्यवाद! आपकी पूछताछ प्राप्त हो गई है।',
        error: 'अभी आपकी पूछताछ भेजी नहीं जा सकी। कृपया थोड़ी देर बाद फिर प्रयास करें या सीधे ईमेल करें।',
        tooManyRequests: 'आपके कनेक्शन से बहुत अधिक पूछताछ भेजी गई हैं। कृपया कुछ मिनट बाद फिर प्रयास करें।',
        spamBlocked: 'आपकी पूछताछ संदिग्ध होने के कारण रोकी गई है। कृपया विवरण जांचकर फिर प्रयास करें।',
        serviceOptions: [
          'रोड और हाईवे कंस्ट्रक्शन',
          'ब्रिज कंस्ट्रक्शन',
          'बिल्डिंग कंस्ट्रक्शन',
          'वॉटर और इरिगेशन',
          'ईपीसी / टर्नकी प्रोजेक्ट',
          'मटेरियल सप्लाई',
          'सरकारी कॉन्ट्रैक्ट',
          'अन्य',
        ],
        validation: {
          nameMin: 'नाम कम से कम 2 अक्षरों का होना चाहिए',
          nameMax: 'नाम 100 अक्षरों से अधिक नहीं होना चाहिए',
          email: 'कृपया एक मान्य ईमेल पता दर्ज करें',
          phoneMin: 'फोन नंबर कम से कम 10 अंकों का होना चाहिए',
          phoneMax: 'फोन नंबर 20 अंकों से अधिक नहीं होना चाहिए',
          subjectMax: 'विषय 200 अक्षरों से अधिक नहीं होना चाहिए',
          messageMin: 'संदेश कम से कम 10 अक्षरों का होना चाहिए',
          messageMax: 'संदेश 5000 अक्षरों से अधिक नहीं होना चाहिए',
        },
      },
    },
    footer: {
      about:
        'सिविल कंस्ट्रक्शन और इन्फ्रास्ट्रक्चर डेवलपमेंट समाधान, जिनमें सड़कें, पुल, भवन, जल इन्फ्रास्ट्रक्चर, ईपीसी, टर्नकी प्रोजेक्ट्स और संबद्ध कार्य शामिल हैं।',
      quickLinksTitle: 'त्वरित लिंक',
      servicesTitle: 'सेवाएं',
      quickLinks: [
        { href: '#home', label: 'होम' },
        { href: '#about', label: 'हमारे बारे में' },
        { href: '#services', label: 'सेवाएं' },
        { href: '#capabilities', label: 'क्षमताएं' },
        { href: '#projects', label: 'प्रोजेक्ट्स' },
      ],
      serviceLinks: [
        { href: '#services', label: 'सिविल कंस्ट्रक्शन' },
        { href: '#services', label: 'रोड्स और हाईवे' },
        { href: '#services', label: 'ब्रिज कंस्ट्रक्शन' },
        { href: '#services', label: 'ईपीसी और टर्नकी' },
        { href: '#services', label: 'वॉटर और इरिगेशन' },
      ],
      rights: 'सर्वाधिकार सुरक्षित।',
      tagline: 'इन्फ्रास्ट्रक्चर • कंस्ट्रक्शन • डेवलपमेंट',
    },
    languageSwitcher: {
      label: 'भाषा',
    },
    ui: {
      openNavigation: 'नेविगेशन खोलें',
      backToTop: 'ऊपर जाएं',
      dismissNotification: 'सूचना बंद करें',
    },
  },
} as const;

export type TranslationDictionary = (typeof translations)[Language];

