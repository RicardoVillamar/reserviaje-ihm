import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modalpago',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modalpago.component.html',
  styleUrl: './modalpago.component.css',
})
export default class ModalpagoComponent {
  constructor(private router: Router) {}

  @Input() isVisible = false;
  @Output() closed = new EventEmitter<void>();
  @Output() confirmed = new EventEmitter<void>();

  closeModal() {
    this.closed.emit();
  }

  navigateToView() {
    this.router.navigate(['/dashboard']).then(() => {
      window.scrollTo(0, 0);
    });
  }

  confirmPayment() {
    this.confirmed.emit();
    this.navigateToView();
  }
}
