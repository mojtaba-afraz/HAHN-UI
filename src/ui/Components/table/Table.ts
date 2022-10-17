import {css, html, LitElement} from 'lit';
import {customElement,property} from 'lit/decorators.js';

@customElement('h-table')
export class Table extends LitElement {
    constructor() {
        super();
        this.perPage = 10
        this.page = 1
        this.items = [
            {
                name:"ali",
                position:"CTO",
                age:"30",
            },
            {
                name:"mamad",
                position:"CEO",
                age:"28",
            },
            {
                name:"jafar",
                position:"Developer",
                age:"30",
            },
            {
                name:"hanieh",
                position:"CFO",
                age:"25",
            },
            {
                name:"ali",
                position:"CTO",
                age:"30",
            },
            {
                name:"mamad",
                position:"CEO",
                age:"28",
            },
            {
                name:"jafar",
                position:"Developer",
                age:"30",
            },
            {
                name:"hanieh",
                position:"CFO",
                age:"25",
            },
            {
                name:"ali",
                position:"CTO",
                age:"30",
            },
            {
                name:"mamad",
                position:"CEO",
                age:"28",
            },
            {
                name:"jafar",
                position:"Developer",
                age:"30",
            },
            {
                name:"hanieh",
                position:"CFO",
                age:"25",
            },
            {
                name:"ali",
                position:"CTO",
                age:"30",
            },
            {
                name:"mamad",
                position:"CEO",
                age:"28",
            },
            {
                name:"jafar",
                position:"Developer",
                age:"30",
            },
            {
                name:"hanieh",
                position:"CFO",
                age:"25",
            },
            {
                name:"ali",
                position:"CTO",
                age:"30",
            },
            {
                name:"mamad",
                position:"CEO",
                age:"28",
            },
            {
                name:"jafar",
                position:"Developer",
                age:"30",
            },
            {
                name:"hanieh",
                position:"CFO",
                age:"25",
            },
            {
                name:"ali",
                position:"CTO",
                age:"30",
            },
            {
                name:"mamad",
                position:"CEO",
                age:"28",
            },
            {
                name:"jafar",
                position:"Developer",
                age:"30",
            },
            {
                name:"hanieh",
                position:"CFO",
                age:"25",
            },

        ]
        this.columnMenu = [
            {
                name:"name",
                operator:"name"
            },
            {
                name:"position",
                operator:"position"
            },
            {
                name:"age",
                operator:"age"
            },
            {
                name:"telephone",
                operator:"telephone"
            },
        ]
    }

    static override styles = css`
      table {
        font-family: "Rajdhani", sans-serif;
        width: 100%;
        border: 1px solid #d5d5d5;
      }

      tr {
        display: flex;
        align-content: center;
        justify-content: space-between;
        justify-items: center;
      }

      tr:hover {
        background-color: #dedede !important;
      }

      th {
        color: #424242;
        background-color: #fafafa;
        width: 100%;
        text-align: left;
        padding: 8px 10px;
        border: 1px solid rgba(0, 0, 0, 0.08);
        margin: 0 !important;
      }

      td {
        width: 100%;
        padding: 8px 10px;
        text-align: left !important;
        margin: 0 !important;
      }

      .record:nth-child(odd) {
        background-color: rgba(0, 0, 0, 0.04);
      }

      .record:nth-child(even) {
        background-color: #fff
      }
    `;
    setNewPage(page:number){
        this.page = page
    }
    getPages(){
        return Math.ceil(this.items.length / this.perPage)
    }
    @property()
    columnMenu: Array<Object>
    @property({ type: Array, })
    items: [{}]
    @property()
    page: number
    @property()
    perPage: number

    override render() {
        return html`
            <table>
                <tr>
                    ${this.columnMenu.map(col => html`
                        <th>${col.name}</th>
                    `)}
                </tr>
                    ${this.items.slice((this.page === 1) ? 0 : this.perPage * (this.page - 1),(this.perPage * (this.page - 1)) + this.perPage).map(col => html`
                    <tr class="record">
                        ${this.columnMenu.map(menu => menu.operator).map(operator => {
                        return html`
                                <td>
                                    <slot name="${operator}"></slot>
                                    ${col[operator]}
                                </td>
                            `})}
                    </tr>
                    `)} 

                </table>
                <h-pagination Pages="${this.getPages()}" @changePage="${(e) => this.setNewPage(e.detail.page)}"></h-pagination>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'h-table': Table;
    }
}
