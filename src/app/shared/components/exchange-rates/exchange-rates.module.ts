import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ExchangeRatesComponent } from './components';
import { ExchangePipe } from './pipes';

@NgModule({
    declarations: [ExchangeRatesComponent, ExchangePipe],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [ExchangeRatesComponent],
})
export class ExchangeRatesModule {}
