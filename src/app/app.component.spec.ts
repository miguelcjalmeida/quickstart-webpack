import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [AppComponent] });
    });

    it('should work', () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });

    it('name must be Joao', () => {
        let fixture = TestBed.createComponent(AppComponent);
        let comp = fixture.componentInstance;

        expect(comp.test).toBe(12);
    });
});
