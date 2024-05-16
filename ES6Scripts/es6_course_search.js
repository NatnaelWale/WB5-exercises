"use strict";

let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

// When does the PROG200 course start?

// ========1st way by writing a whole function======//

// function getProgramStartDate(course){
//    return course.CourseId === "PROG200";
// }
// console.log(courses.find(getProgramStartDate).StartDate);

// ========2nd way by writing an arrow function======//

// const outPut1 = courses.find((course) => course.CourseId === "PROG200");
// console.log(outPut1.StartDate)



// What is the title of the PROJ500 course?

// ========1st way by writing a whole function======//

// function getTitleByCourseId(course){
//   return course.CourseId === "PROJ500";
// };

// console.log(courses.find(getTitleByCourseId).Title)

// ========2nd way by writing an arrow function======//

// let outPut2 = courses.find((course) => course.CourseId === "PROJ500");

// console.log(outPut2.Title);



// What are the titles of the courses that cost $50 or less?

// ========1st way by writing a whole function======//

// function getCoursesWithPrice(course) {
//     return course.Fee <= 50;
//   }


// console.log(courses.filter(getCoursesWithPrice));


// ========2nd way by writing an arrow function======//

// const outPut3 = courses.filter(course => course.Fee <= 50).map(course => course.Title);

// console.log(outPut3);



// What classes meet in "Classroom 1"?

// ========1st way by writing a whole function======//
// function getClassesByClassroom(course) {
//   return course.Location === "Classroom 1";
// }

// console.log(courses.filter(getClassesByClassroom))

// ========2nd way by writing an arrow function======//
// let classRoom1Classes = courses.filter((course) => course.Location === "Classroom 1").map((course) => course.Title);

// console.log(classRoom1Classes);
