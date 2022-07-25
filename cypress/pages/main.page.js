class mainPage {
    elements = {
        acceptCookiesButton: () => cy.get('[class="sc-5d3a275a-0 jdjrgE"] button[class*="sc-5d3a275a-1"]'),
        emailInput: () => cy.get('[type="email"]'),
        tryForFreeBtn: () => cy.get('[type="submit"]'),
        signupBtn: () => cy.get('[href="/sign-up"]').eq(1),
        supportCenterLink: () => cy.get('a[href="https://support.telnyx.com"]').last(),
        linkedInLink: () => cy.get('[href="https://www.linkedin.com/company/telnyx/"]'),
        twitterLink: () => cy.get('[href="https://twitter.com/telnyx"]'),
        facebookLink: () => cy.get('[href="https://www.facebook.com/Telnyx/"]'),
        learnMoreLink: () => cy.get('[href="https://developers.telnyx.com/docs"]').eq(1),
        releaseNotesLink: () => cy.get('[href="/release-notes"]'),
        videoRoomsCheckbox: () => cy.get('[class="sc-e117dd75-0 dERAgk"] rect').eq(3),
        firstArticleHeader: () => cy.get('[class="Text-sc-5o8owa-0 sc-d997c11f-1 dexjwF jEAeMj"]'),
        sipTrunkingLink: () => cy.get('[href="/pricing/elastic-sip"]').last(),
        sipTrunkingHeader: () => cy.get('h1 span'),
        developersDocsLink: () => cy.get('[href="https://developers.telnyx.com/docs"]').last(),
        pricingMenu: () => cy.get('[class="Text-sc-5o8owa-0 sc-7b3980dc-7 czgqGc khahzD"]').last(),
        seeAllPricingLink: () => cy.get('[href="/pricing"]'),
        allPricingHeader: () => cy.get('h1[class*="Text-sc"] span'),
        blogLink: () => cy.get('[href="/resources"]').last()
    }

    acceptCookies = () => {
        this.elements.acceptCookiesButton().click()
    }
    
    typeEmail = (email) => {
        this.elements.emailInput().type(email)
    }

    tryForFreeBtnClick = () => {
        this.elements.tryForFreeBtn().click()
    }

    signupBtnClick = () => {
        this.elements.signupBtn().click();
    }

    supportCenterLinkClick = () => {
        this.elements.supportCenterLink().scrollIntoView();
        this.elements.supportCenterLink().invoke('removeAttr', 'target').click({force: true});
    }

    linkedInLinkClick = () => {
        this.elements.linkedInLink().scrollIntoView();
        this.elements.linkedInLink().invoke('removeAttr', 'target').click();
    }

    twitterLinkClick = () => {
        this.elements.twitterLink().scrollIntoView();
        this.elements.twitterLink().invoke('removeAttr', 'target').click();
    }

    facebookLinkClick = () => {
        this.elements.facebookLink().scrollIntoView();
        this.elements.facebookLink().invoke('removeAttr', 'target').click();
    }

    learnMoreLinkClick = () => {
        this.elements.learnMoreLink().scrollIntoView();
        this.elements.learnMoreLink().invoke('removeAttr', 'target').click();
    }

    releaseNotesLinkClick = () => {
        this.elements.releaseNotesLink().click();
    }

    videoRoomsCheckboxClick = () => {
        this.elements.videoRoomsCheckbox().click();
    }

    sipTrunkingLinkClick = () => {
        this.elements.sipTrunkingLink().click();
    }

    developersDocsLinkClick = () => {
        this.elements.developersDocsLink().invoke('removeAttr', 'target').click();
    }

    pricingMenuMouseOver = () => {
        this.elements.pricingMenu().trigger('mouseover');
    }

    allPricingClick = () => {
        this.elements.seeAllPricingLink().click({force: true})
    }

    blogLinkClick = () => {
        this.elements.blogLink().click();
    }
}
module.exports = new mainPage();