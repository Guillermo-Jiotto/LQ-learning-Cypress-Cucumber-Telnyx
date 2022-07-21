class signupPage {
    elements = {
        emailInput: () => cy.get('[id="email"]'),
        fullNameInput: () => cy.get('[id="full_name"]'),
        passwordInput: () => cy.get('[id="password"]'),
        termsAndConditionsCheckbox: () => cy.get('[aria-labelledby="terms-label"] rect'),
        createAccountBtn: () => cy.get('[type="submit"]', { timeout: 10000 }),
        confirmEmailMessage: () => cy.get('h1[class*="Text-sc-5o8owa-0"]', { timeout: 10000 }),
        emailInputError: () => cy.get('[id="email_error"]'),
        fullNameInputError: () => cy.get('[id="full_name_error"]'),
        passwordRequirementsFirst: () => cy.get('[id="password_requirements"] div', { timeout: 10000 }).eq(1),
        passwordRequirementsSecond: () => cy.get('[id="password_requirements"] div').eq(2),
        passwordRequirementsThird: () => cy.get('[id="password_requirements"] div').eq(3),
        passwordRequirementsFourth: () => cy.get('[id="password_requirements"] div').eq(4),
        termsAndConditionsLink: () => cy.get('[href="/terms-and-conditions-of-service"]'),
        termsAndConditionsHeader: () => cy.get('h1[class*="Text"]'),
        privacyPolicyLink: () => cy.get('[href="/privacy-policy"]'),
        privacyPolicyHeader: () => cy.get('h1[class*="Text"]')
    }

    typeFullName = (fullName) => {
        this.elements.fullNameInput().type(fullName);
    }

    typePassword = (password) => {
        this.elements.passwordInput().type(password)
    }

    termsAndConditionsCheckboxClick = () => {
        this.elements.termsAndConditionsCheckbox().click()
    }

    createAccountBtnClick = () => {
        this.elements.createAccountBtn().scrollIntoView();
        this.elements.createAccountBtn().should('be.visible');
        this.elements.createAccountBtn().click();
    }

    emailInputClick = () => {
        this.elements.emailInput().click();
    }

    fullNameInputClick = () => {
        this.elements.fullNameInput().click();
    }

    passwordInputClick = () => {
        this.elements.passwordInput().click();
    }

    termsAndConditionsLinkClick = () => {
        this.elements.termsAndConditionsLink().invoke('removeAttr', 'target').click();
    }

    privacyPolicyLinkClick = () => {
        this.elements.privacyPolicyLink().invoke('removeAttr', 'target').click();
    }
}
module.exports = new signupPage();