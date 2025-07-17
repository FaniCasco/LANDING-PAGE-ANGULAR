import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSubscribeComponent } from './btn-subscribe.component';

describe('BtnSubscribeComponent', () => {
  let component: BtnSubscribeComponent;
  let fixture: ComponentFixture<BtnSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnSubscribeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
