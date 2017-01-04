import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <section>
    <router-outlet></router-outlet>
  </section>
  `,
})
export class AppComponent  { name = 'Angular'; }
