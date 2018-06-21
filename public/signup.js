function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}


// Initialize Firebase
var config = {
  apiKey: "AIzaSyDbG6T4TTJvDCWBsDwlXvYjANxgXJ6VubQ",
  authDomain: "pong-3d.firebaseapp.com",
  databaseURL: "https://pong-3d.firebaseio.com",
  projectId: "pong-3d",
  storageBucket: "pong-3d.appspot.com",
  messagingSenderId: "664810787592"
};

// Get elements
const txtEmail = document.getElementById('txtEmail');
const txtPassowrd = document.getElementById('txtPassowrd');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');

btnLogin.addEventListener('click', e => {
//get email and pass
//check for real email
const email = txtEmail.value();
const pass = txtPassowrd.value;
const auth = firebase.auth();
//sign in
const promise = auth.createUserwithEmailAndPassword(email, password);
promise.catch(e => console.log(e.message));
});

btnLogout.addEventListener('click', e => {
  firebase.auth().signOut();
});

//add realtime listener
//firebase.auth().onAuthStateChanged(firebaseUser => {
//  if(firebaseUser) {
//    console.log(firebaseUser);
//    btnLogout.classlist.remove('hide');
//  } else {
//    console.log('not logged in');
//    btnLogout.classlist.add('hide');
//  }
