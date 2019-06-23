import { Catalogo } from './../models/catalogo.model';
import { CRUDService, FileUploadService, GenericoService } from './../providers';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as CanvasJS from 'assets/js/canvasjs.min';

declare var $;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public items: Catalogo[];

    constructor(private http: CRUDService, private fileuploadService:FileUploadService, private gen: GenericoService) {
    }
    countrylist: any[];
    selected: string = "";

    fileSelected: File = null;
    private files;

    ngOnInit() {
        this.countrylist = [
            { "name": "Afghanistan", "code": "AF" },
            { "name": "Åland Islands", "code": "AX" },
            { "name": "Albania", "code": "AL" },
            { "name": "Algeria", "code": "DZ" },
            { "name": "American Samoa", "code": "AS" },
            { "name": "AndorrA", "code": "AD" },
            { "name": "Angola", "code": "AO" },
            { "name": "Anguilla", "code": "AI" },
            { "name": "Antarctica", "code": "AQ" },
            { "name": "Antigua and Barbuda", "code": "AG" },
            { "name": "Argentina", "code": "AR" },
            { "name": "Armenia", "code": "AM" },
            { "name": "Aruba", "code": "AW" },
            { "name": "Australia", "code": "AU" },
            { "name": "Austria", "code": "AT" },
            { "name": "Azerbaijan", "code": "AZ" },
            { "name": "Bahamas", "code": "BS" },
            { "name": "Bahrain", "code": "BH" },
            { "name": "Bangladesh", "code": "BD" },
            { "name": "Barbados", "code": "BB" }
        ]
        let deportista = [
            { x: 5, y: 5, name: "Atletismo" },];
        let dataPoints = [
            { x: 1.90, y: 4.10, label: "cat 1" },
            { x: 1.90, y: 4.30 },
            { x: 2.10, y: 3.50 },
            { x: 0.60, y: 7.00 },
            { x: 1.70, y: 2.10 },
            { x: 2.30, y: 3.30 },
            { x: 2.30, y: 3.30 },
            { x: -0.50, y: 1.70 },
            { x: -0.20, y: 7.40 },
            { x: -0.20, y: 7.40 },
            { x: -2.10, y: 9.90 },
            { x: -3.70, y: 3.70 },
            { x: -3.70, y: 6.90 },
            { x: -2.10, y: 9.90 },
            { x: 2.00, y: 4.00 },
            { x: 2.00, y: 4.00 },
            { x: 1.60, y: 2.40 },
            { x: 1.80, y: 4.40 },
            { x: 1.80, y: 4.40 },
            { x: 1.70, y: 2.90 },
            { x: 2.10, y: 3.50 },
            { x: 1.60, y: 0.80 },
            { x: -0.40, y: 5.80 },
            { x: 0.60, y: 1.80 },
            { x: 0.60, y: 7.00 },
            { x: 1.70, y: -0.50 },
            { x: 1.70, y: 4.90 },
            { x: 1.70, y: 0.10 },
            { x: 1.70, y: 4.10 },
            { x: 1.80, y: 2.80 },
            { x: 1.70, y: 4.10 },
            { x: 0.60, y: 1.10 },
            { x: 0.65, y: 0.07 },
            { x: 0.03, y: 0.11 },
            { x: -0.94, y: 0.62 },
            { x: -0.95, y: 0.55 },
            { x: -1.19, y: 0.47 },
            { x: -1.59, y: 1.03 },
            { x: 0.61, y: 2.83 },
            { x: 1.79, y: 2.31 },
            { x: 1.33, y: 2.51 },
            { x: 0.99, y: 2.95 },
            { x: 1.20, y: 2.54 },
            { x: 0.63, y: 3.05 },
            { x: 0.51, y: 3.21 },
            { x: 2.10, y: 2.50 },
            { x: 1.10, y: 5.90 },
            { x: 0.90, y: 4.90 },
            { x: 1.10, y: 5.90 },
            { x: 0.40, y: 2.00 },
            { x: -1.60, y: 2.20 },
            { x: 1.40, y: 3.40 },
            { x: -0.30, y: 3.30 },
            { x: 0.93, y: 1.81 },
            { x: 1.50, y: 2.90 },
            { x: 1.40, y: 3.40 },
            { x: 1.00, y: 3.40 },
            { x: 1.50, y: 3.10 },
            { x: 1.20, y: 2.20 },
            { x: -0.34, y: 3.28 },
            { x: 0.34, y: 2.08 },
            { x: 0.39, y: 2.27 },
            { x: 0.37, y: 2.15 },
            { x: 0.62, y: 1.88 },
            { x: 0.60, y: 1.34 },
            { x: 1.18, y: 2.04 },
            { x: -1.40, y: 1.60 },
            { x: -1.30, y: 0.30 },
            { x: -1.30, y: 1.70 },
            { x: -0.80, y: 1.40 },
            { x: 0.13, y: 1.87 },
            { x: -0.58, y: 0.88 },
            { x: -0.98, y: 0.18 },
            { x: -1.40, y: 0.96 },
            { x: -1.71, y: 0.97 },
            { x: -2.00, y: 0.42 },
            { x: -3.19, y: 2.65 },
            { x: 1.40, y: 5.20 },
            { x: 0.50, y: 6.50 },
            { x: -0.80, y: 7.80 },
            { x: 0.30, y: 6.50 },
            { x: 1.00, y: 5.80 },
            { x: 0.70, y: 6.10 },
            { x: -0.50, y: 3.50 },
            { x: 0.80, y: 6.40 },
            { x: 1.90, y: 3.30 },
            { x: 0.30, y: 1.30 },
            { x: -3.34, y: 1.02 },
            { x: -1.69, y: 1.63 },
            { x: -0.65, y: 0.17 },
            { x: -0.93, y: 0.13 },
            { x: -1.18, y: -0.38},
            { x: -1.02, y: 0.00 },
            { x: -1.12, y: -1.46 },
            { x: 1.00, y: 5.40 },
            { x: 0.90, y: 5.30 },
            { x: 1.40, y: 4.80 },
            { x: -2.90, y: 1.90 },
            { x: 0.50, y: 5.30 },
            { x: -0.70, y: 5.70 },
            { x: 0.10, y: 2.70 },
            { x: 0.10, y: 2.70 },
            { x: -0.20, y: 4.80 },
            { x: 0.04, y: 5.54 },
            { x: 0.10, y: 6.50 },
            { x: -2.00, y: 2.80 },
            { x: 0.40, y: 6.80 },
            { x: 0.10, y: 5.10 },
            { x: -0.70, y: 3.50 },
            { x: 0.10, y: 5.10 },
            { x: -0.10, y: 4.70 },
            { x: 0.60, y: 3.20 },
            { x: -0.20, y: 5.40 },
            { x: 1.15, y: 4.87 },
            { x: 0.30, y: 4.70 },
            { x: 0.96, y: 3.86 },
            { x: 0.93, y: 1.17 },
            { x: 0.80, y: 2.00 },
            { x: 1.02, y: 2.58 },
            { x: 0.67, y: 4.43 },
            { x: -0.01, y: 5.99 },
            { x: -0.70, y: 6.50 },
            { x: 0.40, y: 6.40 },
            { x: 0.10, y: 6.50 },
            { x: -0.40, y: 7.00 },
            { x: 0.40, y: 6.60 },
            { x: 0.30, y: 5.70 },
            { x: -0.20, y: 6.00 },
            { x: 0.00, y: 6.40 },
            { x: 0.00, y: 6.80 },
            { x: -0.30, y: 6.50 },
            { x: 0.30, y: 6.90 },
            { x: 0.20, y: 6.20 },
            { x: 0.20, y: 6.20 },
            { x: 0.50, y: 5.50 },
            { x: 2.07, y: 1.67 },
            { x: 1.02, y: 2.92 },
            { x: 0.82, y: 3.26 },
            { x: 0.67, y: 3.17 },
            { x: 1.00, y: 3.14 },
            { x: 0.29, y: 4.31 },
            { x: -0.22, y: 4.26 },
            { x: 0.60, y: 7.80 },
            { x: 1.40, y: 9.00 },
            { x: 0.66, y: 2.46 },
            { x: 0.85, y: 2.21 },
            { x: 0.37, y: 2.05 },
            { x: 0.61, y: 1.57 },
            { x: -0.21, y: 2.81 },
            { x: -0.93, y: 2.23 },
            { x: -0.65, y: 0.71 },
            { x: 1.00, y: 8.00 },
            { x: 1.10, y: 7.70 },
            { x: 0.10, y: 2.90 },
            { x: -0.40, y: 11.40 },
            { x: -4.70, y: 12.70 },
            { x: -0.70, y: 11.10 },
            { x: -2.00, y: 12.20 },
            { x: 0.80, y: 5.40 },
            { x: 0.10, y: 4.30 },
            { x: -0.62, y: 1.08 },
            { x: -1.65, y: 0.29 },
            { x: -2.58, y: 1.66 },
            { x: -1.64, y: 0.52 },
            { x: -1.55, y: 1.63 },
            { x: -2.47, y: 2.29 },
            { x: -0.10, y: 2.82 },
            { x: 0.78, y: 2.56 },
            { x: 0.90, y: 1.90 },
            { x: -0.32, y: 3.60 },
            { x: -1.57, y: 2.57 },
            { x: -1.02, y: 3.42 },
            { x: 0.20, y: 5.80 },
            { x: -1.50, y: 3.10 },
            { x: -0.50, y: 1.70 },
            { x: 0.40, y: 4.20 },
            { x: 0.20, y: 5.80 },
            { x: 0.11, y: -0.07 },
            { x: -0.04, y: -0.14 },
            { x: -1.05, y: 1.11 },
            { x: -1.61, y: 0.71 },
            { x: -1.38, y: 0.54 },
            { x: -0.76, y: 0.10 },
            { x: -1.04, y: 1.88 },
            { x: -0.60, y: 1.94 },
            { x: 0.63, y: 2.35 },
            { x: 0.34, y: 3.06 },
            { x: -0.51, y: 2.87 },
            { x: 1.21, y: 3.47 },
            { x: 2.93, y: 0.19 },
            { x: -0.40, y: 9.40 },
            { x: -1.00, y: 9.60 },
            { x: -0.70, y: 9.50 },
            { x: -0.40, y: 7.00 },
            { x: -2.80, y: 7.00 },
            { x: -1.30, y: 7.30 },
            { x: -0.50, y: 8.10 },
            { x: -3.00, y: 11.00 },
            { x: -0.60, y: 8.40 },
            { x: -0.70, y: 7.70 },
            { x: -1.10, y: 7.50 },
            { x: -2.70, y: 9.50 },
            { x: -1.70, y: 2.50 },
            { x: -2.10, y: 12.50 },
            { x: 0.70, y: 7.30 },
            { x: -3.40, y: 9.60 },
            { x: -0.50, y: 9.10 },
            { x: -1.40, y: 10.20 },
            { x: -1.40, y: 0.00 },
            { x: 0.00, y: 2.60 },
            { x: -2.30, y: 0.90 },
            { x: -0.10, y: 3.90 },
            { x: -1.70, y: 0.50 },
            { x: -1.00, y: 5.00 },
            { x: -2.70, y: 1.50 },
            { x: -2.80, y: 5.60 },
            { x: -1.40, y: 1.40 },
            { x: -1.20, y: 3.00 },
            { x: -6.40, y: 4.00,  label: "cat 1"},
            { x: -3.90, y: 5.10 },
            { x: -2.20, y: 1.20 },
            { x: -1.30, y: 4.30 },
            { x: 0.80, y: 5.00 },
            { x: 0.70, y: 5.30 },
            { x: -0.20, y: 4.60 },
            { x: -0.20, y: 1.60 },
            { x: 0.80, y: 5.00 },
            { x: 1.74, y: 0.04 },
            { x: -1.26, y: 2.58 },
            { x: -1.84, y: 1.90 },
            { x: -1.72, y: 1.26 },
            { x: -1.98, y: -0.14 },
            { x: -0.68, y: 2.68 },
            { x: -0.64, y: 1.98 },
            { x: 1.16, y: 2.60 },
            { x: 0.54, y: 3.22 },
            { x: -0.88, y: 2.52 },
            { x: -1.84, y: 1.34 },
            { x: -0.81, y: 7.43 },
            { x: -2.61, y: 2.33 },
            { x: 0.40, y: 6.20 },
            { x: 0.30, y: 6.30 },
            { x: 0.60, y: 6.60 },
            { x: 1.60, y: 5.80 },
            { x: 0.30, y: 6.10 },
            { x: 0.40, y: 5.00 },
            { x: -0.30, y: 1.90 },
            { x: 0.30, y: 5.70 },
            { x: 1.00, y: 5.40 },
            { x: -0.20, y: 7.60 },
            { x: -4.10, y: 5.50 },
            { x: 0.00, y: 4.00 },
            { x: -1.50, y: 3.70 },
            { x: -1.90, y: 8.50 },
            { x: -1.90, y: 8.30 },
            { x: -1.50, y: 7.70 },
            { x: -2.62, y: 10.22 },
            { x: -0.30, y: 6.90 },
            { x: -4.13, y: 11.53 },
            { x: -1.70, y: 9.50 },
            { x: -4.70, y: 11.10 },
            { x: -2.20, y: 9.20 },
            { x: -0.60, y: 8.40 },
            { x: 0.10, y: 6.50 },
            { x: 0.34, y: 3.80 },
            { x: -0.34, y: 4.94 },
            { x: -0.47, y: 6.19 },
            { x: -1.31, y: 6.37 },
            { x: -1.40, y: 6.80 },
            { x: -0.70, y: 2.76 },
            { x: 0.79, y: 2.99 },
            { x: 0.56, y: 2.64 },
            { x: 0.00, y: 2.90 },
            { x: -0.08, y: 2.66 },
            { x: -1.77, y: 3.73 },
            { x: -2.24, y: 6.76 },
            { x: -1.10, y: 2.10 },
            { x: -0.38, y: 4.04 },
            { x: 0.12, y: 2.42 },
            { x: -0.34, y: 2.88 },
            { x: -1.68, y: 4.50 },
            { x: 0.37, y: 3.79 },
            { x: 0.97, y: 4.49 },
            { x: 0.30, y: 5.10 },
            { x: -0.60, y: 1.80 },
            { x: 0.80, y: 4.00 },
            { x: -1.00, y: 1.80 },
            { x: 1.52, y: 3.10 },
            { x: 0.62, y: -0.36 },
            { x: -0.49, y: 2.91 },
            { x: -1.34, y: 1.14 },
            { x: 0.60, y: 3.60 },
            { x: -0.80, y: 1.00 },
            { x: 0.00, y: 2.40 },
            { x: 0.80, y: 6.40 },
            { x: 1.40, y: 3.80 },
            { x: 0.50, y: 0.50 },
            { x: -2.41, y: 1.03 },
            { x: 0.07, y: 0.21 },
            { x: -1.24, y: 0.76 },
            { x: -1.60, y: 0.78 },
            { x: -2.01, y: 1.15 },
            { x: -1.63, y: 0.15 },
            { x: -1.71, y: 0.01 },
            { x: 0.70, y: 5.30 },
            { x: 0.30, y: 1.90 },
            { x: 0.50, y: 0.50 },
            { x: -0.40, y: 1.80 },
            { x: 0.00, y: 2.20 },
            { x: 0.20, y: 1.60 },
            { x: 1.10, y: 3.10 },
            { x: -0.20, y: 3.36 },
            { x: 2.43, y: 3.11 },
            { x: 0.73, y: 2.05 },
            { x: -0.01, y: 3.01 },
            { x: 1.00, y: 2.44 },
            { x: 0.26, y: 2.96 },
            { x: 0.55, y: 1.57 },
            { x: 1.04, y: 2.04 },
            { x: -0.60, y: 5.40 }

        ];

        let chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            zoomEnabled: true,
            theme: "dark2",
            title: {
                text: "Puntos de medida"
            },
            axisX: {
                title: "X",
                gridDashType: "solid",
			    gridThickness: 1,
                interval: 1,
                minimum: -10,
                maximum: 10
            },
            axisY: {
                title: "Y",
                interval: 1,
                minimum: -10,
                maximum: 14
            },
            data: [{
                type: "scatter",
                toolTipContent: "<b>Area: </b>{label}",
                color:"#00BFFF",
                dataPoints: dataPoints
            },
            {
                type: "scatter",
                toolTipContent: "<b>Area: </b>{name}",
                color:"	#DC143C",
                dataPoints: deportista
            }
        ]
        });
        chart.render();

    }
    // metodos para abrir y cerrar modal
    open(modalID){
        this.gen.openClose(modalID,'show')
    }

    close(modalID){
        this.gen.openClose(modalID,'hide')
    }

    selectCountryName(name) {
        console.log(name);
        console.log(this.selected);
    }

    public cargarArchivo()

    {
  
      if($('#file').val() == "")
        return console.log("Error", "El archivo es obligatorio.", {});
  
      this.fileuploadService
      .generarFileRequest('http://localhost:8080/ZEDE/docsOperador/documento', 
      {objectID: 12, numeroDoc: 1}, this.files)
      .subscribe((response) => {
       console.log('Archivo guardado')
      });
    }

    public setArchivo(event)
  {
    this.files = (event.srcElement) ? event.srcElement.files : event.target.files;
  }

  public getUrlDoc1()
  {
    return "http://localhost:8080/ZEDE/docsOperador/documento" +"/" + "OPE_DOC_0_1551992045447";
  }
    selectObjeto(event){
        this.fileSelected = <File>event.target.files[0];
        console.log(event)
    }

    subirObjecto(){
        const fd = new FormData();
        fd.append('image',this.fileSelected,this.fileSelected.name);
        this.http.post('assets', fd).subscribe(res => {
            console.log(res)
        })
    }

    
}
