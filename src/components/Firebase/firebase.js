import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyAA1GKLErKlGlswbdxlVFzDs0WIxSZLmls",
    authDomain: "colombia-viva.firebaseapp.com",
    databaseURL: "https://colombia-viva.firebaseio.com",
    projectId: "colombia-viva",
    storageBucket: "colombia-viva.appspot.com",
    messagingSenderId: "426158122083"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

     this.auth = app.auth();
     this.db = app.database();
  }
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

    // *** User API ***

   user = uid => this.db.ref(`users/${uid}`);

   users = () => this.db.ref('users');
   users_num = () => this.db.ref('users_num');

}

export default Firebase;
