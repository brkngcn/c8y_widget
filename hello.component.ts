import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {callJSFunction} from '../widget_app/GetRealTimeValues.js';
//declare var ExternalJSFileFunction;
@Component({
  selector: 'app-hello',
  template: `
    <c8y-title>ASPION GmbH</c8y-title>
    <p>Temperture Dashboard.</p>
    <div id="C01A">
                                <div>Kühlschrank 1</div>
                                <div><h1><span id="temp">Value</span> °C</h1></div>
                         </div>
  `
})
export class HelloComponent {
  title = 'CallJsFunction';
ngOnInit(): void{
  callJSFunction();
}
  //constructor() {}
  
}