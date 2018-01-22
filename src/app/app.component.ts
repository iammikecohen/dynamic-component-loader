import { Component, ViewChild, ViewContainerRef } from '@angular/core';

import { DynamicComponentLoader } from './dynamic-component-loader/dynamic-component-loader.service';
import { MessageComponent } from './dynamic-modules/message/message.component';
import { Number2Component } from './dynamic-modules/number2/number2.component';
import { ThirdcomponentComponent } from './dynamic-modules/thirdcomponent/thirdcomponent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  @ViewChild('testOutlet', {read: ViewContainerRef}) testOutlet: ViewContainerRef;

  constructor(
    private dynamicComponentLoader: DynamicComponentLoader,
  ) { }

  loadComponent(val: number) {
    let id;
    switch (val) {
      case 3: {
        id = 'third';
        break;
      }
      case 2: {
        id = 'secondComponent';
        break;
      }
      case 1:
      default: {
        id = 'message';
        break;
      }
    }
    this.dynamicComponentLoader
      .getComponentFactory(id)
      .subscribe(componentFactory => {
        this.testOutlet.createComponent(componentFactory);
      }, error => {
        console.warn(error);
      });
  }
}
