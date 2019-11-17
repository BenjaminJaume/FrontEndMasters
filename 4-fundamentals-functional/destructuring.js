const parking = {
  cars: [
    {
      brand: "Tesla",
      passenger: 5,
      isConvertible: false,
      maxSpeed: 240
    },
    {
      brand: "Mercedes",
      passenger: 3,
      isConvertible: false,
      maxSpeed: 320
    },
    {
      brand: "BMW",
      passenger: 3,
      isConvertible: true,
      maxSpeed: 280
    }
  ]
};

const { brand, passenger, isConvertible, maxSpeed } = parking.cars[0];
const [{ brand: brand1 }, { brand: brand2 }, { brand: brand3 }] = parking.cars;

console.log(`brand: ${brand}`);
console.log(`passenger: ${passenger}`);
console.log(`isConvertible: ${isConvertible}`);
console.log(`maxSpeed: ${maxSpeed}`);

console.log(brand1);
console.log(brand3);
console.log(brand2);
