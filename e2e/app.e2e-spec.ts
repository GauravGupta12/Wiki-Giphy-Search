import { AngularWikipediaGiphySearchPage } from './app.po';

describe('angular-wikipedia-giphy-search App', () => {
  let page: AngularWikipediaGiphySearchPage;

  beforeEach(() => {
    page = new AngularWikipediaGiphySearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
