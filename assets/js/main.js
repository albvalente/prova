document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("sidebar-toggle");
  var sidebar = document.querySelector(".sidebar");

  if (toggle && sidebar) {
    toggle.addEventListener("click", function () {
      sidebar.classList.toggle("open");
    });

    // Chiude il menu quando si clicca su un link (utile su mobile)
    sidebar.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        sidebar.classList.remove("open");
      });
    });
  }
});
