// Custom Furniture Maker (Woodworking) Navigation Bar
// Theme: White, Black, and Oak Brown (#A66E38)

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  navbar.innerHTML = `
<nav class="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white dark:bg-[#121212] border-b-[3px]" style="border-bottom-color: var(--wood-brown);">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16 md:h-20">

      <a href="index.html" class="flex items-center space-x-2 rtl:space-x-reverse group">
        <i class="fas fa-tree text-xl transition-transform duration-300 group-hover:scale-110" style="color: var(--wood-brown);"></i>
        <span class="text-xl font-extrabold tracking-tight uppercase dark:text-white text-black">
          Timber<span style="color: var(--wood-brown);">Craft</span>
        </span>
      </a>

      <div class="hidden xl:flex flex-1 justify-center space-x-1 rtl:space-x-reverse items-center font-medium">

        <div class="relative">
          <button id="homeBtn" class="flex items-center space-x-1 px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#a66e3815] text-gray-800 dark:text-gray-100 group">
            <span>Home</span>
            <i class="fas fa-chevron-down text-xs transition-transform duration-300 group-hover:rotate-180" style="color: var(--wood-brown);"></i>
          </button>
          <div id="homeMenu" class="hidden absolute mt-2 w-56 bg-white dark:bg-[#1a1a1a] rounded-md shadow-xl py-2 z-50 transform transition-all duration-200 origin-top border" style="border-color: #a66e3840;">
            <a href="index.html" class="home-link block px-4 py-3 transition-all duration-200 hover:pl-6 text-gray-800 dark:text-gray-200 hover:bg-[#a66e3810]" style="hover:color: var(--wood-brown);">Home 1</a>
            <a href="home2.html" class="home-link block px-4 py-3 transition-all duration-200 hover:pl-6 text-gray-800 dark:text-gray-200 hover:bg-[#a66e3810]" style="hover:color: var(--wood-brown);">Home 2</a>
          </div>
        </div>
         <a href="about.html" class="nav-link px-4 py-2 transition-all duration-300 hover:text-[#a66e38] text-gray-800 dark:text-gray-100 relative group">
          About
          <span class="absolute bottom-0 left-1/2 w-0 h-0.5 group-hover:w-full group-hover:left-0 transition-all duration-300" style="background-color: var(--wood-brown);"></span>
        </a>
        <a href="portfolio.html" class="nav-link px-4 py-2 transition-all duration-300 hover:text-[#a66e38] text-gray-800 dark:text-gray-100 relative group">
          Portfolio
          <span class="absolute bottom-0 left-1/2 w-0 h-0.5 group-hover:w-full group-hover:left-0 transition-all duration-300" style="background-color: var(--wood-brown);"></span>
        </a>
        <a href="services.html" class="nav-link px-4 py-2 transition-all duration-300 hover:text-[#a66e38] text-gray-800 dark:text-gray-100 relative group">
          Services
          <span class="absolute bottom-0 left-1/2 w-0 h-0.5 group-hover:w-full group-hover:left-0 transition-all duration-300" style="background-color: var(--wood-brown);"></span>
        </a>
        <a href="collections.html" class="nav-link px-4 py-2 transition-all duration-300 hover:text-[#a66e38] text-gray-800 dark:text-gray-100 relative group">
          Collections
          <span class="absolute bottom-0 left-1/2 w-0 h-0.5 group-hover:w-full group-hover:left-0 transition-all duration-300" style="background-color: var(--wood-brown);"></span>
        </a>
        <a href="process.html" class="nav-link px-4 py-2 transition-all duration-300 hover:text-[#a66e38] text-gray-800 dark:text-gray-100 relative group">
          Process
          <span class="absolute bottom-0 left-1/2 w-0 h-0.5 group-hover:w-full group-hover:left-0 transition-all duration-300" style="background-color: var(--wood-brown);"></span>
        </a>
        <a href="workshop.html" class="nav-link px-4 py-2 transition-all duration-300 hover:text-[#a66e38] text-gray-800 dark:text-gray-100 relative group">
          Workshop
          <span class="absolute bottom-0 left-1/2 w-0 h-0.5 group-hover:w-full group-hover:left-0 transition-all duration-300" style="background-color: var(--wood-brown);"></span>
        </a>
        <a href="contact.html" class="nav-link px-4 py-2 transition-all duration-300 hover:text-[#a66e38] text-gray-800 dark:text-gray-100 relative group">
          Contact
          <span class="absolute bottom-0 left-1/2 w-0 h-0.5 group-hover:w-full group-hover:left-0 transition-all duration-300" style="background-color: var(--wood-brown);"></span>
        </a>
        

      </div>

      <div class="hidden xl:flex items-center space-x-3 rtl:space-x-reverse">
        
         <div class="flex items-center bg-gray-100 dark:bg-[#1a1a1a] rounded-sm p-1 border border-gray-200 dark:border-[#333]">
          <button id="rtlToggle" class="w-10 h-8 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-400 hover:text-[#a66e38] dark:hover:text-[#a66e38] transition-colors">
            <span class="rtl-text">RTL</span>
          </button>
          <div class="w-px h-4 bg-gray-300 dark:bg-[#444] mx-1"></div>
         <button id="darkToggle" class="w-10 h-8 flex items-center justify-center text-gray-900 dark:text-gray-400 hover:text-[#a66e38] dark:hover:text-[#a66e38] transition-colors">
  <i id="darkIcon" class="fas fa-moon text-lg font-black"></i>
</button>
        </div>

        <a href="login.html" class="btn-wood">
          Login
        </a>
         <a href="signup.html" class="btn-wood">
          Signup
        </a>
        
      </div>

      <div class="flex xl:hidden items-center space-x-2">
        <button id="mobileBtn" class="w-10 h-10 rounded-md hover:bg-[#a66e3815] flex items-center justify-center transition-all duration-300" style="color: var(--wood-brown);">
          <i id="mobileIcon" class="fas fa-bars text-xl"></i>
        </button>
      </div>
    </div>

    <div id="mobileMenu" class="xl:hidden hidden py-4 border-t transition-all duration-300 dark:border-[#333] border-gray-200">
      
      <div class="space-y-1 font-medium">
        
        <div class="relative">
          <button id="mobileHomeBtn" class="w-full text-gray-800 dark:text-white flex items-center justify-between px-4 py-3 transition-all duration-300 rounded-md hover:bg-[#a66e3815] group">
            <span class="flex items-center gap-3">Home</span>
            <i id="mobileHomeIcon" class="fas fa-chevron-down text-xs transition-all duration-300 group-hover:rotate-180" style="color: var(--wood-brown);"></i>
          </button>
          <div id="mobileHomeMenu" class="hidden mt-1 ml-6 w-full text-gray-700 dark:text-gray-300 rounded-md py-1 space-y-1 border-l-2" style="border-color: var(--wood-brown);">
            <a href="index.html" class="home-link block px-4 py-2 transition-all duration-200 hover:pl-6 hover:text-[#a66e38] dark:hover:text-[#A66E38]">
            Home 1
            </a>
            <a href="home2.html" class="home-link block px-4 py-2 transition-all duration-200 hover:pl-6 hover:text-[#a66e38] dark:hover:text-[#A66E38]">
               Home 2
            </a>
          </div>
        </div>
        <a href="about.html" class="flex items-center text-gray-800 dark:text-white gap-3 px-4 py-3 transition-all duration-300 rounded-md hover:bg-[#a66e3815] hover:pl-6">About</a>

        <a href="portfolio.html" class="flex items-center text-gray-800 dark:text-white gap-3 px-4 py-3 transition-all duration-300 rounded-md hover:bg-[#a66e3815] hover:pl-6">Portfolio</a>
                <a href="services.html" class="flex items-center text-gray-800 dark:text-white gap-3 px-4 py-3 transition-all duration-300 rounded-md hover:bg-[#a66e3815] hover:pl-6">Services</a>
        <a href="collections.html" class="flex items-center text-gray-800 dark:text-white gap-3 px-4 py-3 transition-all duration-300 rounded-md hover:bg-[#a66e3815] hover:pl-6">Collections</a>

        <a href="process.html" class="flex items-center text-gray-800 dark:text-white gap-3 px-4 py-3 transition-all duration-300 rounded-md hover:bg-[#a66e3815] hover:pl-6">Process</a>
        <a href="workshop.html" class="flex items-center text-gray-800 dark:text-white gap-3 px-4 py-3 transition-all duration-300 rounded-md hover:bg-[#a66e3815] hover:pl-6">Workshop</a>
        <a href="contact.html" class="flex items-center text-gray-800 dark:text-white gap-3 px-4 py-3 transition-all duration-300 rounded-md hover:bg-[#a66e3815] hover:pl-6">Contact</a>
       
      </div>

      <div class="mt-8 pt-6 pb-2 border-t dark:border-[#333] border-gray-200 space-y-6">
        
         <div class="flex justify-center w-full">
           <div class="flex items-center bg-gray-100 dark:bg-[#1a1a1a] rounded-sm p-1.5 border border-gray-200 dark:border-[#333]">
            <button id="mobileRtlToggle" class="w-16 h-10 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-400 hover:text-[#a66e38] dark:hover:text-[#a66e38] transition-colors">
              <span class="rtl-text">RTL</span>
            </button>
            <div class="w-px h-6 bg-gray-300 dark:bg-[#444] mx-2"></div>
            <button id="mobileDarkToggle" class="w-16 h-10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#a66e38] dark:hover:text-[#a66e38] transition-colors">
              <i id="mobileDarkIcon" class="fas fa-moon text-lg"></i>
            </button>
          </div>
        </div>

        <div class="flex w-full gap-3 px-4">
          <a href="login.html" class="w-full px-5 py-3 font-bold uppercase tracking-wider text-center text-white rounded-md transition-all duration-300 hover:shadow-lg" style="background-color: var(--wood-brown);">
            <i class="fas fa-sign-in-alt mr-2"></i> Login
          </a>
          <a href="signup.html" class="w-full px-5 py-3 font-bold uppercase tracking-wider text-center text-white rounded-md transition-all duration-300 hover:shadow-lg" style="background-color: var(--wood-brown);">
            <i class="fas fa-user-plus mr-2"></i> Signup
          </a>
        </div>

      </div>
    </div>
  </div>
</nav>
`;

  /* ===============================
     INJECT CUSTOM CSS VARIABLES & STYLES
  =============================== */
  const customStyles = document.createElement('style');
  customStyles.textContent = `
    :root {
      --wood-brown: #A66E38;
      --wood-dark: #8B5A2B;
    }

    /* GLOBAL BODY STYLES FOR DARK MODE FIX */
    body {
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    
    html.dark body {
      background-color: #0a0a0a; /* Deep black background */
      color: #e5e5e5; /* Light text for readability */
    }

    /* Active link styles */
    .active-link {
      color: var(--wood-brown) !important;
      font-weight: 700 !important;
    }

    /* RTL Specific Styles */
    [dir="rtl"] .space-x-1 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 1; }
    [dir="rtl"] .space-x-2 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 1; }
    [dir="rtl"] .space-x-3 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 1; }
    [dir="rtl"] .ml-6 { margin-left: 0; margin-right: 1.5rem; border-left: none; border-right: 2px solid var(--wood-brown); }
    [dir="rtl"] .mr-2 { margin-right: 0; margin-left: 0.5rem; }
    [dir="rtl"] .group-hover\\:pl-6:hover { padding-left: 1rem; padding-right: 1.5rem; }

    /* Mobile Menu Animation */
    #mobileMenu { transition: all 0.3s ease-in-out; max-height: calc(100vh - 5rem); overflow-y: visible; }
    #mobileMenu:not(.hidden) { animation: slideDown 0.3s ease-out; }
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Standardized Wood-Block Button */
    .btn-wood {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #ffffff;
      background-color: var(--wood-brown);
      border: 2px solid #000000;
      transition: all 0.3s ease;
      cursor: pointer;
      text-align: center;
    }
    
    .btn-wood:hover {
      background-color: #000000;
      color: #ffffff;
    }

    /* Utility */
    body { overflow-x: hidden; }
  `;
  document.head.appendChild(customStyles);

  /* ===============================
     ACTIVE NAV LINK HIGHLIGHT
  =============================== */
  const currentPage = window.location.pathname.split("/").pop();

  const homeBtn = document.getElementById("homeBtn");
  const mobileHomeBtn = document.getElementById("mobileHomeBtn");
  const homeLinks = document.querySelectorAll(".home-link");
  const allNavLinks = document.querySelectorAll("a[href]");
  const navButtons = [homeBtn, mobileHomeBtn].filter(btn => btn);

  const homePages = ['', 'index.html', 'home1.html', 'home2.html', './', '/'];
  const isHomePageActive = homePages.includes(currentPage);

  allNavLinks.forEach(link => { link.classList.remove("active-link"); });
  navButtons.forEach(btn => { if (btn) btn.classList.remove("active-link"); });

  if (isHomePageActive) {
    navButtons.forEach(btn => { if (btn) btn.classList.add("active-link"); });
  }

  homeLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage ||
      (currentPage === '' && href === 'index.html') ||
      (currentPage === 'home1.html' && href === 'home1.html')) {
      link.classList.add("active-link");
    }
  });

  allNavLinks.forEach(link => {
    if (link.querySelector('img') || link.querySelector('span')?.classList.contains('text-xl')) return;
    if (link.classList.contains('home-link')) return;

    const href = link.getAttribute('href');
    if (!href || homePages.includes(href)) return;

    if (href === currentPage) { link.classList.add("active-link"); }
  });

  /* ===============================
     DESKTOP DROPDOWNS
  =============================== */
  const homeMenu = document.getElementById("homeMenu");

  homeBtn?.addEventListener("click", e => {
    e.stopPropagation();
    homeMenu?.classList.toggle("hidden");
  });

  /* ===============================
     MOBILE DROPDOWNS
  =============================== */
  const mobileHomeMenu = document.getElementById("mobileHomeMenu");
  const mobileHomeIcon = document.getElementById("mobileHomeIcon");

  mobileHomeBtn?.addEventListener("click", e => {
    e.stopPropagation();
    const isHidden = mobileHomeMenu?.classList.toggle("hidden");
    if (mobileHomeIcon) {
      mobileHomeIcon.className = isHidden
        ? "fas fa-chevron-down text-xs transition-all duration-300"
        : "fas fa-chevron-up text-xs transition-all duration-300";
    }
  });

  /* ===============================
     MOBILE MENU TOGGLE WITH CLOSE ICON
  =============================== */
  const mobileBtn = document.getElementById("mobileBtn");
  const mobileIcon = document.getElementById("mobileIcon");
  const mobileMenu = document.getElementById("mobileMenu");

  if (mobileBtn && mobileIcon && mobileMenu) {
    mobileBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      mobileMenu.classList.toggle("hidden");

      if (mobileMenu.classList.contains("hidden")) {
        mobileIcon.className = "fas fa-bars text-xl";
      } else {
        mobileIcon.className = "fas fa-times text-xl";
        if (mobileHomeMenu) mobileHomeMenu.classList.add("hidden");
        if (mobileHomeIcon) mobileHomeIcon.className = "fas fa-chevron-down text-xs transition-all duration-300";
      }
    });

    document.addEventListener("click", function (e) {
      if (!mobileMenu.classList.contains("hidden") && !mobileBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add("hidden");
        if (mobileIcon) mobileIcon.className = "fas fa-bars text-xl";
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1280) { // xl breakpoint
        if (!mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden");
          if (mobileIcon) mobileIcon.className = "fas fa-bars text-xl";
        }
      }
    });

    if (mobileMenu) {
      mobileMenu.addEventListener("click", function (e) { e.stopPropagation(); });
    }
  }

  document.addEventListener("click", () => {
    homeMenu?.classList.add("hidden");
  });

  /* ===============================
     RTL MODE
  =============================== */
  const rtlToggle = document.getElementById("rtlToggle");
  const mobileRtlToggle = document.getElementById("mobileRtlToggle");

  function toggleRTL() {
    const isRTL = document.documentElement.dir === "rtl";
    document.documentElement.dir = isRTL ? "ltr" : "rtl";

    if (rtlToggle) rtlToggle.textContent = isRTL ? "RTL" : "LTR";
    const mobileRtlSpan = mobileRtlToggle?.querySelector(".rtl-text");
    if (mobileRtlSpan) mobileRtlSpan.textContent = isRTL ? "RTL" : "LTR";

    localStorage.setItem("TimberCraft-rtl", !isRTL);
  }

  rtlToggle?.addEventListener("click", toggleRTL);
  mobileRtlToggle?.addEventListener("click", toggleRTL);

  const savedRTL = localStorage.getItem("TimberCraft-rtl") === "true";
  if (savedRTL) {
    document.documentElement.dir = "rtl";
    if (rtlToggle) rtlToggle.textContent = "LTR";
    const mobileRtlSpan = mobileRtlToggle?.querySelector(".rtl-text");
    if (mobileRtlSpan) mobileRtlSpan.textContent = "LTR";
  }

  /* ===============================
     DARK MODE
  =============================== */
  const darkToggle = document.getElementById("darkToggle");
  const mobileDarkToggle = document.getElementById("mobileDarkToggle");
  const darkIcon = document.getElementById("darkIcon");
  const mobileDarkIcon = document.getElementById("mobileDarkIcon");

  function updateThemeIcons(isDark) {
    if (darkIcon) darkIcon.className = isDark ? "fas fa-sun text-lg" : "fas fa-moon text-lg";
    if (mobileDarkIcon) mobileDarkIcon.className = isDark ? "fas fa-sun text-lg" : "fas fa-moon text-lg";
  }

  const savedDarkMode = localStorage.getItem("TimberCraft-dark") === "true";
  if (savedDarkMode) {
    document.documentElement.classList.add("dark");
    updateThemeIcons(true);
  } else {
    document.documentElement.classList.remove("dark");
    updateThemeIcons(false);
  }

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("TimberCraft-dark", isDark);
    updateThemeIcons(isDark);
  }

  darkToggle?.addEventListener("click", toggleTheme);
  mobileDarkToggle?.addEventListener("click", toggleTheme);

});