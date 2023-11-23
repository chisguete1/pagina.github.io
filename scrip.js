function agregarProducto(nombre, precio) {
    // Obtener la lista de productos
    var listaCarrito = document.getElementById('lista-carrito');

    // Crear un nuevo elemento de lista (li) para el producto
    var nuevoProducto = document.createElement('li');
    nuevoProducto.textContent = `${nombre} - Precio: $${precio.toFixed(2)}`;

    // Crear un botón para eliminar el producto
    var botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Cancelar compra';
    botonEliminar.onclick = function () {
        listaCarrito.removeChild(nuevoProducto);
    };

    // Agregar el botón de eliminar al producto en el carrito
    nuevoProducto.appendChild(botonEliminar);

    // Agregar el producto a la lista del carrito
    listaCarrito.appendChild(nuevoProducto);
}