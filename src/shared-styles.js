import '../../@polymer/polymer/polymer-element.js';
const $_documentContainer = document.createElement('div');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  	<template>
    	<style>
        @media screen and (max-width: 580px) {
          .description, .firstScript {
            display: block;
          }
        }
        a, a:link, a:hover, a:visited, a:active {
          text-decoration: none;
          /* color: #1abc9c; */
        }
        h1 {
          /* text-align: center; */
          color: black;
          font-size: 20px;
        }
        h2 {
          font-size: 20px;
          margin: 0px;
        }
        h3 {
          display: inline;
        /* color: #1abc9c; */
        }
        /*
        h4 {
         color: #1abc9c;
        }
        */
        p {
          /* font-family: 'Roboto', 'Noto', sans-serif; */
          text-align: justify;
          /* color: black;  #e0e0e0 */
          font-size: 16px;
          line-height: 24px;
        }
        .paragraph {
          text-align: justify;
          margin: 5px 0px 5px 0px;
        }
        article {
          margin: auto;
          /* max-width: 800px; */
        }
        iron-list {
          --iron-list-items-container: {
          }
        }
        paper-icon-button {
          color: #f4b400; /* #7e57c2 */
          padding: 0px;
          height: 25px;
        }
        paper-button {
          font-size: 18px;
          height: 40px;
          margin: auto;
          color: black; /* #f4b400 */
        }
        /*
        paper-card {
          width: 100%;
          background-color: var(--paper-blue-600);
          color: white !important;
          padding: 15px;
        }
        */
        /*
        paper-item {
          color: #1abc9c;
        }
        */
        .orange {
          color: #f4b400;
        }
        .grid {
          background-color: #37474f;
          padding: 16px;
          display: grid;
          grid-template-columns: 1fr;
        }
        .api {
          margin: 0px 5px 5px 5px;
          color: #9e9e9e;
        }
        .link {
          color: #1abc9c; /* #7e57c2 */
        }

/*  Feed  */

        .post {
          /* background-color: #37474f; */
          padding: 0px;
          padding-bottom: 16px;
          display: grid;
          grid-template-columns: 1fr;
        }
        .description {
          margin:5px;
        }
        .title {
          display: grid;
          grid-auto-flow: row;
          grid-template-columns: 48px 1fr 40px;
          grid-template-rows:  ;
          /* color: #f4b400; */
        }
        .postTitle {
          color: black; /* #1abc9c */
          text-transform: uppercase;
        }
        .publisher {
          font-size: 12px;
          color: black; /* #1abc9c */
        }
        .domain {
          color: black; /* #1abc9c */
          font-size: .6em;
        }
        .vote {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
        }
        .action {
          margin: auto;
        }

/* SOCIAL BUTTONS */

        .facebook {
          background-color: #4267b2;
          width: 50%;
        }
        .google {
          background-color: #DD4B39;
          width: 50%;
        }
        .twitter {
          background-color: #00aced;
          width: 50%;
        }
        .email {
          background-color: grey;
          width: 50%;
        }
        .facebook, .google, .twitter, .email {
          color: #fff;
          line-height: 26px;
          padding: 0 10px;
          border-color: #4267b2;
          box-sizing: content-box;
          -webkit-font-smoothing: antialiased;
          font-weight: bold;
          justify-content: center;
          text-align: center;
          text-shadow: none;
        }
      .home {
        margin: 0px;
      }
      .footer {
        width: 100%;
        height: 64px;
      }
      .mains {
        margin-left: 45px;
        font-size: .7em;
        color: #f4b400;
      }
      .login {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      .signin {
        -ms-transform: scale(.7,.7); /* IE 9 */
        -webkit-transform: scale(.7,.7); /* Chrome, Safari, Opera */
        transform: scale(.7,.7);
      }
    </style>
  </template>
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
/* shared styles for all views */
/* 



          paper-toggle-button {
          margin: 5px;
          --paper-toggle-button-unchecked-bar-color:#e0e0e0;
          --paper-toggle-button-checked-bar-color:#1abc9c;

          --paper-toggle-button-unchecked-button-color:#1abc9c;
          --paper-toggle-button-checked-button-color:#f4b400;

          --paper-toggle-button-label-color:#e0e0e0;
        }




        */
;
