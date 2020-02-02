import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnrollmentListPage } from './enrollment-list.page';

describe('EnrollmentListPage', () => {
  let component: EnrollmentListPage;
  let fixture: ComponentFixture<EnrollmentListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnrollmentListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
