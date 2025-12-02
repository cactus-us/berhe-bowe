import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-locations-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './locations-page.html',
  styleUrls: ['./locations-page.css']
})
export class LocationsPage {

  locations = [
    {
      name: "Luigi's – Bryn Mawr",
      address: "652 Lee Avenue, Bryn Mawr, PA 19010",
      phone: "(610)-011-2234",
      hours: "Tuesday – Sunday, 11am – 10pm",
      image: "LuigisBrynMawrStorefront.jpg",
      roomImage: "BrynMawrPartyRoom.png",
      rentPrice: "$200 for 3 hours | $50 each additional hour",
      details: "Seats up to 40 guests. Perfect for birthdays, showers, and family gatherings."
    },
    {
      name: "Luigi's – St. David’s",
      address: "323 E Lancaster Ave, St. Davids, PA 19087",
      phone: "(610)-273-2894",
      hours: "Tuesday – Sunday, 11am – 10pm",
      image: "LuigisStDavidsStorefront.jpg",
      roomImage: "StDavidsPartyRoom.png",
      rentPrice: "$250 for 3 hours | $60 each additional hour",
      details: "Seats up to 55 guests. Ideal for corporate dinners and private events."
    },
    {
      name: "Luigi's – Ardmore",
      address: "37 Rittenhouse Pl, Ardmore, PA 19003",
      phone: "(610)-519-4729",
      hours: "Tuesday – Sunday, 11am – 10pm",
      image: "LuigisArdmoreStorefront.jpg",
      roomImage: "ArdmorePartyRoom.png",
      rentPrice: "$300 for 3 hours | $75 each additional hour",
      details: "Seats up to 70 guests. Great for large celebrations and catered events."
    }
  ];
}