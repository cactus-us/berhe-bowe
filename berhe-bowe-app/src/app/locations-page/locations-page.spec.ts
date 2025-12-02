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
      name: 'Luigi’s',
      address: '342 East Ave, Bryn Mawr, PA, 19010',
      phone: '(610) 678-2234',
      hours: 'Tuesday – Sunday, 11am – 10pm',
      image: 'assets/location1.jpg'
    },
    {
      name: 'Luigi’s',
      address: '1173 Lancaster Ave, St. Davids, PA 19087',
      phone: '(610) 356-2234',
      hours: 'Tuesday – Sunday, 11am – 10pm',
      image: 'assets/location2.jpg'
    },
    {
      name: 'Luigi’s',
      address: '87 Bishopshope Pl, Ardmore, PA 19003',
      phone: '(610) 756-2232',
      hours: 'Tuesday – Sunday, 11am – 10pm',
      image: 'assets/location3.jpg'
    }
  ];
}