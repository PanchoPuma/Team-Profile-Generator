const Employee = require("../lib/Employee");

test("Set the name, ID and email via the arguments", () => {
    const eTest = new Employee ('Fran', '01','fran@email.com');
    expect(eTest.Name).toBe('Fran');
    expect(eTest.ID).toBe('01');
    expect(eTest.Email).toBe('fran@email.com');
});

test("Test getName()", () => {
    const eTest = new Employee ('Fran', '01','fran@email.com');
    expect(eTest.getName()).toEqual(expect.stringContaining('Fran'));
});

test("Test getID()", () => {
    const eTest = new Employee ('Fran', '01','fran@email.com');
    expect(eTest.getID()).toEqual(expect.stringContaining('01'));
});

test("Test getEmail()", () => {
    const eTest = new Employee ('Fran', '01','fran@email.com');
    expect(eTest.getEmail()).toEqual(expect.stringContaining('fran@email.com'));
});

test("Test getRole() should return \"Employee\"", () => {
  const role = "Employee";
  const eTest = new Employee ('Fran', '01','fran@email.com');
  expect(eTest.getRole()).toBe(role);
});