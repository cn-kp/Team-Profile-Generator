const Manager = require("../lib/manager");

const manager = new Manager("kevin","sampleEmail",10,10);

describe("testing manager object",() => {
    describe("testing all variables", () => {
        it("should ensure that the correct property values are passed through",() => {
            expect(manager.name).toBe("kevin");
            expect(manager.email).toBe("sampleEmail");
            expect(manager.id).toBe(10);
            expect(manager.office).toBe(10);
        })
    })
    describe("checking the getOffice property", () => {
        it("should call the getOffice from manager.js",() => {
            expect(manager.getOffice()).toBe(10);
        })
    })
})