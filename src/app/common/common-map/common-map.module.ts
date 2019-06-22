import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComMapComponent } from './com-map/com-map.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyDYeHoKf0iJHY4GpITUf3Rv0V75byC6CVw'
    // })
  ],
  declarations: [ComMapComponent],
  exports: [
    ComMapComponent
  ]
})
export class CommonMapModule { }
