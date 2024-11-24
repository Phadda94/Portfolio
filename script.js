const index = document.getElementById("index");
const skills = document.getElementById("skills");

const btnSkills = document.getElementById("btn-skills");
const btnHome = document.getElementById("btn-home");

const projects = document.getElementById("projects");
const btnProjects = document.getElementById("btn-projects");

const about = document.getElementById("about");
const btnAbout = document.getElementById("btn-about");

const contact = document.getElementById("contact");
const btnContact = document.getElementById("btn-contact");


function changeToHome() {
    // Show home page
    skills.style.transform = "translateY(100%)";
    projects.style.transform = "translateY(500%)";
    about.style.transform = "translateY(200%)";
    contact.style.transform = "translateY(300%)";
    setTimeout(() => {
        skills.style.display = "none"; 
        about.style.display = "none"
        projects.style.display = "none";
        contact.style.display = "none";

        index.style.display = "inline-flex";

        setTimeout(() => {
            index.style.transform = "translateY(0)";
        }, 50);
    }, 300); 
}


function changeToSkills() {
    // Show skills page
    projects.style.transform = "translateY(500%)";
    index.style.transform = "translateY(-200%)";
    about.style.transform = "translateY(200%)";
    contact.style.transform = "translateY(300%)";
    setTimeout(() => {
        index.style.display = "none";
        about.style.display = "none"
        projects.style.display = "none"
        contact.style.display = "none";

        skills.style.display = "block";

        setTimeout(() => {
            skills.style.transform = "translateY(0%)";
        }, 100); 
        
    }, 300);
}


function changeToProjects() {
    // Show projects page
    index.style.transform = "translateY(-200%)";
    skills.style.transform = "translateY(-200%)";
    about.style.transform = "translateY(200%)";
    contact.style.transform = "translateY(200%)";
    setTimeout(() => {
        index.style.display = "none";
        skills.style.display = "none";
        about.style.display = "none";
        contact.style.display = "none";

        projects.style.display = "block"

        setTimeout(() => {
            projects.style.transform = "translateY(0%)"
        }, 100); 
    }, 300);
}


function changeToAbout() {
    index.style.transform = "translateY(-200%)";
    skills.style.transform = "translateY(-200%)";
    projects.style.transform = "translateY(-200%)";
    contact.style.transform = "translateY(300%)"
    setTimeout(() => {
        index.style.display = "none";
        skills.style.display = "none";
        projects.style.display = "none";
        contact.style.display = "none";

        about.style.display = "inline-block";

        setTimeout(() => {
            about.style.transform = "translateY(0%)"
        }, 100); 
    }, 300)
} 


function changeToContact() {
    index.style.transform = "translateY(-200%)";
    skills.style.transform = "translateY(-200%)";
    projects.style.transform = "translateY(-200%)";
    about.style.transform = "translateY(-200%)"
    setTimeout(() => {
        index.style.display = "none";
        skills.style.display = "none";
        projects.style.display = "none";
        about.style.display = "none";

        contact.style.display = "block";

        setTimeout(() => {
            contact.style.transform = "translateY(0%)"
        }, 100); 
    }, 300)
} 

btnSkills.addEventListener("click", changeToSkills);
btnHome.addEventListener("click", changeToHome);
btnProjects.addEventListener("click", changeToProjects);
btnAbout.addEventListener("click", changeToAbout);
btnContact.addEventListener("click", changeToContact)
