import { Validators } from "@angular/forms";

export class CorAplicacion {

	public appCodigo: string;
	public appEstado: string;
	public appNombre: string;
	public appNombreReferencia: string;
	public appVersionDesplegada: string;
	public corAplicacionXCatalogos: any;
	public corErrors: any;
	public corModulos: any;
	public corParametros: any;

	public static campos() {
		return [
			{ id: 'codigo', validar: [Validators.nullValidator, Validators.required, Validators.pattern("[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$")] },
			{ id: 'nombre', validar: [Validators.nullValidator, Validators.required, Validators.pattern("[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$")] },
			{ id: 'referencia', validar: [Validators.nullValidator, Validators.required, Validators.pattern("[0-9a-zA-ZÑñáéíóúÁÉÍÓÚ ]*$")] },
		]
	}
}