import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  public showPasswordOnPress: boolean | undefined;
  public customPatterns = { A: { pattern: new RegExp('[a-zA-Z]') } };

  ngOnInit(): void {}
}
