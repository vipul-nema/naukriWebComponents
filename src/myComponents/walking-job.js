import { LitElement, css, html } from 'lit-element';

export default class MyElement extends LitElement {
    static get styles() {
        return css`
      
    .wgtCont {
        padding: 0 0 20px;
        margin: 0 0 10px;
        background-color: #fff;
    }


    .noBorder_center_large_title {
        clear: left;
        padding: 15px 20px 8px;
        color: #666;
        font-weight: 300;
    }

    

    .wgtCont button {
        width: 95%;
        display: block;
        margin: 0 auto;
        height: 50px;
    }

    .lightCyanBtn, .regtBtn {
        padding: 0 20px;
        color: #fff;
        font-size: 18px;
        cursor: pointer;
        height: 40px;
        line-height: 40px;
        vertical-align: middle;
        text-align: center;
        background-color: #1abc9c;
    }
    `;
    }
    render() {
        return html`
        <div class="wgtCont" data-ga-track="Walk In Jobs Section|Walk in jobs   button">            <h3 class="noBorder_center_large_title">Search all current and upcoming walk-in jobs    </h3>
            <a href="https://www.naukri.com/walkin-jobs" target="_blank">
                <button title="Walkin Jobs" class="lightCyanBtn">Search Walk-in Jobs</button>
            </a>
        </div> 
    `;
    }
}

customElements.define('walking-job', MyElement);