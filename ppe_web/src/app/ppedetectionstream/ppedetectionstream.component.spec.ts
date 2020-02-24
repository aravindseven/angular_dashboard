import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpedetectionstreamComponent } from './ppedetectionstream.component';

describe('PpedetectionstreamComponent', () => {
  let component: PpedetectionstreamComponent;
  let fixture: ComponentFixture<PpedetectionstreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpedetectionstreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpedetectionstreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
