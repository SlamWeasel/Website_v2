import { Component, ComponentFactoryResolver, NO_ERRORS_SCHEMA, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LibMod } from '../lib/lib.module';
import { Icons } from '../lib/desktop-icon/icons';
import { WindowComponent } from '../lib/window/window.component';
import {CdkDrag} from '@angular/cdk/drag-drop';

@Component
({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LibMod, CdkDrag
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [NO_ERRORS_SCHEMA]
})

export class AppComponent 
{
  currentWindows = 0;
  title = 'Website_v2';
  Icons = Icons;

  constructor
  (
    public viewContainerRef: ViewContainerRef
  )
  {

  }
  
  openWindow(template: TemplateRef<string>, title: string)
  {
    this.viewContainerRef.createEmbeddedView(template, title);
  }

  public async onMainClick(event: any): Promise<void>
  {
    const elems: HTMLCollectionOf<Element> = document.getElementsByTagName("desktop-icon");
    const target: HTMLElement = event.target;

    for(let i = 0; i < elems.length; i++)
    {
      const classList: DOMTokenList = (elems[i].lastElementChild?.classList as DOMTokenList);
      
      if(classList.contains("icondeselected"))
        classList.remove("icondeselected");

      if(["maincon","para", "icon", "span"].includes(target.id))
      {
        if(!classList.contains("justclicked"))
        {
          if(classList.contains("iconselected"))
          {
            classList.remove("iconselected");
          }
        }
        else
          classList.remove("justclicked");
      }
      else
      {
        if(!classList.contains("justclicked"))
        {
          if(classList.contains("iconselected"))
          {
            classList.remove("iconselected");
            classList.add("icondeselected");
          }
        }
        else
          classList.remove("justclicked");
      }

    }

  }

  public async close(event: any): Promise<void>
  {
    window.self.close();
    
    //TODO: Put this in Notification Window
    console.log("There is no escape");
  }

  public openNodepad(template: TemplateRef<string>): void
  {
    this.openWindow(template, "Notepad");
  }
}
