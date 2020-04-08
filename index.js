const data = [{principal: 2500, time: 1.8},  
              {principal: 1000, time: 5}, 
              {principal: 3000, time: 1},
              {principal: 2000, time: 3}
            ];
let rate, result;
const interestData = [];

const interestCalculator = array=>{
 array.map(data=>{
 if (data.principal >= 2500 && data.time>1 && data.time < 3){
  rate = 3;


}else if (data.principal>= 2500 && data.time >=3){
 rate = 4;


}else if(data.principal < 2500 && data.time <=1){

rate = 2


}else{
rate = 1



}
var interest = (data.principal * data.time * rate)/100
result = {principal: data.principal, time: data.time, rate, interest}
interestData.push(result)

})

console.log(interestData)
return interestData

}

interestCalculator(data)