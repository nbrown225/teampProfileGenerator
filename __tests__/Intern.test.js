const Intern = require('../lib/Intern');

test(`create inten object`, () => {
    const intern = new Intern('Berry', 311, 'berry@job.com', 'UCAU');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

});

test(`get intern school`, () => {
    const intern = new Intern('Berry', 322, 'berry@job.com', 'UCAU');

    expect(intern.school).toEqual(expect.any(String));
    
});

test(`get role`, () => {
    const intern = new Intern('Berry', 322, 'berry@job.com', 'UCAU');

    expect(intern.getRole()).toEqual("Intern");
    
});

