import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import SearchComponent from '../../shared/components/search/search.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, SearchComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export default class DashboardComponent {}