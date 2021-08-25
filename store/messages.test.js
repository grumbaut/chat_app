const messages = require("./messages")
// @ponicode
describe("messages.gotMessages", () => {
    test("0", () => {
        let callFunction = () => {
            messages.gotMessages("Top level object in 'override.yml' needs to be an object")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            messages.gotMessages("TypeError exception should be raised")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            messages.gotMessages("Invalid [%s] value. %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            messages.gotMessages("Warning: ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            messages.gotMessages("Message recipient is the same as originator")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            messages.gotMessages(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
