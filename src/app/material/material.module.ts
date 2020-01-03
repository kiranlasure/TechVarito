import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';

const materialC =[MatButtonModule]


@NgModule({
  imports: [
   materialC
  ],
  exports:[materialC]
})
export class MaterialModule { }