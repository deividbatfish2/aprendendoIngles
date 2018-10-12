import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';
@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Array<Frase> = FRASES;
  public instrucao = 'Traduza a frase';
  public resposta = '';
  public rodada = 0;
  public fraseDaRodada: Frase;
  public progresso = 0;
  public tentativa = 5;
  public totalTentativas = 5;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizarFrase(this.rodada);
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificaResposta(): void {
    if (this.resposta === this.fraseDaRodada.frasePtBr) {
      this.atualizarFrase(++this.rodada);
      this.atualizarProgresso();
    } else {
      this.controlaTentativa(--this.tentativa);
    }
  }

  private controlaTentativa(numeroTentativasRestantes: number): any {
    if (numeroTentativasRestantes < 0) {
      this.encerrarJogo.emit('derrota');
    }
  }

  private atualizarFrase(fraseIndex: number): void {
    if (fraseIndex >= this.frases.length) {
      this.encerrarJogo.emit('vitoria');
    } else {
      this.fraseDaRodada = this.frases[fraseIndex];
      this.resposta = '';
    }
  }

  private atualizarProgresso(): void {
    this.progresso = this.progresso + (100 / this.frases.length);
  }

}
