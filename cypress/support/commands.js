Cypress.Commands.add("loginAndChooseCampaign", (user, campaignName) => {
    cy.log(`Logging in as ${user.role} and choosing campaign ${campaignName}`);
    cy.clearTypeInput("#Email", user.email);
    cy.clearTypeInput("#Password", user.password);
    cy.getAndClick(".btn-primary");

    cy.url().should("include", "CampaignManagement?campaignid=0");
    cy.get("div#tabActiveCampaigns").should("exist");
    cy.get(".rcs-campaign-item").each(($campaignItem) => {
        const currentCampaignName = $campaignItem
            .find(".card-title.rcs-campaign-name")
            .text()
            .trim()
            .toLowerCase();
        if (currentCampaignName.includes(campaignName.toLowerCase())) {
            cy.wrap($campaignItem).contains(".btn > b", "Choose").click();
            return false;
        }
    });
});
Cypress.Commands.add("logout", () => {
    cy.get('.dropdown-toggle.fw600.p15').click()
        .get('.navbar-right > .dropdown > .dropdown-menu')
        .invoke("show")
        .scrollIntoView()
    cy.contains("Logout").should("be.visible").click();
});
Cypress.Commands.add("clearTypeInput", (elm, value) => {
    cy.get(elm, { timeout: 5000 }).should("be.visible").then($input => {
        try {
            cy.wrap($input).clear().type(value).then(() => {
                cy.log(`Typed '${value}' into element '${elm}'`);
            });
        } catch (error) {
            // Print error if typing fails
            cy.log(`Error: ${error.message}`);
            throw error;
        }
    });
});
Cypress.Commands.add("getAndClick", (btn, index) => {
    if (typeof btn === "string") {
        cy.get(btn, { timeout: 5000 }).should("be.visible").then(($btn) => {
            if (index !== undefined) {
                cy.wrap($btn.eq(index)).click();
            } else {
                cy.wrap($btn).click();
            }
        });
    }
});