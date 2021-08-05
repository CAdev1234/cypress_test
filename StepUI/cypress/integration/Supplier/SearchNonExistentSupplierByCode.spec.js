function nonExistentSupplier(search_name) {
    cy.get("#stibo_anchor_Supplier_Group_Maintenance").click({force:true})
    cy.get("body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td:nth-child(1)").click()
    cy.get("#stibo_stackpanel_Supplier_Code_Search").click({force:true})
    cy.wait(2000)
    cy.get("body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(6) > div > div:nth-child(2) > div > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td > input").clear().type(search_name)
    cy.wait(2000)
    cy.get('body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(6) > div > div:nth-child(2) > div > div > div > button.button-secondary.ResetButton > div > span').click({force: true})
    cy.get("body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(6) > div > div:nth-child(2) > div > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td > input").clear().type(search_name)
    cy.wait(2000)
    cy.get("body div:nth-child(10) div:nth-child(2) div div.main-area-root div:nth-child(4) div div.left-panel div div:nth-child(2) div div:nth-child(6) div div:nth-child(2) div div div button.button-secondary.SearchButton").click()
    cy.wait(2000)

    cy.wait(5000)
    cy.get('body > div:nth-child(10) > div:nth-child(2) > div > div.navigation-panel > div > i').click({force: true})
}
 

describe('Regression suite', () => {
    beforeEach(()=>{
        cy.restoreLocalStorage();
        Cypress.Cookies.preserveOnce("JSESSIONID", "portal_username", "id");
        Cypress.Cookies.debug(true)   
        cy.clearCookies()
        
        
    })
    afterEach(() => {
        cy.restoreLocalStorage();
        Cypress.Cookies.preserveOnce("JSESSIONID", "portal_username", "id");
        Cypress.Cookies.debug(true)  
        cy.clearCookies()
    })
  
    it('NonExistent Supplier Search', () => {
        cy.clearCookies()
        
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.visit(Cypress.config().baseUrl)
        cy.wait(5000)
        cy.get('body > div.container > div > table > tbody > tr:nth-child(6) > td:nth-child(1) > a').click()
        cy.wait(6000)
        cy.get('[id=username-input]').clear().type(Cypress.config().username)
        cy.get('[id=password-input]').clear().type(Cypress.config().password)
        cy.get('[id=login-button]').click()
        var search_name = "00009209"
        nonExistentSupplier(search_name)
        
        cy.get("#PropertySheetTable > div > div.sheet-inside-container > div.sheet-body-container > div.locked-row-header-container > div > div > table > thead").should('be.empty')
        cy.log("No nonexisting records found - OK")
        cy.wait(10000)
        
    })
})