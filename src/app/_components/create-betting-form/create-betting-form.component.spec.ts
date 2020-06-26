import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBettingFormComponent } from './create-betting-form.component';

describe('CreateBettingFormComponent', () => {
  let component: CreateBettingFormComponent;
  let fixture: ComponentFixture<CreateBettingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBettingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBettingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
