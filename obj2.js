// const tinderUser=new Object()//its a singleton object

// console.log(tinderUser)
// const tinder={}//non singleton obj
// // console.log(tinder)
// const tinder={}
// tinder.id="123asd"
// tinder.name="Archana"

// // console.log(tinder);

// const regularUser={
//     email:"arch@gmail.com",
//     fullname:{
//         userfullname:{
//             fisrtname:"archana",
//             lastname:"maurya"
//         }
//     }
// }
// console.log(regularUser)

// const obj1={1: "a", 2:"b"}
// const obj2={3: "a", 4:"b"}
// const obj4={4: "a", 5:"b"}


// //const obj3={obj1,obj2}
// const obj3=Object.assign(obj1,obj2,obj4)
// console.log(obj3);


const course={
    coursname:"js in hindi",
    price:"999",
    courseInstructor:"1_month"

}
// course.courseInstructor

const {courseInstructor: instructor}=course
 console.log(courseInstructor);
 console.log(instructor)