import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuisResultsComponent } from './luis-results.component';

describe('LuisResultsComponent', () => {
  let component: LuisResultsComponent;
  let fixture: ComponentFixture<LuisResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuisResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuisResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
