const assert = require("chai").assert;

describe("mocha test", () => {
    it("should fail", (done) => {
        assert.fail();
        
        done()
    })
})