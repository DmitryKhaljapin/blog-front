import { Component } from '@angular/core';
import { InputComponent } from '../../../common-ui/input/input';
import { Button } from '../../../common-ui/button/button';
import { PageHeader } from '../../../common-ui/page-header/page-header';
import { Card } from '../../../common-ui/card/card';

@Component({
  selector: 'blog-register',
  templateUrl: './register.component.html',
  imports: [InputComponent, Button, PageHeader, Card],
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {}
