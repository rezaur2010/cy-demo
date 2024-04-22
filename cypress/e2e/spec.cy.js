import {
  createRoleSpecificMenu,
  users,
} from '../support/Users';

describe('User Role Test for Menu Navigation based on user access', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage()
    cy.visit('https://uat-apps.redcurve.com');
  });

  function testMenuItems(menuSelector, menuItems) {
    menuItems.forEach(menuItem => {
      cy.intercept('GET', `${menuItem.url.replace(/\s+/g, '')}*`).as('pageLoad');
      cy.get(menuSelector).contains(menuItem.menu).click();
      cy.wait('@pageLoad');
      cy.get(".rcs-topbar-heading-wrapper").should("be.visible").should("include.text", menuItem.title);
      cy.url().should("include", menuItem.url);
      cy.get(".nav-list.nav-list-topbar li").contains("Campaign Dashboard").click();
      cy.takeSnapshot(`Menu - ${menuItem.menu}`);
    });
  }

  function testMenuNavigation(user) {
    describe(`Testing menus and navigation for ${user.role} user`, () => {
      beforeEach(() => {
        cy.loginAndChooseCampaign(user, 'hurd');
      });

      afterEach(() => {
        cy.logout();
      });

      it(`Should verify correct menus present for ${user.role} user`, () => {
        const checkMenuPresence = (menuSelector, menuItems) => {
          cy.get(menuSelector).should('have.length', menuItems.length);
          menuItems.forEach(menuItem => {
            cy.get(menuSelector).contains(menuItem.menu).should('exist');
          });
        };

        const roleSpecificTopMenu = createRoleSpecificMenu(user.role, 'topMenu');
        checkMenuPresence('.nav-list.nav-list-topbar li', roleSpecificTopMenu);

        const roleSpecificCommonMenu = createRoleSpecificMenu(user.role, 'commonMenu');
        checkMenuPresence('.nano-content > ul > li', roleSpecificCommonMenu);

        const roleSpecificLeftMenu = createRoleSpecificMenu(user.role, 'leftMenu');
        if (user.role === 'Finance Super' || user.role === 'Vortex Lite Admin') {
          cy.get('.sidebar-menu ul li').should('have.length', roleSpecificLeftMenu.length - 1);
          roleSpecificLeftMenu.forEach(leftMenuItem => {
            if (leftMenuItem.menu !== "Donor Flags") {
              cy.get('.sidebar-menu ul li').contains(leftMenuItem.menu).should('exist');
            }
          });
        } else {
          cy.get('.sidebar-menu ul li').should('have.length', roleSpecificLeftMenu.length);
          roleSpecificLeftMenu.forEach(leftMenuItem => {
            cy.get('.sidebar-menu ul li').contains(leftMenuItem.menu).should('exist');
          });
        }

        const roleSpecificBottomMenu = createRoleSpecificMenu(user.role, 'bottomMenu');
        checkMenuPresence('.rcs-dashboard-card-title', roleSpecificBottomMenu);
        cy.takeSnapshot(`Menus - ${user.role}`);
      });

      it(`Should verify Top and Bottom menu navigation for ${user.role} user`, () => {
        const roleSpecificTopMenu = createRoleSpecificMenu(user.role, 'topMenu');
        testMenuItems('.nav-list.nav-list-topbar li', roleSpecificTopMenu);

        const roleSpecificBottomMenu = createRoleSpecificMenu(user.role, 'bottomMenu');
        testMenuItems('.rcs-dashboard-card-title', roleSpecificBottomMenu);
        cy.takeSnapshot(`Menu Navigation - ${user.role}`);
      });
    });
  }

  users.forEach(user => {
    testMenuNavigation(user);
  });
});
