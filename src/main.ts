//import "angular"
import "./polyfills";
import { PlatformRef, enableProdMode } from '@angular/core';
import { createApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule, setAngularJSGlobal } from "@angular/upgrade/static";
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { createCustomElement } from "@angular/elements";
import { WbSmartButtonComponent } from "./app/wb-smart-button/wb-smart-button.component";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;

  const element = document.querySelector('#myAngularJSBootstrap');

  upgrade.bootstrap(element!, ['angularjsDemo']);

  const customElement = createCustomElement(WbSmartButtonComponent, {injector: platformRef.injector});
  customElements.define('wb-smart-button', customElement);
})
  .catch(err => console.error(err));
