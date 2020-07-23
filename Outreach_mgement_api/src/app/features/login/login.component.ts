import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient,HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { takeWhile, finalize } from 'rxjs/operators';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import * as _ from 'lodash';
// import { LocalStorageService } from './../../shared/local-storage-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  canSubscribe: boolean;
  invalidLogin: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private changeDetector: ChangeDetectorRef,
    // private alertService: AlertService
  ) {
    // redirect to home if already logged in
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit() {
    window.sessionStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      emailaddress: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.canSubscribe = true;
  }


  // convenience getter for easy access to form fields
  // get f() { return this.loginForm.controls; }

  get emailaddress() {
    return this.loginForm.get('emailaddress');
  }
  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {

    this.submitted = true;
    this.loading = true
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    const request = new HttpParams()
      .set('username', this.emailaddress.value)
      .set('password', this.password.value)
      .set('grant_type', 'password');
    
     this.loginService.login(request.toString()).subscribe(data => {
      window.sessionStorage.setItem('token', JSON.stringify(data));
      console.log(window.sessionStorage.getItem('token'));
      this.router.navigate(['/events']);
    }, error => {
        alert("error")
    });
  }

  saveInLocal(key, val): void {
    console.log('recieved= key:' + key + 'value:' + val);
    // this.localStorageService.setItemByKey(key, val, true);
    localStorage.setItem(key, val);
  }
}