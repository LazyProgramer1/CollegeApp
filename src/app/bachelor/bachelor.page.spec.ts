import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BachelorPage } from './bachelor.page';

describe('BachelorPage', () => {
  let component: BachelorPage;
  let fixture: ComponentFixture<BachelorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BachelorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BachelorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
