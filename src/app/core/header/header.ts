import { Component } from '@angular/core';
import { GearBox } from '../../assets/gear-box/gear-box';
import { Gear } from '../../assets/gear/gear';
import { Steam } from '../../assets/steam/steam';
import { Pipe } from '../../assets/pipe/pipe';
import { Tumbler } from '../../common-ui/tumbler/tumbler';
import { NavLink } from '../../common-ui/nav-link/nav-link';
import { Nixie } from '../../assets/nixie/nixie';

@Component({
  selector: 'app-header',
  imports: [NavLink, GearBox, Gear, Steam, Pipe, Tumbler, Nixie],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
