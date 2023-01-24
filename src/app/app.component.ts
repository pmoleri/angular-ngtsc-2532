import { Component } from '@angular/core';

interface SomeType {
  a: {
    b: string;
  };
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  prop?: SomeType = { a: { b: "Me" } };

  get name() {
    return this.prop?.a.b;
  }
}
