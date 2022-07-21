const { Given, When, And, Then } = require('@badeball/cypress-cucumber-preprocessor');
const blogPage = require('../pages/blog.page.js');
const developersPage = require('../pages/developers.page.js');
const mainPage = require('../pages/main.page.js');
const signupPage = require('../pages/signup.page.js');
const sipTrunkPage = require('../pages/sipTrunk.page.js');
const supportCenterPage = require('../pages/supportCenter.page.js');

Given('User opens main page', () => {
    cy.visit('/');
})

When('User Accept cookies', () => {
    mainPage.acceptCookies();
})

And('User enter email {string} in email-input field', (email) => {
    mainPage.typeEmail(email);
})

And('Click on Try-for-free button', () => {
    mainPage.tryForFreeBtnClick();
    signupPage.elements.emailInput().should('have.value', "2syao-testing-20072022@gmail.com");
})

And('Enter {string} in Full-name input', (fullName) => {
    signupPage.typeFullName(fullName);
})

And('Enter {string} password', (password) => {
    signupPage.typePassword(password);
})

And('Enable Terms and Conditions checkbox', () => {
    signupPage.termsAndConditionsCheckboxClick();
})

And('Click on Create Account button', () => {
    signupPage.createAccountBtnClick();
})

Then('Opens page with message {string}', (confirmMessage) => {
    // signupPage.elements.confirmEmailMessage().should('have.text', confirmMessage);
})

When('Click on Signup button', () => {
    mainPage.signupBtnClick();
    cy.url().should('eq', "https://telnyx.com/sign-up");
})

And('Click on Work email input', () => {
    signupPage.emailInputClick();
})

And('Click on Full name input', () => {
    signupPage.fullNameInputClick();
    signupPage.elements.emailInputError().should('have.text', "This field is required.")
})

And('Click on Password input', () => {
    signupPage.passwordInputClick();
    signupPage.elements.fullNameInputError().should('have.text', "This field is required.")
})

Then('Warn messages appears under password input', () => {
    signupPage.elements.passwordRequirementsFirst().should('have.text', "Be at least 12 characters long");
    signupPage.elements.passwordRequirementsSecond().should('have.text', "Contain at least one number");
    signupPage.elements.passwordRequirementsThird().should('have.text', "Contain at least one symbol");
    signupPage.elements.passwordRequirementsFourth().should('have.text', "Contain at least one upper-case letter");
})

And('Click on Terms and Conditions link', () => {
    signupPage.termsAndConditionsLinkClick();
})

Then('Opens page with {string} header', (mainTaCHeader) => {
    signupPage.elements.termsAndConditionsHeader().should('have.text', mainTaCHeader);
})

And('Click on Privacy Policy link', () => {
    signupPage.privacyPolicyLinkClick();
})

Then('Opens new page with {string} header', (mainPPHeader) => {
    signupPage.elements.privacyPolicyHeader().should('have.text', mainPPHeader);
})

When('Click on Support Center link', () => {
    mainPage.supportCenterLinkClick();
})

Then('Opens page with the following links {string}, {string}, {string}', (getStart, configGuide, refMaterial) => {
    supportCenterPage.elements.topicName().eq(0).should('have.text', getStart);
    supportCenterPage.elements.topicName().eq(1).should('have.text', configGuide);
    supportCenterPage.elements.topicName().eq(14).should('have.text', refMaterial);
})

And('Click on Search for articles input', () => {
    supportCenterPage.searchInputClick();
})

And('Enter {string} value in search input', (searchValue) => {
    supportCenterPage.searchInputType(searchValue + '{enter}');
})

Then('Opens page with {string} header. First search result is {string}', (searchResultHeader, searchResult) => {
    supportCenterPage.elements.searchResultsFor().should('include.text', searchResultHeader);
    supportCenterPage.elements.firstSearchResult().should('include.text', searchResult);
})

When('Click on Connect to LinkedIn link', () => {
    mainPage.linkedInLinkClick();
})

Then('Opens LinkedIn share page', () => {
    cy.url().should('include', "https://www.linkedin.com/");
})

When('Click on Follow on Twitter link', () => {
    mainPage.twitterLinkClick();
})

Then('Opens Twitter page', () => {
    cy.url().should('include', "https://twitter.com/telnyx");
})

When('Click on Follow on Facebook link', () => {
    mainPage.facebookLinkClick();
})

Then('Opens Facebook page', () => {
    cy.url().should('include', "https://www.facebook.com/Telnyx/");
})

When('Click on Learn more link', () => {
    mainPage.learnMoreLinkClick();
    cy.url().should('include', "https://developers.telnyx.com/docs/");
})

And('Click on Messaging link', () => {
    developersPage.messagingLinkClick();
    cy.url().should('eq', "https://developers.telnyx.com/docs/v2/messaging");
})

And('Click on See the Specs button', () => {
    developersPage.seeTheSpecsBtnClick();
    cy.url().should('eq', "https://developers.telnyx.com/docs/api/v2/messaging");
})

And('Click on Run in Postman button', () => {
    developersPage.runInPostmanBtnClick();
})

Then('Opens Postman page', () => {
    cy.url().should('include', "https://god.gw.postman.com/run-collection/");
})

When('Click on Release Notes', () => {
    mainPage.releaseNotesLinkClick();
    cy.url().should('include', "https://telnyx.com/release-notes");
})

And('Click on Video Rooms checkbox', () => {
    mainPage.videoRoomsCheckboxClick();
})

Then('Appears article {string}', (articleHeader) => {
    mainPage.elements.firstArticleHeader().should('have.text', articleHeader);
})

When('Click on Elastic SIP Trunking Pricing', () => {
    mainPage.sipTrunkingLinkClick();
    mainPage.elements.sipTrunkingHeader().should('have.text', "SIP Trunk Pricing");
})

And('In countries dropdown menu choose Ukraine', () => {
    sipTrunkPage.chooseUkraine();
    sipTrunkPage.elements.mainHeader().should('have.text', "SIP Trunk Pricing for Ukraine");
})

And('In currency dropdown menu choose EUR', () => {
    sipTrunkPage.chooseCurrency();
})

Then('In first column on Local calls line should be price per minute', () => {
    sipTrunkPage.elements.firstPrice().should('have.text', "Starting at€0.1440 per minute");
})

When('Click on Developer Docs link', () => {
    mainPage.developersDocsLinkClick();
    cy.url().should('include', "https://developers.telnyx.com/docs/");
})

And('Click on Join Developer Community link', () => {
    developersPage.joinDevelopersCommunityLinkClick();
    cy.url().should('include', "https://community.telnyx.com/articles/");
})

And('Click on Login to community button', () => {
    developersPage.loginButtonClick();
    cy.url().should('include', "https://community.telnyx.com/users/login.html");
})

And('Click on Signin to community button', () => {
    developersPage.signInButtonClick();
})

Then('Apeears message {string}', (warningMessage) => {
    developersPage.elements.alertMessage().should('have.text', warningMessage);
})

And('Click on search dev community field', () => {
    developersPage.searchFieldClick();
})

And('Type {string} in search field and press ENTER', (searchTesting) => {
    developersPage.searchFieldType(searchTesting + '{enter}');
})

Then('First search result title is {string}', (firstResultTitle) => {
    developersPage.elements.firstSearchResult().should('include.text', firstResultTitle)
})

And('Click on dropdown menu next to Ask question button', () => {
    developersPage.menuDropdownClick();
})

And('Click on Topics', () => {
    developersPage.topicsFilterClick();
})

Then('Opens topic page with {string} header', (topicPageHeader) => {
    developersPage.elements.topicsHeader().should('have.text', topicPageHeader);
})

And('Click on Ask Question button', () => {
    developersPage.askQuestionBtnClick();
    developersPage.elements.askQuestionHeader().should('have.text', "Ask a Question");
})

And('Enter {string} into Ваш вопрос input', (anyText) => {
    developersPage.yourQuestionInputType(anyText);
})

And('Put {string} into description field', (anyDescription) => {
    developersPage.questionsBodyType(anyDescription);
})

And('Enter {string} into Темы input and press suggested topic', (topicText) => {
    developersPage.chooseTopic(topicText);
})

And('Choose Q&A section in dropdown list', () => {
    developersPage.chooseSection();
})

And('Press Login and Submit button', () => {
    developersPage.loginAndSubmitBtnClick();
})

Then('Opens page with new question and warning message {string}', (questionWarnMessage) => {
    developersPage.elements.afterSubmitWarning().should('include.text', questionWarnMessage)
})

And('Click on Questions', () => {
    developersPage.questionFilterClick();
})

Then('Opens question page with {string} header', (questionHeader) => {
    developersPage.elements.allQuestionsHeader().should('include.text', questionHeader)
})

When('Mouse hover on Pricing menu', () => {
    mainPage.pricingMenuMouseOver();
})

And('Click on See all Pricing link', () => {
    mainPage.allPricingClick();
})

Then('Opens pricing page with header {string}', (pricingHeader) => {
    mainPage.elements.allPricingHeader().should('have.text', pricingHeader);
})

And('Click on Users', () => {
    developersPage.usersFilterClick();
})

Then('Opens users page with {string} header', (usersHeader) => {
    developersPage.elements.usersHeader().should('include.text', usersHeader);
})

When('Click on Blog Link', () => {
    mainPage.blogLinkClick();
    cy.url().should('include', "https://telnyx.com/resources");
})

And('Click on MESSAGING filter', () => {
    blogPage.messagingFilterClick();
    blogPage.elements.firstArticle().should('have.text', "2022 guide to political campaign text messaging");
})

And('Click on NEWS&EVENTS filter', () => {
    blogPage.newsAndEventsClick();
})

Then('Appears inform message {string}', (infoMessage) => {
    blogPage.elements.article().should('have.text', infoMessage);
})