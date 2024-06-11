document.addEventListener('DOMContentLoaded', function () {
  const socket = io('http://localhost:3000'); // Substitua 'localhost:3000' pelo seu endereço do servidor se necessário

  socket.on('connect', () => {
    console.log('Conectado ao servidor!');
  });

  socket.on('msgToClient', (message, clientId) => {
    console.log(`Mensagem recebida: ${message} do cliente ${clientId}`);
    const messages = document.getElementById('messages');
    const messageElement = document.createElement('li');
    messageElement.textContent = `Cliente ${clientId}: ${message}`;
    messages.appendChild(messageElement);
  });

  socket.on('previusMsg', (previousMenssage) => {
    console.log(`Mensagens carregadas!`);
    messages.innerHTML = '';
    previousMenssage.forEach( e => {
    const messageElement = document.createElement('li');
    messageElement.textContent = `Cliente ${e.clientId}: ${e.payload}`;
    messages.appendChild(messageElement);
    });
  })

  document.getElementById('sendButton').addEventListener('click', function () {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    socket.emit('msgToServer', message);
    messageInput.value = '';
  });
});
