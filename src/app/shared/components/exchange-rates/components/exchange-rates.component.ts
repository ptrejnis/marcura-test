import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    Input,
    OnInit,
} from '@angular/core';

import { PaymentCurrency } from '@shared/dictionaries/exchange-rates';
import { updateBehaviorSubject } from '@utils/helpers';
import { ExchangeRatesFormFacade, ExchangeRatesFacade } from '../facades';
import { EXCHANGE_RATES_CONFIG, ExchangeRatesConfig } from '../providers';

@Component({
    selector: 'exchange-rates',
    templateUrl: 'exchange-rates.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ExchangeRatesFormFacade, ExchangeRatesFacade],
})
export class ExchangeRatesComponent implements OnInit {
    @Input() baseCurrency = this._config.baseCurrency;

    readonly exchangeRates$ = this._exchangeRatesFacade.exchangeRates$;
    readonly form = this._formFacade.form;
    readonly baseCurrency$ = this._exchangeRatesFacade.baseCurrency$;

    get selectedCurrency(): PaymentCurrency {
        return this._formFacade.currencyControl.value;
    }

    constructor(
        @Inject(EXCHANGE_RATES_CONFIG)
        private readonly _config: ExchangeRatesConfig,
        private readonly _formFacade: ExchangeRatesFormFacade,
        private readonly _exchangeRatesFacade: ExchangeRatesFacade,
    ) {}

    ngOnInit() {
        this._updateBaseCurrency();
        this._formFacade.onCurrencyChange(this.baseCurrency$);
        this._formFacade.updateDefaultValue(this.exchangeRates$);
    }

    private _updateBaseCurrency(): void {
        updateBehaviorSubject(this.baseCurrency$, {
            fromCurrency: this.baseCurrency,
        });
    }
}
