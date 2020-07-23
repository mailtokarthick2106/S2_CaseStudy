import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import { takeWhile, finalize } from 'rxjs/operators';
import { SignupService } from './services/signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  userCredentailsFilePath: string = 'user-credentials.ts';
  userDetailsFilePath: string = 'user-details.json';
  canSubscribe: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router, private signupService: SignupService, private changeDetector: ChangeDetectorRef
    // private authenticationService: AuthenticationService,
    // private userService: UserService,
    // private alertService: AlertService
  ) {
    // redirect to home if already logged in
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit() {
    this.canSubscribe = true
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    alert(JSON.stringify(this.registerForm.getRawValue));
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;

    let userDetails = {
      firstName: this.f.firstName.value,
      lastName: this.f.lastName.value,
      username: this.f.username.value,
      email: this.f.email.value,
      password: this.f.password.value,
      role: ''
    };

    debugger;
    if (userDetails.role === '') {
      userDetails.role = 'Participant';
    }
    this.signupService.createNewUser(userDetails).pipe(takeWhile(() => this.canSubscribe), finalize(() => {
      this.changeDetector.detectChanges();
    })).subscribe((data: any) => {
      if (data) {
        console.log(data.status)
        if (data.status === '201') {
          this.loading = false;
          alert('You have been registerd to the Cognizant Outreach Successfully. Please login.');
        }
      }
    }, (error: Error) => {
      this.loading = false;
      alert('Problem registering to Cognizant Outreach. Please try later.');
      this.router.navigate(['login']);
    });

  }
}
