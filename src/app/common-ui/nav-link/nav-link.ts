import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-link',
  imports: [RouterModule],
  templateUrl: './nav-link.html',
  styleUrl: './nav-link.scss',
})
export class NavLink {
  @Input() to: string;
}
