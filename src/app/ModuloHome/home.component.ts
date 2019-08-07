import { Catalogo } from './../models/catalogo.model';
import { CRUDService, FileUploadService, GenericoService } from './../providers';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as CanvasJS from 'assets/js/canvasjs.min';


import * as XLSX from 'ts-xlsx';

declare var $;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public items: Catalogo[];

    constructor(private http: CRUDService, private fileuploadService: FileUploadService, private gen: GenericoService) {
    }
    countrylist: any[];
    selected: string = "";

    fileSelected: File = null;
    private files;

    ngOnInit() {


    }
    // metodos para abrir y cerrar modal




  
    arrayBuffer: any;
    file: File;
    incomingfile(event) {
        this.file = event.target.files[0];
    }

    Upload() {
        let fileReader = new FileReader();
        fileReader.onload = (e) => {
            this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(this.arrayBuffer);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = XLSX.read(bstr, { type: "binary" });
            console.log(XLSX.utils.sheet_to_json(workbook.Sheets))
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
        }
        fileReader.readAsArrayBuffer(this.file);
    }


}
