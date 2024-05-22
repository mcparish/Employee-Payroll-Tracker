// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
let salary = 0;

const collectEmployees = function() {
  let keepAddingEmployees = true;
  let employeesArray = [];
  while (keepAddingEmployees) {
    
    firstName = window.prompt("Enter First Name");
    lastName = window.prompt("Enter Last Name");
    salary = window.prompt("Enter Salary");
    keepAddingEmployees = window.confirm("Add more employees?");
    const employees = {  // push employees object into array - outside of while loop but in collectEmployees function.  
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary), //parse float - converts string to number.  employees.salary will equal number
    };
  
    employeesArray.push(employees);
    console.log(employees);
  
    
    if (isNaN(salary)) salary = 0;
    console.log(salary);
      if (!keepAddingEmployees) {
        return employeesArray;
      }
  };
  
  // TODO: Get user input to create and return an array of employee objects
  
return employeesArray;
};


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  // use template literal string for this function
    console.log(employeesArray)
    let totalSalary = 0;
  for(let i=0; i < employeesArray.length; i++) {
    totalSalary = totalSalary + employeesArray[i].salary; 
  }
    
    const averageSalary = (totalSalary / employeesArray.length);
    console.log(`Average Salary: ${averageSalary}`);
    console.log(`Total number of Employees: ${employeesArray.length}`);
    console.log(`The average salary between all of our employees is: ${averageSalary}`);

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {

  const Index = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[Index];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}`);
  
  

  // TODO: Select and display a random employee
  // Math random will be used in this function
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
