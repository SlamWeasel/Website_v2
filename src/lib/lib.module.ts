import { NgModule } from "@angular/core";
import { WindowComponent } from "./window/window.component";
import { DesktopIconComponent } from "./desktop-icon/desktop-icon.component";
import { MatIcon } from '@angular/material/icon'
import { TaskBarCompnent } from "./task-bar/task-bar.component";
import { StartComponent } from "./task-bar/start/start.component";

@NgModule
({
    declarations: 
    [
        WindowComponent,
        DesktopIconComponent,
        TaskBarCompnent,
        StartComponent
    ],
    imports: 
    [
        MatIcon
    ],
    exports: 
    [
        WindowComponent,
        DesktopIconComponent,
        TaskBarCompnent,
        StartComponent
    ],
})
export class LibMod 
{

}