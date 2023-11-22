const chatServer = (io) => {
  io.on('connection', (socket) => {     // [접속한클라이언트, 접속한클라이언트, ...]

    // 브라우저에서 emit('login', 사용자 아이디);
    socket.on('login', (data) => {
      socket.nickname = data;
      io.emit('toClient', `${socket.nickname}님이 입장했습니다`);
    });

    socket.on('toServer', (data) => {
      // console.log(data);
      io.emit('toClient', `${socket.nickname}: ${data}`);
    });

    socket.on('logout', () => {
      io.emit('toClient', `${socket.nickname}님이 퇴장했습니다`);
    })
  })
}
module.exports = chatServer;
