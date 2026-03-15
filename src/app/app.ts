import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AuthModule } from './auth/auth.module';
import { RegisterComponent } from './auth/components/register/register.component';
import { NavLink } from './common-ui/nav-link/nav-link';
import { GearBox } from './assets/gear-box/gear-box';
import { Gear } from './assets/gear/gear';
import { Steam } from './assets/steam/steam';
import { Header } from './core/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthModule, RegisterComponent, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
