const Employee = require('../lib/employee')

const employee = new Employee("kevin","sampleEmail",10);

describe("testing employee object",() => {
    describe("testing all variables", () => {
        it("should ensure that the correct property values are passed through",() => {
            expect(employee.name).toBe("kevin");
            expect(employee.email).toBe("sampleEmail");
            expect(employee.id).toBe(10);
        })
    })
    describe("checking the getName property", () => {
        it("should call the getName from employee.js",() => {
            expect(employee.getName()).toBe('kevin');
        })
    })
    describe("checking the getEmail property", () => {
        it("should call the getEmail from employee.js",() => {
            expect(employee.getEmail()).toBe('sampleEmail');
        })
    })
    describe("checking the getId property", () => {
        it("should call the getId from employee.js",() => {
            expect(employee.getId()).toBe(10);
        })
    })
    describe("checking the getRole property", () => {
        it("should call the getRole from employee.js",() => {
            expect(employee.getRole()).toBe('employee');
        })
    })
})