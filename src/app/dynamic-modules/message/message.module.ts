import { NgModule } from '@angular/core';

import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { Number2Component } from '../number2/number2.component';
import { ThirdcomponentComponent } from '../thirdcomponent/thirdcomponent.component';
import { MessageComponent } from './message.component';

@NgModule({
  declarations: [
    MessageComponent,
    ThirdcomponentComponent,
    Number2Component,
  ],
  imports: [
    DynamicComponentLoaderModule.forChild([
      MessageComponent,
      Number2Component,
      ThirdcomponentComponent,
    ]),
  ],
})
export class MessageModule {}
