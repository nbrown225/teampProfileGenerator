const Manager = require('../lib/Manager');

test(`create manager object`, () => {
    const manager = new Manager('Ben', 411, 'ben@job.com', 1);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.building).toEqual(expect.any(Number));
});