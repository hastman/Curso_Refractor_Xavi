

describe("LeetterTest",function(){

  var classValorObject;

  beforeEach(function(){
    classValorObject = new ClassValorObject();
  });

  it("Input letter A",function(){
    expect(classValorObject.giveMeAn("A")).toEqual("A");
  });

  it("Input number 6",function(){
    expect(classValorObject.giveMeAn("6")).toEqual("");
  });

})
