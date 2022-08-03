const Employee = require('../lib/Employee');

//------EMPLOYEE OBJECT--------------
test(`create the employee object`, () => {
    const employee = new Employee('Bob', 111, 'bob@job.org', 'github.bob');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));
        // expect(employee.name).toBe(expect.any(String));

});

// --------EMPLOYEE ID ----------
test(`get employee id`, () => {
    const employee = new Employee('Bob', 222, 'bob@job.org', 'github.bob');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getId()).toEqual(expect.any(Number));
});

test(`get the employee name`, () => {
    const employee = new Employee('Bob', 333, 'bob@job.org', 'github.bob')
    
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.getName()).toEqual(expect.any(String));
})

