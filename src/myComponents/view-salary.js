import { LitElement, css, html } from 'lit-element';

export default class MyElement extends LitElement {
    static get styles() {
        return css`
    
    .wgtCont {
        padding: 0 0 20px;
        margin: 0 0 10px;
        background-color: #fff;
    }
    .wgtCont .serviceLogos.cnLogo {
        background-position: 20px 15px;
        height: 50px;
    }
    .wgtCont .serviceLogos {
        display: block;
        height: 50px;
        background: url(https://static.naukimg.com/s/4/100/i/serviceLogos_v1.png) -1000px -1000px no-repeat;
    }

    .rgtBar .center_large_title, .rgtBar .large_title, .rgtBar .noBorder_center_large_title, .rgtBar .noBorder_large_title {
        font-size: 17px;
    }

    .noBorder_center_large_title, .rgtBar .noBorder_large_title, .rgtBar .noBorder_small_title, .rgtBar .small_title {
        clear: left;
        padding: 15px 20px 8px;
        color: #666;
        font-weight: 300;
    }

    .rgtBar .noBorder_center_large_title, .wgtCont.blocTxt, .wgtCont.profComp .head .graf {
        text-align: center;
    }

    .rgtBar .noBorder_center_large_title, .rgtBar .noBorder_large_title, .rgtBar .noBorder_small_title {
        border: none;
    }

    a {
        text-decoration: none;
        color: #09c;
    }

    .wgtCont button {
        width: 95%;
        display: block;
        margin: 0 auto;
        height: 50px;
    }  

    .lightCyanBtn, .regtBtn {
        background-color: #1abc9c;
    }

    .blueBtn, .grayBtn, .lightCyanBtn, .loginBtn, .orangeBtn, .regtBtn {
        padding: 0 20px;
        color: #fff;
        font-size: 18px;
        cursor: pointer;
        height: 40px;
        line-height: 40px;
        vertical-align: middle;
        text-align: center;
    }

    button {
        background: 0 0;
        overflow: visible;
    }



    `;
    }
    render() {
        return html`
     <div class="careerNavSal wgtCont" data-ga-track="Naukri Career Navigator Section|View salaries button">
          <span class="serviceLogos cnLogo"></span>
           <h3 class="noBorder_center_large_title">Salary trends in over 3500 Companies</h3>
            
           <a title="View Salaries" href="https://careernavigator.naukri.com" target="_blank">     <button class="lightCyanBtn" id="cjaMain">View Salaries</button> 
            </a>
        </div>
    `;
    }
}

customElements.define('view-salary', MyElement);