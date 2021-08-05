describe("AllInclusive test", () => {
    it("Real customer savings", () => {
        cy.visit('')
        cy.get("#block-secondarylinks > div > div > div > div > div > ul > li:nth-child(4) > a").click({force: true})
        cy.wait(3000)
    })
})