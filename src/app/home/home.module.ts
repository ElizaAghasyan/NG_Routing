import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
    declarations: [
        HomepageComponent
    ],
  exports: [
    HomepageComponent
  ],
    imports: [
        CommonModule
    ],
  bootstrap: [HomepageComponent]
})
export class HomeModule { }
