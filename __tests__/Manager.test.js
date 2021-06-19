const Manager = require("../lib/Manager");


test("Test getOfficeNumber()", () => {
    const eTest = new Manager ('Fran', '01','fran@email.com', '12');
    expect(eTest.getOfficeNumber()).toEqual(expect.stringContaining('12'));
});

test("Test getRole() should return \"Manager\"", () => {
  const role = "Manager";
  const eTest = new Manager ('Fran', '01','fran@email.com', '12');
  expect(eTest.getRole()).toBe(role);
});