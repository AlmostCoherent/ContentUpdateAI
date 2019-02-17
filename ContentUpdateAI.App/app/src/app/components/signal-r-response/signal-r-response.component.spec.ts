import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalRResponseComponent } from './signal-r-response.component';

describe('SignalRResponseComponent', () => {
  let component: SignalRResponseComponent;
  let fixture: ComponentFixture<SignalRResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignalRResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalRResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
