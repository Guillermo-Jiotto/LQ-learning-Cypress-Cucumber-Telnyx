Feature: Telnyx Testing Feature

    Feature This feature is required for testing website Telnyx
    Scenario: Registration through Try-for-free button
        Given User opens main page
        When User Accept cookies
        And User enter email "2syao-testing-20072022@gmail.com" in email-input field
        And Click on Try-for-free button
        And Enter "Benecook Cucumbercook" in Full-name input
        And Enter "!AmTestingThis20072022" password
        And Enable Terms and Conditions checkbox
        And Click on Create Account button
        Then Opens page with message "We've sent you an email to activate your account"

    Scenario: Check warning messages on Sig-up page
        Given User opens main page
        When Click on Signup button
        And Click on Work email input
        And Click on Full name input
        And Click on Password input
        And Click on Create Account button
        Then Warn messages appears under password input

    Scenario: Verify Terms & Conditions page
        Given User opens main page
        When Click on Signup button
        And Click on Terms and Conditions link
        Then Opens page with "TELNYX TERMS AND CONDITIONS OF SERVICE" header

    Scenario: Verify Privacy Policy page
        Given User opens main page
        When Click on Signup button
        And Click on Privacy Policy link
        Then Opens new page with "Privacy Policy" header

    Scenario: Verify Supoprt Center page
        Given User opens main page
        When Click on Support Center link
        Then Opens page with the following links "Getting Started", "Configuration Guides", "Reference Material"

    Scenario: Check search work on Support Center page
        Given User opens main page
        When Click on Support Center link
        And Click on Search for articles input
        And Enter "Quality assurance" value in search input
        Then Opens page with "Search results for: Quality assurance" header. First search result is "Audiocodes: How to configure an Audiocodes SBC"

    Scenario: Check LinkedIn share link
        Given User opens main page
        When Click on Connect to LinkedIn link
        Then Opens LinkedIn share page

    Scenario: Check Twitter share link
        Given User opens main page
        When Click on Follow on Twitter link
        Then Opens Twitter page

    Scenario: Check Facebook share link
        Given User opens main page
        When Click on Follow on Facebook link
        Then Opens Facebook page

    Scenario: Verify Run API with Postman function
        Given User opens main page
        When Click on Learn more link
        And Click on Messaging link
        And Click on See the Specs button
        And Click on Run in Postman button
        Then Opens Postman page

    Scenario: Verify Release Notes for Video Rooms
        Given User opens main page
        When Click on Release Notes
        And Click on Video Rooms checkbox
        Then Appears article "New Product Beta- Telnyx Video Rooms"

    Scenario: Verify SIP Trunk Pricing for Ukraine
        Given User opens main page
        When Click on Elastic SIP Trunking Pricing
        And In countries dropdown menu choose Ukraine
        And In currency dropdown menu choose EUR
        Then In first column on Local calls line should be price per minute

    Scenario: Verify warning message in Login to Developer Community
        Given User opens main page
        When Click on Developer Docs link
        And Click on Join Developer Community link
        And Click on Login to community button
        And Click on Signin to community button
        Then Apeears message "Your login attempt was not successful. Please try again."

    Scenario: Check search work on Developer Community page
        Given User opens main page
        When Click on Learn more link
        And Click on Join Developer Community link
        And Click on search dev community field
        And Type "testing" in search field and press ENTER
        Then First search result title is "Send Fax with Go and Telnyx API"

    Scenario: Verify work of Topic filter in Developer Community
        Given User opens main page
        When Click on Developer Docs link
        And Click on Join Developer Community link
        And Click on dropdown menu next to Ask question button
        And Click on Topics
        Then Opens topic page with "Topics List" header

    Scenario: Verify work of Ask Question form
        Given User opens main page
        When Click on Developer Docs link
        And Click on Join Developer Community link
        And Click on Ask Question button
        And Enter "any text header" into Ваш вопрос input
        And Put "any description" into description field
        And Enter "messaging" into Темы input and press suggested topic
        And Choose Q&A section in dropdown list
        And Press Login and Submit button
        Then Opens page with new question and warning message "This post is currently awaiting moderation."

    Scenario: Verify work of Questions filter in Developer Community
        Given User opens main page
        When Click on Developer Docs link
        And Click on Join Developer Community link
        And Click on dropdown menu next to Ask question button
        And Click on Questions
        Then Opens question page with "All Questions" header

    Scenario: Verify all pricing page
        Given User opens main page
        When Mouse hover on Pricing menu
        And Click on See all Pricing link
        Then Opens pricing page with header "Only pay for what you use"

    Scenario: Verify work of Users filter in Developer Community
        Given User opens main page
        When Click on Developer Docs link
        And Click on Join Developer Community link
        And Click on dropdown menu next to Ask question button
        And Click on Users
        Then Opens users page with "Users" header

    Scenario: Check search filters in Blog
        Given User opens main page
        When Click on Blog Link
        And Click on MESSAGING filter
        And Click on NEWS&EVENTS filter
        Then Appears inform message 'No results found for "Messaging" with "News & Events"'