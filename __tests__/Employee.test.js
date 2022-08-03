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

// --------EMPLOYEE NAME---------------
test(`get the employee name`, () => {
    const employee = new Employee('Bob', 333, 'bob@job.org', 'github.bob');
    
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.getName()).toEqual(expect.any(String));
});

// --------EMPLOYEE EMAIL------------
test(`get empoyees email`, () => {
    const employee = new Employee('Bob', 444, 'bob@job.org', 'github.bob');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.getEmail()).toEqual(expect.any(String));
});

// --------GITHUB------------------
test(`get the employee github`, () => {
    const employee = new Employee('Bob', 444, 'bob@job.org', 'github.bob')

    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getGithub()).toEqual(expect.any(String));

})

