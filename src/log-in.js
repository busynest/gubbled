import { Element } from '../../@polymer/polymer/polymer-element.js';
import '../../@polymer/paper-button/paper-button.js';
import '../../@polymer/paper-card/paper-card.js';
import '../../@polymer/paper-input/paper-input.js';
import './shared-styles.js';
const $_documentContainer = document.createElement('div');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="log-in">
  <template id="app">
    <style media="screen" include="shared-styles">
      :host {
        display: block;
      }

      paper-button {
        margin: auto;
      }

    </style>

      <paper-card>
        <paper-input id="txtEmail" label="Email"></paper-input>
        <paper-input id="txtPassword" label="Password"></paper-input>
        <paper-button id="logIn" class="">Log-in with Google</paper-button>
        <paper-button id="signUp" class="">Sign-in with Google</paper-button>
        <paper-button hidden="" id="logOut" class="">Sign-in with Google</paper-button>
      </paper-card>

    </template>

  
<!--
  <script>

  (function() { 

  var config = {
        apiKey: "AIzaSyBZIupri6OCDeNXJhrq_ECwTbauN5r8ZMs",
        authDomain: "gubbled-19e35.firebaseapp.com",
        databaseURL: "https://gubbled-19e35.firebaseio.com",
        projectId: "gubbled-19e35",
        storageBucket: "gubbled-19e35.appspot.com",
        messagingSenderId: "891532970940"
      };
  firebase.initializeApp(config);

  const txtEmail = document.getElementById('textEmail');
  const txtPassword = document.getElementById('txtPassword');
  const logIn = document.getElementById('logIn');
  const signUp = document.getElementById('signUp');
  const logOut = document.getElementById('logOut');

  }());

  &lt;/script>
-->
</dom-module>`;

document.head.appendChild($_documentContainer);
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class LogIn extends Element {
  static get is() { return 'log-in'; }

  constructor() {
    super();

    const txtEmail = document.getElementById('textEmail');
    const txtPassword = document.getElementById('txtPassword');
    const logIn = document.getElementById('logIn');
    const signUp = document.getElementById('signUp');
    const logOut = document.getElementById('logOut');
  }

  logIn() {
    //Get Email and Password
    const email = txtEmail.value();
    const pass = txtPassword.value();
    const auth = firebase.auth();
    // Sign-in
    const promise = auth.signInWithEmailAndPassword(email, pass);
  }

}


window.customElements.define(LogIn.is, LogIn);

/*
  <script>

  (function() { 

  var config = {
        apiKey: "AIzaSyBZIupri6OCDeNXJhrq_ECwTbauN5r8ZMs",
        authDomain: "gubbled-19e35.firebaseapp.com",
        databaseURL: "https://gubbled-19e35.firebaseio.com",
        projectId: "gubbled-19e35",
        storageBucket: "gubbled-19e35.appspot.com",
        messagingSenderId: "891532970940"
      };
  firebase.initializeApp(config);

  const txtEmail = document.getElementById('textEmail');
  const txtPassword = document.getElementById('txtPassword');
  const logIn = document.getElementById('logIn');
  const signUp = document.getElementById('signUp');
  const logOut = document.getElementById('logOut');

  }());

  </script>
*/
/**



html, body {
  font-family: 'Roboto', 'Helvetica', sans-serif;
}
main, #messages-card {
  height: 100%;
  padding-bottom: 0;
}
#messages-card-container {
  height: calc(100% - 150px);
  padding-bottom: 0;
}
#messages-card {
  margin-top: 15px;
}
.mdl-layout__header-row span {
  margin-left: 15px;
  margin-top: 17px;
}
.mdl-grid {
  max-width: 1024px;
  margin: auto;
}
.material-icons {
  font-size: 36px;
  top: 8px;
  position: relative;
}
.mdl-layout__header-row {
  padding: 0;
  margin: 0 auto;
}
.mdl-card__supporting-text {
  width: auto;
  height: 100%;
  padding-top: 0;
  padding-bottom: 0;
}
#messages {
  overflow-y: auto;
  margin-bottom: 10px;
  height: calc(100% - 80px);
}
#message-filler {
  flex-grow: 1;
}
.message-container:first-of-type {
  border-top-width: 0;
}
.message-container {
  display: block;
  margin-top: 10px;
  border-top: 1px solid #f3f3f3;
  padding-top: 10px;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}
.message-container.visible {
  opacity: 1;
}
.message-container .pic {
  background-image: url('/images/profile_placeholder.png');
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  background-size: 30px;
  border-radius: 20px;
}
.message-container .spacing {
  display: table-cell;
  vertical-align: top;
}
.message-container .message {
  display: table-cell;
  width: calc(100% - 40px);
  padding: 5px 0 5px 10px;
}
.message-container .name {
  display: inline-block;
  width: 100%;
  padding-left: 40px;
  color: #bbb;
  font-style: italic;
  font-size: 12px;
  box-sizing: border-box;
}
#message-form {
  display: flex;
  flex-direction: row;
  width: calc(100% - 48px);
  float: left;
}
#image-form {
  display: flex;
  flex-direction: row;
  width: 48px;
  float: right;
}
#message-form .mdl-textfield {
  width: calc(100% - 100px);
}
#message-form button, #image-form button {
  width: 100px;
  margin: 15px 0 0 10px;
}
.mdl-card {
  min-height: 0;
}
.mdl-card {
  background: linear-gradient(white, #f9f9f9);
  justify-content: space-between;
}
#user-container {
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 22px;
  width: 100%;
  right: 0;
  padding-left: 10px;
  justify-content: flex-end;
  padding-right: 10px;
}
#user-container #user-pic {
  top: -3px;
  position: relative;
  display: inline-block;
  background-image: url('/images/profile_placeholder.png');
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  background-size: 40px;
  border-radius: 20px;
}
#user-container #user-name {
  font-size: 16px;
  line-height: 36px;
  padding-right: 10px;
  padding-left: 20px;
}
#image-form #submitImage {
  width: auto;
  padding: 0 6px 0 1px;
  min-width: 0;
}
#image-form #submitImage .material-icons {
  top: -1px;
}
.message img {
  max-width: 300px;
  max-height: 200px;
}
#mediaCapture {
  display: none;
}
@media screen and (max-width: 610px) {
  header {
    height: 113px;
    padding-bottom: 80px !important;
  }
  #user-container {
    top: 72px;
    background-color: rgb(3,155,229);
    height: 38px;
    padding-top: 3px;
    padding-right: 2px;
  }
  #user-container #user-pic {
    top: 2px;
    width: 33px;
    height: 33px;
    background-size: 33px;
  }
}
.mdl-textfield__label:after {
  background-color: #0288D1;
}
.mdl-textfield--floating-label.is-focused .mdl-textfield__label {
  color: #0288D1;
}
.mdl-button .material-icons {
  top: -1px;
  margin-right: 5px;
}


        signInAnonymously = function() {
          this.error = null;
          this.$.auth.signInAnonymously();
        }

        signInWithGoogle = function() {
          this.error = null;
          this.$.auth.signInWithPopup();
        }

        signInWithEmailAndPassword = function(e) {
          if (e) { e.preventDefault(); }
          this.error = null;
          this.$.auth.signInWithEmailAndPassword(this.email, this.password);
          this.email = null;
          this.password = null;
        }

        createUserWithEmailAndPassword = function() {
          this.error = null;
          this.$.auth.createUserWithEmailAndPassword(this.email, this.password);
          this.email = null;
          this.password = null;
        }

        signOut = function() {
          this.error = null;
          this.$.auth.signOut();
        }


<link rel="import" href="../bower_components/polymerfire/firebase-app.html">
<link rel="import" href="../bower_components/polymerfire/firebase-auth.html">
<link rel="import" href="../bower_components/polymerfire/firebase-query.html">
<link rel="import" href="../bower_components/paper-button/paper-button.html">
<link rel="import" href="../bower_components/paper-input/paper-input.html">
  */
;
