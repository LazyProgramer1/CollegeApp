import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CollegedetailPage } from './collegedetail.page';

describe('CollegedetailPage', () => {
  let component: CollegedetailPage;
  let fixture: ComponentFixture<CollegedetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegedetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CollegedetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
