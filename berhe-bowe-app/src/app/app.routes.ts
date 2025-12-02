import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { LocationsPage } from './locations-page/locations-page';
import { MenuPage } from './menu-page/menu-page';
import { CateringPage } from './catering-page/catering-page';
import { CateringInformation } from './catering-page/catering-information/catering-information';
import { CateringOrder } from './catering-page/catering-order/catering-order';
import { ContactUsPage } from './contact-us-page/contact-us-page'; 

export const routes: Routes = [
    { path : 'home', component: HomePage, title: 'Home' },
    { path : 'about', component: AboutPage, title: 'About' },
    { path : 'locations', component: LocationsPage, title: 'Locations' },
    { path : 'menu', component: MenuPage, title: 'Menu' },
    { path : 'catering', component: CateringPage, title: 'Catering', children: [
        { path : 'catering-information', component: CateringInformation, title: 'Catering Information'},
        { path : 'catering-order', component: CateringOrder, title: 'Catering Order'},
        { path : '', redirectTo: 'catering-information', pathMatch: 'full' }
        ]
    },
    { path : 'contactUs', component: ContactUsPage, title: 'Contact Us' },
    { path : '', redirectTo: 'home', pathMatch: 'full' }
];