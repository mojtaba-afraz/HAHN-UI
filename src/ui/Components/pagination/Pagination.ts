import {css, html, LitElement} from 'lit';
import {customElement,property} from 'lit/decorators.js';

@customElement('h-pagination')
export class Pagination extends LitElement {
    constructor() {
        super();
        this.Pages = []
        this.activePage = 1
    }
    isActive(page:number){
        if (page == this.activePage){
            return 'active-page'
        }
        else{
            return ''
        }
    }
    setNewActivePage(page:number){
        this.activePage = page
        const myEvent = new CustomEvent('changePage', {detail: {page:this.activePage}});
        this.dispatchEvent(myEvent)
    }
    static override styles = css`
      span {
        color: #fff;
        margin: 5px;
        width: 15px;
        height: 15px;
        padding: 5px 10px;
        background-color: rgba(0, 114, 127, 0.42);
        cursor: pointer;
        border-radius: 10px;
      }

      .active-page {
        background-color: blue;
      }
    `;

    private _pages: Array<number> = [];

    @property({ type: Array })
    get Pages(): Array<number> {
        return this._pages;
    }
    set Pages(value: number) {
        const oldValue = this._pages;
        this._pages = [...Array(value).keys()].map(page => page + 1 );
        this.requestUpdate('Pages', oldValue);
    }
    @property()
    activePage: number

    override render() {
        return html`
            <h-row>
                <div class="col-12">
                    ${this.Pages.map(page => {
                       return html`<span @click="${() => this.setNewActivePage(page)}" class='${this.isActive(page)}'> ${page}</span>` 
                    })}
                </div>
            </h-row>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'h-pagination': Pagination;
    }
}
