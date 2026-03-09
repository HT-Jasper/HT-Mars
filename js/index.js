const main = document.querySelector('main');
const footer = document.createElement('footer');
main.append(footer);

const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement('p');
copyright.textContent = `\u0040 Huy Tran ${thisYear} `;
footer.appendChild(copyright);

const skills = ['HTML', 'CSS', 'JavaScript', 'Adobe Photoshop', 'GitHub'];
const skillsSection = document.getElementById('Skills');
const skillsList = skillsSection.querySelector('ul');

skills.forEach((skill) => {
    const skillItem = document.createElement('li');
    skillItem.innerText = skill;
    skillsList.appendChild(skillItem);
});

const messageForm = document.querySelector('[name="leave_message"]');
messageForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;

    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerText = `<a href="mailto:${email}">${name}</a> <span>(${email})</span><p>${message}</p>`;
    messageList.appendChild(newMessage);
    messageSection.style.display = 'block';

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentElement;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    event.target.reset();
});

function updateMessage() {
  const messagesSection = document.getElementById('messages');
  const messageList = messagesSection.querySelector('ul');

  if (messageList.children.length === 0) {
    messagesSection.style.display = 'none';
  } else {
    messagesSection.style.display = 'block';
  }
  
}

updateMessage();

fetch('https://api.github.com/users/HT-Jasper/repos')
.then(response => {
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  } 
  return response.json();
  })
.then(data => {
  const repositories = data;
  console.log(repositories)

  const projectSection = document.getElementById('Projects');
  const projectList = projectSection.querySelector('ul');

  repositories.forEach((item) => {
    const projectItem = document.createElement('li');
    projectItem.innerText = item.name;
    projectList.appendChild(projectItem);
  });
})
.catch(error => {
  console.error('Error fetching repositories:', error);
})


