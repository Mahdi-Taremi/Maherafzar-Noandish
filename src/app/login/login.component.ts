import { Component, Input, NgModule, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  public showPasswordOnPress: boolean | undefined;
  public customPatterns = { A: { pattern: new RegExp('[a-zA-Z]') } };

  constructor(private toastr: ToastrService) {}
  check: boolean | undefined;
  checkUsername(check: string) {
    // console.log(check);
    // if (check.length == 0) {
    //   console.log('check');
    // }
    // console.log(this.customPatterns);
  }
  showError() {
    this.toastr.error('Please set your keyboard language to English', 'Error', {
      timeOut: 2000,
    });
  }

  ngOnInit(): void {}
}
