(function () {
  document.documentElement.lang = "en";
  document.documentElement.setAttribute("data-lang", "en");
  try {
    localStorage.removeItem("murmur-lang");
  } catch (e) {}
})();
