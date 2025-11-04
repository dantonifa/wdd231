const courses = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
    technology: ["HTML", "CSS"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
    technology: ["C#"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
];
/*When  the  button with the subject CSE is clicked,
display the tabs of the courses that belongs
to the subject CSE only, that are completed
or true. Use the array filter method.*/
/*Dynamically display all the courses in the certificate section. 
The courses that you have completed must be marked in a different 
way versus those that you have not completed. 
Use your page color scheme. The page should adjust automatically 
if the data source changes.*/
const button_1 = document.getElementById("cse-button");
const button_2 = document.getElementById("wdd-button");
const button_3 = document.getElementById("all-button");
const courseList = document.getElementsByClassName("courses-container")[0];
const totalCreditsSpan = document.getElementById("total-credits");
let totalCredits = 0;
/*If the button with the subject CSE is clicked,
go to the array and filter the courses that belongs
to the subject CSE only, that are completed
or true. Use the array filter method.*/
button_1.addEventListener("click", () => {
  const cseCourses = courses.filter(
    (course) => course.subject === "CSE" && course.completed
  );
  displayCourses(cseCourses);
});
button_2.addEventListener("click", () => {
  const wddCourses = courses.filter(
    (course) => course.subject === "WDD" && course.completed
  );
  displayCourses(wddCourses);
});
button_3.addEventListener("click", () => {
  displayCourses(courses);
});
function displayCourses(courseArray) {
  /*do not delete the buttons of courses-container */
  /*display the tabs of the courses that belongs
    to the subject CSE only, that are completed
    or true. Use the array filter method, in 
    the course-list div*/
  const courseListDiv = document.getElementById("course-list");
  courseListDiv.innerHTML = "";
  totalCredits = 0;
  courseArray.forEach((course) => {
    const courseTab = document.createElement("div");
    courseTab.classList.add("course-tab");
    courseTab.innerHTML = ` 
        <h3>${course.title}</h3>
    `;
    /*add a different style for completed courses, 
    using a class from CSS*/
    if (course.completed) {
      courseTab.classList.add("completed");
    } else {
      courseTab.classList.add("not-completed");
    }
    courseListDiv.appendChild(courseTab);
    /*Calculate the sum of credits*/
    totalCredits += course.credits;
  });

  totalCreditsSpan.textContent = totalCredits;
}
