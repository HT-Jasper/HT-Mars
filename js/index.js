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
