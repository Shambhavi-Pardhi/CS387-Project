import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewQuesComponentComponent } from './review-ques-component.component';

describe('ReviewQuesComponentComponent', () => {
  let component: ReviewQuesComponentComponent;
  let fixture: ComponentFixture<ReviewQuesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewQuesComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewQuesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
