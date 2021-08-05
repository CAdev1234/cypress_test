describe('AllInclusive test', () => {
    it("What's included", () => {
        cy.visit('')
        cy.get("#block-secondarylinks > div > div > div > div > div > ul > li:nth-child(1) > a").click({force: true})
        cy.wait(3000)
    })
    it("Admission to 45+ top attractions", () => {
        cy.get("body > div.dialog-off-canvas-main-canvas > div > main > div > div > div > div > div > section.cta--wrapper.cta--wrapper--5.block.block-ctools-block.block-entity-fieldnodefield-pass-product-wyg-cta.clearfix.block-wrapper > div > div > div > div > div:nth-child(1) > div > div.cta--content > div.cta--title").contains("Admission to 45+ top attractions")
        cy.wait(3000)
        cy.get("body > div.dialog-off-canvas-main-canvas > div > main > div > div > div > div > div > section.cta--wrapper.cta--wrapper--5.block.block-ctools-block.block-entity-fieldnodefield-pass-product-wyg-cta.clearfix.block-wrapper > div > div > div > div > div:nth-child(1) > div > div.cta--content > div.cta--description > p").contains("Boston Duck Tour")
        cy.wait(3000)
        cy.get("body > div.dialog-off-canvas-main-canvas > div > main > div > div > div > div > div > section.cta--wrapper.cta--wrapper--5.block.block-ctools-block.block-entity-fieldnodefield-pass-product-wyg-cta.clearfix.block-wrapper > div > div > div > div > div:nth-child(1) > div > div.cta--content > div.cta--description > p").contains("New England Aquarium")
        cy.wait(3000)
        cy.get("body > div.dialog-off-canvas-main-canvas > div > main > div > div > div > div > div > section.cta--wrapper.cta--wrapper--5.block.block-ctools-block.block-entity-fieldnodefield-pass-product-wyg-cta.clearfix.block-wrapper > div > div > div > div > div:nth-child(1) > div > div.cta--content > div.cta--description > p").contains("Museum of Science")
        cy.wait(3000)
    })

    it("See all attractions", () => {
        cy.get("body > div.dialog-off-canvas-main-canvas > div > main > div > div > div > div > div > section.cta--wrapper.cta--wrapper--5.block.block-ctools-block.block-entity-fieldnodefield-pass-product-wyg-cta.clearfix.block-wrapper > div > div > div > div > div:nth-child(1) > div > div.cta--link > a").click({force: true})
        cy.wait(3000)
    })
    it("Boston Duck Tour Choose", () => {
        cy.get("body > div.dialog-off-canvas-main-canvas > div > main > div > div > div > div > div > section.block.block-go-attraction.block-react-attraction-list.clearfix.block-wrapper > div > div > div > div > div > span > ul > li.lpg-attractions-wrapper__image-list-item.lpg-attractions-wrapper__image-list-item--premium > div > div > a").click({force: true})
        cy.wait(3000)
    })

    it("Boston Duck Tour Page", () => {
        cy.get("#attraction_card > div > div > div > div > div > h1").contains("Boston Duck Tour")
        cy.wait(3000)
    })
})