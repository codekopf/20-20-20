import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwtwtwComponent } from './twtwtw.component';

describe('TwtwtwComponent', () => {
  let component: TwtwtwComponent;
  let fixture: ComponentFixture<TwtwtwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwtwtwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwtwtwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
