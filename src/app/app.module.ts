import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { bootstrapPauseFill, bootstrapSkipForwardFill, bootstrapPlayFill, bootstrapArrowClockwise, bootstrapGearFill } from "@ng-icons/bootstrap-icons"

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CronAreaComponent } from './pages/home/components/cron-area/cron-area.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToggleButtonComponent } from './pages/home/components/cron-area/component/toggle-button/toggle-button.component';
import { NgIconsModule } from '@ng-icons/core';
import { TimerControlComponent } from './pages/home/components/cron-area/component/timer-control/timer-control.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CronAreaComponent,
        ToggleButtonComponent,
        TimerControlComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        NgIconsModule.withIcons({ bootstrapPauseFill, bootstrapSkipForwardFill, bootstrapPlayFill, bootstrapArrowClockwise, bootstrapGearFill }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
