
document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  

  if (loader) {
    requestAnimationFrame(() => {
      loader.style.opacity = '0';
      loader.style.pointerEvents = 'none';

const languageSwitcher = document.getElementById('languageSwitcher');
const languageDropdown = document.getElementById('languageDropdown');
const currentLang = document.getElementById('currentLang');

languageSwitcher.addEventListener('click', () => {
  languageDropdown.classList.toggle('hidden');
});


document.addEventListener('click', (e) => {
  if (!languageSwitcher.contains(e.target)) {
    languageDropdown.classList.add('hidden');
  }
});


document.querySelectorAll('.language-option').forEach(button => {
  button.addEventListener('click', () => {
    const lang = button.getAttribute('data-lang');
    switchLanguage(lang);
    languageDropdown.classList.add('hidden');
  });
});


function switchLanguage(lang) {

  document.querySelectorAll('[data-lang]').forEach(element => {
    const key = element.getAttribute('data-lang');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  

  currentLang.textContent = lang.toUpperCase();

  localStorage.setItem('selectedLang', lang);

  document.querySelectorAll('.language-option').forEach(button => {
    const buttonLang = button.getAttribute('data-lang');
    button.classList.remove('hidden');
    if (buttonLang === lang) {
      button.classList.add('hidden');
    }
  });
}
      
      setTimeout(() => {
        if (loader.parentNode) {
          loader.remove();
        }
      }, 500);
    });
  }


  requestAnimationFrame(() => {

    const hero = document.querySelector('.hero-blur');
    if (hero) {
      window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const blur = Math.min(scrollTop / 10, 20);
        hero.style.backdropFilter = `blur(${blur}px)`;
        hero.style.backgroundColor = `rgba(10, 10, 10, ${Math.min(scrollTop / 300, 0.8)})`;
      });
    }


    const header = document.querySelector('header');
    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          header.style.backdropFilter = 'blur(10px)';
          header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        } else {
          header.style.backdropFilter = 'blur(0px)';
          header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        }
      });
    }


    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-transition').forEach(el => {
      observer.observe(el);
    });

  
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeMenu');
    
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden';
      });
    }
    
    if (closeBtn && mobileMenu) {
      closeBtn.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
        document.body.style.overflow = 'auto';
      });
    }

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});


    document.addEventListener('click', (e) => {
      if (mobileMenu && !mobileMenu.classList.contains('translate-x-full') && 
          !mobileMenu.contains(e.target) && 
          !menuBtn.contains(e.target)) {
        mobileMenu.classList.add('translate-x-full');
        document.body.style.overflow = 'auto';
      }
    });
  });

const translations = {
  en: {
   
    'header.mens': "Men's Fashion",
    'header.collections': "Collections",
    'header.shop': "Shop",
    'header.about': "About",
    
  
    'hero.title': "Timeless Elegance",
    'hero.subtitle': "Discover our avant-garde Summer Collection",
    'hero.button': "Explore Now",
    
   
    'mens.title': "Men's Fashion",
    'mens.subtitle': "Elevate your style with our curated selection of premium menswear...",
    'mens.button': "Shop Now",
    
    
    'collections.title': "Featured Collections",
    'collections.season': "New Season",
    'collections.trending': "Trending",
    'collections.classic': "Classic",
    'collections.premium': "Premium",
    'collections.everyday': "Everyday",
    'collections.formal': "Formal",
    
  
    'newsletter.title': "Stay Updated",
    'newsletter.subtitle': "Subscribe for exclusive offers and fashion updates.",
    'newsletter.button': "Subscribe",
 
    'footer.about': "Where timeless style meets modern sophistication",
    'footer.privacy': "Privacy Policy",
    'footer.terms': "Terms of Service",
    'footer.return': "Return Policy",
    
  "quicklinks": "Quick Links",
  "contact": "Contact",
  "footer.return": "Return Policy",
  "footer.terms": "Terms of Service",
  "footer.privacy": "Privacy Policy",
  "footer.about": "Where timeless style meets modern elegance",
  "flwus": "Follow Us",
  "spring22": "Spring 2022",
  "summer": "Summer Essentials",
  "autumn": "Autumn Trends",
  "winter": "Winter Luxury",
  "casual": "Casual Chic",
  "evening": "Evening Wear",
  "elegance.fashion": "Elegant Fashion",
"copy": "© 2022 Hxnzqq. All rights reserved."

  },
  
  cs: {
    'header.mens': "Mužská móda",
    'header.collections': "Kolekce",
    'header.shop': "Obchod",
    'header.about': "O nás",
    
    'hero.title': "Věčná elegance",
    'hero.subtitle': "Rozjeďte léto s naší originální letní kolekcí",
    'hero.button': "Prozkoumat",
    
    'mens.title': "Mužská móda",
    'mens.subtitle': "Dopřejte si dokonalost – naše kolekce luxusních oděvů pro muže spojuje kvalitu, styl a osobitost.",
    'mens.button': "Objednat nyní",
    
    'collections.title': "Vybrané kolekce",
    'collections.season': "Nová sezóna",
    'collections.trending': "Trendy",
    'collections.classic': "Klasické",
    'collections.premium': "Premiové",
    'collections.everyday': "Každodenní",
    'collections.formal': "Formální",
    
    'newsletter.title': "Zůstaňte v obraze",
    'newsletter.subtitle': "Přihlaste se k odběru newsletteru pro exkluzivní nabídky a módní novinky.",
    'newsletter.button': "Přihlásit se",

    'quicklinks': "Rychlé linky",
    'contact': "Kontakt",
    'footer.return': "Pravidla pro vracení zboží",
    'footer.terms': "Podmínky poskytování služeb",
    'footer.privacy': "Zásady ochrany osobních údajů",
    'footer.about': "Kde nadčasový styl potkává moderní eleganci",
    'flwus': "Sledujte nás",
    'spring22': "Jaro 2022",
    'summer': " Letní kousky",
    'autumn': "Podzimní trendy",
    'winter': "Zimní luxus",
    'casual': "Ležérní šik",
    'evening': "Večerní móda",
     "elegance.fashion": "Elegantní móda",
     "copy": "© 2022 Hxnzqq. Všechna práva vyhrazena."

  },
  
  fr: {
    'header.mens': "Mode masculine",
    'header.collections': "Collections",
    'header.shop': "Boutique",
    'header.about': "À propos",
    
    'hero.title': "Élégance intemporelle",
    'hero.subtitle': "Découvrez notre collection estivale unique",
    'hero.button': "Découvrir",
    
    'mens.title': "Mode masculine",
    'mens.subtitle': "Élevez votre style avec notre sélection de vêtements masculins de luxe...",
    'mens.button': "Acheter maintenant",
    
    'collections.title': "Collections phares",
    'collections.season': "Nouvelle saison",
    'collections.trending': "Tendance",
    'collections.classic': "Classique",
    'collections.premium': "Premium",
    'collections.everyday': "Quotidien",
    'collections.formal': "Formel",
    
    'newsletter.title': "Restez informé",
    'newsletter.subtitle': "Abonnez-vous à notre newsletter pour des offres exclusives et des nouveautés mode.",
    'newsletter.button': "S'abonner",

      "quicklinks": "Liens rapides",
  "contact": "Contact",
  "footer.return": "Politique de retour",
  "footer.terms": "Conditions d'utilisation",
  "footer.privacy": "Politique de confidentialité",
  "footer.about": "Là où le style intemporel rencontre l'élégance moderne",
  "flwus": "Suivez-nous",
  "spring22": "Printemps 2022",
    "summer": "Essentiels d'été",
    "autumn": "Tendances d'automne",
    "winter": "Luxe hivernal",
    "casual": "Chic décontracté",
    "evening": "Tenue de soirée",
     "elegance.fashion": "Mode élégante",
      "copy": "© 2022 Hxnzqq. Tous droits réservés."
  },
  
  de: {
    'header.mens': "Herrenmode",
    'header.collections': "Kollektionen",
    'header.shop': "Shop",
    'header.about': "Über uns",
    
    'hero.title': "Zeitlose Eleganz",
    'hero.subtitle': "Entdecken Sie unsere exklusive Sommerkollektion",
    'hero.button': "Erkunden",
    
    'mens.title': "Herrenmode",
    'mens.subtitle': "Steigern Sie Ihren Stil mit unserer ausgewählten Kollektion hochwertiger Herrenbekleidung...",
    'mens.button': "Jetzt kaufen",
    
    'collections.title': "Ausgewählte Kollektionen",
    'collections.season': "Neue Saison",
    'collections.trending': "Im Trend",
    'collections.classic': "Klassisch",
    'collections.premium': "Premium",
    'collections.everyday': "Alltag",
    'collections.formal': "Formell",
    
    'newsletter.title': "Bleiben Sie auf dem Laufenden",
    'newsletter.subtitle': "Abonnieren Sie unseren Newsletter für exklusive Angebote und Modenachrichten.",
    'newsletter.button': "Abonnieren",

    "quicklinks": "Schnellzugriffe",
  "contact": "Kontakt",
  "footer.return": "Rückgabebedingungen",
  "footer.terms": "Nutzungsbedingungen",
  "footer.privacy": "Datenschutzerklärung",
  "footer.about": "Wo zeitloser Stil auf moderne Eleganz trifft",
  "flwus": "Folgen Sie uns",
   "spring22": "Frühling 2022",
    "summer": "Sommer-Essentials",
    "autumn": "Herbsttrends",
    "winter": "Winterluxus",
    "casual": "Lässiger Chic",
    "evening": "Abendmode",
       "elegance.fashion": "Elegante Mode",
        "copy": "© 2022 Hxnzqq. Alle Rechte vorbehalten."
  },
  
  hu: {
    'header.mens': "Férfimód",
    'header.collections': "Kollekciók",
    'header.shop': "Bolt",
    'header.about': "Rólunk",
    
    'hero.title': "Időtlen elegancia",
    'hero.subtitle': "Fedezze fel exkluzív nyári kollekciónkat",
    'hero.button': "Fedezd fel",
    
    'mens.title': "Férfimód",
    'mens.subtitle': "Emelje stílusát kiemelt férfiruházati választékunkkal...",
    'mens.button': "Vásárlás",
    
    'collections.title': "Kiemelt kollekciók",
    'collections.season': "Új szezon",
    'collections.trending': "Trendek",
    'collections.classic': "Klasszikus",
    'collections.premium': "Premium",
    'collections.everyday': "Mindenapi",
    'collections.formal': "Formális",
    
    'newsletter.title': "Maradjon naprakész",
    'newsletter.subtitle': "Iratkozzon fel hírlevelünkre exkluzív ajánlatokért és divatfrissítésekért.",
    'newsletter.button': "Feliratkozás",

      "quicklinks": "Gyorshivatkozások",
  "contact": "Kapcsolat",
  "footer.return": "Visszatérési szabályzat",
  "footer.terms": "Szolgáltatási feltételek",
  "footer.privacy": "Adatvédelmi irányelvek",
  "footer.about": "Ahol az időtlen stílus találkozik a modern eleganciával",
  "flwus": "Kövess minket",
  "spring22": "Tavasz 2022",
    "summer": "Nyári alapdarabok",
    "autumn": "Őszi trendek",
    "winter": "Téli luxus",
    "casual": "Laza elegancia",
    "evening": "Esti viselet",
        "elegance.fashion": "Elegáns divat",
        "copy": "© 2022 Hxnzqq. Minden jog fenntartva."
  },
 es: {
    "header.mens": "Moda masculina",
    "header.collections": "Colecciones",
    "header.shop": "Tienda",
    "header.about": "Sobre nosotros",

    "hero.title": "Elegancia eterna",
    "hero.subtitle": "Empieza el verano con nuestra original colección de verano",
    "hero.button": "Explorar",

    "mens.title": "Moda masculina",
    "mens.subtitle": "Permítete la perfección: nuestra colección de ropa de lujo para hombres combina calidad, estilo y personalidad.",
    "mens.button": "Ordenar ahora",

    "collections.title": "Colecciones seleccionadas",
    "collections.season": "Nueva temporada",
    "collections.trending": "Tendencias",
    "collections.classic": "Clásicas",
    "collections.premium": "Premium",
    "collections.everyday": "Diarias",
    "collections.formal": "Formales",

    "newsletter.title": "Mantente informado",
    "newsletter.subtitle": "Suscríbete a nuestro boletín para ofertas exclusivas y novedades de moda.",
    "newsletter.button": "Suscribirse",

    "quicklinks": "Enlaces rápidos",
    "contact": "Contacto",
    "footer.return": "Política de devoluciones",
    "footer.terms": "Términos de servicio",
    "footer.privacy": "Política de privacidad",
    "footer.about": "Donde el estilo atemporal se encuentra con la elegancia moderna",
    "flwus": "Síguenos",
     "spring22": "Primavera 2022",
    "summer": "Esenciales de verano",
    "autumn": "Tendencias de otoño",
    "winter": "Lujo invernal",
    "casual": "Chic casual",
    "evening": "Ropa de noche",
      "elegance.fashion": "Moda elegante",
      "copy": "© 2022 Hxnzqq. Todos los derechos reservados."
  },
it: {
    "header.mens": "Moda uomo",
  "header.collections": "Collezioni",
  "header.shop": "Negozio",
  "header.about": "Chi siamo",

  "hero.title": "Eleganza eterna",
  "hero.subtitle": "Dai il via all'estate con la nostra originale collezione estiva",
  "hero.button": "Esplora",

  "mens.title": "Moda uomo",
  "mens.subtitle": "Concediti la perfezione: la nostra collezione di abbigliamento di lusso per uomo unisce qualità, stile e personalità.",
  "mens.button": "Ordina ora",

  "collections.title": "Collezioni selezionate",
  "collections.season": "Nuova stagione",
  "collections.trending": "Tendenze",
  "collections.classic": "Classici",
  "collections.premium": "Premium",
  "collections.everyday": "Quotidiani",
  "collections.formal": "Formali",

  "newsletter.title": "Resta aggiornato",
  "newsletter.subtitle": "Iscriviti alla nostra newsletter per offerte esclusive e novità moda.",
  "newsletter.button": "Iscriviti",

  "quicklinks": "Link rapidi",
  "contact": "Contatti",
  "footer.return": "Politica di reso",
  "footer.terms": "Termini di servizio",
  "footer.privacy": "Politica sulla privacy",
  "footer.about": "Dove lo stile senza tempo incontra l'eleganza moderna",
  "flwus": "Seguici",
     "spring22": "Primavera 2022",
    "summer": "Essenziali estivi",
    "autumn": "Tendenze autunnali",
    "winter": "Lusso invernale",
    "casual": "Chic casual",
    "evening": "Abbigliamento da sera",
     "elegance.fashion": "Moda elegante",
        "copy": "© 2022 Hxnzqq. Tutti i diritti riservati."
},
nl: {
   "header.mens": "Herenmode",
  "header.collections": "Collecties",
  "header.shop": "Winkel",
  "header.about": "Over ons",

  "hero.title": "Tijdloze elegantie",
  "hero.subtitle": "Begin de zomer met onze originele zomercampagne",
  "hero.button": "Verkennen",

  "mens.title": "Herenmode",
  "mens.subtitle": "Gun jezelf perfectie – onze collectie luxe herenkleding combineert kwaliteit, stijl en persoonlijkheid.",
  "mens.button": "Nu bestellen",

  "collections.title": "Uitgelichte collecties",
  "collections.season": "Nieuw seizoen",
  "collections.trending": "Trends",
  "collections.classic": "Klassiek",
  "collections.premium": "Premium",
  "collections.everyday": "Dagelijks",
  "collections.formal": "Formeel",

  "newsletter.title": "Blijf op de hoogte",
  "newsletter.subtitle": "Abonneer je op onze nieuwsbrief voor exclusieve aanbiedingen en modenieuws.",
  "newsletter.button": "Abonneren",

  "quicklinks": "Snelle links",
  "contact": "Contact",
  "footer.return": "Retourbeleid",
  "footer.terms": "Gebruiksvoorwaarden",
  "footer.privacy": "Privacybeleid",
  "footer.about": "Waar tijdloze stijl moderne elegantie ontmoet",
  "flwus": "Volg ons",
      "spring22": "Lente 2022",
    "summer": "Zomerse essentials",
    "autumn": "Herfsttrends",
    "winter": "Winterluxe",
    "casual": "Casual chique",
    "evening": "Avondkleding",
    "elegance.fashion": "Elegante mode",
       "copy": "© 2022 Hxnzqq. Alle rechten voorbehouden."
},
pl:{
    "header.mens": "Moda męska",
  "header.collections": "Kolekcje",
  "header.shop": "Sklep",
  "header.about": "O nas",

  "hero.title": "Wieczna elegancja",
  "hero.subtitle": "Rozpocznij lato z naszą oryginalną letnią kolekcją",
  "hero.button": "Odkryj",

  "mens.title": "Moda męska",
  "mens.subtitle": "Pozwól sobie na perfekcję – nasza kolekcja luksusowych ubrań męskich łączy jakość, styl i indywidualność.",
  "mens.button": "Zamów teraz",

  "collections.title": "Wybrane kolekcje",
  "collections.season": "Nowy sezon",
  "collections.trending": "Trendy",
  "collections.classic": "Klasyczne",
  "collections.premium": "Premium",
  "collections.everyday": "Codzienne",
  "collections.formal": "Formalne",

  "newsletter.title": "Bądź na bieżąco",
  "newsletter.subtitle": "Zapisz się do newslettera, aby otrzymywać ekskluzywne oferty i nowości modowe.",
  "newsletter.button": "Zapisz się",

  "quicklinks": "Szybkie linki",
  "contact": "Kontakt",
  "footer.return": "Zasady zwrotów",
  "footer.terms": "Warunki świadczenia usług",
  "footer.privacy": "Polityka prywatności",
  "footer.about": "Gdzie ponadczasowy styl spotyka się z nowoczesną elegancją",
  "flwus": "Obserwuj nas",
      "spring22": "Wiosna 2022",
    "summer": "Letnie podstawy",
    "autumn": "Jesienne trendy",
    "winter": "Zimowy luksus",
    "casual": "Codzienna elegancja",
    "evening": "Moda wieczorowa",
    "elegance.fashion": "Elegancka moda",
      "copy": "© 2022 Hxnzqq. Wszelkie prawa zastrzeżone."
},
pt: {
   "header.mens": "Moda masculina",
  "header.collections": "Coleções",
  "header.shop": "Loja",
  "header.about": "Sobre nós",

  "hero.title": "Elegância eterna",
  "hero.subtitle": "Comece o verão com a nossa coleção de verão original",
  "hero.button": "Explorar",

  "mens.title": "Moda masculina",
  "mens.subtitle": "Permita-se a perfeição – a nossa coleção de roupas de luxo para homens combina qualidade, estilo e personalidade.",
  "mens.button": "Encomendar agora",

  "collections.title": "Coleções selecionadas",
  "collections.season": "Nova temporada",
  "collections.trending": "Tendências",
  "collections.classic": "Clássicas",
  "collections.premium": "Premium",
  "collections.everyday": "Diárias",
  "collections.formal": "Formais",

  "newsletter.title": "Mantenha-se informado",
  "newsletter.subtitle": "Subscreva a nossa newsletter para ofertas exclusivas e novidades da moda.",
  "newsletter.button": "Subscrever",

  "quicklinks": "Links rápidos",
  "contact": "Contacto",
  "footer.return": "Política de devoluções",
  "footer.terms": "Termos de serviço",
  "footer.privacy": "Política de privacidade",
  "footer.about": "Onde o estilo intemporal encontra a elegância moderna",
  "flwus": "Siga-nos",
      "spring22": "Primavera 2022",
    "summer": "Essenciais de verão",
    "autumn": "Tendências de outono",
    "winter": "Luxo de inverno",
    "casual": "Chique casual",
    "evening": "Roupa de noite",
        "elegance.fashion": "Moda elegante",
            "copy": "© 2022 Hxnzqq. Todos os direitos reservados."
},
ru: {
   "header.mens": "Мужская мода",
  "header.collections": "Коллекции",
  "header.shop": "Магазин",
  "header.about": "О нас",

  "hero.title": "Вечная элегантность",
  "hero.subtitle": "Начните лето с нашей оригинальной летней коллекцией",
  "hero.button": "Исследовать",

  "mens.title": "Мужская мода",
  "mens.subtitle": "Позвольте себе совершенство — наша коллекция роскошной мужской одежды сочетает качество, стиль и индивидуальность.",
  "mens.button": "Заказать сейчас",

  "collections.title": "Избранные коллекции",
  "collections.season": "Новый сезон",
  "collections.trending": "Тренды",
  "collections.classic": "Классика",
  "collections.premium": "Премиум",
  "collections.everyday": "Повседневная",
  "collections.formal": "Формальная",

  "newsletter.title": "Будьте в курсе",
  "newsletter.subtitle": "Подпишитесь на нашу рассылку, чтобы получать эксклюзивные предложения и новости моды.",
  "newsletter.button": "Подписаться",

  "quicklinks": "Быстрые ссылки",
  "contact": "Контакт",
  "footer.return": "Правила возврата",
  "footer.terms": "Условия обслуживания",
  "footer.privacy": "Политика конфиденциальности",
  "footer.about": "Там, где вечный стиль встречает современную элегантность",
  "flwus": "Следите за нами",
  "elegance.fashion": "Элегантная мода",
      "spring22": "Весна 2022",
    "summer": "Летние базовые вещи",
    "autumn": "Осенние тренды",
    "winter": "Зимняя роскошь",
    "casual": "Повседневный шик",
    "evening": "Вечерняя мода",
    "copy": "© 2022 Hxnzqq. Все права защищены."
},

};
});