import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { LibMod } from "../lib/lib.module";
import { WindowComponent } from "../lib/window/window.component";

@NgModule
({
    declarations:[AppComponent],
    imports: [LibMod],
    bootstrap: [AppComponent]
})
export class AppModule 
{

}