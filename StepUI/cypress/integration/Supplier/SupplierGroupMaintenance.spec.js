
function supplierGroupMaintenance() {
    cy.get("#stibo_anchor_Supplier_Group_Maintenance").click()
    cy.get('#stibo_stackpanel_Supplier_Group_Maintenance').should('contain.text', 'Supplier Group Maintenance')
    cy.get('#stibo_stackpanel_Supplier_Group_Maintenance').click()
    cy.get('#stibo_anchor_Supplier_Grouping').should('contain.text', 'Supplier Grouping')
    cy.get('#stibo_anchor_Supplier_Grouping').click({force: true})
    cy.wait(3000)
    cy.get('body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div:nth-child(4) > div > div.mainArea-content > div > div:nth-child(5) > div > div > div:nth-child(3) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div').invoke('text').then((sometext) => cy.log(sometext))
    
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
    it('Supplier Group Maintenance', () => {
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
        cy.wait(1000)
        supplierGroupMaintenance()
    })
})