import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public jogoEmAndamento = true;
  public vencedor: boolean;

  public encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false;
    if (tipo === 'derrota') {
      this.vencedor = false;
    } else {
      this.vencedor = true;
    }
  }

  public reiniciarJogo(): void {
    this.jogoEmAndamento = true;
    this.vencedor = true;
  }
}
