import { ObservableService } from './observable.service';
import { Injectable } from '@angular/core';
import { AlertasService } from './alertas.service';
import { config } from '../shared/smartadmin.config';

@Injectable()
export class CatalogoService {

  constructor(private http: ObservableService) { }

  public getAll(allInfo: boolean) {
    if (allInfo)
      return this.http.getUrlServicioGet(`${config.APIRest.url}${config.APIRest.catalogo.base}?type=F`);
    else
      return this.http.getUrlServicioGet(`${config.APIRest.url}${config.APIRest.catalogo.base}`);
  }

  public getOne(id: number) {
    return this.http.getUrlServicioGet(`${config.APIRest.url}${config.APIRest.catalogo.base}/${id}`);
  }

  public insert(data: any[]) {
    return this.http.getUrlServicioPost(`${config.APIRest.url}${config.APIRest.catalogo.base}`, data);
  }

  public update(id, data) {
    return this.http.getUrlServicioPut(`${config.APIRest.url}${config.APIRest.catalogo.base}/${id}`, data);
  }

  public delete(id: number) {
    return this.http.getUrlServicioDelete(`${config.APIRest.url}${config.APIRest.catalogo.base}/${id}`);
  }
}
