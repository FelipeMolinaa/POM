import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleButtonComponent } from './toggle-button.component';
import { AppModule } from 'src/app/app.module';
import { By } from '@angular/platform-browser';

describe('ToggleButtonComponent', () => {
    let component: ToggleButtonComponent;
    let fixture: ComponentFixture<ToggleButtonComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        });
        fixture = TestBed.createComponent(ToggleButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
