/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./cypress/e2e/spec.cy.js ***!
  \********************************/


describe("My First Test", () => {
  it("Visits product page", () => {
    // Go to the Amazon product page
    cy.visit("https://www.amazon.com/Tungsten-Cube-Biggest-Size/dp/B07WK9WLZ8/");
    // Verify the page title
    cy.title().should("eq", 'Amazon.com: The 4" Tungsten Cube - Biggest Size : Toys & Games');
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5jeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBQSxRQUFRLENBQUMsZUFBZSxFQUFFLE1BQU07RUFDOUJDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxNQUFNO0lBQzlCO0lBQ0FDLEVBQUUsQ0FBQ0MsS0FBSyxDQUNOLGtFQUNGLENBQUM7SUFDRDtJQUNBRCxFQUFFLENBQUNFLEtBQUssQ0FBQyxDQUFDLENBQUNDLE1BQU0sQ0FDZixJQUFJLEVBQ0osZ0VBQ0YsQ0FBQztFQUNILENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY3lwcmVzcy9lMmUvc3BlYy5jeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkZXNjcmliZShcIk15IEZpcnN0IFRlc3RcIiwgKCkgPT4ge1xyXG4gIGl0KFwiVmlzaXRzIHByb2R1Y3QgcGFnZVwiLCAoKSA9PiB7XHJcbiAgICAvLyBHbyB0byB0aGUgQW1hem9uIHByb2R1Y3QgcGFnZVxyXG4gICAgY3kudmlzaXQoXHJcbiAgICAgIFwiaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9UdW5nc3Rlbi1DdWJlLUJpZ2dlc3QtU2l6ZS9kcC9CMDdXSzlXTFo4L1wiLFxyXG4gICAgKTtcclxuICAgIC8vIFZlcmlmeSB0aGUgcGFnZSB0aXRsZVxyXG4gICAgY3kudGl0bGUoKS5zaG91bGQoXHJcbiAgICAgIFwiZXFcIixcclxuICAgICAgJ0FtYXpvbi5jb206IFRoZSA0XCIgVHVuZ3N0ZW4gQ3ViZSAtIEJpZ2dlc3QgU2l6ZSA6IFRveXMgJiBHYW1lcycsXHJcbiAgICApO1xyXG4gIH0pO1xyXG59KTsiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsImN5IiwidmlzaXQiLCJ0aXRsZSIsInNob3VsZCJdLCJzb3VyY2VSb290IjoiIn0=