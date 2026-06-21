document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll("[data-page]");
  var pages = document.querySelectorAll(".page");

  function showPage(pageId) {
    pages.forEach(function (page) {
      page.classList.toggle("active", page.id === "page-" + pageId);
    });
    links.forEach(function (link) {
      link.classList.toggle("active-link", link.getAttribute("data-page") === pageId);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      showPage(link.getAttribute("data-page"));
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  var header = document.querySelector("header");
  var skyThemes = ["sky-morning", "sky-daytime", "sky-evening", "sky-night"];

  function skyThemeForHour(hour) {
    if (hour >= 5 && hour < 8) return "sky-morning";
    if (hour >= 8 && hour < 17) return "sky-daytime";
    if (hour >= 17 && hour < 20) return "sky-evening";
    return "sky-night";
  }

  function applySkyTheme() {
    var theme = skyThemeForHour(new Date().getHours());
    header.classList.remove.apply(header.classList, skyThemes);
    header.classList.add(theme);
  }

  applySkyTheme();
  setInterval(applySkyTheme, 5 * 60 * 1000);
});
