alert("JS charge !");
document.addEventListener("DOMContentLoaded", () => {

  const welcomeScreen = document.getElementById("welcome-screen");
  const appScreen = document.getElementById("app-screen");
  const greeting = document.getElementById("greeting");
  const langButtons = document.querySelectorAll(".lang-btn");

  const savedName = localStorage.getItem("username");
  const savedLang = localStorage.getItem("language");

  if (savedName && savedLang) {
    showApp(savedName);
  }

  langButtons.forEach(button => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang;
      localStorage.setItem("language", lang);

      const name = prompt(
        lang === "fr"
          ? "Quel est votre prénom ?"
          : "What is your name?"
      );

      if (!name) return;

      localStorage.setItem("username", name);
      showApp(name);
    });
  });

  function showApp(name) {
    welcomeScreen.classList.add("hidden");
    appScreen.classList.remove("hidden");

    const hour = new Date().getHours();
    const hello = hour < 18 ? "Bonjour" : "Bonsoir";

    greeting.textContent = ${hello} ${name};
  }

});
