document.addEventListener("DOMContentLoaded", function () {
    const profileInfo = {
        name: "JOSE CAMILO CUCARIANO CASTRO",
        location: "Bogotá, Colombia",
        email: "ingenierocamilocucariano@gmail.com",
        phone: "316 199 6712",
        linkedin: "https://www.linkedin.com/in/camilo-cucariano-764b82250/",
        github: "https://github.com/camilo-cucariano"
    };

    document.getElementById("name").textContent = profileInfo.name;
    document.getElementById("location").textContent = profileInfo.location;
    document.getElementById("email").textContent = profileInfo.email;
    document.getElementById("phone").textContent = profileInfo.phone;
    document.getElementById("linkedin").href = profileInfo.linkedin;
    document.getElementById("github").href = profileInfo.github;
});
