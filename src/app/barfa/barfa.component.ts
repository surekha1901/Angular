import { Component, OnInit } from '@angular/core';
import { template } from '@angular/core/src/render3';
import { templateJitUrl } from '@angular/compiler';

@Component({
  
  selector: 'app-barfa',
  // selector: '[app-barfa]',
  //selector: '.app-barfa',
  // template:`
  // <app-server></app-server>
  // <app-server></app-server>`,
  // styleUrls: ['./barfa.component.css']

  templateUrl:'./barfa.component.html',
  styleUrls: ['./barfa.component.css']
})
export class BarfaComponent implements OnInit {
  allowNewServer = false;
  serverreationStatus='No Server Was Created!';
  servername='test1';
  sercreate=false;
  servers1 = ['testserver1' ,'testserver2'];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      
    }, 2000);
   }

  ngOnInit() {

  }

  Oncreateserver(){
    this.sercreate=true;
    this.servers1.push(this.servername);
    this.serverreationStatus='server was Created!name is '+ this.servername;

  }
  onupdateservername(event: Event){
    console.log(event);
    this.servername=(<HTMLInputElement>event.target).value;

  }

}
