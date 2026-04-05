import { ComponentFixture, TestBed } from '@angular/core/testing';

import { bottomnavComponent } from './bottom-nav.component';

describe('bottomnavComponent', () => {
  let component: bottomnavComponent;
  let fixture: ComponentFixture<bottomnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [bottomnavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(bottomnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
