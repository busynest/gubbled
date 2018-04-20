import { Element } from '../../@polymer/polymer/polymer-element.js';
class Gubbled404 extends Element {
  static get template() {
    return `
    <style>
      :host {
        display: block;

        padding: 10px 20px;
      }
    </style>

    Oops you hit a 404. <a href="[[rootPath]]">Head back to home.</a>
`;
  }

  static get is() { return 'gubbled-404'; }

  constructor() {
    super();
  }

  static get properties() {
    return {
      // This shouldn't be neccessary, but the Analyzer isn't picking up
      // Polymer.Element#rootPath
      rootPath: String,
    };
  }
}

window.customElements.define(Gubbled404.is, Gubbled404);
