import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CateringOrderButton } from '../catering-order-button/catering-order-button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catering-order',
  imports: [CommonModule, CateringOrderButton],
  templateUrl: './catering-order.html',
  styleUrl: './catering-order.css',
})
export class CateringOrder {
Appetizers = [
    {
      name: 'Bruschetta',
      image: 'Bruschetta.png',
      description: 'Toasted bread topped with fresh tomatoes, basil, and olive oil. Light and always a go-to starter!',
      quantity: 0
    },
    {
      name: 'Arancini',
      image: 'Arancini.png',
      description: 'Crispy fried rice balls (usually stuffed with cheese or meat).',
      quantity: 0
    },
    {
      name: 'Calamari Fritti',
      image: 'CalamarifrittiFriedCalamari.png',
      description: 'Fried squid rings served with a dipping sauce.',
      quantity: 0
    },
    {
      name: 'Caprese Salad',
      image: 'CapreseSalad.png',
      description: 'Sliced tomatoes, mozzarella, and basil with a drizzle of olive oil.',
      quantity: 0
    },
    {
      name: "Olive all'Ascolana",
      image: 'OliveallAscolana.png',
      description: 'Stuffed olives that are breaded and fried (crunchy on the outside and savory inside).',
      quantity: 0
    }
  ];

  Sandwiches = [
    {
      name: 'Italian Panini',
      image: 'ItalianPanini.png',
      description: 'Italian Panini (mozzarella / tomato / basil).',
      quantity: 0
    },
    {
      name: 'Tuna Panini',
      image: 'SicilianTunaSaladSandwich.png',
      description: 'Toasted Italian bread layered with tuna, light mayo, and crisp vegetables.',
      quantity: 0
    },
    {
      name: 'Chicken Panini',
      image: 'ItalianGrilledChickenPaniniSandwich.png',
      description: 'Grilled Italian-style chicken sandwich, easy and filling for lunch.',
      quantity: 0
    }
  ];

  Entrees = [
    {
      name: 'Margherita Pizza',
      image: 'MargheritaPizza.png',
      description: 'Thin-crust pizza with tomato, mozzarella, and basil.',
      quantity: 0
    },
    {
      name: 'Spaghetti Pomodoro',
      image: 'SpaghettiPomodoro.png',
      description: 'Pasta with simple tomato-basil sauce and a sprinkle of cheese.',
      quantity: 0
    },
    {
      name: 'Chicken Parmesan',
      image: 'ChickenParmesan.png',
      description: 'Breaded chicken breast with marinara and melted mozzarella',
      quantity: 0
    },
    {
      name: 'Spaghetti and Meatballs',
      image: 'SpaghettiAndMeatballs.png',
      description: 'Classic pasta with homemade meatballs and marinara',
      quantity: 0
    },
    {
      name: "Luigi's Signature Pasta",
      image: 'LuigisPasta.png',
      description: 'Our family recipe with Italian sausage and peppers',
      quantity: 0
    },
    {
      name: 'Lasagna alla Bolognese',
      image: 'Lasagnaalforno.png',
      description: 'Layers of pasta, rich meat tomato sauce, béchamel & cheese.',
      quantity: 0
    },
    {
      name: 'Grilled Salmon',
      image: 'GrilledSalmonSalad.png',
      description: 'Fresh salmon grilled & served with light seasoning with a simple side of roasted veggies.',
      quantity: 0
    }
  ];

  Beverages = [
    {
      name: 'Italian Cream Soda',
      image: 'ItalianCreamSoda.png',
      description: 'Flavored syrup mixed with soda water, topped with cream.',
      quantity: 0
    },
    {
      name: 'Orzata',
      image: 'Orzata.png',
      description: 'A sweet, milky white drink (made from barley) with almonds or orange blossom water.',
      quantity: 0
    },
  ];

  Desserts = [
    {
      name: 'Italian Buckwheat and Jam Cake',
      image: 'ItalianBuckwheatandJamCake.png',
      description: 'Made with buckwheat flour, naturally gluten-free, filled with mixed berry jam and topped with powdered sugar.',
      quantity: 0
    },
    {
      name: 'Tiramisu Cake',
      image: 'TiramisuCake.png',
      description: 'Sponge cake layered with mascarpone cream and whipped cream.',
      quantity: 0
    },
    {
      name: 'Occhi di Bue',
      image: 'OcchidiBue.png',
      description: 'Buttery shortbread rounds that has jam or chocolate in the center as well.',
      quantity: 0
    },
    {
      name: 'Saffron Pannacotta',
      image: 'SaffronPannacotta.png',
      description: 'Smooth and velvety panna cotta (flavored with saffron), delicate spiced taste.',
      quantity: 0
    },
    {
      name: 'Zeppole di San Giuseppe',
      image: 'ZeppolediSanGiuseppe.png',
      description: 'Is baked until golden, contains vanilla cream, & is topped with a cherry.',
      quantity: 0
    }
  ];

  constructor(private router: Router) {}

  showConfirmModal = false;
  showSubmittedModal = false;

  openConfirmModal() {
    this.showConfirmModal = true;
  }

  submissionConfirm() {
    this.showConfirmModal = false;

    this.router.navigate(['/catering']);
  }

  closeSubmittedModal() {
    this.showSubmittedModal = false;
  }
}
