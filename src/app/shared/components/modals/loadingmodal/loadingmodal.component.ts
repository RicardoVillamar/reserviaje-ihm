import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loadingmodal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loadingmodal.component.html',
  styleUrl: './loadingmodal.component.css',
})
export class LoadingmodalComponent {
  @Input() isVisible: boolean = false;
}
