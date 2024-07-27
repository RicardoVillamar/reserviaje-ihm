import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesallComponent } from './viajesall.component';

describe('ViajesallComponent', () => {
  let component: ViajesallComponent;
  let fixture: ComponentFixture<ViajesallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViajesallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViajesallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
