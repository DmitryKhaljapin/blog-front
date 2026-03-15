import { Component } from '@angular/core';
import { Button } from '../../../common-ui/button/button';
import { Card } from '../../../common-ui/card/card';
import { InputComponent } from '../../../common-ui/input/input';
import { PageHeader } from '../../../common-ui/page-header/page-header';

@Component({
  selector: 'app-login',
  imports: [InputComponent, Button, PageHeader, Card],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {}
