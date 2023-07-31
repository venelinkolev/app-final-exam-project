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

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  passwordFormControl = new FormControl('', [Validators.required]);

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
    passwords: new FormGroup({
      password: this.passwordFormControl,
      rePassword: new FormControl('', [Validators.required]),
    }),
  });

  constructor(
    private userService: UserService,
    private formBilder: FormBuilder,
    private router: Router,
    private errorMessage: ErrorMessageService
  ) {}

  ngOnInit(): void {}

  handleRegister(): void {
    const { firstName, lastName, email, password, rePassword } =
      this.registerFormGroup.value;

    // random id generator
    // const _id =
    //   new Date().getTime().toString(36) + Math.random().toString(36).slice(2);

    console.log(this.registerFormGroup);

    const body: User = {
      firstName,
      lastName,
      email,
      password,
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
