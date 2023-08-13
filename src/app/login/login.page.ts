import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginError: boolean = false;
  loading: boolean = false;

  form = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async login() {
    let email, password: string
    if (this.form.valid) {
      this.loading = true;
      email = this.form.get('email')?.value!;
      password = this.form.get('password')?.value!;
      await this.authService.login(email, password).then((user) => {
        this.router.navigate(['/home']);
      }).catch((error) => {
        console.log(error);
        this.loginError = true;
      }).finally(() => {
        this.loading = false;
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

}
