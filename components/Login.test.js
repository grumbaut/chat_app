const Login = require("./Login")
// @ponicode
describe("handleChange", () => {
    let inst

    beforeEach(() => {
        inst = new Login.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleChange("number", "Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleChange("string", "Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleChange("object", "Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleChange("array", "Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.handleChange("object", "elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.handleChange(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
