import '../src/screens/addEvent'
import '../src/screens/home'
import { addObserver, appState } from './store';
import { Screens } from './types/store';
import './components/nav/nav'

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }


    render() {
        if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';
        switch (appState.screen) {
            case Screens.ADMIN:
                const add = this.ownerDocument.createElement('app-add');
                this.shadowRoot?.appendChild(add);
                break;

            case Screens.USER:
                const home = this.ownerDocument.createElement('app-home');
                this.shadowRoot?.appendChild(home);
                break;

            default:
                break;
        }
    } 
    }
}

customElements.define('app-container', AppContainer)