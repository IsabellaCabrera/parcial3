import { dispatch } from '../../store';
import { navigate} from '../../store/actions';
import { Screens } from '../../types/store';
import { addEvent } from '../../utils/firebase';


const addpr = {
    title: '',
	date: '',
	location: '',
    image: '',
	attendees: '',
}

class Add extends HTMLElement {
   
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        dispatch(navigate(Screens.USER))
    }

    connectedCallback() {
        this.render();
    }


    changeTitle(e: any)  {
        addpr.title = e.target.value;
    }
    changeDate(e: any)  {
        addpr.date = e.target.value;
    }
    changeLocation(e: any)  {
        addpr.location = e.target.value;
    }

    changeImage(e: any)  {
        addpr.image = e.target.value;
    }
  
    

    submitForm()  {
        addEvent(addpr);
        alert('Evento creado')
    }

    render() {

        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <div>
                    <input type="text" id="EventTitle" placeholder="Event title">
                     <input type="date" id="EventDate" placeholder=" date">
                      <input type="text" id="location" placeholder="location" >
                      <input type="text" id="imageLink" placeholder="Enter image URL">
                    <button id="submitButton" type="submit">Add Event</button>
                </div>
            `;


            const buttonSubmit = this.shadowRoot?.querySelector("#submitButton")as HTMLButtonElement;
            buttonSubmit.addEventListener('click', this.submitForm);

            const eventTitle = this.shadowRoot?.querySelector("#albumTitle") as HTMLInputElement;
            eventTitle.addEventListener('change', this.changeTitle);

            const eventDate = this.shadowRoot?.querySelector("#EventDate") as HTMLInputElement;
            eventDate.addEventListener('change', this.changeDate);

            const eventLocation = this.shadowRoot?.querySelector("#location") as HTMLInputElement;
            eventLocation.addEventListener('change', this. changeLocation);

            const eventImage = this.shadowRoot?.querySelector("#imageLink") as HTMLInputElement;
            eventImage.addEventListener('change', this.changeImage);

    }
}

}
customElements.define("event-form", Add);


export default Add;