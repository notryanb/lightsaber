describe("Canary test", function() {
  it("should work", function() {
    expect(true).toBe(true);
  });
});

describe("Calculator function test", function() {
  it("should be defined", function() {
    expect(calculator).toBeDefined()
  })

  // it("should have an add function", function() {
  //   expect(calculator.add).toBeDefined()
  // })

});