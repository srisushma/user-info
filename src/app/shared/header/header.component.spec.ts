import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Router } from '@angular/router';
import { UserComponent } from 'src/app/user/user.component';
import { UserListComponent } from 'src/app/user-list/user-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from "../../app-routing.module";
import { AppComponent } from 'src/app/app.component';
import { Location } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortPipe } from '../sort.pipe';
import { FilterPipe } from '../filter.pipe';
import { Store } from '@ngrx/store';
import { TestStore } from 'src/app/user/store/TestStore';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule, ReactiveFormsModule, 
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [ 
        AppComponent,
        HeaderComponent,
        UserComponent,
        UserListComponent,
        SortPipe,
        FilterPipe
      ],
      providers: [{ provide: Store, useClass: TestStore }]
    })
    .compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
  }));
  
  it('should create', () => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it("navigate to '' redirects to '/'", () => {
    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/');
    });
  });

  it("navigate to 'user-list' takes to '/user-list'", () => {
    router.navigate(['/user-list']).then(() => {
      expect(location.path()).toBe('/user-list');
    });
  });
});
