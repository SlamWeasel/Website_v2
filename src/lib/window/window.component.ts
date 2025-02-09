import { _getShadowRoot } from "@angular/cdk/platform";
import { Component, HostBinding, Input, OnInit } from "@angular/core";
import { Icons } from "../desktop-icon/icons";

@Component
({
    selector: 'window',
    templateUrl: './window.component.html',
    styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit 
{
    @Input() totalWindowWidth: string = '50vh';
    @Input() totalWindowHeight: string = '30vh';
    @Input() windowIcon: Icons = Icons.cmd;
    @Input() windowTitle: string = "Window";

    ngOnInit() 
    {

    }
    
    constructor() 
    {

    }

    public getIconSrc(): string
    {
        if(!this.windowIcon || !Object.keys(Icons).filter(key => isNaN(+key)).includes(this.windowIcon))
        {
            console.log(this.windowIcon + " is not an icon!");
            return "";
        }

        return "../../assets/desktop_icons/" + this.windowIcon + ".png"
    }
}