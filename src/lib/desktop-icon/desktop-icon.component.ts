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

    public onClick(event: Event): void
    {
        const clicked: HTMLElement = (event.target as HTMLElement);

            if(clicked.id === "icon")
                clicked.parentElement?.parentElement?.classList.add("iconselected", "justclicked");
            else if(clicked.id === "span" || clicked.id === "para")
                clicked.parentElement?.classList.add("iconselected", "justclicked");
            else
                clicked.classList.add("iconselected", "justclicked");

    }

    public getIconSrc(): string
    {
        if(!this.icon || !Object.keys(Icons).filter(key => isNaN(+key)).includes(this.icon))
        {
            console.log(this.icon + " is not an icon!");
            return "";
        }

        return "../../assets/desktop_icons/" + this.icon + ".png"
    }
}