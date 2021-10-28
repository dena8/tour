import { Component, Input } from '@angular/core';
import { ICategory } from 'src/app/core/model/category';
import { ITour } from '../../core/model/tour-create';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  @Input() tour: ITour<ICategory>;
  @Input() isAuthenticate: boolean;

  constructor() {}

}
