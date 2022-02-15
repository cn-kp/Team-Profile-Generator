const Intern = require("../lib/intern");

const intern = new Intern("kevin","sampleEmail",10,"UNSW");

describe("testing intern object",() => {
    describe("testing all variables", () => {
        it("should ensure that the correct property values are passed through",() => {
            expect(intern.name).toBe("kevin");
            expect(intern.email).toBe("sampleEmail");
            expect(intern.id).toBe(10);
            expect(intern.school).toBe("UNSW");
        })
    })
    describe("checking the getSchool property", () => {
        it("should call the getSchool from intern.js",() => {
            expect(intern.getSchool()).toBe('UNSW');
        })
    })
})