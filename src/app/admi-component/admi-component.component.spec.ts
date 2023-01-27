import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiComponentComponent } from './admi-component.component';

describe('AdmiComponentComponent', () => {
  let component: AdmiComponentComponent;
  let fixture: ComponentFixture<AdmiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmiComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
