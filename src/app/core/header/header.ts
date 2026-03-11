import { Component } from '@angular/core';
import { GearBox } from '../../assets/gear-box/gear-box';
import { Gear } from '../../assets/gear/gear';
import { Steam } from '../../assets/steam/steam';
import { NavLink } from '../../common-ui/nav-link/nav-link';
import { Pipe } from '../../assets/pipe/pipe';

@Component({
  selector: 'app-header',
  imports: [NavLink, GearBox, Gear, Steam, Pipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
