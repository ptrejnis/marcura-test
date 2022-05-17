import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ExchangeRatesComponent } from './components';

@NgModule({
    declarations: [ExchangeRatesComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [ExchangeRatesComponent],
})
export class ExchangeRatesModule {}
