import * as angular from "angular";
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule, setAngularJSGlobal } from "@angular/upgrade/static";
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

setAngularJSGlobal(angular);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['angularjs_demo']);
})
  .catch(err => console.error(err));
