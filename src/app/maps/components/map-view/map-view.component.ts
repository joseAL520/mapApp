import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.css'
})
export class MapViewComponent {

  constructor(
    private placesServices: PlacesService
  ){}

}
