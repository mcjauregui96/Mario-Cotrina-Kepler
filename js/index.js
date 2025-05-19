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
const messageForm= document.querySelector('form[name="leave_message"]')
messageForm.addEventListener("submit", function(event) {// add submit button
    event.preventDefault();// prevents default refreshing behavior
// Get form values
    const usersName= event.target.usersName.value;
    const usersEmail= event.target.usersEmail.value;
    const usersMessage= event.target.usersMessage.value;
    console.log('Name:',usersName);   
    console.log('Email:',usersEmail);
    console.log('Message:',usersMessage); 
    

    //Display mnessage
    const messageSection= document.querySelector('#messages');
    const messageList= messageSection.querySelector('ul');
    const newMessage= document.createElement('li');
    newMessage.innerHTML= `<a href= "mailto:${usersEmail}">${usersName}</a>\n
        <span>${usersMessage}</span>`;
    
// Create remove button
    const removeButton= document.createElement('button');
    removeButton.innerText= 'Remove';
    removeButton.type= 'button';
    removeButton.addEventListener('click', function(){
        newMessage.remove();
        toggleMessageSection();
    });
// Create edit button
    const editButton= document.createElement('button');
    editButton.innerText='edit';
    editButton.type='button';
    editButton.addEventListener('click', function(edit){
        const span= edit.target.parentNode.querySelector('span');
        const newText= prompt('Edit your message:', span.innerText);
        if (newText) span.innerText= newText;
    });
    newMessage.appendChild(removeButton);
    newMessage.appendChild(editButton);
    messageList.appendChild(newMessage);

    messageSection.style.display= 'block';

    event.target.reset();
    });
// Hide messages section
    function toggleMessageSection(){
        const messageSection= document.querySelector('#messages');
        const messageList= messageSection.querySelector('ul');
        if (messageList.children.length === 0){
            messageSection.style.display= 'none';
        }
    }
    toggleMessageSection();

