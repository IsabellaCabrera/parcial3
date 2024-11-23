import '../components/nav/nav'
import Event, { Attribute } from '../components/product/product';
import { getProductsAction } from '../store/actions';
import { dispatch } from '../store';
import { appState } from '../store';
class Home extends HTMLElement {
    eventsList: Event[]=[]
    constructor()  {
        super();
        this.attachShadow( {mode: 'open'});
    }

    async connectedCallback() {
        if (appState.products.length === 0) {
            const eventsAction = await getProductsAction();
            dispatch(eventsAction)
        }
      
    }

    async render()  {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
           
            <nav-commponent></nav-commponent>
             <div class="events">
             <event-card></event-card>
             
             </div>
            `;

          
            appState.products?.forEach(event => {
                const eventItem = this.ownerDocument.createElement('event-card') as Event;
                eventItem.setAttribute(Attribute.titleEvent, event.title);
                eventItem.setAttribute(Attribute.date, event.author);
                eventItem.setAttribute(Attribute.image, event.image);
                eventItem.setAttribute(Attribute.location, event.location);
                eventItem.setAttribute(Attribute.attendees, event.attendees);
                this.eventsList.push(eventItem);
            });

            const container = this.shadowRoot?.querySelector('.events');
            this.eventsList.forEach((event) => {
                container?.appendChild(event);
            });
        };
        
        
        
    }

}

customElements.define('app-home', Home);