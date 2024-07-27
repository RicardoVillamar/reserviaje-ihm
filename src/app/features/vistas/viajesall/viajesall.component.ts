import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import SearchComponent from '../../../shared/components/search/search.component';

@Component({
  selector: 'app-viajesall',
  standalone: true,
  imports: [RouterLink, SearchComponent],
  templateUrl: './viajesall.component.html',
  styleUrl: './viajesall.component.css',
})
export default class ViajesallComponent {}
