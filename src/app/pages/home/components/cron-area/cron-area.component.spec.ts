import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronAreaComponent } from './cron-area.component';
import { AppModule } from 'src/app/app.module';

describe('CronAreaComponent', () => {
    let component: CronAreaComponent;
    let fixture: ComponentFixture<CronAreaComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        });
        fixture = TestBed.createComponent(CronAreaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
