//array

// const myarray=[4,6,7,8,88, "hitesh",]
// console.log(myarray);
//1.in js array is non primitive data type
//2. js array are resiziable and can contain a mix of different
// data types 
//3. array containes data i single variable
//4. array is object string multiple collection of multiple items under aa single variable


//++++++++++Methods+++++++++++++++++++++++++++++++++++++++++++++
//Methods that have special treatment for empty slots include the following: concat()
// , copyWithin(), every(), filter(), flat(), flatMap(), forEach(), indexOf(), lastIndexOf(), 
// map(), reduce(), reduceRight(), reverse(), slice(), some(), sort(), and splice(). Iteration methods 
// such as forEach don't visit empty slots at all. Other methods, such as concat,
//  copyWithin, etc., preserve empty slots when doing the copying, so in the end the array is still sparse.

// const myarray1= new Array(3,4,5,6)
// const myheros=["anuj",'rahul',]
// console.log(myarray1)
// console.log(myheros)

//array methods

//  const myarray=[4,6,7,8,88]
// myarray.push(6)
// console.log(myarray)


// myarray.pop()

// console.log(myarray)
// myarray.unshift(5)
// myarray.shift()

// console.log(myarray.includes(4))
// console.log(myarray.indexOf(4))
// console.log(myarray)
// const newArr=myarray.join()

// console.log(myarray)
// console.log(newArr)
// console.log(typeof newArr);

//slice,splice

// console.log("A" ,myarray)
// const myn1=myarray.slice(1,3)

// console.log(myn1);
// console.log('B',myarray)


// const myn2=myarray.splice(1,3)
// console.log("c",myarray)
// console.log(myn2)

//part2+++++++++++++++++++++++++++++++++++++++++++++15th video
// const marvel_heros=['thor',"ironman","spiderman"]

// const dc=["superhero","flash","batman"]
// marvel_heros.push(dc)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); its not good methods but still we can use this 

//  const allhero=marvel_heros.concat(dc)
// console.log(allhero);

// const allnewhero=[...marvel_heros, ...dc]
// console.log(allnewhero)



const array4=[1,2,3,[4,6,7,8],8,[7,8],[0,9]]
const realarray=array4.flat(Infinity)
console.log(realarray)








