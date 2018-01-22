import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdcomponentComponent } from './thirdcomponent.component';

describe('ThirdcomponentComponent', () => {
  let component: ThirdcomponentComponent;
  let fixture: ComponentFixture<ThirdcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
