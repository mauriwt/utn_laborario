import { Injectable } from '@angular/core';
import { ThCalendarioDet } from 'app/models';
import { AlertasService } from 'app/providers';


@Injectable()
export class CalendarioService {

    constructor(private msj: AlertasService) { }

    public viewcalendario(year, month) {
        var calendario;
        var lista = [];
        var now = new Date(year, month - 1, 1);
        var last = new Date(year, month, 0);
        var primerDiaSemana = (now.getDay() == 0) ? 7 : now.getDay();
        var ultimoDiaMes = last.getDate();
        var dia = 0;

        var last_cell = primerDiaSemana + ultimoDiaMes;

        var j = 0;
        for (var i = 1; i <= 42; i++) {
            j++;
            if (i == primerDiaSemana) {
                dia = 1;
            }
            if (i < primerDiaSemana || i >= last_cell) {
            }
            if (i % 7 == 0) {
                if (dia > ultimoDiaMes)
                    break;
            }

        }
        return lista;
    }

}
