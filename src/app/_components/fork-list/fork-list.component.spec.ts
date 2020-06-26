import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkListComponent } from './fork-list.component';

describe('ForkListComponent', () => {
  let component: ForkListComponent;
  let fixture: ComponentFixture<ForkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
