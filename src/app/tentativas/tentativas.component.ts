import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Coracao} from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativa: number;
  @Input() public totalTentativas: number;

  public coracoes: Array<Coracao> = []  ;

  constructor() {  }

  ngOnInit() {

  }

  ngOnChanges() {

    if (this.totalTentativas === this.tentativa) {
      return this.inicializaTentativas(this.totalTentativas);
    }

    this.atualizaTentativas(this.tentativa);
  }

  private atualizaTentativas(tentativa: number): any {

    const totalPerdas = this.totalTentativas - tentativa;

    this.coracoes.forEach((coracao, index) => {
      index < totalPerdas ? coracao.cheio = false : coracao.cheio = true;
    });
  }

  private inicializaTentativas(numeroTentativas: number): void {
    for (let index = 0; index < numeroTentativas; index++) {
      this.coracoes.push(new Coracao(true));
    }
  }
}
