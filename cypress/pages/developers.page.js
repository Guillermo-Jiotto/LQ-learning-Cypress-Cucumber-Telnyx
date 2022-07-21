class developersPage {
    elements = {
        messagingLink: () => cy.get('[href="/docs/v2/messaging"]').last(),
        seeTheSpecsBtn: () => cy.get('[color="primary"][href="/docs/api/v2/messaging"]'),
        runInPostmanBtn: () => cy.get('[alt="Run in Postman"]'),
        joinDevelopersCommunityLink: () => cy.get('[href="https://community.telnyx.com/articles/171/welcome-to-the-telnyx-community-1.html"]').first(),
        loginButton: () => cy.get('[id="login-link"]'),
        signInButton: () => cy.get('[name="signin_button"]'),
        alertMessage: () => cy.get('[role="alert"]'),
        searchField: () => cy.get('[id="search-query"]'),
        firstSearchResult: () => cy.get('[href="/articles/373/send-fax-with-go-and-telnyx-api.html"]'),
        menuDropdown: () => cy.get('[id="explore-menu-dropdown"]'),
        topicsFilter: () => cy.get('[id="explore_topics_link"]'),
        topicsHeader: () => cy.get('h1[class="h3 d-inline capitalize"]'),
        askQuestionBtn: () => cy.get('[id="create-button"]'),
        askQuestionHeader: () => cy.get('h1[class="h2"]'),
        yourQuestionInput: () => cy.get('[id="title"]'),
        questionsBody: () => cy.get('[id="body"]'),
        topicsInput: () => cy.get('[class="select2-search__field"]'),
        topicsResult: () => cy.get('[id="topics-results-0"]'),
        sectionDropdown: () => cy.get('[id="space_select-container"]'),
        firstSectionResult: () => cy.get('[id="space_select-results-0"]'),
        loginAndSubmitBtn: () => cy.get('[id="submit-question"]'),
        afterSubmitWarning: () => cy.get('[class="alert alert-warning"]'),
        questionFilter: () => cy.get('[id="question_explore_link"]'),
        allQuestionsHeader: () => cy.get('h1[class="h3 d-inline capitalize"]'),
        usersFilter: () => cy.get('[id="explore_users_link"]'),
        usersHeader: () => cy.get('h1[class="h3 d-inline capitalize"]')
    }

    messagingLinkClick = () => {
        this.elements.messagingLink().click();
    }

    seeTheSpecsBtnClick = () => {
        this.elements.seeTheSpecsBtn().click();
    }

    runInPostmanBtnClick = () => {
        this.elements.runInPostmanBtn().invoke('removeAttr', 'target').click();
    }

    joinDevelopersCommunityLinkClick = () => {
        this.elements.joinDevelopersCommunityLink().invoke('removeAttr', 'target').click();
    }

    loginButtonClick = () => {
        this.elements.loginButton().click();
    }

    signInButtonClick = () => {
        this.elements.signInButton().click();
    }

    searchFieldClick = () => {
        this.elements.searchField().click();
    }

    searchFieldType = (searchTesting) => {
        this.elements.searchField().type(searchTesting);
    }

    menuDropdownClick = () => {
        this.elements.menuDropdown().click();
    }

    topicsFilterClick = () => {
        this.elements.topicsFilter().click();
    }

    askQuestionBtnClick = () => {
        this.elements.askQuestionBtn().click();
    }

    yourQuestionInputType = (anyText) => {
        this.elements.yourQuestionInput().type(anyText)
    }

    questionsBodyType = (anyDescription) => {
        this.elements.questionsBody().type(anyDescription);
    }

    chooseTopic = (topicText) => {
        this.elements.topicsInput().type(topicText);
        this.elements.topicsResult().click();
    }

    chooseSection = () => {
        this.elements.sectionDropdown().click();
        this.elements.firstSectionResult().click();
    }

    loginAndSubmitBtnClick = () => {
        this.elements.loginAndSubmitBtn().click();
    }

    questionFilterClick = () => {
        this.elements.questionFilter().click();
    }

    usersFilterClick = () => {
        this.elements.usersFilter().click();
    }
}
module.exports = new developersPage();