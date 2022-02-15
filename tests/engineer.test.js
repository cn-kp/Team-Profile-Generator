const Engineer = require("../lib/engineer");

const engineer = new Engineer("kevin","sampleEmail",10,"github");

describe("testing engineer object",() => {
    describe("testing all variables", () => {
        // const engineer = new Engineer("kevin","sampleEmail",10,"github");
        it("should ensure that the correct property values are passed through",() => {
            expect(engineer.name).toBe("kevin");
            expect(engineer.email).toBe("sampleEmail");
            expect(engineer.id).toBe(10);
            expect(engineer.github).toBe("github");
        })
    })
    describe("checking the getGithub property", () => {
        it("should call the getGithub from engineer.js",() => {
            expect(engineer.getGithub()).toBe('github');
        })
    })
})
