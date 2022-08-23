import { html } from 'lit-html';

import '../ui/Components/grid/Row';

export default {
    title: 'h-row',
};

export const main = () => html`
    <h-row>
        <div class="col col-12" style="background-color: red">
            col-12
        </div>
        <div class="col col-10" style="background-color: orange">
            col-10
        </div>
        <div class="col col-8" style="background-color: green">
            col-8
        </div>
        <div class="col col-6" style="background-color: pink">
            col-6
        </div>
        <div class="col col-4" style="background-color: #ff7eff">
            col-4
        </div>
        <div class="col col-2" style="background-color: lemonchiffon">
            col-2
        </div>
    </h-row>
`;