import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { CreateCharComponent } from './pages/create-char/create-char.component';
import { AccountManagementComponent } from './pages/account-management/account-management.component';

@NgModule({
    declarations: [
        AppComponent,
        CreateCharComponent,
        AccountManagementComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CoreModule
    ]
})
export class AppModule {}
