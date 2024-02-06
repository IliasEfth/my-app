import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-wb-smart-button',
  templateUrl: './wb-smart-button.component.html',
  styleUrls: ['./wb-smart-button.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class WbSmartButtonComponent implements OnInit {
  @Input() label!: string;
  constructor() { }

  ngOnInit(): void {
  }

  sayHello() {
    console.log("hello chat from " + this.label);
  }

}
