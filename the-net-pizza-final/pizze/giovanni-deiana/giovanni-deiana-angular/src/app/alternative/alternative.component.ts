import { Component } from '@angular/core';
import { AlternativeItemComponent } from '../alternative-item/alternative-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gnnz-alternative',
  standalone: true,
  imports: [AlternativeItemComponent, CommonModule],
  templateUrl: './alternative.component.html',
  styleUrl: './alternative.component.scss'
})
export class AlternativeComponent {

}
