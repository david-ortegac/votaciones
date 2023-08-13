import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  passwordValidMessage: boolean = false;
  loginError: boolean = false;

  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl ('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl ('', [Validators.required, Validators.minLength(8)]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    // TODO document why this method 'ngOnInit' is empty
  
  }

  validatePassword() {
    let pass, passConf: string;
    pass = this.form.get('password')?.value!;
    passConf = this.form.get('confirmPassword')?.value!;

    if (pass === passConf) {
      this.passwordValidMessage = false;
      const p = Promise.resolve(this.register());
    } else {
      this.passwordValidMessage = true;
    }
  }

  async register() {
    let email, password: string

    if (this.form.valid) {
      email = this.form.get('email')?.value!;
      password = this.form.get('password')?.value!;
      await this.authService.register(email, password)
        .then((user) => {
          this.router.navigate(['/home']);
        }).catch(error => {
          this.loginError = true;
        });
    } else {
      this.form.markAllAsTouched();
    }
  }

}
