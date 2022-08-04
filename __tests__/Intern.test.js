const Intern = require('../lib/Intern');

test(`create inten object`, () => {
    const intern = new Intern('Berry', 311, 'berry@job.com', 'UCAU');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

})