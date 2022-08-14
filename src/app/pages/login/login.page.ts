import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  iconName = 'eye-outline';
  type = 'password';

  constructor() {}

  ngOnInit() {}

  changeType() {
    this.iconName = this.iconName === 'eye-outline' ? 'eye-off-outline' : 'eye-outline';
    this.type = this.iconName === 'eye-outline' ? 'password' : 'text';
  }
}
