import { Component } from '@angular/core';
import { ContactData} from "../contactData";
import { ListContacts } from "../list-contact";
import {first} from "rxjs";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
contacts : ContactData[] = [];

constructor() {
  this.contacts = ListContacts;
}
}

