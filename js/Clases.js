class Vehiculo {
  constructor(id, marca, modelo, precio) {
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
  }
}

class Auto extends Vehiculo {
  constructor(id, marca, modelo,precio , cantidadPuertas) {
    super(id, marca, modelo, precio);
    this.cantidadPuertas = cantidadPuertas;
  }
}
class Camioneta extends Vehiculo {
  constructor(id, marca, modelo,precio , cuatroXCuatro) {
    super(id, marca, modelo, precio);
    this.cuatroXCuatro = cuatroXCuatro;
  }
}
