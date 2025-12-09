import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-page',
  imports: [CommonModule],
  templateUrl: './menu-page.html',
  styleUrl: './menu-page.css',
})
export class MenuPage {
  happyHour = [
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

  lunch = [
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
      image: 'TunaPanini.png',
      description: 'Toasted Italian bread layered with tuna, light mayo, and crisp vegetables.'
    },
    {
      name: 'Chicken Panini',
      image: 'ChickenPanini.png',
      description: 'Grilled Italian-style chicken sandwich, easy and filling for lunch.'
    }
  ];

  dinner = [
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
      name: 'Eggplant Parmesan',
      image: 'EggplantParmesan.png',
      description: 'Layered eggplant with marinara and mozzarella'
    },
    {
      name: 'Lasagna',
      image: 'Lasagna.png',
      description: 'Homemade lasagna with meat sauce and ricotta'
    }
  ];

  beverages = [
    {
      name: 'Italian Soda',
      image: 'ItalianSoda.png',
      description: 'Sparkling water with flavored syrup and cream'
    },
    {
      name: 'Espresso',
      image: 'Espresso.png',
      description: 'Rich and bold Italian coffee'
    },
    {
      name: 'Cappuccino',
      image: 'Cappuccino.png',
      description: 'Espresso with steamed milk and foam'
    },
    {
      name: 'Lemonade',
      image: 'Lemonade.png',
      description: 'Fresh squeezed lemonade'
    },
    {
      name: 'Iced Tea',
      image: 'IcedTea.png',
      description: 'Freshly brewed sweetened or unsweetened tea'
    }
  ];

  desserts = [
    {
      name: 'Tiramisu',
      image: 'Tiramisu.png',
      description: 'Classic Italian dessert with coffee-soaked ladyfingers'
    },
    {
      name: 'Cannoli',
      image: 'Cannoli.png',
      description: 'Crispy pastry shells filled with sweet ricotta cream'
    },
    {
      name: 'Gelato',
      image: 'Gelato.png',
      description: 'Italian ice cream in assorted flavors'
    },
    {
      name: 'Cheesecake',
      image: 'Cheesecake.png',
      description: 'Creamy New York style cheesecake'
    },
    {
      name: 'Chocolate Lava Cake',
      image: 'ChocolateLavaCake.png',
      description: 'Warm chocolate cake with molten center'
    }
  ];

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
