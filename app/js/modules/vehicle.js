class Vehicle {
    constructor(type, engineType, price) {
      this.type = type;
      this.engineType = engineType;
      this.price = price;
    }
  }
  
  // Класс для мотоцикла
  class Motorcycle extends Vehicle {
    constructor(engineType, price) {
      super('Мотоцикл', engineType, price);
    }
  }
  
  // Класс для легкового автомобиля
  class Car extends Vehicle {
    constructor(engineType, price, hybridType) {
      super('Легковой автомобиль', engineType, price);
      this.hybridType = hybridType || null;
    }
  }
  
  // Класс для грузового автомобиля
  class Truck extends Vehicle {
    constructor(engineType, price) {
      super('Грузовой автомобиль', engineType, price);
    }
  }
  
  // Функция для получения информации о транспортном средстве и его стоимости
  function getVehicleInfo() {
    const vehicleType = prompt('Введите тип транспортного средства (Мотоцикл, Легковой автомобиль, Грузовой автомобиль):');
    const engineType = prompt('Введите тип мотора (Дизель, Бензин, Гибрид, Электромобиль):');
    let hybridType = null;
    if (engineType === 'Гибрид') {
      hybridType = prompt('Введите тип гибрида (Плагин-гибрид, Полный гибрид, Мягкий гибрид):');
      engineType = prompt('Введите тип мотора гибрида (Дизель, Бензин):');
    }
    const price = parseInt(prompt('Введите стоимость транспортного средства:'));
    
    switch (vehicleType) {
      case 'Мотоцикл':
        return new Motorcycle(engineType, price);
      case 'Легковой автомобиль':
        return new Car(engineType, price, hybridType);
      case 'Грузовой автомобиль':
        return new Truck(engineType, price);
      default:
        throw new Error('Некорректный тип транспортного средства!');
    }
  }
  export { Vehicle };