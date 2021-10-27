// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBYL9rnIuTqZm_T0l-KEL5ktXsua0SycAc",
      authDomain: "catherineangelinabot-yhjc.firebaseapp.com",
      databaseURL: "https://catherineangelinabot-yhjc-default-rtdb.firebaseio.com",
      projectId: "catherineangelinabot-yhjc",
      storageBucket: "catherineangelinabot-yhjc.appspot.com",
      messagingSenderId: "357827274507",
      appId: "1:357827274507:web:d66b611e0e1a3f54d5e40e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding Room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name-" + Room_names);
                  row = "<div class='room_name' id='" + Room_names + "' onclick='redirect_To_Roomname(this.id)'>#" + Room_names + "</div> <hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();
function redirect_To_Roomname(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}