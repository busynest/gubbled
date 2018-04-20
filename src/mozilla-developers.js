import { Element } from '../../@polymer/polymer/polymer-element.js';
import '../../@polymer/iron-ajax/iron-ajax.js';
import '../../@polymer/iron-list/iron-list.js';
import '../../@polymer/iron-icons/iron-icons.js';
import '../../@polymer/paper-item/paper-item.js';
import './shared-styles.js';
class MozillaDevelopers extends Element {
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

    <h1>Mozzila Developers</h1>

    <article class="mozilla">

    <iron-ajax url="src/mozilla.json" last-response="{{mozilla}}" auto=""></iron-ajax>

    <iron-list items="[[mozilla]]" as="mozilla" scroll-offset="200">

      <template>

        <paper-item class="post">
            <div class="description">
              <!-- Title -->
              <a href="[[mozilla.url]]" target="_blank">
                <div class="title">

                  <img class="guestLogo" src="./images/firefoxes.png" alt="Mozilla Developers" width="48" height="48">

                  <div class="stamp">
                    <ul>
                      <!-- Title -->
                      <li><h2 class="postTitle">[[mozilla.title]]</h2></li>
                      <!-- Publisher -->
                      <li><div class="publisher">[[mozilla.publisher]]</div></li>
                    </ul>
                  </div>
                  
                  <iron-icon class="link" icon="link">
                  </iron-icon>
                </div>
              </a>
              <p class="paragraph">[[mozilla.paragraph]]</p>
            </div>
            <div class="api">
              <ul>
                <li><a href="https://{{mozilla.l1}}">[[mozilla.i1]]</a></li>
                <li><a href="https://{{mozilla.l2}}">[[mozilla.i2]]</a></li>
                <li><a href="https://{{mozilla.l3}}">[[mozilla.i3]]</a></li>
                <li><a href="https://{{mozilla.l4}}">[[mozilla.i4]]</a></li>
                <li><a href="https://{{mozilla.l5}}">[[mozilla.i5]]</a></li>
              </ul>
            </div>
            <div class="vote">
                <div class="organize"></div>
                <div class="rank">{{rank}}</div>
                <iron-icon>{{down}}</iron-icon> <!-- icon="arrow-downward" -->
                <iron-icon onclick="up()">{{up}}</iron-icon> <!--  icon="arrow-upward" -->
                <a class="action" href="[[mozilla.url]]">
                  
                </a>
              </div>
          </paper-item>

      </template>
    </iron-list>
    </article>
`;
  }

  static get is() { return 'mozilla-developers'; }

  constructor() {
    super();
  }

  static get properties() {
      return {


      };
  }
}



window.customElements.define(MozillaDevelopers.is, MozillaDevelopers);
