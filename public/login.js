
function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}

(function() {

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
const btnLogout = document.getElementById('btnLogout');

//add login event
btnLogin.addEventListener('click', e =>
  //get email and pass
  const email = txtEmail.value;
  const pass = txtPassowrd.value;
  const auth = firebase.auth();
  //sign in
  const promise = auth.signInwithEmailAndPassword(email, password);
  promise.catch(e => console.log(e.message));

}()));


firebase.initializeApp(config);

const auth = firebase.auth();
auth.signInwithEmailAndPassword(email, pass);

auth.onAuthStateChanged(firebaseUser => { });
