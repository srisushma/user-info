import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from '../shared/user.service';
import { FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { TestStore } from './store/TestStore';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [UserService, FormBuilder, HttpClientModule, { provide: Store, useClass: TestStore }],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ], 
    }).compileComponents();
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.debugElement.componentInstance;
  });

  function updateForm(userName, firstName, lastName, phoneNumber, interests) {
    component.userForm.controls['userName'].setValue(userName);
    component.userForm.controls['firstName'].setValue(firstName);
    component.userForm.controls['lastName'].setValue(lastName);
    component.userForm.controls['phoneNumber'].setValue(phoneNumber);
    component.userForm.controls['interests'].setValue(interests);
  } 

  it('should create userComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should get userModel from service', () => {
    let userService = fixture.debugElement.injector.get(UserService);
    expect(userService.users).toBeTruthy();
  });

  it('should check form is invalid and button state onInit!', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.userForm.valid).toBeFalsy();    
    expect(fixture.debugElement.nativeElement.querySelector('button').disabled).toBeTruthy();
  })
  
  it('should check validity of form controls', () => {
    component.ngOnInit();
    let userName = component.userForm.controls["userName"], userName_errors = {};
    let firstName = component.userForm.controls["firstName"], firstName_errors = {};
    let lastName = component.userForm.controls["lastName"], lastName_errors = {};
    let phoneNumber = component.userForm.controls["phoneNumber"], phoneNumber_errors = {};
    let interests = component.userForm.controls["interests"], interests_errors = {};
    userName_errors = userName.errors || {};
    firstName_errors = firstName.errors || {};
    lastName_errors = lastName.errors || {};
    phoneNumber_errors = phoneNumber.errors || {};
    interests_errors = interests.errors || {};
    expect(userName_errors['required']).toBeTruthy();
    expect(firstName_errors['required']).toBeTruthy();
    expect(lastName_errors['required']).toBeTruthy();
    expect(phoneNumber_errors['required']).toBeTruthy();
    expect(interests_errors['required']).toBeTruthy();
    updateForm("user_name", "user","name","0999999999","playing");
    expect(userName.valid).toBeTruthy();
    expect(firstName.valid).toBeTruthy();
    expect(lastName.valid).toBeTruthy();
    expect(phoneNumber.valid).toBeTruthy(); 
    expect(interests.valid).toBeTruthy(); 
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('button').disabled).toBeTruthy();
  });

});
