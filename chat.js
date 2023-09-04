// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}

function addRoom() 
{ 
    room_name = document.getElementById("room_name").value; 
    firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
    
    localStorage.setItem("room_name", room_name);
     
    window.location = "kwitter_page.html";
  
}


function getData() 
{ 
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
    
    snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
   
        Room_names = childKey; 
    console.log("Room Name - " + Room_names); 

    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML += row; }); });
 }




