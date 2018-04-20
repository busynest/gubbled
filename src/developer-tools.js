import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/iron-list/iron-list.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-item/paper-item.js';
import './shared-styles.js';
export class DeveloperTools extends PolymerElement {
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

    <h1>Developer Tools</h1>

    <article class="fourthList">

    <iron-ajax url="src/developer.json" last-response="{{dev}}" auto=""></iron-ajax>

    <iron-list items="[[dev]]" as="dev" scroll-offset="200">

      <template>
 
        <paper-item class="post">
            <div class="description">
              <!-- Title -->
              <a href="[[dev.url]]" target="_blank">
                <div class="title">

                  <img class="guestLogo" src="./images/developer.png" alt="Mozilla Developers" width="48" height="48">

                  <div class="stamp">
                    <ul>
                      <!-- Title -->
                      <li><h2 class="postTitle">[[dev.title]]</h2></li>
                      <!-- Publisher -->
                      <li><div class="publisher">[[dev.publisher]]</div></li>
                    </ul>
                  </div>
                  
                  <iron-icon class="link" icon="link">
                  </iron-icon>
                </div>
              </a>
              <p class="paragraph">[[dev.paragraph]]</p>
            </div>
            <div class="api">
              <ul>
                <li><a href="https://{{dev.l1}}">[[dev.i1]]</a></li>
                <li><a href="https://{{dev.l2}}">[[dev.i2]]</a></li>
                <li><a href="https://{{dev.l3}}">[[dev.i3]]</a></li>
                <li><a href="https://{{dev.l4}}">[[dev.i4]]</a></li>
                <li><a href="https://{{dev.l5}}">[[dev.i5]]</a></li>
              </ul>
            </div>
            <div class="vote">
                <div class="organize"></div>
                <div class="rank">{{rank}}</div>
                <iron-icon>{{down}}</iron-icon> <!-- icon="arrow-downward" -->
                <iron-icon onclick="up()">{{up}}</iron-icon> <!--  icon="arrow-upward" -->
                <a class="action" href="[[dev.url]]">
                  
                </a>
              </div>
          </paper-item>

      </template>
    </iron-list>
  </article>
`;
  }

  static get is() { return 'developer-tools'; }

  constructor() {
    super();
  }

  static get properties() {
      return {


      };
  }
}



window.customElements.define(DeveloperTools.is, DeveloperTools);

/*

  connectedCallback() {
    super.connectedCallback();
    console.log('my-element created!');
  }

  ready() {
    super.ready();
  }


*/
;
