// ===================== TOP NAV: active link =====================
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(function (item) {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    navItems.forEach(function (link) {
      link.classList.remove("active");
    });
    item.classList.add("active");
  });
});

// ===================== MARKET TABS: active tab =====================
const marketTabs = document.querySelectorAll(".market-tab");

marketTabs.forEach(function (tab) {
  tab.addEventListener("click", function (event) {
    event.preventDefault();
    marketTabs.forEach(function (t) {
      t.classList.remove("active");
    });
    tab.classList.add("active");
  });
});

// ===================== MARKETS: expand / collapse =====================
const markets = document.querySelectorAll(".market");

markets.forEach(function (market) {
  const header = market.querySelector(".market-header");
  const toggle = market.querySelector(".market-toggle");

  // Markets whose button says "Expand" start closed
  if (toggle.textContent.trim() === "Expand") {
    market.classList.add("collapsed");
  }

  header.addEventListener("click", function () {
    market.classList.toggle("collapsed");
    toggle.textContent = market.classList.contains("collapsed")
      ? "Expand"
      : "Collapse";
  });
});

// ===================== ODDS: select / deselect =====================
const oddsButtons = document.querySelectorAll(".odds");

oddsButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const market = button.closest(".market");
    const wasSelected = button.classList.contains("selected");

    // Only one selection allowed per market
    market.querySelectorAll(".odds").forEach(function (b) {
      b.classList.remove("selected");
    });

    if (!wasSelected) {
      button.classList.add("selected");
    }
  });
});

// ===================== SIDEBAR: highlight clicked link =====================
const sidebarLinks = document.querySelectorAll(".sidebar-link");

sidebarLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    sidebarLinks.forEach(function (l) {
      l.classList.remove("active");
    });
    link.classList.add("active");
  });
});

// ===================== NOTIFICATION BELL: on / off =====================
const bell = document.querySelector(".notify-bell");

bell.addEventListener("click", function () {
  bell.classList.toggle("active");
});