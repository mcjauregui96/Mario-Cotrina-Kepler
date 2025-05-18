//Create a footer element

const footer= document.createElement("footer");
footer.className= "footer";
footer.setAttribute("id","myfooter");
document.body.appendChild(footer);
console.log(footer);

// Get current year
const today = new Date();
const thisYear = today.getFullYear();
console.log(thisYear);
const newFooter = document.querySelector("footer");
const copyright = document.createElement("p");
var copyrightSymbol = `\u00A9`
copyright.innerHTML = `${copyrightSymbol}Mario Cotrina ${thisYear}`;
footer.appendChild(copyright);

// Add to your Skills Section
const skills=["JavaScript", "HTML", "CSS", "Adobe Photoshop"];
console.log(skills);
const skillsSection= document.querySelector("#skills");
console.log(skillsSection)
const skillsList= skillsSection.getElementsByTagName("ul")[0];
console.log(skillsList);

for (let i= 0; i< skills.length; i++){
    const skill = document.createElement("LI");
    skill.innerText= skills[i];
    console.log(skill);
    skillsList.appendChild(skill);
    console.log(skillsList);
}

// Handle form submission
const messageForm= document.querySelector("leave_message");
messageForm.addEventListener("submit", function(event) {
    event.preventDefault();
// Get form values
    const usersName= event.target.userName.value;
    const usersEmail= event.target.usersEmail.value;
    const usersMessage= event.target.usersMessage.value;
    console.log('Name:',usersName);   
    console.log('Email:',usersEmail);
    console.log('Message:',usersMessage); 
    

    //Display mnessage
    const messageSection= document.querySelector('#messages');
    const messageList= messageSection.querySelector('ul');
    
    messageSection.hidden= false;
    const newMessage= document.createElement('li');
    newString= `<a href= "mailto:${usersEmail}">${usersName}</a>\n
        <span>${usersMessage}</span>`;
    newMessage.innerHTML= newString;

    const removeButton= document.createElement('button');
    removeButton.textContent= 'Remove';
    removeButton.type= 'button';
    removeButton.addEventListener('click', function(){
        newMessage.remove();
        toggleMessageSection();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageSection.computedStyleMap.display= 'block';

    event.target.removeEventListener();
    });

    function toggleMessageSection(){
        const messageSection= document.querySelector('#messages');
        const messageList= messageSection.querySelector('ul');
        if (messageList.chiuldrenb.length === 0){
            messageSection.computedStyleMap.display= 'none';
        }
    }
    toggleMessageSection();

