// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//Unit tests for the sayHello function
describe("sayHello", function(){
    it("should be a defined function", function(){
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called", function(){
        expect(typeof sayHello()).toBe("string");
    });
    it("should return the string 'Hello, Jane!' when called", function(){
        expect(sayHello("Jane")).toBe('Hello, Jane!');
    });
    it("should return the string 'Hello, Alex!' when called", function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("should return the string 'Hello, Pat!' when called", function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("should return the string 'Hello, World!' when called, and input value is undefined", function(){
       expect(sayHello()).toBe("Hello, World!");
    });
    it("should return the string 'Hello, World!' when called and input === true", function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("should return the string 'Hello, World!' when called and input === false", function(){
       expect(sayHello(false)).toBe("Hello, World!");
    });
    it("should return the string 'I cannot say hello to a number...' when called and input type is a number", function(){
        expect(sayHello(1)).toBe("I cannot say hello to a number...");
    });
    it("should return the string 'I cannot say hello to an object...' when called and input type is an object", function(){
        expect(sayHello([2])).toBe("I cannot say hello to an object...");
    });
});