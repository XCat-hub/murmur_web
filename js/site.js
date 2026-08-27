(function () {
  var KEY = "murmur-lang";

  function preferred() {
    try {
      var saved = localStorage.getItem(KEY);
      if (saved === "zh" || saved === "en") return saved;
    } catch (e) {}
    var nav = (navigator.language || "").toLowerCase();
    return nav.indexOf("zh") === 0 ? "zh" : "en";
  }

  function apply(lang) {
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);
    try {
      localStorage.setItem(KEY, lang);
    } catch (e) {}
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang-btn") === lang ? "true" : "false");
    });
  }

  apply(preferred());

  document.addEventListener("click", function (event) {
    var btn = event.target.closest("[data-lang-btn]");
    if (!btn) return;
    apply(btn.getAttribute("data-lang-btn"));
  });
})();
