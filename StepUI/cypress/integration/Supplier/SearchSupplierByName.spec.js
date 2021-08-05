function searchSupplierName(search_name) {

    let reassign_success_alert_text = 'Supplier is Successfully initiated to Update Supplier grouping List'
    let unassign_success_alert_text = 'Re-assign cancelled Successfully'
    cy.get("#stibo_anchor_Supplier_Group_Maintenance").click()
    cy.get("body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td:nth-child(1)").click()
    
    cy.get("#stibo_stackpanel_Supplier_Name_Search").click()
    cy.get("body div:nth-child(10) div:nth-child(2) div div.main-area-root div:nth-child(4) div div.left-panel div div:nth-child(2) div div:nth-child(8) div div:nth-child(2) div div table tbody tr:nth-child(1) td table tbody tr:nth-child(2) td .stb-SearchBox").clear().type(search_name)
    cy.wait(2000)
    cy.get('body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(8) > div > div:nth-child(2) > div > div > div > button.button-secondary.ResetButton > div > span').click({force: true})
    cy.get("body div:nth-child(10) div:nth-child(2) div div.main-area-root div:nth-child(4) div div.left-panel div div:nth-child(2) div div:nth-child(8) div div:nth-child(2) div div table tbody tr:nth-child(1) td table tbody tr:nth-child(2) td .stb-SearchBox").clear().type(search_name)
    cy.wait(2000)
    cy.get("body div:nth-child(10) div:nth-child(2) div div.main-area-root div:nth-child(4) div div.left-panel div div:nth-child(2) div div:nth-child(8) div div:nth-child(2) div div div button.button-secondary.SearchButton").click()
    cy.wait(2000)
    cy.get("#PropertySheetTable > div > div.sheet-inside-container > div.sheet-body-container > div.sheet-body-vertical-scroll > div.sheet-quad-row-headers.unselectable > div > div > table > thead > tr > th > span > span > label").click()
    cy.wait(2000)
    cy.get("#toolbar_button_Re-Assign_Supplier_Group > div").click()
    cy.wait(10000)
    cy.get('#PropertySheetTable > div > div.sheet-inside-container > div.sheet-body-container > div.sheet-body-vertical-scroll > div.sheet-quad > div > div > table > tbody > tr.even > td.readonly-cell.sheet-coll > div > div > span.DomainNodeCell.extra-local').should('contain.text', search_name)
    cy.get('#PropertySheetTable > div > div.sheet-inside-container > div.sheet-body-container > div.sheet-body-vertical-scroll > div.sheet-quad-row-headers.unselectable > div > div > table > thead > tr:nth-child(1) > th > span > span > label').click({force: true})
    cy.get('#toolbar_button_Undo_Re-assign > div').click({force: true})
    cy.get('#AlertPopup > div > div > div.portal-alert-popup-content > div > div > div').should('contain.text', unassign_success_alert_text)

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
    it('Supplier name search', () => {
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
        cy.wait(5000)
        let search_name = "ADUNA LIMITED (A1506)"
        searchSupplierName(search_name)
        cy.wait(2000)
    })
})