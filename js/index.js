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

// Handle form submission
const messageForm= document.querySelector('form[name="leave_message"]')
messageForm.addEventListener("submit", function(event){
  event.preventDefault();
// Get data
  const usersName= event.target.usersName.value;
  const usersEmail= event.target.usersEmail.value;
  const usersMessage= event.target.usersMessage.value;
  console.log('Name:',usersName);
  console.log('Email:',usersEmail);
  console.log('Message:',usersMessage);

  //Display message
  const messageSection= document.querySelector('#messages');
  const messageList= messageSection.querySelector('ul');
  const newMessage= document.createElement('li');
  newMessage.innerHTML= `<a href= "mailto:${usersEmail}">${usersName}</a>\n
    <span>${usersMessage}</span>`;

  // Create remove button
  const removeButton= document.createElement('button');
  removeButton.innerText='remove';
  removeButton.type='button';
  removeButton.addEventListener('click', function(e){
    e.target.parentNode.remove();
    toggleMessageSection();
  });

  //Create edit button
  const editButton= document.createElement('button');
  editButton.innerText='edit';
  editButton.type='button';
  editButton.addEventListener('click', function(edit){
    const span=edit.target.parentNode.querySelector('span');
    const newText= prompt('Edit your message:', span.innerText);
    if (newText) span.innerText= newText;
  });

  //Append buttons and message
  newMessage.appendChild(removeButton);
  newMessage.appendChild(editButton);
  messageList.appendChild(newMessage);

  
//Reset form
  event.target.reset();

  //Hide messages section
  function toggleMessageSection(){
    const messageSection= document.querySelector('#messages');
    const messageList= messageSection.querySelector('ul');
    if (messageList.children.length === 0){
      messageSection.style.display= 'none';
    } else{
      messageSection.style.display='block';
    }
  }
  toggleMessageSection();
})





