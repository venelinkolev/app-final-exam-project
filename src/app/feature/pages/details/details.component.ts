import { Component, Input } from '@angular/core';
import { IRecipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  @Input() detailsRecipe!: IRecipe;
  @Input() isDetailsPage!: boolean;
}
