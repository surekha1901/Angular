
import { Component, OnInit } from '@angular/core';
import { template } from '@angular/core/src/render3';
import { templateJitUrl } from '@angular/compiler';

import { from } from 'rxjs';

@Component({
	selector: 'app-server',
	templateUrl:'./server.component.html',
	styleUrls: ['./server.component.css']
})
export class ServerComponent{
serverid: number=10;
serverStatus: String='offline';
constructor(){
this.serverStatus = Math.random()>0.5 ? 'online' : 'offline';
}

getserverStatus() {
return this.serverStatus;
}
getcolor(){
return this.serverStatus === 'online' ? 'green' : 'red';
}
}