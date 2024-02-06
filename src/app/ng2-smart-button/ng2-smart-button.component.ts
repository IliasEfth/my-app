import { Component, Directive, ElementRef, Injector, OnInit, Provider } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
const scopeProvider: Provider = {
  provide: '$scope',
  useFactory: (injector: Injector)=> injector.get('$rootScope').$new(),
  deps:['$inject']
}

@Directive({
  selector: 'smart-button',
  providers:[]
  // templateUrl: './ng2-smart-button.component.html',
  // styleUrls: ['./ng2-smart-button.component.css']
})
export class Ng2SmartButtonComponent extends UpgradeComponent {

  constructor(elementRef: ElementRef, injector: Injector) { 
    super('smartButton', elementRef, injector);

  }

}
