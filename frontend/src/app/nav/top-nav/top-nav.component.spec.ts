import { ComponentFixture, TestBed } from '@angular/core/testing';

import { topnavComponent } from './top-nav.component';

describe('topnavComponent', () => {
  let component: topnavComponent;
  let fixture: ComponentFixture<topnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [topnavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(topnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
