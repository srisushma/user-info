import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { FormsModule } from '@angular/forms';
import { SortPipe } from '../shared/sort.pipe';
import { FilterPipe } from '../shared/filter.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule, Store, StateObservable } from '@ngrx/store';
import { TestStore } from '../user/store/TestStore';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientTestingModule],
      declarations: [ UserListComponent, SortPipe, FilterPipe ],
      providers: [{ provide: Store, useClass: TestStore }]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
