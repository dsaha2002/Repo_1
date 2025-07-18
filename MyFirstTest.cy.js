
const cypress = require("cypress");
const { describe } = require("mocha");

describe('My First Test', () =>
{
    it('test 1', () => {

        cy.visit("https://www.flipkart.com/")
        cy.title().should('eq', "Flipkart")

    }
    )
})