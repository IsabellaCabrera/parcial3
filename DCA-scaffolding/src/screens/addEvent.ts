import '../components/nav/nav'
import '../components/add/add'
class AddProduct extends HTMLElement {
    constructor()  {
        super();
        this.attachShadow( {mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    async render()  {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
        <nav-commponent></nav-commponent>
        <event-form></event-form>
        `;

        }
        
    }

}

customElements.define('app-add', AddProduct);