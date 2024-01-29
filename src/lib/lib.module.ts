import { NgModule } from "@angular/core";
import { WindowComponent } from "./window/window.component";
import { DesktopIconComponent } from "./desktop-icon/desktop-icon.component";
import { MatIcon } from '@angular/material/icon'
import { TaskBarCompnent } from "./task-bar/task-bar.component";

@NgModule
({
    declarations: 
    [
        WindowComponent,
        DesktopIconComponent,
        TaskBarCompnent
    ],
    imports: 
    [
        MatIcon
    ],
    exports: 
    [
        WindowComponent,
        DesktopIconComponent,
        TaskBarCompnent
    ],
})
export class LibMod 
{

}