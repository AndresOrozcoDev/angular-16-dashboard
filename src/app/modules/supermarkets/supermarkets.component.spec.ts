import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermarketsComponent } from './supermarkets.component';
import { HttpClientModule } from '@angular/common/http';
import { SupermarketsService } from './services/supermarkets.service';
import { SupermarketsModule } from './supermarkets.module';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

describe('SupermarketsComponent', () => {
  let component: SupermarketsComponent;
  let fixture: ComponentFixture<SupermarketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, SupermarketsModule],
      declarations: [SupermarketsComponent, ModalComponent],
      providers: [SupermarketsService]
    });
    fixture = TestBed.createComponent(SupermarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getSupermarkets and closeModal', () => {
    spyOn(component, 'getSupermarkets'); // Espiamos el método getSupermarkets
    spyOn(component.modalComponent, 'closeModal'); // Espiamos el método closeModal del modalComponent
    component.refresh();
    expect(component.getSupermarkets).toHaveBeenCalled(); // Verificamos que se haya llamado a getProducts
    expect(component.modalComponent.closeModal).toHaveBeenCalled(); // Verificamos que se haya llamado a closeModal del modalComponent
  });
});
