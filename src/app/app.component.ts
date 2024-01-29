import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LibMod } from '../lib/lib.module';

@Component
({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LibMod],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [NO_ERRORS_SCHEMA]
})

export class AppComponent 
{
  title = 'Website_v2';

  public async onMainClick(event: any): Promise<void>
  {
    const elems: HTMLCollectionOf<Element> = document.getElementsByTagName("desktop-icon");
    const target: HTMLElement = event.target;

    console.log( ["maincon","para", "icon", "span"].includes(target.id) );

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
}
