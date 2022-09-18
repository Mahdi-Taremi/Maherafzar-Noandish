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
  // maskFilled() {
  //   this.toastr.error('Please set your keyboard language to English', 'Error', {
  //     timeOut: 2000,
  //   });
  // }

  showError(e: any) {
    const KEY = e.keyCode;
    const check = 65 <= KEY && KEY <= 90;
    // console.log(check);

    if (check == false) {
      this.toastr.error('Please enter only English letters', 'Error', {
        timeOut: 2000,
      });
    }
    // const alphabet = [
    //   'A',
    //   'B',
    //   'C',
    //   'D',
    //   'E',
    //   'F',
    //   'G',
    //   'H',
    //   'I',
    //   'J',
    //   'K',
    //   'L',
    //   'M',
    //   'N',
    //   'O',
    //   'P',
    //   'Q',
    //   'R',
    //   'S',
    //   'T',
    //   'U',
    //   'V',
    //   'W',
    //   'X',
    //   'Y',
    //   'Z',
    //   'a',
    //   'b',
    //   'c',
    //   'd',
    //   'e',
    //   'f',
    //   'g',
    //   'h',
    //   'i',
    //   'j',
    //   'k',
    //   'l',
    //   'm',
    //   'n',
    //   'o',
    //   'p',
    //   'q',
    //   'r',
    //   's',
    //   't',
    //   'u',
    //   'v',
    //   'w',
    //   'x',
    //   'y',
    //   'z',
    // ];
    // const findLetter = alphabet.find((obj) => {
    //   return console.log(obj != e.key);
    // });
    // const regexx = new RegExp("[a-zA-Z]");
    // console.log(regexx);
    // console.log(this.customPatterns.A);
    // console.log(e.key);
    // if (e.key !==) {
    // }
  }

  ngOnInit(): void {}
}
