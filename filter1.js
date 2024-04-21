// const mynums=[4,5,6,7,8,4,4,5,5]
// const newnums=mynums.map( (num)=>{return num+10})
// console.log(newnums);

//=================chaining
 const mynums=[1,2,3,4,5,6,7,8,9]

 const newNums=mynums
                       .map( (num)=> num*10 )
                        .map((num)=>num+1)
                        .filter((num)=>num>=40)

console.log(newNums);

