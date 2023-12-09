import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { bootstrapPauseFill, bootstrapSkipForwardFill, bootstrapPlayFill, bootstrapArrowClockwise, bootstrapGearFill, bootstrapCheckCircleFill, bootstrapXCircleFill, bootstrapTrashFill, bootstrapPlusCircleFill } from "@ng-icons/bootstrap-icons"

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CronAreaComponent } from './pages/home/components/cron-area/cron-area.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToggleButtonComponent } from './pages/home/components/cron-area/component/toggle-button/toggle-button.component';
import { NgIconsModule } from '@ng-icons/core';
import { TimerControlComponent } from './pages/home/components/cron-area/component/timer-control/timer-control.component';
import { ListAreaComponent } from './pages/home/components/list-area/list-area.component';
import { GoalItemComponent } from './pages/home/components/list-area/components/goal-item/goal-item.component';
import { AddUpdateGoalItemComponent } from './pages/home/components/list-area/components/add-update-goal-item/add-update-goal-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxTippyModule } from 'ngx-tippy-wrapper';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CronAreaComponent,
        ToggleButtonComponent,
        TimerControlComponent,
        ListAreaComponent,
        GoalItemComponent,
        AddUpdateGoalItemComponent,

    ],
    imports: [
        NgxTippyModule,
        AppRoutingModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        NgIconsModule.withIcons({ bootstrapPlusCircleFill, bootstrapTrashFill, bootstrapXCircleFill, bootstrapPauseFill, bootstrapSkipForwardFill, bootstrapPlayFill, bootstrapArrowClockwise, bootstrapGearFill, bootstrapCheckCircleFill }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
