import { NgModule } from "@angular/core";
import { WindowComponent } from "./window/window.component";
import { DesktopIconComponent } from "./desktop-icon/desktop-icon.component";
import { MatIcon } from '@angular/material/icon'
import { TaskBarCompnent } from "./task-bar/task-bar.component";
import { StartComponent } from "./task-bar/start/start.component";
import { NotificationBarComponent } from "./task-bar/notif-bar/notif.component";
import { CommonModule } from "@angular/common";
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule
({
    declarations: 
    [
        WindowComponent,
        DesktopIconComponent,
        TaskBarCompnent,
        StartComponent,
        NotificationBarComponent
    ],
    imports: 
    [
        MatIcon,
        CommonModule,
        DragDropModule
    ],
    exports: 
    [
        WindowComponent,
        DesktopIconComponent,
        TaskBarCompnent,
        StartComponent,
        NotificationBarComponent
    ],
})
export class LibMod 
{

}