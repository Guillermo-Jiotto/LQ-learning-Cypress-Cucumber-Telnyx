class supportCenterPage {
    elements = {
        topicName: () => cy.get('h2[class="t__h3 c__primary"]'),
        searchInput: () => cy.get('[class*="search__input"]'),
        searchResultsFor: () => cy.get('div[class="section__content"]'),
        firstSearchResult: () => cy.get('[class="c__primary"]').first()
    }

    searchInputClick = () => {
        this.elements.searchInput().click();
    }

    searchInputType = (searchValue) => {
        this.elements.searchInput().type(searchValue);
    }
}
module.exports = new supportCenterPage();