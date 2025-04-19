//Problem 1

const employeesData = {
    "employees":[
        {"first_name":"Sam", "department":"Tech", "designation":"Manager", "salary":40000, "raise_eligible":true},
        {"first_name":"Mary", "department":"Finance", "designation":"Trainee", "salary":18500, "raise_eligible":true},
        {"first_name":"Bill", "department":"HR", "designation":"Executive", "salary":21200, "raise_eligible":false}
]
};
console.log("Problem 1", employeesData);

//Problem 2

const companyDetails = {
    "details":[
        {"companyName":"Tech Stars", "website":"www.techstars.site", "employees":employeesData}
]
};
console.log("Problem 2", companyDetails);

//Problem 3
const Anna = {
    "first_name": "Anna", "department": "Tech", "designation": "Executive", "salary": 25600, "raise_eligible": false
};

// Add the new employee to the existing employees array
employeesData.employees.push(Anna);
console.log("Problen 3", employeesData);
//Problem 4
function salary(techstars) {//techstars is the company, employees is the employees object
    return techstars.employees.reduce((money, employee) => money + employee.salary, 0);//reduce gets a value from the array
  }//money starts at 0, and then adds each employee's salary to its total.
  
console.log("Problen 4", "$" + salary(employeesData));

//Problem 5
function eligibility(techstars) {
    techstars.employees.forEach(employee => {
        if(employee.raise_eligible == true){
            employee.salary = employee.salary * 1.1;
            employee.raise_eligible = false;
        }
    });
    return techstars;
}
console.log("Problen 5", eligibility(employeesData));

//Problem 6
function working(techstars)  {
    techstars.employees.forEach(employee => {
        if(employee.first_name == 'Anna' || employee.first_name ==  'Sam'){
            employee.wfh = true;
        }
        else{
            employee.wfh = false;
        }
    });
    return techstars;
}

console.log("Problem 6",  working(employeesData));