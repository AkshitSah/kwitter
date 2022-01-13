
var firebaseConfig = {
  apiKey: "AIzaSyCaQe8NzYe91BZbNl4DHx21s0-4p5aaTxI",
  authDomain: "kwitter-1c922.firebaseapp.com",
  databaseURL: "https://kwitter-1c922-default-rtdb.firebaseio.com",
  projectId: "kwitter-1c922",
  storageBucket: "kwitter-1c922.appspot.com",
  messagingSenderId: "5840691554",
  appId: "1:5840691554:web:7047d10598916eb5750c3b"
};

// Initialize Firebase
firebase. initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="welcome" +":";
function addRoom()
{
  room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
 purpose:"adding room name" 
})
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";

}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}