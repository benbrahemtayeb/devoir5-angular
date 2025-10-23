import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: any[], nom: String): any[] {
    
    console.log("transforming...");
    return list ? list.filter(item =>
    item.nomJoueur.toLowerCase().includes(nom)) : [];
  }

}
