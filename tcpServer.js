const net = require('net');

// Crear un servidor TCP
const server = net.createServer((socket) => {
  console.log('Cliente conectado');

  // Enviar un mensaje al cliente cuando se conecte
  socket.write('Hola, cliente!\n');

  // Escuchar los datos que se reciben del cliente
  socket.on('data', (data) => {
    console.log('Datos recibidos del cliente:', data.toString());

    // Enviar una respuesta al cliente
    socket.write('Mensaje recibido: ' + data);
  });

  // Manejar la desconexión del cliente
  socket.on('end', () => {
    console.log('Cliente desconectado');
  });

  // Manejar errores en el socket
  socket.on('error', (err) => {
    console.log('Error en el socket:', err.message);
  });
});

// Configurar el puerto en el que el servidor escuchará
const port = 4000;
server.listen(port, () => {
  console.log(`Servidor TCP corriendo en el puerto ${port}`);
});