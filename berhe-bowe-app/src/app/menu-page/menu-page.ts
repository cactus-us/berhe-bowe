import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-page',
  imports: [CommonModule],
  templateUrl: './menu-page.html',
  styleUrl: './menu-page.css',
})
export class MenuPage {
  happyHourItems = [
    {
      name: 'Bruschetta',
      image: 'Bruschetta.png',
      description: 'Toasted bread topped with fresh tomatoes, basil, and olive oil. Light and always a go-to starter!'
    },
    {
      name: 'Arancini',
      image: 'Arancini.png',
      description: 'Crispy fried rice balls (usually stuffed with cheese or meat).'
    },
    {
      name: 'Calamari Fritti',
      image: 'CalamarifrittiFriedCalamari.png',
      description: 'Fried squid rings served with a dipping sauce.'
    },
    {
      name: 'Caprese Salad',
      image: 'CapreseSalad.png',
      description: 'Sliced tomatoes, mozzarella, and basil with a drizzle of olive oil.'
    },
    {
      name: "Olive all'Ascolana",
      image: 'OliveallAscolana.png',
      description: 'Stuffed olives that are breaded and fried (crunchy on the outside and savory inside).'
    }
  ];

  lunchItems = [
    {
      name: 'Margherita Pizza',
      image: 'MargheritaPizza.png',
      description: 'Thin-crust pizza with tomato, mozzarella, and basil.'
    },
    {
      name: 'Italian Panini',
      image: 'ItalianPanini.png',
      description: 'Italian Panini (mozzarella / tomato / basil).'
    },
    {
      name: 'Spaghetti Pomodoro',
      image: 'SpaghettiPomodoro.png',
      description: 'Pasta with simple tomato-basil sauce and a sprinkle of cheese.'
    },
    {
      name: 'Tuna Panini',
      image: 'SicilianTunaSaladSandwich.png',
      description: 'Toasted Italian bread layered with tuna, light mayo, and crisp vegetables.'
    },
    {
      name: 'Chicken Panini',
      image: 'ItalianGrilledChickenPaniniSandwich.png',
      description: 'Grilled Italian-style chicken sandwich, easy and filling for lunch.'
    }
  ];

  dinnerItems = [
    {
      name: 'Chicken Parmesan',
      image: 'ChickenParmesan.png',
      description: 'Breaded chicken breast with marinara and melted mozzarella'
    },
    {
      name: 'Spaghetti and Meatballs',
      image: 'SpaghettiAndMeatballs.png',
      description: 'Classic pasta with homemade meatballs and marinara'
    },
    {
      name: "Luigi's Signature Pasta",
      image: 'LuigisPasta.png',
      description: 'Our family recipe with Italian sausage and peppers'
    },
    {
      name: 'Lasagna alla Bolognese',
      image: 'Lasagnaalforno.png',
      description: 'Layers of pasta, rich meat tomato sauce, béchamel & cheese.'
    },
    {
      name: 'Grilled Salmon',
      image: 'GrilledSalmonSalad.png',
      description: 'Fresh salmon grilled & served with light seasoning with a simple side of roasted veggies.'
    }
  ];

  beverageItems = [
    {
      name: 'Italian Cream Soda',
      image: 'ItalianCreamSoda.png',
      description: 'Flavored syrup mixed with soda water, topped with cream.'
    },
    {
      name: 'Zabaione',
      image: 'Zabaione.png',
      description: 'This drink is made with egg yolks, sugar, & marsala wine (sometimes vin santo or passito).'
    },
    {
      name: 'Orzata',
      image: 'Orzata.png',
      description: 'A sweet, milky white drink (made from barley) with almonds or orange blossom water.'
    },
    {
      name: 'Latte Macchiato',
      image: 'LatteMacchiato.png',
      description: 'Consits of layers of warm milk, espresso coffee, & milk froth as well!'
    },
    {
      name: 'Cappuccino',
      image: 'Cappuccino.png',
      description: 'Coffee made with equal parts espresso, steamed milk, & foam (rich and smooth flavor).'
    }
  ];

  dessertItems = [
    {
      name: 'Italian Buckwheat and Jam Cake',
      image: 'ItalianBuckwheatandJamCake.png',
      description: 'Made with buckwheat flour, naturally gluten-free, filled with mixed berry jam and topped with powdered sugar.'
    },
    {
      name: 'Tiramisu Cake',
      image: 'TiramisuCake.png',
      description: 'Sponge cake layered with mascarpone cream and whipped cream.'
    },
    {
      name: 'Occhi di Bue',
      image: 'OcchidiBue.png',
      description: 'Buttery shortbread rounds that has jam or chocolate in the center as well.'
    },
    {
      name: 'Saffron Pannacotta',
      image: 'SaffronPannacotta.png',
      description: 'Smooth and velvety panna cotta (flavored with saffron), delicate spiced taste.'
    },
    {
      name: 'Zeppole di San Giuseppe',
      image: 'ZeppolediSanGiuseppe.png',
      description: 'Is baked until golden, contains vanilla cream, & is topped with a cherry.'
    }
  ];

  goToSection(sectionName: string) {
    const section = document.getElementById(sectionName);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
