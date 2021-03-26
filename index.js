// Write your solution in this file!
const employee = {
    name: 'Employee Name',
    streetAddress: 'Street Address'
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const updatedEmployeeInfo = {...obj};
    updatedEmployeeInfo[key] = value;
    return updatedEmployeeInfo;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

