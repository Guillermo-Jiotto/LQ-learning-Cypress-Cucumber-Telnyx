class blogPage {
    elements = {
        messagingFilter: () => cy.get('[role="radio"]').first(),
        newsAndEvents: () => cy.get('[role="radio"]').eq(7),
        firstArticle: () => cy.get('h2[class*="Text-sc"]').first(),
        article: () => cy.get('[id="articles"] [class*="Text-sc"]')
    }

    messagingFilterClick = () => {
        this.elements.messagingFilter().click();
    }

    newsAndEventsClick = () => {
        this.elements.newsAndEvents().click();
    }
}
module.exports = new blogPage();