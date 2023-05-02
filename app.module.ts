import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule as ngRouterModule } from '@angular/router';
import {
  BootstrapComponent,
  CoreModule, RouterModule
} from '@c8y/ngx-components';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { WidgetPluginModule } from './widget/widget-plugin.module';
import { HelloComponent } from './hello.component'  // don't forget to import the new component

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ngRouterModule.forRoot([{ path: '', component: HelloComponent }], { enableTracing: false, useHash: true }),
    RouterModule.forRoot(),
    CoreModule.forRoot(),
    WidgetPluginModule
  ],
  providers: [
    BsModalRef
  ],
  declarations: [HelloComponent],
  bootstrap: [BootstrapComponent]
})
export class AppModule {}
