import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesComponent } from './categories.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CategoriesService } from './services/categories.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesModule } from './categories.module';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SharedModule, CategoriesModule],
      declarations: [CategoriesComponent, ModalComponent],
      providers: [CategoriesService]
    });
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getCategories and closeModal', () => {
    spyOn(component, 'getCategories'); // Espiamos el método getCategories
    spyOn(component.modalComponent, 'closeModal'); // Espiamos el método closeModal del modalComponent
    component.refresh();
    expect(component.getCategories).toHaveBeenCalled(); // Verificamos que se haya llamado a getProducts
    expect(component.modalComponent.closeModal).toHaveBeenCalled(); // Verificamos que se haya llamado a closeModal del modalComponent
  });
});
