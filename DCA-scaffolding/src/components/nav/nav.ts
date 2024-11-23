import { dispatch } from '../../store/index'
import { Screens } from '../../types/store';
import { navigate } from '../../store/actions';


class Nav extends HTMLElement {
   
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }


    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
              
                    <p id="admin">ADMIN</p>
                    <p id="usuer">USER</p>
                   
              
          
            `;
            const view = this.shadowRoot?.querySelector('#view')
            view?.addEventListener('click', () =>  {
                dispatch(navigate(Screens.USER)); 
            })



            const add = this.shadowRoot?.querySelector('#add')
            add?.addEventListener('click', () =>  {
                dispatch(navigate(Screens.ADMIN));  
            })

        }
        
    }
}

customElements.define("nav-commponent", Nav);
export default Nav;