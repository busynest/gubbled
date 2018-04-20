import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-item/paper-item.js';
import './shared-styles.js';
export class HyperLink extends PolymerElement {
  static get template() {
    return `
    <style include="shared-styles">
      :host {
        display: block;
        }
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
    </style>

        <paper-item class="post">
            <div class="description">
              <!-- Title -->
              <a href="[[url]]" target="_blank">
                <div class="title">
                  <div></div>
                  <!--
                  <img
                    class="guestLogo"
                    src="./images/polymer.png"
                    alt="Mozilla Developers"
                    width="48"
                    height="48">
                    -->
                  <div class="stamp">
                    <ul>
                      <!-- Title -->
                      <li><h2 class="postTitle">[[title]]</h2></li>
                      <!-- Publisher -->
                      <li><div class="publisher">[[publisher]]</div></li>
                    </ul>
                  </div>
                  
                  <iron-icon class="link" icon="link">
                  </iron-icon>
                </div>
              </a>
              <p class="paragraph">[[paragraph]]</p>
            </div>
          </paper-item>
`;
  }

  static get is() { return 'hyper-link'; }

  constructor() {
    super();
  }

  static get properties() {
      return {
        url: {type: String},
        title:{type: String},
        publisher:{type: String},
        paragraph:{type: String},
        publisher:{type: String}
      };
  }
}



window.customElements.define(HyperLink.is, HyperLink);
