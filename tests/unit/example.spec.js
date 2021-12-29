//Test suite
describe("Example Component", () => {
  //Test
  test("Debe de ser mayor a 10", () => {
    //Arreglar
    let value = 5;
    //Estimulación
    value = value + 2;
    //Observar el resultado(aserciones)
    if (value > 10) {
      // TODO:Todo bien
    } else {
      throw `${value} no es mayor a 10`;
    }
  });
});
