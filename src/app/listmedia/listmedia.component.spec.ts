import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmediaComponent } from './listmedia.component';

describe('ListmediaComponent', () => {
  let component: ListmediaComponent;
  let fixture: ComponentFixture<ListmediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
