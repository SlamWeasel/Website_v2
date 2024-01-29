import { Component, Input, OnInit } from "@angular/core";
import { Icons } from "./icons";

@Component
({
    selector: 'desktop-icon',
    templateUrl: './desktop-icon.component.html',
    styleUrls: ['./desktop-icon.component.scss']
})
export class DesktopIconComponent implements OnInit
{
    @Input({ required: true }) icon: string = "";
    @Input({ required: true }) text: string = "text";

    ngOnInit() 
    {

    }

    constructor() 
    {

    }

    public getIconSrc(): string
    {
        if(!this.icon || !Object.keys(Icons).filter(key => isNaN(+key)).includes(this.icon))
        {
            console.log(this.icon + " is not an icon");
            return "";
        }

        return "../../assets/desktop_icons/" + this.icon + ".png"
    }
}