var socket = io();
/* onclick respective button id call respective the functions */
$('#signin').click(login);
/*submit handler is used to post the values
that are entered in the form by the user
and that values are posted to the file using the post method */
function login() {
  var testform = document.getElementById('form1');
  $.ajax({
    url: '/signingin',
    type: 'POST',
    data: {
      Name: form1.name.value,
      Password: form1.pwd.value
    }
  }).done(function(result) {
    console.log(result);
    if (result.data == "false") {
      alert(result.name + " Login Successfully");
      socket.emit("setUsername", result.name);
      socket.on('name', function(data) {
        user = data.username;
        document.body.innerHTML = user + ':Online<br><input type="text" id="message">\
    <button type="button" name="sendMsg" onclick="sendMessage(user)">Send</button>\
    <div id="message-container"></div>';
      })
    }
    if (result.data == "falsepwd") {
      alert("Incorrect Password");
    }
    if (result.data == "true") {
      alert("New User Signup");
    }
  })
}
