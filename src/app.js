const PRINT = Symbol("print");

class Fruit {
  [PRINT]() {
    console.log("Print fruit");
  }
}

const fruit = new Fruit();

fruit[PRINT].print();
