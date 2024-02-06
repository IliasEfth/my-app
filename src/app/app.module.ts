import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpgradeModule } from "@angular/upgrade/static";
import { WbSmartButtonComponent } from './wb-smart-button/wb-smart-button.component';
import { Ng2SmartButtonComponent } from './ng2-smart-button/ng2-smart-button.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    WbSmartButtonComponent,
    Ng2SmartButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{provide: '$scope', useExisting: '$rootScope'},{provide: APP_BASE_HREF, useValue : './' }],
  bootstrap: []
})
export class AppModule {
  constructor(){}
  ngDoBootstrap(){
    
  }
 }
