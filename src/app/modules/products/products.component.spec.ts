import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsModule } from './products.module';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SharedModule, ProductsModule],
      declarations: [ProductsComponent, ModalComponent],
    });
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getProducts and closeModal', () => {
    spyOn(component, 'getProducts'); // Espiamos el método getProducts
    spyOn(component.modalComponent, 'closeModal'); // Espiamos el método closeModal del modalComponent
    component.refresh();
    expect(component.getProducts).toHaveBeenCalled(); // Verificamos que se haya llamado a getProducts
    expect(component.modalComponent.closeModal).toHaveBeenCalled(); // Verificamos que se haya llamado a closeModal del modalComponent
  });
});
