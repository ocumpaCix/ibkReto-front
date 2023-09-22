export class TipoCambio {
  id: bigint;
  monedaOrigen: string;
  monedaDestino: string;
  tasaCambio: number

  constructor(id: bigint, monedaOrigen: string, monedaDestino: string, tasaCambio: number) {
    this.id = id;
    this.monedaOrigen = monedaOrigen;
    this.monedaDestino = monedaDestino;
    this.tasaCambio = tasaCambio;
  }
}
