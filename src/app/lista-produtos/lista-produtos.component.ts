import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent implements OnInit {

  produtos: Produto[] = [];

  constructor() { }

  ngOnInit(): void {

    this.produtos = [

      {
        id: 1,
        urlImagem: 'https://www.honda.com.br/automoveis/sites/hab/files/2017-03/CIVIC_EX.png',
        titulo: 'Honda Civic',
        descricaoCurta: 'Honda Civic 2020.',
        formaPagamento: 'Forma de Pagamento: Entrada + Parcela.',
        descricaoCompleta: 'Honda Civic 2020 modelo LXR flex.',
        quilometragem: 'Quilometragem: 0 Km',
        
        valor: 'R$ 90,000.00',
      },
      {
      id: 2,
      urlImagem: 'https://www.arielautomoveis.com.br/files/novos/ic_11.png',
      titulo: 'Saveiro Robust.',
      descricaoCurta: 'Saveiro Robust 2019.',
      formaPagamento: 'Forma de Pagamento: Entrada + Parcela.',
      descricaoCompleta: 'Volkswagen Saveiro 1.6 Msi Robust cs 8v Flex',
      quilometragem: 'Quilometragem: 40.000 Km',
  
      valor: 'R$ 40,000.00',
     
      },
      {
        id: 3,
        urlImagem: 'https://www.iconsorciovolkswagen.com.br/wp-content/uploads/2016/01/novasaveiro-cd.png',
        titulo: 'Saveiro Trend.',
        descricaoCurta: ' Saveiro Trend 2018',
        formaPagamento: 'Forma de Pagamento: Entrada + Parcela.',
        descricaoCompleta: 'Volkswagen Saveiro 1.6 Msi Trend cs 8v Flex.',
        quilometragem: 'Quilometragem: 50.000 Km',
        
        valor: 'R$ 40,000.00',
  
        },
        {
          id: 4,
          urlImagem: 'https://www.pke.pt/media/configurador/chevrolet/cruze.png',
          titulo: ' Chevrolet Cruze. ',
          descricaoCurta: 'CHEVROLET CRUZE 2018 Completo.',
          formaPagamento: 'Forma de Pagamento: Entrada + Parcela.',
          descricaoCompleta: 'CHEVROLET CRUZE 1.8 LT 16V FLEX 4P AUTOMÁTICO',
          quilometragem: 'Quilometragem: 30.000 Km',
       
          valor: 'R$ 80,000.00',
          },
          {
          
          id: 4,
          urlImagem: 'https://www.repasso.com.br/wp-content/uploads/2012/04/684221.png',
          titulo: 'Fiat Uno.',
          descricaoCurta: 'Fiat Uno WAY 2014.',
          formaPagamento: 'Forma de Pagamento: Parcela 100%.',
          descricaoCompleta: 'Uno Way com ar-condicionado, carro em perfeito estado de conservação',
          quilometragem: 'Quilometragem: 70.000 Km',
         
          valor: 'R$ 20,000.00',
          },
      
          {
          id: 6,
          urlImagem: 'https://pngimage.net/wp-content/uploads/2018/06/fiat-palio-png-1.png',
          titulo: 'Fiat Palio.',
          descricaoCurta: 'Fiat Palio 2013.',
          formaPagamento: 'Forma de Pagamento:Parcela 100%.',
          descricaoCompleta: 'Fiat Palio Fire 1.0 8V (Flex) 2p 2013',
          quilometragem: 'Quilometragem: 120.00 Km',
          
          valor: 'R$ 20,000.00',
          }
      
      

    ];

  }

}
