import { Component } from '@angular/core';

import { template } from '@angular/core/src/render3';
import { templateJitUrl } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styles:

  [`h3{color: dodgerblue; background-color:palegreen; padding:20px; border:1px solid red;}`]
})
export class AppComponent {
   name = 'surekha';
 
}
