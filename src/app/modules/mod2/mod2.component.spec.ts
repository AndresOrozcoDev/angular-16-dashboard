import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod2Component } from './mod2.component';

describe('Mod2Component', () => {
  let component: Mod2Component;
  let fixture: ComponentFixture<Mod2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Mod2Component]
    });
    fixture = TestBed.createComponent(Mod2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
