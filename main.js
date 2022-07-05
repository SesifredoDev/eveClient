
const socket = io.connect('localhost:3000', {query:'deviceType="web'})

const Http = new XMLHttpRequest();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}

socket.on('connection')

signUp = () =>{
  uname = document.getElementById("name").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  socket.emit('signUp', {'email': email, 'password': password, 'name': uname})
  console.log(uname, email, password)
}

login = () =>{
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  socket.emit('login', {'email': email, 'password':password  })
}

socket.on("valid", data =>{console.log(data)})