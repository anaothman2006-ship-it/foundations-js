/*
const names = [
  "Othman", "Ahmed", "Sami", "Zain", "Nasser", 
  "Omar", "Mariam", "Laila", "Yassine", "Hamza",
  "Sara", "Ali", "Hassan", "Nour", "Fatima",
  "Yousef", "Ibrahim", "Khaled", "Amira", "Rayan"
];
console.log(names)
function findName() {
    const userInput = prompt("Enter the name you want to change: ");
    if (!userInput) {
        return {message: "Operation Cancelled", updateList: names}
    }
    const changedUserInput = prompt("Enter the new name: ");

    const appropriateUserInput = userInput.slice(0, 1).toUpperCase() + userInput.slice(1).toLowerCase();

    const start = names.indexOf(appropriateUserInput);
    const deleteCount = 1;
    const addNewName = changedUserInput;
    if (start !== -1) {
        names.splice(start, deleteCount, changedUserInput);
        return {
            message: `${userInput} => ${addNewName}`,
            updateList: names
        };
    }    
     else {
        return {
           message: "Name not found!",
           updateList: names
        }
    }

}
const result = findName();
console.log(result.message);
console.log(result.updateList);

*/

const employees = ["Ahmed", "Sara", "Othman", "Mariam", "Ali"];

function getNewName() {
    const userNameInput = prompt("Enter the employe name you looking for:");
    if (!userNameInput) {
        return {message: "Operation Cancelled", updateList: employees}
    }
    const validNameInput = userNameInput.slice(0, 1).toUpperCase() + userNameInput.slice(1).toLowerCase();
    const start = employees.indexOf(validNameInput);

    if (start !== -1) {
        const newUserName = prompt("Enter the New name: ");
        employees.splice(start, 1, newUserName);
        return {
            message: `${validNameInput} has been changed to ${newUserName} in index ${start}`,
            updateList: employees
        };
    }
    else {
        employees.push(validNameInput);
        const index = employees.length - 1
        return {
            message: `new employee has been added in index ${index}`,
            updateList: employees,
        }
    }
}
const result = getNewName();
console.log(result.message);
console.table(result.updateList);

