//Create a footer element

const footer = document.createElement("footer");
footer.className = "footer";
footer.setAttribute("id", "myfooter");
document.body.appendChild(footer);

// Get current year
const today = new Date();
const thisYear = today.getFullYear();
const newFooter = document.querySelector("footer");
const copyright = document.createElement("p");
var copyrightSymbol = `\u00A9`;
copyright.innerHTML = `${copyrightSymbol}Mario Cotrina ${thisYear}`;
footer.appendChild(copyright);

// Add to your Skills Section
const skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop"];
const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.getElementsByTagName("ul")[0];

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("LI");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

//Create a footer element

const footer = document.createElement("footer");
footer.className = "footer";
footer.setAttribute("id", "myfooter");
document.body.appendChild(footer);

// Get current year
const today = new Date();
const thisYear = today.getFullYear();
const newFooter = document.querySelector("footer");
const copyright = document.createElement("p");
var copyrightSymbol = `\u00A9`;
copyright.innerHTML = `${copyrightSymbol}Mario Cotrina ${thisYear}`;
footer.appendChild(copyright);

// Add to your Skills Section
const skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop"];
const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.getElementsByTagName("ul")[0];

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("LI");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}





