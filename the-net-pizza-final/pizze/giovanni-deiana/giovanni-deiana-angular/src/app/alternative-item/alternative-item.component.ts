import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Piatto } from '../models/Piatto';

@Component({
  selector: 'gnnz-alternative-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alternative-item.component.html',
  styleUrl: './alternative-item.component.scss'
})
export class AlternativeItemComponent {
@Input() piatto!: Piatto;



}


