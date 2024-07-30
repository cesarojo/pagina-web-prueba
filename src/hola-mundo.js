import { LitElement, html, css } from 'lit-element';

class HolaMundo  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
        quien: { type: String}
    };

  }

  constructor() {
    super();
  }

  render() {
    return html`
      <p><b>Bienvenidos Nimblerianos ${this.quien}</b></p>
    `;
  }
}

customElements.define('hola-mundo', HolaMundo);