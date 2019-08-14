import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRecommendationsComponent } from './product-recommendations.component';

describe('ProductRecommendationsComponent', () => {
  let component: ProductRecommendationsComponent;
  let fixture: ComponentFixture<ProductRecommendationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRecommendationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
