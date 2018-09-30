import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBiw1bYkc4PKnp0LkZQ9EW913Zt_qM0cFk",
    authDomain: "test-project-e6287.firebaseapp.com",
    databaseURL: "https://test-project-e6287.firebaseio.com",
    projectId: "test-project-e6287",
    storageBucket: "test-project-e6287.appspot.com",
    messagingSenderId: "993064383150"
};

var fire = firebase.initializeApp(config);

export default fire;