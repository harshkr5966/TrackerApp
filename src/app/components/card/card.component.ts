import { Component, Input } from '@angular/core';
import { PRIORITY_MAPPER } from 'src/app/global.constants';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() content!: any;
  priority_mapper = PRIORITY_MAPPER;
}
