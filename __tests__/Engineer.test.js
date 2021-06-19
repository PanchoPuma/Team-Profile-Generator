const Engineer = require("../lib/Engineer");


test("Test getGithub()", () => {
    const eTest = new Engineer ('Fran', '01','fran@email.com', 'Pancho');
    expect(eTest.getGithub()).toEqual(expect.stringContaining('Pancho'));
});

test("Test getRole() should return \"Engineer\"", () => {
  const role = "Engineer";
  const eTest = new Engineer ('Fran', '01','fran@email.com', 'Pancho');
  expect(eTest.getRole()).toBe(role);
});