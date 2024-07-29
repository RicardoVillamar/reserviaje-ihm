import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import SearchComponent from '../../shared/components/search/search.component';

import { LoadingmodalComponent } from '../../shared/components/modals/loadingmodal/loadingmodal.component';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    SearchComponent,
    LoadingmodalComponent,
    HeaderComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(private router: Router) {}
  isLoading = false;

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  showLoading() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/viajesall']).then(() => {
        window.scrollTo(0, 0);
      });
    }, 500);
  }
}
