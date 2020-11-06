describe("Calculator", function() {
    describe("Addition tests", function() {
        it("should return 42", function() {
            expect(addition(20,22)).toEqual(42);
        });
        it("should return 26", function() {
            expect(addition(7,19)).toEqual(26);
        });
        it("should return error if we dont't supply two numbers", function() {
            spyOn(window, "alert");
            addition("Hitchhikers", "Guide");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
        
    });
});