export enum Attribute {
    "idEvent" = "idEvent",
    "image" = "image",
    "titleEvent" = "titleEvent",
    "date" = "date",
    "location" = "location",
    "attendees" = "attendees",
   
}

class Event extends HTMLElement {
    idEvent?: number;
    image?: string;
    titleEvent?: string;
    date?: number;
    location?: string;
    attendees?: number; 
 

    static get observedAttributes() {
        return Object.values(Attribute);
    }

    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
        switch (propName) {
            case Attribute.idEvent:
                this.idEvent = newValue ? Number(newValue) : undefined;
                break;
            case Attribute. date:
                this. date = newValue ? Number(newValue) : undefined;
                break;
                case Attribute.attendees:
                    this.attendees = newValue ? Number(newValue) : undefined;
                    break;
            default:
                this[propName] = newValue;
                break;
        }
        
    }

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
                <div class="event">
                    <div class="perfil">
                        <div id="img">
                            <img src="${this.image}" >
                        </div>
                        <div class="texts">
                            <p>${this.titleEvent}</p>
                            <p id="date">${this.date}</p>
                        </div>
                    </div>
                    <p class="location">${this.location}</p>
                    <p class="attendees">${this.attendees}</p>
                </div>
            `;
        }
        
    }
}

customElements.define("event-card", Event);
export default Event;