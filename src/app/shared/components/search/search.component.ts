import { CommonModule } from '@angular/common';
import { Component, input, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LoadingmodalComponent } from '../modals/loadingmodal/loadingmodal.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink, CommonModule, LoadingmodalComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export default class SearchComponent {
  @Input() isVisible: boolean = true;
  @Input() isVisibleOption: boolean = true;
  @Input() isVisibleO: boolean = true;
  isLoading = false;

  constructor(private router: Router) {}

  navigateToView() {
    this.router.navigate(['/viajesall']).then(() => {
      window.scrollTo(0, 0);
    });
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
