import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-catering-order-button',
  standalone: true,
  templateUrl: './catering-order-button.html',
  styleUrl: './catering-order-button.css',
})
export class CateringOrderButton {
  @Input() quantity: number = 0;
  @Output() quantityChange = new EventEmitter<number>();

  addItem(): void {
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }

  removeItem(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
}