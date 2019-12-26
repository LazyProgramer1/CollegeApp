import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutCollegePage } from './about-college.page';

describe('AboutCollegePage', () => {
  let component: AboutCollegePage;
  let fixture: ComponentFixture<AboutCollegePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCollegePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutCollegePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
