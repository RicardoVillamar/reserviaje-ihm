import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import SearchComponent from '../../../shared/components/search/search.component';
import { LoadingmodalComponent } from '../../../shared/components/modals/loadingmodal/loadingmodal.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-viajesall',
  standalone: true,
  imports: [
    RouterLink,
    SearchComponent,
    LoadingmodalComponent,
    HeaderComponent,
  ],
  templateUrl: './viajesall.component.html',
  styleUrl: './viajesall.component.css',
})
export class ViajesallComponent {
  constructor(private router: Router) {}
  isLoading = false;

  navigateToView() {
    this.router.navigate(['/detalles']).then(() => {
      window.scrollTo(0, 0);
    });
  }

  showLoading() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/viajesall']);
    }, 500);
  }
}
