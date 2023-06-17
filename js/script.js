
let carrito = ""
let totalCompra = 0
let articulos =
  "Articulos:\n1 - maseta x $2100\n2 - perchero x $2500\n3 - destapador x $5000\n4 - centro de mesa x $1800\n5 - ver total\n6 - fin del pedido\n0 - salir"

function agregarAlCarrito() {
  let producto
  let salir = false

  do {
    producto = parseInt(prompt(articulos))

    if (producto === 1) {
      alert("Producto agregado: maseta")
      totalCompra += 2100
    } else if (producto === 2) {
      alert("Producto agregado: perchero")
      totalCompra += 2500
    } else if (producto === 3) {
      alert("Producto agregado: destapador")
      totalCompra += 5000
    } else if (producto === 4) {
      alert("Producto agregado: centro de mesa")
      totalCompra += 1800
    } else if (producto === 5) {
      alert("Total actual: $" + totalCompra)
    } else if (producto === 6) {
      alert("El total de su compra es $" + totalCompra)
      calcularTotalCompra()
    } else if (producto === 0) {
      salir = true
      break
    } else {
      alert("Opción inválida")
    }
  } while (!salir)

  alert("Gracias por visitarnos")
}

function calcularTotalCompra() {
  if (totalCompra === 0) {
    alert("Por favor agregar productos")
  }
}

agregarAlCarrito()
