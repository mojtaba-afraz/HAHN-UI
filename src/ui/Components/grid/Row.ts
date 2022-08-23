import {html, css, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('h-row')
export class Row extends LitElement {
     static override styles = css`

       .container {
         width: 90%;
         margin-left: auto;
         margin-right: auto;
       }

       .row {
         position: relative;
         width: 100%;
       }

       .row ::slotted([class^="col"]){
         float: left;
         margin: 0.5rem 2%;
         min-height: 0.125rem;
       }

         .row ::slotted(.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12) {
           width: 96%;
         }

         .col-1-sm {
           width: 4.33%;
         }

         .col-2-sm {
           width: 12.66%;
         }

         .col-3-sm {
           width: 21%;
         }

         .col-4-sm {
           width: 29.33%;
         }

         .col-5-sm {
           width: 37.66%;
         }

         .row ::slotted(.col-6-sm) {
           width: 46%;
         }

         .col-7-sm {
           width: 54.33%;
         }

         .col-8-sm {
           width: 62.66%;
         }

         .col-9-sm {
           width: 71%;
         }

         .col-10-sm {
           width: 79.33%;
         }

         .col-11-sm {
           width: 87.66%;
         }

         .col-12-sm {
           width: 96%;
         }

         .row::after {
           content: "";
           display: table;
           clear: both;
         }

         .hidden-sm {
           display: none;
         }

       @media (min-width: 700px) {
         /* 720px */
         ::slotted(.col-1) {
           width: 4.33%;
         }

         ::slotted(.col-2) {
           width: 12.66%;
         }

         ::slotted(.col-3) {
           width: 21%;
         }

         ::slotted(.col-4) {
           width: 29.33%;
         }

         ::slotted(.col-5) {
           width: 37.66%;
         }

         ::slotted(.col-6) {
           width: 46%;
         }

         ::slotted(.col-7) {
           width: 54.33%;
         }

         ::slotted(.col-8) {
           width: 62.66%;
         }

         ::slotted(.col-9) {
           width: 71%;
         }

         ::slotted(.col-10) {
           width: 79.33%;
         }

         ::slotted(.col-11) {
           width: 87.66%;
         }

         .row ::slotted(.col-12) {
           width: 96%;
         }

         .hidden-sm {
           display: block;
         }
       }
     `;

    override render() {
        return html`
            <div class="row">
                <slot></slot>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'h-row': Row;
    }
}
