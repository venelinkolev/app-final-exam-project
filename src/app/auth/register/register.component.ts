import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/types/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup = this.formBilder.group({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rePassword: new FormControl('', [Validators.required]),
  });

  constructor(
    private userService: UserService,
    private formBilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}

  handleRegister(): void {
    const { firstName, lastName, email, password, rePassword } =
      this.registerFormGroup.value;
      
    // random id generator
    // const _id =
    //   new Date().getTime().toString(36) + Math.random().toString(36).slice(2);

    console.log(this.registerFormGroup);

    const body: IUser = {
      firstName,
      lastName,
      email,
      password,
    };

    this.userService.register$(body).subscribe(() => {
      this.router.navigate(['/home']);
    });
    //his.registerFormGroup.reset();
  }
}
