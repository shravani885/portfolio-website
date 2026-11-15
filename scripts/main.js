
document.addEventListener("DOMContentLoaded", async function () {

    async function loadModule(file, containerId) {
        try {
            const response = await fetch(file);

            if (!response.ok) {
                throw new Error("Could not load " + file);
            }

            const html = await response.text();

            document.getElementById(containerId).innerHTML = html;

        } catch (error) {
            console.error(error);
        }
    }

    await loadModule("modules/home.html", "home-module");
    await loadModule("modules/skills.html", "skills-module");

    // Load Home JavaScript
    const homeScript = document.createElement("script");
    homeScript.src = "scripts/home.js";
    document.body.appendChild(homeScript);

    // Load Skills JavaScript
    const skillsScript = document.createElement("script");
    skillsScript.src = "scripts/skills.js";
    document.body.appendChild(skillsScript);

});
