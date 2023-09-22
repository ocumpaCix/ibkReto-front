import {Component, OnInit} from '@angular/core';
import {TipoCambioRepository} from "../repository/TipoCambio.repository";
import {TipoCambio} from "../models/TipoCambioResponse.model";
import Swal from 'sweetalert2';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'front-conversorMoneda';

    displayedColumns: string[] = ['Id', 'Moneda Origen', 'Moneda Destino', 'Tasa de cambio'];
    monedaOrigen = ''
    monedaDestino = ''
    montoConvertir = "0.0";
    tiposCambio: TipoCambio[] = [];
    result = ''

    ngOnInit(): void {
        this.tcRepo.listar().subscribe((response) => {
            if (response.success) {
                this.tiposCambio = response.data;
            } else {
                console.error(response.message);
            }
        })
    }

    constructor(private tcRepo: TipoCambioRepository) {
    }

    convertirMonto() {

        if (this.monedaOrigen.trim().length == 0) {
            Swal.fire('Error de validación', 'la moneda de origen no puede ir vacía', 'error')
            return;
        }

        if (this.monedaDestino.trim().length == 0) {
            Swal.fire('Error de validación', 'la moneda de destino no puede ir vacía', 'error')
            return;
        }

        if (this.montoConvertir == null) {
            Swal.fire('Error de validación', 'el monto no puede ir vacío', 'error')
            return;
        }

        let request = {
            monedaOrigen: this.monedaOrigen,
            monedaDestino: this.monedaDestino,
            monto: this.montoConvertir
        };
        this.tcRepo.cambiarMoneda(request).subscribe((response) => {
            if (response.success) {
                this.result = `Monto convertido:${response.data.montoConvertido}, tasa de cambio aplicada:${response.data.tasaCambio}`
            } else {
                Swal.fire('Respuesta no exitosa', response.message, 'warning')
            }

        }, (error) => {
            Swal.fire('Respuesta no exitosa', error.message, 'warning')
        })
    }

}
