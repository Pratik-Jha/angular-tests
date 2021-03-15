import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDeatilsComponent } from './student-deatils.component';

describe('StudentDeatilsComponent', () => {
  let component: StudentDeatilsComponent;
  let fixture: ComponentFixture<StudentDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDeatilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
