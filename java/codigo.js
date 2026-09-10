document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const mainNav = document.getElementById("mainNav");

  if (menuBtn && mainNav) {
    menuBtn.addEventListener("click", () => {
      const abierto = mainNav.classList.toggle("open");
      menuBtn.textContent = abierto ? "✕" : "☰";
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuBtn.textContent = "☰";
      });
    });
  }

  document.querySelectorAll(".track-whatsapp").forEach((link) => {
    link.addEventListener("click", () => {
      if (typeof gtag === "function") {
        gtag("event", "click_whatsapp", {
          origen: "DSSC-TI",
          link_url: link.href
        });
      }
    });
  });

  document.querySelectorAll(".example-image img").forEach((img) => {
    img.addEventListener("dragstart", (event) => event.preventDefault());
  });
});
