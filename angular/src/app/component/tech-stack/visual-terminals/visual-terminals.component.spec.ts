import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualTerminalsComponent } from './visual-terminals.component';

describe('VisualTerminalsComponent', () => {
  let component: VisualTerminalsComponent;
  let fixture: ComponentFixture<VisualTerminalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualTerminalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualTerminalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
