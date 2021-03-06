import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
export class SendFeedback extends PolymerElement {
  static get template() {
    return `
    <style include="shared-styles">
      :host {

      }

      #grid {
        display: grid;
        grid-template-columns:
          /* 1 */ auto
          /* 2 */ 1fr;
         grid-template-rows:
          /* 3 */ auto
          /* 4 */ 1fr
          /* 5 */ auto;
      }
      #title    { grid-column: 1; grid-row: 1; }
      #score    { grid-column: 1; grid-row: 3; }
      #stats    { grid-column: 1; grid-row: 2; align-self: start; }
      #board    { grid-column: 2; grid-row: 1 / span 2; }
      #controls { grid-column: 2; grid-row: 3; justify-self: center; }

      div {
        border: 2px black solid;
      }

    </style>

    <h3>Send Feedback</h3>

    <div id="grid">

      <div id="title">Gubbled</div>
      <div id="score">Menu</div>
      <div id="stats">Stats</div>
      <div id="board">Board</div>
      <div id="controls">Controls</div>

    </div>
`;
  }

  static get is() { return 'send-feedback'; }

  constructor() {
    super();
  }
}
window.customElements.define(SendFeedback.is, SendFeedback);
