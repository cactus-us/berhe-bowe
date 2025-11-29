import { Routes } from '@angular/router';

import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { LocationsPage } from './locations-page/locations-page';
import { MenuPage } from './menu-page/menu-page';
import { CateringPage } from './catering-page/catering-page';
import { ContactUsPage } from './contact-us-page/contact-us-page'; 

export const routes: Routes = [
    { path : 'home', component: HomePage, title: 'Home' },
    { path : 'about', component: AboutPage, title: 'About' },
    { path : 'locations', component: LocationsPage, title: 'Locations' },
    { path : 'menu', component: MenuPage, title: 'Menu' },
    { path : 'catering', component: CateringPage, title: 'Catering' },
    { path : 'contactUs', component: ContactUsPage, title: 'Contact Us' },
    { path : '', redirectTo: '/home', pathMatch: 'full' },
];

const routeConfig : Routes = [
    
]