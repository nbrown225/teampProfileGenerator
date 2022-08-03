const Engineer = require('../lib/Engineer');

//create the engineer object
test('engineer object WILL created', () => {
    const engineer = new Engineer('Bill', 211, 'bill.engineew@jobname.net', 'github.com/bill');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
});

// GITHUB
test(`get github`, () => {
    const engineer = new Engineer('Bill', 211, 'bill.engineew@jobname.net', 'github.com/bill');

    expect(engineer.getName()).toEqual(expect.any(String));
    expect(engineer.getGithub()).toEqual(expect.any(String));

});
