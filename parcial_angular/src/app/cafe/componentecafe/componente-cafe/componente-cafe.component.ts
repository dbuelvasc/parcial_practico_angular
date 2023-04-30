import { Component, OnInit } from '@angular/core';
import { WebServiceCafeService } from '../../serviciocafe/web-service-cafe.service';
import { Cafe } from '../../modelocafe/cafe';

@Component({
  selector: 'app-componente-cafe',
  templateUrl: './componente-cafe.component.html',
  styleUrls: ['./componente-cafe.component.css'],
})
export class ComponenteCafeComponent implements OnInit {
  constructor(private webServiceCafe: WebServiceCafeService) {}

  cafeListResponse: Cafe[] = Array<Cafe>();
  cafeOrigin: Cafe[] = Array<Cafe>();
  cafeBlend: Cafe[] = Array<Cafe>();

  ngOnInit(): void {
    // let tempDatosUrl = '';
    this.webServiceCafe.getData().subscribe((cafeList) => {
      this.cafeListResponse = cafeList as Array<Cafe>;
      // console.log(this.cafeListResponse);
      this.cafeOrigin = this.calcularCafe('Café de Origen');
      this.cafeBlend = this.calcularCafe('Blend');
      // console.log(this.cafeOrigin.length);
      // console.log(this.cafeBlend.length);
    });
  }

  private calcularCafe(coffeType: string) {
    return [
      ...this.cafeListResponse.filter(
        (itemCafe) => itemCafe.tipo === coffeType
      ),
    ];
  }
}
