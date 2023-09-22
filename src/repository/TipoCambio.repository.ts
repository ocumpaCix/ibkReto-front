import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {AppResponse} from "../models/AppResponse.model";
import {TipoCambio} from "../models/TipoCambioResponse.model";
import {CambioMonedaResponse} from "../models/CambioMonedaResponse.model";

@Injectable(
    {
        providedIn: "root"
    }
)
export class TipoCambioRepository {
    private baseUrl = "http://localhost:4112/api/tc"

    constructor(private http: HttpClient) {
    }

    listar(): Observable<AppResponse<TipoCambio[]>> {
        return this.http.get<AppResponse<TipoCambio[]>>(this.baseUrl);
    }

    cambiarMoneda(request: {}): Observable<AppResponse<CambioMonedaResponse>> {
        return this.http.post<AppResponse<CambioMonedaResponse>>(`${this.baseUrl}/cambiarMoneda`, request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(error.error as unknown as AppResponse<CambioMonedaResponse>)
                })
            )
    }
}
