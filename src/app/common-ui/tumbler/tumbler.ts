import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-tumbler',
  imports: [RouterModule],
  templateUrl: './tumbler.html',
  styleUrl: './tumbler.scss',
})
export class Tumbler {
  @Input() to: string;
  isActive: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const currentUrl = event.urlAfterRedirects;
        if (currentUrl.includes(this.to)) this.isActive = true;
        else this.isActive = false;
      });
  }
}
