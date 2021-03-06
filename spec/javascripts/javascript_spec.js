describe("Canary test", function() {
  it("should work", function() {
    expect(true).toBe(true);
  });
});

describe("Calculator function test", function() {
  it("should be defined", function() {
    expect(calculator).toBeDefined()
  })

  it("should have an add function", function() {
    expect(calculator.add).toBeDefined()
  })

  it("should add correctly", function() {
    expect(calculator.add(10,5)).toBe(15)
  })

  it("should have an subtract function", function() {
    expect(calculator.subtract).toBeDefined()
  })

  it("should subtract correctly", function() {
    expect(calculator.subtract(10,5)).toBe(5)
  })

  it("should have an multiply function", function() {
    expect(calculator.multiply).toBeDefined()
  })

  it("should multiply correctly", function() {
    expect(calculator.multiply(10,5)).toBe(50)
  })

  it("should have an divide function", function() {
    expect(calculator.divide).toBeDefined()
  })

  it("should divide correctly", function() {
    expect(calculator.divide(10,5)).toBe(2)
  })


});