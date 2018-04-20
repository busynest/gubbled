import { Element } from '../../@polymer/polymer/polymer-element.js';
import '../../@polymer/iron-ajax/iron-ajax.js';
import '../../@polymer/iron-list/iron-list.js';
import '../../@polymer/iron-icons/iron-icons.js';
import '../../@polymer/paper-item/paper-item.js';
import './shared-styles.js';
class GoogleDevelopers extends Element {
  static get template() {
    return `
    <style include="shared-styles">
      :host {
        display: block;
        }
              ul {
          list-style-type: none;
          margin: 0px;
          padding: 0px;
        }
    </style>

    <!-- List 2 -->

    <h1>Google Developers</h1>

    <article class="secondList">

    <iron-ajax url="src/google.json" last-response="{{google}}" auto=""></iron-ajax>

    <iron-list items="[[google]]" as="google" scroll-offset="200">

      <template>

          <paper-item class="post">
            <div class="description">
              <a href="[[google.url]]" target="_blank">
                <div class="title">
                  <img class="guestLogo" src="./images/google.png" alt="Google Developers" width="48" height="48">
                    <div class="stamp">
                      <ul>
                        <!-- Title -->
                        <li><h2 class="postTitle">[[google.title]]</h2></li>
                        <!-- Publisher -->
                        <li><div class="publisher">[[google.publisher]]</div></li>
                      </ul>
                    </div>
                  <iron-icon class="link" icon="link"></iron-icon>
                </div>
              </a>
              <p class="paragraph">[[google.paragraph]]</p>
            </div>
            <div class="api">
              <ul>
                <li><a href="https://{{google.l1}}">[[google.i1]]</a></li>
                <li><a href="https://{{google.l2}}">[[google.i2]]</a></li>
                <li><a href="https://{{google.l3}}">[[google.i3]]</a></li>
                <li><a href="https://{{google.l4}}">[[google.i4]]</a></li>
                <li><a href="https://{{google.l5}}">[[google.i5]]</a></li>
              </ul>
            </div>
            <div class="vote">
                <div class="organize"></div>
                <div class="rank">{{rank}}</div>
                <iron-icon>{{down}}</iron-icon> <!-- icon="arrow-downward" -->
                <iron-icon onclick="up()">{{up}}</iron-icon> <!--  icon="arrow-upward" -->
                <a class="action" href="[[google.url]]">
                  
                </a>
              </div>
          </paper-item>

      </template>
    </iron-list>
    </article>
`;
  }

  static get is() { return 'google-developers'; }

  constructor() {
    super();
  }

  static get properties() {
      return {


      };
  }
}


window.customElements.define(GoogleDevelopers.is, GoogleDevelopers);