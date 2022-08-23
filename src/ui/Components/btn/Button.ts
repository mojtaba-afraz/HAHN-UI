import {LitElement, html, css} from 'lit';
import {customElement,property} from 'lit/decorators.js';

@customElement('h-button')
export class Button extends LitElement {
    constructor() {
        super();
        this.text = 'text'
    }

    @property({type: String})
    text:String

    static override styles = css`
      .custom-btn {
        width: 130px;
        height: 40px;
        color: black;
        border-radius: 15px;
        padding: 10px 25px;
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        background: deepskyblue;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        display: inline-block;
        outline: none;
      }
    `;

    override render() {
        return html`
            <button class="custom-btn">
                <span>${this.text}</span>
            </button>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'h-button': Button;
    }
}
