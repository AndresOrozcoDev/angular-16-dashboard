import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject: BehaviorSubject<boolean>;
  
  constructor() {
    // Inicializa el BehaviorSubject con el estado actual de autenticación
    this.userSubject = new BehaviorSubject<boolean>(this.isAuthenticated());
  }

  getUser(): Observable<boolean> {
    // Retorna el observable
    return this.userSubject.asObservable();
  }

  logout() {
    // Cambia el estado de autenticación a falso y emite el nuevo valor
    this.userSubject.next(false);
  }

  private isAuthenticated(): boolean {
    // Implementa la lógica para determinar si el usuario está autenticado
    // Aquí puedes implementar tu lógica de autenticación
    // Por ejemplo, podrías verificar si el usuario tiene un token válido, si está almacenado en el almacenamiento local, etc.
    // Por ahora, simplemente devolvemos false
    return true;
  }

}
