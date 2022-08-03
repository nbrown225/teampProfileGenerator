const Employee = require('../lib/Employee');

//------EMPLOYEE OBJECT--------------
test(`create the employee object`, () => {
    const employee = new Employee('Bob', 111, 'bob@job.org', 'github.bob');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));
        // expect(employee.name).toBe(expect.any(String));

})