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
      description: 'Toasted bread topped with fresh tomatoes, basil, and garlic'
    },
    {
      name: 'Mozzarella Sticks',
      image: 'MozzarellaSticks.png',
      description: 'Crispy fried mozzarella served with marinara sauce'
    },
    {
      name: 'Calamari',
      image: 'Calamari.png',
      description: 'Lightly breaded and fried squid rings with lemon'
    },
    {
      name: 'Garlic Bread',
      image: 'GarlicBread.png',
      description: 'Fresh baked bread with garlic butter and herbs'
    },
    {
      name: 'Wings',
      image: 'Wings.png',
      description: 'Classic buffalo wings with ranch or blue cheese'
    }
  ];

  lunch = [
    {
      name: 'Caesar Salad',
      image: 'CaesarSalad.png',
      description: 'Crisp romaine lettuce with parmesan and croutons'
    },
    {
      name: 'Caprese Sandwich',
      image: 'CapreseSandwich.png',
      description: 'Fresh mozzarella, tomato, and basil on ciabatta'
    },
    {
      name: 'Minestrone Soup',
      image: 'MinestroneSoup.png',
      description: 'Hearty vegetable soup with pasta and beans'
    },
    {
      name: 'Margherita Pizza',
      image: 'MargheritaPizza.png',
      description: 'Classic pizza with tomato, mozzarella, and basil'
    },
    {
      name: 'Pasta Primavera',
      image: 'PastaPrimavera.png',
      description: 'Fresh vegetables tossed with pasta in light garlic sauce'
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
