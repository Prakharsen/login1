import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
  <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand">PrakharSen</a>
    </div>
    <ul class="nav navbar-nav">
      <li><a [routerLink] = "['./admin/admin']">Admin</a></li>
      <li><a [routerLink] = "['./login/login']">Login</a></li>
      <li><a [routerLink] = "['./tutor/tutor']"> Tutor</a></li>
      <li><a></a></li>
    </ul>
  </div>
</nav></div>
<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
