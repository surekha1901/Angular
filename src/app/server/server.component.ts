
import { Component } from '@angular/core';

import { from } from 'rxjs';

@Component({
	selector: 'app-server',
	templateUrl:'./server.component.html',
	stylesUrl:[`.online
	{color;white;}`]
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