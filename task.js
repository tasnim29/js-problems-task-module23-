//task1:Find the lowest number in the array below.
 function lowest(numbers){
    let lowestNum = numbers[0];
    for(const num of numbers){
     if(num<lowestNum){
         lowestNum=num;
     }
    }
    return lowestNum;
}
 const heights2 = [167, 190, 120, 165, 137];
 const result = lowest(heights2);
 console.log('First questions answer');
 console.log(result);



//-----------------------------------

//task2:Find the friend with the smallest name.
function smallest(names){
    let smallestName = names[0];
    for(const name of names){
        if(name.length<smallestName.length){
            smallestName=name;
        }
    }
    return smallestName;
}

const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed','do'];
const result2 = smallest(friends);
console.log('second questions answer');
console.log(result2);

//------------------------

//task3:   
/*laptop = 35000 tk
tablet = 15000 tk
mobile = 20000 tk
*/
function calculateElectronicsBudget(allThings){
    let totalMoney = 0;
    for(const thing of allThings){
        totalMoney = totalMoney + thing.price * thing.quantity;
        
    }
    return totalMoney;
}
const things =[
    {name:'laptop', price:35000,quantity:2 },
    {name:'Tablet', price:15000,quantity:3 },
    {name:'Mobile', price:20000,quantity:4 },
];
const totalMoney = calculateElectronicsBudget(things);
console.log('third questions answer');
console.log(totalMoney);

//task4:

function findAveragePhonePrice (allPhones){
    let sum = 0;
    for(const phone of allPhones){
        sum = sum + phone.price;
    }
    
    avg = sum / allPhones.length;
    return  avg;
    
}
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
const avgPrice = findAveragePhonePrice (phones);
console.log('fourth questions answer');
console.log(parseFloat(avgPrice).toFixed(2));

// task:5
// function calculateSalary(employeesInfo){
//     let total = 0;
//     for(const employee of employeesInfo){
//         total = total + employee.starting + employee.experience* employee.increment;
        
//     }
//     return total;
// }


// const employees = [
//     { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//     { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//     { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//     { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
// ];
// const totalSalary = calculateSalary (employees);
// console.log(totalSalary);

//other way----------
function calculateSalary(employeesInfo){
   let combinedSalary = 0;
    for(const employee of employeesInfo){
        total= 0;
        total = total + employee.starting + employee.experience* employee.increment;  
        console.log(`${employee.name}: ${total}`);
        combinedSalary=combinedSalary+total;
    }
    return combinedSalary;

}
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
const totalSalary = calculateSalary (employees);
console.log('fifth questions answer');
console.log('total salary provided by the company:',totalSalary);