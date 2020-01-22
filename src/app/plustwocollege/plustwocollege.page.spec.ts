import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlustwocollegePage } from './plustwocollege.page';

describe('PlustwocollegePage', () => {
  let component: PlustwocollegePage;
  let fixture: ComponentFixture<PlustwocollegePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlustwocollegePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlustwocollegePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
