import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubblesBackgroundComponent } from './bubbles-background.component';

describe('BubblesBackgroundComponent', () => {
  let component: BubblesBackgroundComponent;
  let fixture: ComponentFixture<BubblesBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BubblesBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BubblesBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
