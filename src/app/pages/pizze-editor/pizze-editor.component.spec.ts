import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzeEditorComponent } from './pizze-editor.component';

describe('PizzeEditorComponent', () => {
  let component: PizzeEditorComponent;
  let fixture: ComponentFixture<PizzeEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzeEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
