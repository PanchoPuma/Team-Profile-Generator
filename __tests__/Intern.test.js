const Intern = require("../lib/Intern");


test("Test getSchool()", () => {
    const eTest = new Intern ('Fran', '01','fran@email.com', 'UBC');
    expect(eTest.getSchool()).toEqual(expect.stringContaining('UBC'));
});

test("Test getRole() should return \"Intern\"", () => {
  const role = "Intern";
  const eTest = new Intern ('Fran', '01','fran@email.com', 'UBC');
  expect(eTest.getRole()).toBe(role);
});