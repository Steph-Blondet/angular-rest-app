import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Login {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.login = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit({value, valid}: {value: Login, valid}) {
    console.log('VALUE:', value);
    console.log('VALID:', valid);
    this.reset();
  }

  reset() {
    this.login.reset({
      username: '',
      password: ''
    })
  }

}
