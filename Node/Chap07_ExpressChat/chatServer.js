// chat
const chatServer = (io) => {
  io.on('connection', socket => {

    socket.on('login', data => {
      socket.nickname = data || 'Guest';
      io.emit('toClient', `Server: ${socket.nickname}님이 입장하셨습니다.`)
    });

    socket.on('logout', () => {
      io.emit('toClient', `Server: ${socket.nickname}님이 퇴장하셨습니다.`)
    });

    socket.on('chat', data => {
      io.emit('toClient', `Server: ${socket.nickname}: ${data}`)
    });

  });
}
module.exports = chatServer;
