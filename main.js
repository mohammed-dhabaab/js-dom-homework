// Photo
const photo = document.querySelector(".photo")
photo.onmouseover = () => photo.src = "./assets/photo/photo.png"
photo.onmouseout = () => photo.src = "./assets/photo/placeholder-photo.png";


// Title
const firstName = document.querySelectorAll(".first-name")
firstName.forEach(name => name.onmouseover = () => name.innerText = "Mohammed")
firstName.forEach(name => name.onmouseout = () => name.innerText = "RICHARD")

const lastName = document.querySelectorAll(".last-name")
lastName.forEach(name => name.onmouseover = () => name.innerText = "Dhabaab")
lastName.forEach(name => name.onmouseout = () => name.innerText = "sanchez")

const title = document.querySelectorAll(".title")
title.forEach(title => title.onmouseover = () => title.innerText = "Full Stack Developer Intern at Tuwaiq")
title.forEach(title => title.onmouseout = () => title.innerText = "Marketing Manager")


// Contact
const myPhone = document.querySelector(".my-phone")
myPhone.onmouseover = () => myPhone.innerText = "+966 55 123 4567"
myPhone.onmouseout = () => myPhone.innerText = "+123-456-7890"

const myEmail = document.querySelector(".my-email")
myEmail.onmouseover = () => myEmail.innerText = "mohammed.dhabaab@gmail.com"
myEmail.onmouseout = () => myEmail.innerText = "hello@reallygreatsite.com"

const myAddress = document.querySelector(".my-address")
myAddress.onmouseover = () => myAddress.innerText = "Jeddah, Saudi Arabia"
myAddress.onmouseout = () => myAddress.innerText = "123 Anywhere St., Any City"

const myWebsite = document.querySelector(".my-website")
myWebsite.onmouseover = () => myWebsite.innerText = "https://mohammeddhabaab.com"
myWebsite.onmouseout = () => myWebsite.innerText = "www.reallygreatsite.com"


// Education
const education1 = document.querySelector(".university-name-1")
education1.onmouseover = () => education1.innerText = "King Abdulaziz University"
education1.onmouseout = () => education1.innerText = "wardiere university"

const educationDate1 = document.querySelector(".education-date-1")
educationDate1.onmouseover = () => educationDate1.innerText = "2019 - 2024"
educationDate1.onmouseout = () => educationDate1.innerText = "2029 - 2030"

const educationList11 = document.querySelector(".education-list-1-1")
educationList11.onmouseover = () => educationList11.innerText = "Bachelor's Degree of Software Engineering "
educationList11.onmouseout = () => educationList11.innerText = "Master of Business Management"


const education2 = document.querySelector(".university-name-2")
education2.onmouseover = () => education2.innerText = "Udacity"
education2.onmouseout = () => education2.innerText = "wardiere university"

const educationDate2 = document.querySelector(".education-date-2")
educationDate2.onmouseover = () => educationDate2.innerText = "2025 - 2029"
educationDate2.onmouseout = () => educationDate2.innerText = "2021"

const educationList21 = document.querySelector(".education-list-2-1")
educationList21.onmouseover = () => educationList21.innerText = "Artificial Intelligence for Business"
educationList21.onmouseout = () => educationList21.innerText = "Bachelor of Business"

const educationList22 = document.querySelector(".education-list-2-2")
educationList22.onmouseover = () => educationList22.innerText = " AI Development"
educationList22.onmouseout = () => educationList22.innerText = "GPA: 3.8 / 4.0"



// Languages
// For the first language
const languageList1 = document.querySelector(".language-list-1");
languageList1.onmouseover = () => languageList1.innerText = "Arabic (Native)";
languageList1.onmouseout = () => languageList1.innerText = "English (Fluent)";

// For the second language
const languageList2 = document.querySelector(".language-list-2");
languageList2.onmouseover = () => languageList2.innerText = "English (Advance)";
languageList2.onmouseout = () => languageList2.innerText = "French (Fluent)";

// For the third language
const languageList3 = document.querySelector(".language-list-3");
languageList3.onmouseover = () => languageList3.innerText = "Russian (Future)";
languageList3.onmouseout = () => languageList3.innerText = "German (Basics)";

// For the fourth language
const languageList4 = document.querySelector(".language-list-4");
languageList4.onmouseover = () => languageList4.innerText = "Spanish (Future)";
languageList4.onmouseout = () => languageList4.innerText = "Spanish (Intermediate)";



// Profile
const profileParagraph = document.querySelector(".profile-paragraph")
profileParagraph.onmouseover = () => profileParagraph.innerText = "I am an enthusiastic and dedicated software engineer with a driven passion for developing high-quality and user-centered solutions. I am committed 100% to continuously enhancing my expertise, knowledge, and skills within software engineering and entrepreneurship to deliver impactful results!"
profileParagraph.onmouseout = () => profileParagraph.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Utenim ad minim veniam quis nostrud exercitation."



// Work
const companyName1 = document.querySelector(".company-name-1")
companyName1.onmouseover = () => companyName1.innerText = "Tuwaiq Academy"
companyName1.onmouseout = () => companyName1.innerText = "Borcelle Studio"

const roleDate1 = document.querySelector(".role-date-1")
roleDate1.onmouseover = () => roleDate1.innerText = "2024"
roleDate1.onmouseout = () => roleDate1.innerText = "2030 - Present"

const rolePositionName1 = document.querySelector(".role-position-name-1")
rolePositionName1.onmouseover = () => rolePositionName1.innerText = "Full Stack Developer Intern"
rolePositionName1.onmouseout = () => rolePositionName1.innerText = "Marketing Manager & Specialist"

const activitiesListRole11 = document.querySelector(".activities-list-role-1-1")
activitiesListRole11.onmouseover = () => activitiesListRole11.innerText = "Collaborated with diverse teams to design and develop 4+ web applications to master our technical/soft skills together."
activitiesListRole11.onmouseout = () => activitiesListRole11.innerText = "Develop and execute comprehensive marketing strategies and campaigns that align with the company's goals and objectives."

const activitiesListRole12 = document.querySelector(".activities-list-role-1-2")
activitiesListRole12.onmouseover = () => activitiesListRole12.innerText = "Utilized web technologies and version control to make responsive and user-friendly interfaces for 8+ various projects."
activitiesListRole12.onmouseout = () => activitiesListRole12.innerText = "Lead, mentor, and manage a high-performing marketing team, fostering a collaborative and results-driven work environment."

const activitiesListRole13 = document.querySelector(".activities-list-role-1-3")
activitiesListRole13.onmouseover = () => activitiesListRole13.innerText = "Acquired/applied a diverse set of over 10+ technical/soft skills, fostering professional growth and teamwork."
activitiesListRole13.onmouseout = () => activitiesListRole13.innerText = "Monitor brand consistency across marketing channels and materials."


const companyName2 = document.querySelector(".company-name-2")
companyName2.onmouseover = () => companyName2.innerText = "Amazon"
companyName2.onmouseout = () => companyName2.innerText = "Fauget Studio"

const roleDate2 = document.querySelector(".role-date-2")
roleDate2.onmouseover = () => roleDate2.innerText = "2024"
roleDate2.onmouseout = () => roleDate2.innerText = "2025 - 2029"

const rolePositionName2 = document.querySelector(".role-position-name-2")
rolePositionName2.onmouseover = () => rolePositionName2.innerText = "Assist Manger"
rolePositionName2.onmouseout = () => rolePositionName2.innerText = "Marketing Manager & Specialist"

const activitiesListRole21 = document.querySelector(".activities-list-role-2-1")
activitiesListRole21.onmouseover = () => activitiesListRole21.innerText = "Assisted more than 89+ hours at Amazon as a manager assist!"
activitiesListRole21.onmouseout = () => activitiesListRole21.innerText = "Create and manage the marketing budget, ensuring efficient allocation of resources and optimizing ROI."

const activitiesListRole22 = document.querySelector(".activities-list-role-2-2")
activitiesListRole22.onmouseover = () => activitiesListRole22.innerText = "Solve more than 30+ problems for our co-worker drivers!"
activitiesListRole22.onmouseout = () => activitiesListRole22.innerText = "Lead, mentor, and manage a high-performing marketing team, fostering a collaborative and results-driven work environment."

const activitiesListRole23 = document.querySelector(".activities-list-role-2-3")
activitiesListRole23.onmouseover = () => activitiesListRole23.innerText = "Communicated effectively with all the stakeholders and with a big smile!"
activitiesListRole23.onmouseout = () => activitiesListRole23.innerText = "Monitor brand consistency across marketing channels and materials."


const companyName3 = document.querySelector(".company-name-3")
companyName3.onmouseover = () => companyName3.innerText = "Expert Vision Consulting"
companyName3.onmouseout = () => companyName3.innerText = "Studio Shodwe"

const roleDate3 = document.querySelector(".role-date-3")
roleDate3.onmouseover = () => roleDate3.innerText = "2023"
roleDate3.onmouseout = () => roleDate3.innerText = "2024 - 2025"

const rolePositionName3 = document.querySelector(".role-position-name-3")
rolePositionName3.onmouseover = () => rolePositionName3.innerText = "Artificial Intelligence Engineer"
rolePositionName3.onmouseout = () => rolePositionName3.innerText = "Marketing Manager & Specialist"

const activitiesListRole31 = document.querySelector(".activities-list-role-3-1")
activitiesListRole31.onmouseover = () => activitiesListRole31.innerText = "Developed more than 5+ projects about computer vision to stay ahead with the latest trends!"
activitiesListRole31.onmouseout = () => activitiesListRole31.innerText = "Develop and maintain strong relationships with partners, agencies, and vendors to support marketing initiatives."

const activitiesListRole32 = document.querySelector(".activities-list-role-3-2")
activitiesListRole32.onmouseover = () => activitiesListRole32.innerText = "Implemented more than 5+ projects about data analysis with machine learning to sharpen my skills!"
activitiesListRole32.onmouseout = () => activitiesListRole32.innerText = "Monitor and maintain brand consistency across all marketing channels and materials."



// Reference
const referenceTitles = document.querySelectorAll(".reference-title")
referenceTitles.forEach(referenceTitle => referenceTitle.onmouseover = () => referenceTitle.innerText = "Ibrahim Al-Nawasany")
referenceTitles.forEach(referenceTitle => referenceTitle.onmouseout = () => referenceTitle.innerText = "Estelle Darcy")

const referenceCompanies = document.querySelectorAll(".reference-company")
referenceCompanies.forEach(referenceCompanie => referenceCompanie.onmouseover = () => referenceCompanie.innerText = "Experts Vision Consulting")
referenceCompanies.forEach(referenceCompanie => referenceCompanie.onmouseout = () => referenceCompanie.innerText = "Wardiere Inc. / CTO")

const referencePhones = document.querySelectorAll(".reference-phone")
referencePhones.forEach(referencePhone => referencePhone.onmouseover = () => referencePhone.innerText = "966-501-234-567")
referencePhones.forEach(referencePhone => referencePhone.onmouseout = () => referencePhone.innerText = "123-456-7890")

const referenceEmails = document.querySelectorAll(".reference-email")
referenceEmails.forEach(referenceEmail => referenceEmail.onmouseover = () => referenceEmail.innerText = "i@evc.com")
referenceEmails.forEach(referenceEmail => referenceEmail.onmouseout = () => referenceEmail.innerText = "hello@reallygreatsite.com")
