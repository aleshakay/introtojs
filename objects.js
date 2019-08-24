const bouncer =(age) =>{ 
    if (age >= 21){
        console.log('Drink (at the bar)')
    } else {
        console.log('Shame')
    }
}

bouncer(12);
bouncer(93);

const me = 'Alesha'
console.log(me.length)

//Challenge 

const findEmployeeStatus = (employee) => {
    if(employee.name.charAt(0).toLowerCase()==='m'){
        employee.status= 'vip';
    }else{
        employee.status = 'peasant';
    }
    console.log(`${employee.name} is a total ${employee.status}`)
}

const person={
    name: 'Michael',
    status: ''
}
/*
findEmployeeStatus(person);
console.log(`${person.name} is a total ${person.status}`)
*/
findEmployeeStatus({
    name:prompt('Enter Employee Name: '),
    status: ''
});
