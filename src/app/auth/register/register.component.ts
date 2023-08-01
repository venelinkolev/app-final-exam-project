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
import { IUser, User } from 'src/app/types/user';
import { passwordCheck } from 'src/app/util/utilFunctions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);

  registerFormGroup: FormGroup = this.formBilder.group({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    passwordsGroup: new FormGroup({
      password: this.passwordFormControl,
      rePassword: new FormControl('', [
        passwordCheck(this.passwordFormControl),
      ]),
    }),
  });

  get passwordsGroup(): FormGroup {
    return this.registerFormGroup.controls['passwordsGroup'] as FormGroup;
  }

  constructor(
    private userService: UserService,
    private formBilder: FormBuilder,
    private router: Router,
    private errorMessage: ErrorMessageService
  ) {}

  ngOnInit(): void {}

  handleRegister(): void {
    const { firstName, lastName, email, passwordsGroup } =
      this.registerFormGroup.value;

    // random id generator
    // const _id =
    //   new Date().getTime().toString(36) + Math.random().toString(36).slice(2);

    console.log(this.registerFormGroup);

    const body: User = {
      firstName,
      lastName,
      email,
      password: passwordsGroup.password,
    };

    this.userService.register$(body).subscribe(() => {
      this.router.navigate(['/recipes/my-recipes']);

      this.errorMessage.getErrorMessage({
        message: 'Success',
        type: MessageType.Success,
      });
    });
    //his.registerFormGroup.reset();
  }
}
