import { LitElement, css, html } from 'lit-element';

import './walking-job.js';
import './view-salary';

export default class MyPage extends LitElement {
    render() {
        return html`
      <walking-job></walking-job>
      <view-salary></view-salary>
    `;
    }
}


customElements.define('my-app', MyPage);