<script type="text/javascript">
function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}
</script>


// Initialize Firebase
var config = {
  apiKey: "AIzaSyDbG6T4TTJvDCWBsDwlXvYjANxgXJ6VubQ",
  authDomain: "pong-3d.firebaseapp.com",
  databaseURL: "https://pong-3d.firebaseio.com",
  projectId: "pong-3d",
  storageBucket: "pong-3d.appspot.com",
  messagingSenderId: "664810787592"
};
firebase.initializeApp(config);

auth.createUserWithEmailAndPassword(email, pass);

auth.onAuthStateChanged(firebaseUser => { });
