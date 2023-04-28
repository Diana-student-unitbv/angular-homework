import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureExplorerComponent } from './adventure-explorer.component';

describe('HomeComponent', () => {
  let component: AdventureExplorerComponent;
  let fixture: ComponentFixture<AdventureExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventureExplorerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdventureExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
