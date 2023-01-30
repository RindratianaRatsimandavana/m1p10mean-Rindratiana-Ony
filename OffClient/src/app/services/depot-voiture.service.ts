import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepotVoitureService {

  private _refreshrequired= new Subject<void>();


  get fonctionRefresh(){
    return this._refreshrequired;
  }

  // tokony le depotvoiture mbola ao amin garage
  constructor(private http:HttpClient) { }
  getListeDepotVoiture() {
    const url = "http://localhost:3000/depotVoiture";
    console.log(url , 'url');
    return this.http.get<any>(url,{}); //http.... prend 2 attribut (url,body)
  }

  
  insertDepotVoit(infoDepVoit: any) {
    const url = "http://localhost:3000/depotVoiture/insertDepotVoit";
    console.log(url , 'url');
    return this.http.post<any>(url , infoDepVoit );
  }

  // afaka receptionner ty, afaka zavatra hafa ihany koa rehefa maanao update mombanle resaka voiture fotsiny
  updateDepotVoit(idDepotVoit: any,cible:any,valeur:any) {
    const url = "http://localhost:3000/depotVoiture/"+idDepotVoit+"/"+cible+"/"+valeur;
    console.log(url , 'url');

    
    return this.http.patch<any>(url,{}).pipe(
      tap( () => {
            this.fonctionRefresh.next();
        }

      )
    );// Raha patch,post zany dia tsy maintsy misy 2è agument manaraka foana
    
  }

  deleteDepotVoit(idDepotVoit: any) {
    const url = "http://localhost:3000/depotVoiture/delete/"+idDepotVoit;
    console.log(url , 'url');
    return this.http.delete<any>(url,{});// Raha patch,post zany dia tsy maintsy misy 2è agument manaraka foana
  }

  getDepotVoitureParId(id:any)
  {
    const url = "http://localhost:3000/depotVoiture/depotVoitureParId/"+id;
    console.log(url , 'url');
    return this.http.get<any>(url,{}); //http.... prend 2 attribut (url,body)
  }
}
