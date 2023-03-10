import { Component, OnInit } from '@angular/core';
import { DepotVoitureService } from '../services/depot-voiture.service';

@Component({
  selector: 'app-liste-voit-en-garage',
  templateUrl: './liste-voit-en-garage.component.html',
  styleUrls: ['./liste-voit-en-garage.component.css']
})
export class ListeVoitEnGarageComponent implements OnInit {
  listeDepotVoitures: any[] = [];
  constructor(private depotVoitureService:DepotVoitureService) { }

  ngOnInit(): void {
    this.getListeDepotVoiture();
  }

  getListeDepotVoiture(){
    this.depotVoitureService.getListeDepotVoiture().subscribe((data: any)  =>{
        this.listeDepotVoitures =data as any[];
     });
  }

  recupererVoit(idVoit:any,cible:any,valUpdate:any){
    this.depotVoitureService.updateDepotVoit(idVoit,cible,valUpdate).subscribe();
    alert("Merci de votre confiance");
    this.reload();
  }

  reload()
  {
    location.reload();
  }

}
