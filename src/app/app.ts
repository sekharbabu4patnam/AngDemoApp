import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Registration } from './registration/registration';
import { Ngclassdircomp } from './ngclassdircomp/ngclassdircomp';
import { CustomerComponent } from './customer-component/customer-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, Registration, Ngclassdircomp, CustomerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngDemoApp');
}
