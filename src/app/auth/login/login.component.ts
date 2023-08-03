import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorMessageService } from 'src/app/services/error-message.service';
import { UserService } from 'src/app/services/user.service';
import { MessageType } from 'src/app/types/message';
import { LUser } from 'src/app/types/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup = this.formBilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  constructor(
    private userService: UserService,
    private formBilder: FormBuilder,
    private router: Router,
    private errorMessage: ErrorMessageService
  ) {}

  ngOnInit(): void {}

  handleLogin(): void {
    const { email, password } = this.loginFormGroup.value;
    console.log(this.loginFormGroup);

    const body: LUser = {
      email,
      password,
    };

    this.userService.login$(body).subscribe(() => {
      this.router.navigate(['/recipes/my-recipes']);

      this.errorMessage.getErrorMessage({
        message: 'Success',
        type: MessageType.Success,
      });
    });
  }
}
