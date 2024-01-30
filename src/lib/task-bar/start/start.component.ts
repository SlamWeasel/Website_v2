import { Component, OnInit } from "@angular/core";

@Component
({
  selector: 'start-button',
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss',
})
export class StartComponent implements OnInit 
{
    ngOnInit()
    {

    }
    constructor()
    {

    }

    public async onClick(event: any): Promise<void>
    {
        document.getElementsByClassName("light-line"    )[0].classList.add("clicked-start");
        document.getElementsByClassName("lighter-line"  )[0].classList.add("clicked-start");
        document.getElementsByClassName("dark-line"     )[0].classList.add("clicked-start");
        document.getElementsByClassName("darker-line"   )[0].classList.add("clicked-start");
        document.getElementsByClassName("os-logo"       )[0].classList.add("clicked-start");
        document.getElementsByClassName("start-label"   )[0].classList.add("clicked-start");
        
    }
}