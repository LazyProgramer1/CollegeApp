import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FacilitiesPage } from './facilities.page';

describe('FacilitiesPage', () => {
  let component: FacilitiesPage;
  let fixture: ComponentFixture<FacilitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FacilitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
