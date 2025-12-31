import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontAwsomeIcon } from './font-awsome-icon';

describe('FontAwsomeIcon', () => {
  let component: FontAwsomeIcon;
  let fixture: ComponentFixture<FontAwsomeIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwsomeIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontAwsomeIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
