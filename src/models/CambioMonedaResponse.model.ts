export class CambioMonedaResponse {
  monedaOrigen: string;
  monedaDestino: string;
  monto: number;
  montoConvertido: number;
  tasaCambio: number;

  constructor(monedaOrigen: string, monedaDestino: string, monto: number, montoConvertido: number, tasaCambio: number) {
    this.monedaOrigen = monedaOrigen;
    this.monedaDestino = monedaDestino;
    this.monto = monto;
    this.montoConvertido = montoConvertido;
    this.tasaCambio = tasaCambio;
  }
}
