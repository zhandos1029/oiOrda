import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuseDrawerComponent } from './drawer.component';

@NgModule({
    declarations: [
        FuseDrawerComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        FuseDrawerComponent
    ]
})
export class FuseDrawerModule
{
}
