import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule
],
  exports: [
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule
]
})
export class MaterialModule { }
