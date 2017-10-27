import { Component, OnInit } from '@angular/core';


import { SearchHistoryService } from '../services/search-history.service';
import { SearchWikiService } from '../services/search-wiki.service';
import { SearchGiphyService } from '../services/search-giphy.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})  
export class DashboardComponent implements OnInit {
    searchItem : string;
    wikiSearchResults : any[];
    giphySearchResults : any[];  
  
    constructor(
      private searchGiphyService : SearchGiphyService,
      private searchHistoryService : SearchHistoryService,
      private searchWikiService : SearchWikiService
    ){}
    
  
    searchWiki() {
      this.resetSearchResults();      
      this.searchHistoryService.addToSearchHistory(this.searchItem + ' - Wiki search - ' + this.getTimeStamp());
      this.searchWikiService.search(this.searchItem).then(searchResults => this.wikiSearchResults = searchResults);
    }
  
    searchGiphy() {
      this.resetSearchResults()
      this.searchHistoryService.addToSearchHistory(this.searchItem + ' - Giphy search - ' + this.getTimeStamp());
      this.searchGiphyService.search(this.searchItem).then(searchResults => this.giphySearchResults = searchResults.data);
    }
  
    getTimeStamp(): string {
      return (new Date().toUTCString());
    }
  
    resetSearchResults() {
      this.wikiSearchResults = [];
      this.giphySearchResults = [];
    }
  
  
    ngOnInit() {
    }
  
  }
  