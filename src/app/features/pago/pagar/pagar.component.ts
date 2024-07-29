import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import ModalpagoComponent from '../../../shared/components/modals/modalpago/modalpago.component';

@Component({
  selector: 'app-pagar',
  standalone: true,
  imports: [RouterLink, CommonModule, ModalpagoComponent],
  templateUrl: './pagar.component.html',
  styleUrl: './pagar.component.css',
})
export class PagarComponent {
  isModalOpen = false;

  constructor(private router: Router) {}

  showModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  confirmPayment() {
    this.isModalOpen = false;
    this.router.navigate(['/dashboard']);
  }
}
