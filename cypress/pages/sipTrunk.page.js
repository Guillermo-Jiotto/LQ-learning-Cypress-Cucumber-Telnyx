class sipTrunkPage {
    elements = {
        countryDropdown: () => cy.get('[aria-haspopup="listbox"]').first(),
        ukraineCountry: () => cy.get('a[href*="/pricing/elastic-sip/ua"]'),
        mainHeader: () => cy.get('h1 span', { timeout: 10000 }),
        currencyDropdown: () => cy.get('[aria-haspopup="listbox"]').last(),
        eurCurrency: () => cy.get('[class="sc-ecffda1a-4 dCDohY"] div ul li').last(),
        firstPrice: () => cy.get('[class="sc-3ef5d51e-18 emWxIX"]').first()
    }

    chooseUkraine = () => {
        this.elements.countryDropdown().click();
        this.elements.ukraineCountry().click();
    }

    chooseCurrency = () => {
        this.elements.currencyDropdown().click();
        this.elements.eurCurrency().click();
    }
}
module.exports = new sipTrunkPage();