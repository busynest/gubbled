import { Element } from '../../@polymer/polymer/polymer-element.js';
import '../../@polymer/iron-ajax/iron-ajax.js';
import '../../@polymer/iron-list/iron-list.js';
import '../../@polymer/iron-icons/iron-icons.js';
import '../../@polymer/paper-icon-button/paper-icon-button.js';
import '../../@polymer/paper-item/paper-item.js';
import './shared-styles.js';
class WebsiteDevelopment extends Element {
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

    <!-- List 1 -->

    <h1>Website Applications</h1>
    <p>
      Web-Apps are an attemt to make websites act-like applications by utilizing the technologies of a Manifest, Service Worker, and the Application Shell Architecture.
    </p>
    <p>
      Many frameworks are still developing Web-Apps, and are subject to change depending on the agreed deployment of browers.
    </p>
    <p>
      Google is at the forefront of this race, but dependant on Apple and Mozilla to come to an agreement for the implementation of technologies.
    </p>
    <p>
      Google's Polymer Project uses to Web Components to encapsulae Custom HTML Elements to reuse code within the DOM with Data Binding.
    </p>
    <p class="orange">
      Links for you to read:
    </p>

    <article class="firstList">

    <iron-ajax url="src/website.json" last-response="{{progressive}}" auto=""></iron-ajax>

    <iron-list items="[[progressive]]" as="progressive" scroll-offset="200">

    <template>

        <paper-item class="post">
            <div class="description">
              <!-- Title -->
              <a href="[[progressive.url]]" target="_blank">
                <div class="title">

                  <img class="guestLogo" src="./images/webapp.png" alt="Mozilla Developers" width="48" height="48">

                  <div class="stamp">
                    <ul>
                      <!-- Title -->
                      <li><h2 class="postTitle">[[progressive.title]]</h2></li>
                      <!-- Publisher -->
                      <li><div class="publisher">[[progressive.publisher]]</div></li>
                    </ul>
                  </div>
                  
                  <iron-icon class="link" icon="link">
                  </iron-icon>
                </div>
              </a>
              <p class="paragraph">[[progressive.paragraph]]</p>
            </div>
          </paper-item>

    </template>

  </iron-list>
</article>
`;
  }

  /*static get is() { return 'website-development'; }*/

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('Website Development created!');
  }

  ready() {
    super.ready();
    this.textContent = 'I\'m a custom element!';
  }
}

window.customElements.define('website-development', WebsiteDevelopment);
