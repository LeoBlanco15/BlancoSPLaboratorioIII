class Vehiculo {
  constructor(id, marca, modelo, precio, type) {
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.type = type;
  }
}

class Auto extends Vehiculo {
  constructor(id, marca, modelo,precio , cantidadPuertas) {
    super(id, marca, modelo, precio, "Auto");
    this.cantidadPuertas = cantidadPuertas;
  }
}
class Camioneta extends Vehiculo {
  constructor(id, marca, modelo,precio , cuatroXCuatro) {
    super(id, marca, modelo, precio, "Camioneta");
    this.cuatroXCuatro = cuatroXCuatro;
  }
}
