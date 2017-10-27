import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from "@angular/http";

@Injectable()
export class SearchWikiService {

  constructor(private http: Jsonp) { }
  
    search(searchItem: string) {
      let urlParams = new URLSearchParams();
      urlParams.set('action', 'opensearch');
      urlParams.set('search', searchItem);
      urlParams.set('limit', "1");
      urlParams.set('format', 'json');
  
      return this.http
        .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { params: urlParams })
        .toPromise()
        .then((response) => response.json());
    }

}
