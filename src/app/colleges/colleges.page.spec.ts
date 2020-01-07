import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CollegesPage } from './colleges.page';

describe('CollegesPage', () => {
  let component: CollegesPage;
  let fixture: ComponentFixture<CollegesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CollegesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
