import { Component, OnInit } from "@angular/core";

@Component
({
  selector: 'notif',
  templateUrl: './notif.component.html',
  styleUrl: './notif.component.scss',
})
export class NotificationBarComponent implements OnInit 
{
    date:Date = new Date();

    constructor()
    {
    }
    ngOnInit()
    {
        try
        {
            if(window)
            setInterval(() => {
                this.date = new Date()
            }, 1000)
        }
        catch(e) {}
    }


    public async onClick(event: any): Promise<void>
    {

    }
}