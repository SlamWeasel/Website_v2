import { Component, Input, OnInit } from "@angular/core";

@Component
({
    selector: 'button-95',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class Button95Component implements OnInit 
{
    @Input() Width: string = '21px';
    @Input() Height: string = '21px';

    mouseDown: boolean = false;

    ngOnInit() 
    {

    }

    constructor() 
    {

    }

    public async onClick(event: MouseEvent, down: boolean): Promise<void>
    {
        let host = event.target as Element;

        while (!host?.classList.contains('buttonBackdrop'))
            host = host.parentElement as Element;

        this.mouseDown = down;

        try
        {
            if(down)
            {
                host.querySelectorAll(".light-line"    )[0].classList.add("clicked-start");
                host.querySelectorAll(".lighter-line"  )[0].classList.add("clicked-start");
                host.querySelectorAll(".dark-line"     )[0].classList.add("clicked-start");
                host.querySelectorAll(".darker-line"   )[0].classList.add("clicked-start");
            }
            else
            {
                host.querySelectorAll(".light-line"    )[0].classList.remove("clicked-start");
                host.querySelectorAll(".lighter-line"  )[0].classList.remove("clicked-start");
                host.querySelectorAll(".dark-line"     )[0].classList.remove("clicked-start");
                host.querySelectorAll(".darker-line"   )[0].classList.remove("clicked-start");
            }
        }
        catch
        {}
    }
}