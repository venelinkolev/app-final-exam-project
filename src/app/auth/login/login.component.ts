import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { LUser } from 'src/app/types/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginFormGroup: FormGroup = this.formBilder.group({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private userService: UserService, private formBilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    
  }

  handleLogin(): void {
    const { email, password } = this.loginFormGroup.value;
    console.log(this.loginFormGroup);

    const body: LUser = {
      email,
      password,
    }

    this.userService.login$(body).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
