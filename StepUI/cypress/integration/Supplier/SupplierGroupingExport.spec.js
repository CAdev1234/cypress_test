
let group_name = 'Aduna Limited'
function SupplierGroupingExport() {
    cy.get("#stibo_anchor_Supplier_Group_Maintenance").click()
    cy.get("#stibo_stackpanel_Supplier_Grouping_Export").should('contain.text', 'Supplier Grouping Export')
    cy.get("#stibo_stackpanel_Supplier_Grouping_Export").click()
    cy.get('body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(12) > div > div:nth-child(2) > div > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td > input').type(group_name)
    cy.get('body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(12) > div > div:nth-child(2) > div > div > div > button.button-secondary.ResetButton > div > span').click({force: true})
    cy.get('body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(12) > div > div:nth-child(2) > div > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td > input').type(group_name)
    
    cy.get('body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(12) > div > div:nth-child(2) > div > div > div > button.button-secondary.SearchButton > div > span').click({force: true})
    cy.get('#ListTable > div > div.body > table > tbody > tr > td.cell.table-cell.col2 > div > div > span').should('contain.text', group_name)
    cy.get('#ListTable > div > div.body > table > tbody > tr > td.cell.table-cell.col0.stb-CustomOpCell.stb-CheckboxCell > div > span > label').click({force: true})
    cy.get('#toolbar_button_Export_of_Suppliers > div').should('contain.text', 'Export Suppliers')
    cy.get('#toolbar_button_Export_of_Suppliers > div').click({force: true})
    cy.get('body > div.gwt-DialogBox.portal-popup.ExportAction > div > table > tbody > tr.dialogTop > td.dialogTopCenter > div > table > tbody > tr > td > div').should('contain.text', 'Confirm Export of Suppliers')
    cy.get('body > div.gwt-DialogBox.portal-popup.ExportAction > div > table > tbody > tr.dialogMiddle > td.dialogMiddleCenter > div > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td > select').select('Supplier Excel Export').should('have.value', 'SMDMVPExportSuppliers')
    cy.get('body > div.gwt-DialogBox.portal-popup.ExportAction > div > table > tbody > tr.dialogMiddle > td.dialogMiddleCenter > div > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(3) > td > span > label').click({force: true})
    cy.get('body > div.gwt-DialogBox.portal-popup.ExportAction > div > table > tbody > tr.dialogMiddle > td.dialogMiddleCenter > div > div > table > tbody > tr:nth-child(2) > td > div > button.stibo-GraphicsButton > div > span').click({force: true})
    cy.get('#AlertPopup > div > div > div.portal-alert-popup-content > div > div:nth-child(3)').should('contain.text', '(General export from Web UI of any numbers of nodes for any export configuration)')
    cy.get('#AlertPopup > div > div > div.portal-alert-popup-close-box > i').click({force: true})
    cy.wait(2000)

    cy.get('#toolbar_button_Export_of_Suppliers > div').click({force: true})
    cy.get('body > div.gwt-DialogBox.portal-popup.ExportAction > div > table > tbody > tr.dialogTop > td.dialogTopCenter > div > table > tbody > tr > td > div').should('contain.text', 'Confirm Export of Suppliers')
    cy.get('body > div.gwt-DialogBox.portal-popup.ExportAction > div > table > tbody > tr.dialogMiddle > td.dialogMiddleCenter > div > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td > select').select('Supplier CSV Export').should('have.value', 'SMDMVPSupplierCSVExport')
    cy.get('body > div.gwt-DialogBox.portal-popup.ExportAction > div > table > tbody > tr.dialogMiddle > td.dialogMiddleCenter > div > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(3) > td > span > label').click({force: true})
    cy.get('body > div.gwt-DialogBox.portal-popup.ExportAction > div > table > tbody > tr.dialogMiddle > td.dialogMiddleCenter > div > div > table > tbody > tr:nth-child(2) > td > div > button.stibo-GraphicsButton > div > span').click({force: true})
    cy.get('#AlertPopup > div > div > div.portal-alert-popup-close-box > i').click({force: true})
    cy.wait(2000)

    cy.get('#toolbar_button_Export_of_Supplier_Groups > div').should('include.text','Export Supplier Groups')
    cy.get('#toolbar_button_Export_of_Supplier_Groups > div').click({force: true})
    cy.get('body > div.gwt-DialogBox.portal-popup.ExportAction > div > table > tbody > tr.dialogTop > td.dialogTopCenter > div > table > tbody > tr > td > div').should('contain.text', 'Confirm Export of Supplier Groups')
    cy.get('body > div.gwt-DialogBox.portal-popup.ExportAction > div > table > tbody > tr.dialogMiddle > td.dialogMiddleCenter > div > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td > select').select('Supplier Group Excel Export').should('have.value', 'SMDMVPSupplierGroupExcelExport')
    cy.get('body > div.gwt-DialogBox.portal-popup.ExportAction > div > table > tbody > tr.dialogMiddle > td.dialogMiddleCenter > div > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(3) > td > span > label').click({force: true})
    cy.get('body > div.gwt-DialogBox.portal-popup.ExportAction > div > table > tbody > tr.dialogMiddle > td.dialogMiddleCenter > div > div > table > tbody > tr:nth-child(2) > td > div > button.stibo-GraphicsButton > div > span').click({force: true})
    cy.get('#AlertPopup > div > div > div.portal-alert-popup-close-box > i').click({force: true})
    cy.wait(2000)

    cy.get('#toolbar_button_Export_of_Supplier_Groups > div').should('include.text','Export Supplier Groups')
    cy.get('#toolbar_button_Export_of_Supplier_Groups > div').click({force: true})
    cy.get('body > div.gwt-DialogBox.portal-popup.ExportAction > div > table > tbody > tr.dialogTop > td.dialogTopCenter > div > table > tbody > tr > td > div').should('contain.text', 'Confirm Export of Supplier Groups')
    cy.get('body > div.gwt-DialogBox.portal-popup.ExportAction > div > table > tbody > tr.dialogMiddle > td.dialogMiddleCenter > div > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td > select').select('Supplier Group CSV Export').should('have.value', 'SMDMVPExportSupplierGroups')
    cy.get('body > div.gwt-DialogBox.portal-popup.ExportAction > div > table > tbody > tr.dialogMiddle > td.dialogMiddleCenter > div > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(3) > td > span > label').click({force: true})
    cy.get('body > div.gwt-DialogBox.portal-popup.ExportAction > div > table > tbody > tr.dialogMiddle > td.dialogMiddleCenter > div > div > table > tbody > tr:nth-child(2) > td > div > button.stibo-GraphicsButton > div > span').click({force: true})
    cy.get('#AlertPopup > div > div > div.portal-alert-popup-close-box > i').click({force: true})

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
    it('SupplierGroupingExport', () => {
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
        SupplierGroupingExport()
    })
})