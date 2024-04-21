const mynums=[1,2,3]
//  const myTotal=mynums.reduce(function(acc,currval){
//     console.log(`acc:${acc}and currval:${currval}`);
//    return acc+currval 
//  },0)

//arrow fuctuion me esko lkhe hain
const myTotal=mynums.reduce((acc,curr)=>acc+curr , 0   )

 console.log(myTotal);


 const shoppingCart=[
  {
    itemName:"Js course",
    price:2999
  },
  {
    itemName:"c++ course",
    price:2999
  },
  {
    itemName:"python course",
    price:2999
  },
 ]
const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);