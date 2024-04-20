/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./cypress/support/commands.js":
/*!*************************************!*\
  !*** ./cypress/support/commands.js ***!
  \*************************************/
/***/ (() => {

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


/***/ }),

/***/ "./node_modules/@chromatic-com/cypress/dist/support.js":
/*!*************************************************************!*\
  !*** ./node_modules/@chromatic-com/cypress/dist/support.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



var rrwebSnapshot = __webpack_require__(/*! rrweb-snapshot */ "./node_modules/rrweb-snapshot/es/rrweb-snapshot.js");

Cypress.Commands.add("takeSnapshot",e=>{Cypress.config("isTextTerminal")&&cy.document().then(s=>{let r=rrwebSnapshot.snapshot(s);cy.get("@manualSnapshots").then(n=>[...n,{name:e,snapshot:r}]).as("manualSnapshots");});});beforeEach(()=>{Cypress.config("isTextTerminal")&&(cy.wrap([]).as("manualSnapshots"),cy.task("prepareArchives",{action:"setup-network-listener",payload:{allowedDomains:Cypress.env("assetDomains")}}));});afterEach(()=>{Cypress.env("disableAutoSnapshot")||!Cypress.config("isTextTerminal")||cy.document().then(e=>{let s=rrwebSnapshot.snapshot(e);cy.get("@manualSnapshots").then((r=[])=>{cy.url().then(n=>{cy.task("prepareArchives",{action:"save-archives",payload:{testTitlePath:[Cypress.spec.relativeToCommonRoot,...Cypress.currentTest.titlePath],domSnapshots:[...r,{snapshot:s}],chromaticStorybookParams:{...Cypress.env("diffThreshold")&&{diffThreshold:Cypress.env("diffThreshold")},...Cypress.env("delay")&&{delay:Cypress.env("delay")},...Cypress.env("diffIncludeAntiAliasing")&&{diffIncludeAntiAliasing:Cypress.env("diffIncludeAntiAliasing")},...Cypress.env("diffThreshold")&&{diffThreshold:Cypress.env("diffThreshold")},...Cypress.env("forcedColors")&&{forcedColors:Cypress.env("forcedColors")},...Cypress.env("pauseAnimationAtEnd")&&{pauseAnimationAtEnd:Cypress.env("pauseAnimationAtEnd")},...Cypress.env("prefersReducedMotion")&&{prefersReducedMotion:Cypress.env("prefersReducedMotion")},...Cypress.env("cropToViewport")&&{cropToViewport:Cypress.env("cropToViewport")}},pageUrl:n,viewport:{height:Cypress.config("viewportHeight"),width:Cypress.config("viewportWidth")}}});});});});});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=support.js.map

/***/ }),

/***/ "./node_modules/rrweb-snapshot/es/rrweb-snapshot.js":
/*!**********************************************************!*\
  !*** ./node_modules/rrweb-snapshot/es/rrweb-snapshot.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IGNORED_NODE: () => (/* binding */ IGNORED_NODE),
/* harmony export */   Mirror: () => (/* binding */ Mirror),
/* harmony export */   NodeType: () => (/* binding */ NodeType),
/* harmony export */   adaptCssForReplay: () => (/* binding */ adaptCssForReplay),
/* harmony export */   buildNodeWithSN: () => (/* binding */ buildNodeWithSN),
/* harmony export */   classMatchesRegex: () => (/* binding */ classMatchesRegex),
/* harmony export */   cleanupSnapshot: () => (/* binding */ cleanupSnapshot),
/* harmony export */   createCache: () => (/* binding */ createCache),
/* harmony export */   createMirror: () => (/* binding */ createMirror),
/* harmony export */   escapeImportStatement: () => (/* binding */ escapeImportStatement),
/* harmony export */   extractFileExtension: () => (/* binding */ extractFileExtension),
/* harmony export */   fixSafariColons: () => (/* binding */ fixSafariColons),
/* harmony export */   genId: () => (/* binding */ genId),
/* harmony export */   getInputType: () => (/* binding */ getInputType),
/* harmony export */   ignoreAttribute: () => (/* binding */ ignoreAttribute),
/* harmony export */   is2DCanvasBlank: () => (/* binding */ is2DCanvasBlank),
/* harmony export */   isCSSImportRule: () => (/* binding */ isCSSImportRule),
/* harmony export */   isCSSStyleRule: () => (/* binding */ isCSSStyleRule),
/* harmony export */   isElement: () => (/* binding */ isElement),
/* harmony export */   isNativeShadowDom: () => (/* binding */ isNativeShadowDom),
/* harmony export */   isNodeMetaEqual: () => (/* binding */ isNodeMetaEqual),
/* harmony export */   isShadowRoot: () => (/* binding */ isShadowRoot),
/* harmony export */   maskInputValue: () => (/* binding */ maskInputValue),
/* harmony export */   needMaskingText: () => (/* binding */ needMaskingText),
/* harmony export */   rebuild: () => (/* binding */ rebuild),
/* harmony export */   serializeNodeWithId: () => (/* binding */ serializeNodeWithId),
/* harmony export */   snapshot: () => (/* binding */ snapshot),
/* harmony export */   stringifyRule: () => (/* binding */ stringifyRule),
/* harmony export */   stringifyStylesheet: () => (/* binding */ stringifyStylesheet),
/* harmony export */   toLowerCase: () => (/* binding */ toLowerCase),
/* harmony export */   transformAttribute: () => (/* binding */ transformAttribute),
/* harmony export */   visitSnapshot: () => (/* binding */ visitSnapshot)
/* harmony export */ });
var NodeType;
(function (NodeType) {
    NodeType[NodeType["Document"] = 0] = "Document";
    NodeType[NodeType["DocumentType"] = 1] = "DocumentType";
    NodeType[NodeType["Element"] = 2] = "Element";
    NodeType[NodeType["Text"] = 3] = "Text";
    NodeType[NodeType["CDATA"] = 4] = "CDATA";
    NodeType[NodeType["Comment"] = 5] = "Comment";
})(NodeType || (NodeType = {}));

function isElement(n) {
    return n.nodeType === n.ELEMENT_NODE;
}
function isShadowRoot(n) {
    const host = n === null || n === void 0 ? void 0 : n.host;
    return Boolean((host === null || host === void 0 ? void 0 : host.shadowRoot) === n);
}
function isNativeShadowDom(shadowRoot) {
    return Object.prototype.toString.call(shadowRoot) === '[object ShadowRoot]';
}
function fixBrowserCompatibilityIssuesInCSS(cssText) {
    if (cssText.includes(' background-clip: text;') &&
        !cssText.includes(' -webkit-background-clip: text;')) {
        cssText = cssText.replace(' background-clip: text;', ' -webkit-background-clip: text; background-clip: text;');
    }
    return cssText;
}
function escapeImportStatement(rule) {
    const { cssText } = rule;
    if (cssText.split('"').length < 3)
        return cssText;
    const statement = ['@import', `url(${JSON.stringify(rule.href)})`];
    if (rule.layerName === '') {
        statement.push(`layer`);
    }
    else if (rule.layerName) {
        statement.push(`layer(${rule.layerName})`);
    }
    if (rule.supportsText) {
        statement.push(`supports(${rule.supportsText})`);
    }
    if (rule.media.length) {
        statement.push(rule.media.mediaText);
    }
    return statement.join(' ') + ';';
}
function stringifyStylesheet(s) {
    try {
        const rules = s.rules || s.cssRules;
        return rules
            ? fixBrowserCompatibilityIssuesInCSS(Array.from(rules, stringifyRule).join(''))
            : null;
    }
    catch (error) {
        return null;
    }
}
function stringifyRule(rule) {
    let importStringified;
    if (isCSSImportRule(rule)) {
        try {
            importStringified =
                stringifyStylesheet(rule.styleSheet) ||
                    escapeImportStatement(rule);
        }
        catch (error) {
        }
    }
    else if (isCSSStyleRule(rule) && rule.selectorText.includes(':')) {
        return fixSafariColons(rule.cssText);
    }
    return importStringified || rule.cssText;
}
function fixSafariColons(cssStringified) {
    const regex = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
    return cssStringified.replace(regex, '$1\\$2');
}
function isCSSImportRule(rule) {
    return 'styleSheet' in rule;
}
function isCSSStyleRule(rule) {
    return 'selectorText' in rule;
}
class Mirror {
    constructor() {
        this.idNodeMap = new Map();
        this.nodeMetaMap = new WeakMap();
    }
    getId(n) {
        var _a;
        if (!n)
            return -1;
        const id = (_a = this.getMeta(n)) === null || _a === void 0 ? void 0 : _a.id;
        return id !== null && id !== void 0 ? id : -1;
    }
    getNode(id) {
        return this.idNodeMap.get(id) || null;
    }
    getIds() {
        return Array.from(this.idNodeMap.keys());
    }
    getMeta(n) {
        return this.nodeMetaMap.get(n) || null;
    }
    removeNodeFromMap(n) {
        const id = this.getId(n);
        this.idNodeMap.delete(id);
        if (n.childNodes) {
            n.childNodes.forEach((childNode) => this.removeNodeFromMap(childNode));
        }
    }
    has(id) {
        return this.idNodeMap.has(id);
    }
    hasNode(node) {
        return this.nodeMetaMap.has(node);
    }
    add(n, meta) {
        const id = meta.id;
        this.idNodeMap.set(id, n);
        this.nodeMetaMap.set(n, meta);
    }
    replace(id, n) {
        const oldNode = this.getNode(id);
        if (oldNode) {
            const meta = this.nodeMetaMap.get(oldNode);
            if (meta)
                this.nodeMetaMap.set(n, meta);
        }
        this.idNodeMap.set(id, n);
    }
    reset() {
        this.idNodeMap = new Map();
        this.nodeMetaMap = new WeakMap();
    }
}
function createMirror() {
    return new Mirror();
}
function maskInputValue({ element, maskInputOptions, tagName, type, value, maskInputFn, }) {
    let text = value || '';
    const actualType = type && toLowerCase(type);
    if (maskInputOptions[tagName.toLowerCase()] ||
        (actualType && maskInputOptions[actualType])) {
        if (maskInputFn) {
            text = maskInputFn(text, element);
        }
        else {
            text = '*'.repeat(text.length);
        }
    }
    return text;
}
function toLowerCase(str) {
    return str.toLowerCase();
}
const ORIGINAL_ATTRIBUTE_NAME = '__rrweb_original__';
function is2DCanvasBlank(canvas) {
    const ctx = canvas.getContext('2d');
    if (!ctx)
        return true;
    const chunkSize = 50;
    for (let x = 0; x < canvas.width; x += chunkSize) {
        for (let y = 0; y < canvas.height; y += chunkSize) {
            const getImageData = ctx.getImageData;
            const originalGetImageData = ORIGINAL_ATTRIBUTE_NAME in getImageData
                ? getImageData[ORIGINAL_ATTRIBUTE_NAME]
                : getImageData;
            const pixelBuffer = new Uint32Array(originalGetImageData.call(ctx, x, y, Math.min(chunkSize, canvas.width - x), Math.min(chunkSize, canvas.height - y)).data.buffer);
            if (pixelBuffer.some((pixel) => pixel !== 0))
                return false;
        }
    }
    return true;
}
function isNodeMetaEqual(a, b) {
    if (!a || !b || a.type !== b.type)
        return false;
    if (a.type === NodeType.Document)
        return a.compatMode === b.compatMode;
    else if (a.type === NodeType.DocumentType)
        return (a.name === b.name &&
            a.publicId === b.publicId &&
            a.systemId === b.systemId);
    else if (a.type === NodeType.Comment ||
        a.type === NodeType.Text ||
        a.type === NodeType.CDATA)
        return a.textContent === b.textContent;
    else if (a.type === NodeType.Element)
        return (a.tagName === b.tagName &&
            JSON.stringify(a.attributes) ===
                JSON.stringify(b.attributes) &&
            a.isSVG === b.isSVG &&
            a.needBlock === b.needBlock);
    return false;
}
function getInputType(element) {
    const type = element.type;
    return element.hasAttribute('data-rr-is-password')
        ? 'password'
        : type
            ?
                toLowerCase(type)
            : null;
}
function extractFileExtension(path, baseURL) {
    var _a;
    let url;
    try {
        url = new URL(path, baseURL !== null && baseURL !== void 0 ? baseURL : window.location.href);
    }
    catch (err) {
        return null;
    }
    const regex = /\.([0-9a-z]+)(?:$)/i;
    const match = url.pathname.match(regex);
    return (_a = match === null || match === void 0 ? void 0 : match[1]) !== null && _a !== void 0 ? _a : null;
}

let _id = 1;
const tagNameRegex = new RegExp('[^a-z0-9-_:]');
const IGNORED_NODE = -2;
function genId() {
    return _id++;
}
function getValidTagName(element) {
    if (element instanceof HTMLFormElement) {
        return 'form';
    }
    const processedTagName = toLowerCase(element.tagName);
    if (tagNameRegex.test(processedTagName)) {
        return 'div';
    }
    return processedTagName;
}
function extractOrigin(url) {
    let origin = '';
    if (url.indexOf('//') > -1) {
        origin = url.split('/').slice(0, 3).join('/');
    }
    else {
        origin = url.split('/')[0];
    }
    origin = origin.split('?')[0];
    return origin;
}
let canvasService;
let canvasCtx;
const URL_IN_CSS_REF = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm;
const URL_PROTOCOL_MATCH = /^(?:[a-z+]+:)?\/\//i;
const URL_WWW_MATCH = /^www\..*/i;
const DATA_URI = /^(data:)([^,]*),(.*)/i;
function absoluteToStylesheet(cssText, href) {
    return (cssText || '').replace(URL_IN_CSS_REF, (origin, quote1, path1, quote2, path2, path3) => {
        const filePath = path1 || path2 || path3;
        const maybeQuote = quote1 || quote2 || '';
        if (!filePath) {
            return origin;
        }
        if (URL_PROTOCOL_MATCH.test(filePath) || URL_WWW_MATCH.test(filePath)) {
            return `url(${maybeQuote}${filePath}${maybeQuote})`;
        }
        if (DATA_URI.test(filePath)) {
            return `url(${maybeQuote}${filePath}${maybeQuote})`;
        }
        if (filePath[0] === '/') {
            return `url(${maybeQuote}${extractOrigin(href) + filePath}${maybeQuote})`;
        }
        const stack = href.split('/');
        const parts = filePath.split('/');
        stack.pop();
        for (const part of parts) {
            if (part === '.') {
                continue;
            }
            else if (part === '..') {
                stack.pop();
            }
            else {
                stack.push(part);
            }
        }
        return `url(${maybeQuote}${stack.join('/')}${maybeQuote})`;
    });
}
const SRCSET_NOT_SPACES = /^[^ \t\n\r\u000c]+/;
const SRCSET_COMMAS_OR_SPACES = /^[, \t\n\r\u000c]+/;
function getAbsoluteSrcsetString(doc, attributeValue) {
    if (attributeValue.trim() === '') {
        return attributeValue;
    }
    let pos = 0;
    function collectCharacters(regEx) {
        let chars;
        const match = regEx.exec(attributeValue.substring(pos));
        if (match) {
            chars = match[0];
            pos += chars.length;
            return chars;
        }
        return '';
    }
    const output = [];
    while (true) {
        collectCharacters(SRCSET_COMMAS_OR_SPACES);
        if (pos >= attributeValue.length) {
            break;
        }
        let url = collectCharacters(SRCSET_NOT_SPACES);
        if (url.slice(-1) === ',') {
            url = absoluteToDoc(doc, url.substring(0, url.length - 1));
            output.push(url);
        }
        else {
            let descriptorsStr = '';
            url = absoluteToDoc(doc, url);
            let inParens = false;
            while (true) {
                const c = attributeValue.charAt(pos);
                if (c === '') {
                    output.push((url + descriptorsStr).trim());
                    break;
                }
                else if (!inParens) {
                    if (c === ',') {
                        pos += 1;
                        output.push((url + descriptorsStr).trim());
                        break;
                    }
                    else if (c === '(') {
                        inParens = true;
                    }
                }
                else {
                    if (c === ')') {
                        inParens = false;
                    }
                }
                descriptorsStr += c;
                pos += 1;
            }
        }
    }
    return output.join(', ');
}
function absoluteToDoc(doc, attributeValue) {
    if (!attributeValue || attributeValue.trim() === '') {
        return attributeValue;
    }
    const a = doc.createElement('a');
    a.href = attributeValue;
    return a.href;
}
function isSVGElement(el) {
    return Boolean(el.tagName === 'svg' || el.ownerSVGElement);
}
function getHref() {
    const a = document.createElement('a');
    a.href = '';
    return a.href;
}
function transformAttribute(doc, tagName, name, value) {
    if (!value) {
        return value;
    }
    if (name === 'src' ||
        (name === 'href' && !(tagName === 'use' && value[0] === '#'))) {
        return absoluteToDoc(doc, value);
    }
    else if (name === 'xlink:href' && value[0] !== '#') {
        return absoluteToDoc(doc, value);
    }
    else if (name === 'background' &&
        (tagName === 'table' || tagName === 'td' || tagName === 'th')) {
        return absoluteToDoc(doc, value);
    }
    else if (name === 'srcset') {
        return getAbsoluteSrcsetString(doc, value);
    }
    else if (name === 'style') {
        return absoluteToStylesheet(value, getHref());
    }
    else if (tagName === 'object' && name === 'data') {
        return absoluteToDoc(doc, value);
    }
    return value;
}
function ignoreAttribute(tagName, name, _value) {
    return (tagName === 'video' || tagName === 'audio') && name === 'autoplay';
}
function _isBlockedElement(element, blockClass, blockSelector) {
    try {
        if (typeof blockClass === 'string') {
            if (element.classList.contains(blockClass)) {
                return true;
            }
        }
        else {
            for (let eIndex = element.classList.length; eIndex--;) {
                const className = element.classList[eIndex];
                if (blockClass.test(className)) {
                    return true;
                }
            }
        }
        if (blockSelector) {
            return element.matches(blockSelector);
        }
    }
    catch (e) {
    }
    return false;
}
function classMatchesRegex(node, regex, checkAncestors) {
    if (!node)
        return false;
    if (node.nodeType !== node.ELEMENT_NODE) {
        if (!checkAncestors)
            return false;
        return classMatchesRegex(node.parentNode, regex, checkAncestors);
    }
    for (let eIndex = node.classList.length; eIndex--;) {
        const className = node.classList[eIndex];
        if (regex.test(className)) {
            return true;
        }
    }
    if (!checkAncestors)
        return false;
    return classMatchesRegex(node.parentNode, regex, checkAncestors);
}
function needMaskingText(node, maskTextClass, maskTextSelector, checkAncestors) {
    try {
        const el = node.nodeType === node.ELEMENT_NODE
            ? node
            : node.parentElement;
        if (el === null)
            return false;
        if (typeof maskTextClass === 'string') {
            if (checkAncestors) {
                if (el.closest(`.${maskTextClass}`))
                    return true;
            }
            else {
                if (el.classList.contains(maskTextClass))
                    return true;
            }
        }
        else {
            if (classMatchesRegex(el, maskTextClass, checkAncestors))
                return true;
        }
        if (maskTextSelector) {
            if (checkAncestors) {
                if (el.closest(maskTextSelector))
                    return true;
            }
            else {
                if (el.matches(maskTextSelector))
                    return true;
            }
        }
    }
    catch (e) {
    }
    return false;
}
function onceIframeLoaded(iframeEl, listener, iframeLoadTimeout) {
    const win = iframeEl.contentWindow;
    if (!win) {
        return;
    }
    let fired = false;
    let readyState;
    try {
        readyState = win.document.readyState;
    }
    catch (error) {
        return;
    }
    if (readyState !== 'complete') {
        const timer = setTimeout(() => {
            if (!fired) {
                listener();
                fired = true;
            }
        }, iframeLoadTimeout);
        iframeEl.addEventListener('load', () => {
            clearTimeout(timer);
            fired = true;
            listener();
        });
        return;
    }
    const blankUrl = 'about:blank';
    if (win.location.href !== blankUrl ||
        iframeEl.src === blankUrl ||
        iframeEl.src === '') {
        setTimeout(listener, 0);
        return iframeEl.addEventListener('load', listener);
    }
    iframeEl.addEventListener('load', listener);
}
function onceStylesheetLoaded(link, listener, styleSheetLoadTimeout) {
    let fired = false;
    let styleSheetLoaded;
    try {
        styleSheetLoaded = link.sheet;
    }
    catch (error) {
        return;
    }
    if (styleSheetLoaded)
        return;
    const timer = setTimeout(() => {
        if (!fired) {
            listener();
            fired = true;
        }
    }, styleSheetLoadTimeout);
    link.addEventListener('load', () => {
        clearTimeout(timer);
        fired = true;
        listener();
    });
}
function serializeNode(n, options) {
    const { doc, mirror, blockClass, blockSelector, needsMask, inlineStylesheet, maskInputOptions = {}, maskTextFn, maskInputFn, dataURLOptions = {}, inlineImages, recordCanvas, keepIframeSrcFn, newlyAddedElement = false, } = options;
    const rootId = getRootId(doc, mirror);
    switch (n.nodeType) {
        case n.DOCUMENT_NODE:
            if (n.compatMode !== 'CSS1Compat') {
                return {
                    type: NodeType.Document,
                    childNodes: [],
                    compatMode: n.compatMode,
                };
            }
            else {
                return {
                    type: NodeType.Document,
                    childNodes: [],
                };
            }
        case n.DOCUMENT_TYPE_NODE:
            return {
                type: NodeType.DocumentType,
                name: n.name,
                publicId: n.publicId,
                systemId: n.systemId,
                rootId,
            };
        case n.ELEMENT_NODE:
            return serializeElementNode(n, {
                doc,
                blockClass,
                blockSelector,
                inlineStylesheet,
                maskInputOptions,
                maskInputFn,
                dataURLOptions,
                inlineImages,
                recordCanvas,
                keepIframeSrcFn,
                newlyAddedElement,
                rootId,
            });
        case n.TEXT_NODE:
            return serializeTextNode(n, {
                needsMask,
                maskTextFn,
                rootId,
            });
        case n.CDATA_SECTION_NODE:
            return {
                type: NodeType.CDATA,
                textContent: '',
                rootId,
            };
        case n.COMMENT_NODE:
            return {
                type: NodeType.Comment,
                textContent: n.textContent || '',
                rootId,
            };
        default:
            return false;
    }
}
function getRootId(doc, mirror) {
    if (!mirror.hasNode(doc))
        return undefined;
    const docId = mirror.getId(doc);
    return docId === 1 ? undefined : docId;
}
function serializeTextNode(n, options) {
    var _a;
    const { needsMask, maskTextFn, rootId } = options;
    const parentTagName = n.parentNode && n.parentNode.tagName;
    let textContent = n.textContent;
    const isStyle = parentTagName === 'STYLE' ? true : undefined;
    const isScript = parentTagName === 'SCRIPT' ? true : undefined;
    if (isStyle && textContent) {
        try {
            if (n.nextSibling || n.previousSibling) {
            }
            else if ((_a = n.parentNode.sheet) === null || _a === void 0 ? void 0 : _a.cssRules) {
                textContent = stringifyStylesheet(n.parentNode.sheet);
            }
        }
        catch (err) {
            console.warn(`Cannot get CSS styles from text's parentNode. Error: ${err}`, n);
        }
        textContent = absoluteToStylesheet(textContent, getHref());
    }
    if (isScript) {
        textContent = 'SCRIPT_PLACEHOLDER';
    }
    if (!isStyle && !isScript && textContent && needsMask) {
        textContent = maskTextFn
            ? maskTextFn(textContent, n.parentElement)
            : textContent.replace(/[\S]/g, '*');
    }
    return {
        type: NodeType.Text,
        textContent: textContent || '',
        isStyle,
        rootId,
    };
}
function serializeElementNode(n, options) {
    const { doc, blockClass, blockSelector, inlineStylesheet, maskInputOptions = {}, maskInputFn, dataURLOptions = {}, inlineImages, recordCanvas, keepIframeSrcFn, newlyAddedElement = false, rootId, } = options;
    const needBlock = _isBlockedElement(n, blockClass, blockSelector);
    const tagName = getValidTagName(n);
    let attributes = {};
    const len = n.attributes.length;
    for (let i = 0; i < len; i++) {
        const attr = n.attributes[i];
        if (!ignoreAttribute(tagName, attr.name, attr.value)) {
            attributes[attr.name] = transformAttribute(doc, tagName, toLowerCase(attr.name), attr.value);
        }
    }
    if (tagName === 'link' && inlineStylesheet) {
        const stylesheet = Array.from(doc.styleSheets).find((s) => {
            return s.href === n.href;
        });
        let cssText = null;
        if (stylesheet) {
            cssText = stringifyStylesheet(stylesheet);
        }
        if (cssText) {
            delete attributes.rel;
            delete attributes.href;
            attributes._cssText = absoluteToStylesheet(cssText, stylesheet.href);
        }
    }
    if (tagName === 'style' &&
        n.sheet &&
        !(n.innerText || n.textContent || '').trim().length) {
        const cssText = stringifyStylesheet(n.sheet);
        if (cssText) {
            attributes._cssText = absoluteToStylesheet(cssText, getHref());
        }
    }
    if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
        const value = n.value;
        const checked = n.checked;
        if (attributes.type !== 'radio' &&
            attributes.type !== 'checkbox' &&
            attributes.type !== 'submit' &&
            attributes.type !== 'button' &&
            value) {
            attributes.value = maskInputValue({
                element: n,
                type: getInputType(n),
                tagName,
                value,
                maskInputOptions,
                maskInputFn,
            });
        }
        else if (checked) {
            attributes.checked = checked;
        }
    }
    if (tagName === 'option') {
        if (n.selected && !maskInputOptions['select']) {
            attributes.selected = true;
        }
        else {
            delete attributes.selected;
        }
    }
    if (tagName === 'canvas' && recordCanvas) {
        if (n.__context === '2d') {
            if (!is2DCanvasBlank(n)) {
                attributes.rr_dataURL = n.toDataURL(dataURLOptions.type, dataURLOptions.quality);
            }
        }
        else if (!('__context' in n)) {
            const canvasDataURL = n.toDataURL(dataURLOptions.type, dataURLOptions.quality);
            const blankCanvas = document.createElement('canvas');
            blankCanvas.width = n.width;
            blankCanvas.height = n.height;
            const blankCanvasDataURL = blankCanvas.toDataURL(dataURLOptions.type, dataURLOptions.quality);
            if (canvasDataURL !== blankCanvasDataURL) {
                attributes.rr_dataURL = canvasDataURL;
            }
        }
    }
    if (tagName === 'img' && inlineImages) {
        if (!canvasService) {
            canvasService = doc.createElement('canvas');
            canvasCtx = canvasService.getContext('2d');
        }
        const image = n;
        const oldValue = image.crossOrigin;
        image.crossOrigin = 'anonymous';
        const recordInlineImage = () => {
            image.removeEventListener('load', recordInlineImage);
            try {
                canvasService.width = image.naturalWidth;
                canvasService.height = image.naturalHeight;
                canvasCtx.drawImage(image, 0, 0);
                attributes.rr_dataURL = canvasService.toDataURL(dataURLOptions.type, dataURLOptions.quality);
            }
            catch (err) {
                console.warn(`Cannot inline img src=${image.currentSrc}! Error: ${err}`);
            }
            oldValue
                ? (attributes.crossOrigin = oldValue)
                : image.removeAttribute('crossorigin');
        };
        if (image.complete && image.naturalWidth !== 0)
            recordInlineImage();
        else
            image.addEventListener('load', recordInlineImage);
    }
    if (tagName === 'audio' || tagName === 'video') {
        const mediaAttributes = attributes;
        mediaAttributes.rr_mediaState = n.paused
            ? 'paused'
            : 'played';
        mediaAttributes.rr_mediaCurrentTime = n.currentTime;
        mediaAttributes.rr_mediaPlaybackRate = n.playbackRate;
        mediaAttributes.rr_mediaMuted = n.muted;
        mediaAttributes.rr_mediaLoop = n.loop;
        mediaAttributes.rr_mediaVolume = n.volume;
    }
    if (!newlyAddedElement) {
        if (n.scrollLeft) {
            attributes.rr_scrollLeft = n.scrollLeft;
        }
        if (n.scrollTop) {
            attributes.rr_scrollTop = n.scrollTop;
        }
    }
    if (needBlock) {
        const { width, height } = n.getBoundingClientRect();
        attributes = {
            class: attributes.class,
            rr_width: `${width}px`,
            rr_height: `${height}px`,
        };
    }
    if (tagName === 'iframe' && !keepIframeSrcFn(attributes.src)) {
        if (!n.contentDocument) {
            attributes.rr_src = attributes.src;
        }
        delete attributes.src;
    }
    let isCustomElement;
    try {
        if (customElements.get(tagName))
            isCustomElement = true;
    }
    catch (e) {
    }
    return {
        type: NodeType.Element,
        tagName,
        attributes,
        childNodes: [],
        isSVG: isSVGElement(n) || undefined,
        needBlock,
        rootId,
        isCustom: isCustomElement,
    };
}
function lowerIfExists(maybeAttr) {
    if (maybeAttr === undefined || maybeAttr === null) {
        return '';
    }
    else {
        return maybeAttr.toLowerCase();
    }
}
function slimDOMExcluded(sn, slimDOMOptions) {
    if (slimDOMOptions.comment && sn.type === NodeType.Comment) {
        return true;
    }
    else if (sn.type === NodeType.Element) {
        if (slimDOMOptions.script &&
            (sn.tagName === 'script' ||
                (sn.tagName === 'link' &&
                    (sn.attributes.rel === 'preload' ||
                        sn.attributes.rel === 'modulepreload') &&
                    sn.attributes.as === 'script') ||
                (sn.tagName === 'link' &&
                    sn.attributes.rel === 'prefetch' &&
                    typeof sn.attributes.href === 'string' &&
                    extractFileExtension(sn.attributes.href) === 'js'))) {
            return true;
        }
        else if (slimDOMOptions.headFavicon &&
            ((sn.tagName === 'link' && sn.attributes.rel === 'shortcut icon') ||
                (sn.tagName === 'meta' &&
                    (lowerIfExists(sn.attributes.name).match(/^msapplication-tile(image|color)$/) ||
                        lowerIfExists(sn.attributes.name) === 'application-name' ||
                        lowerIfExists(sn.attributes.rel) === 'icon' ||
                        lowerIfExists(sn.attributes.rel) === 'apple-touch-icon' ||
                        lowerIfExists(sn.attributes.rel) === 'shortcut icon')))) {
            return true;
        }
        else if (sn.tagName === 'meta') {
            if (slimDOMOptions.headMetaDescKeywords &&
                lowerIfExists(sn.attributes.name).match(/^description|keywords$/)) {
                return true;
            }
            else if (slimDOMOptions.headMetaSocial &&
                (lowerIfExists(sn.attributes.property).match(/^(og|twitter|fb):/) ||
                    lowerIfExists(sn.attributes.name).match(/^(og|twitter):/) ||
                    lowerIfExists(sn.attributes.name) === 'pinterest')) {
                return true;
            }
            else if (slimDOMOptions.headMetaRobots &&
                (lowerIfExists(sn.attributes.name) === 'robots' ||
                    lowerIfExists(sn.attributes.name) === 'googlebot' ||
                    lowerIfExists(sn.attributes.name) === 'bingbot')) {
                return true;
            }
            else if (slimDOMOptions.headMetaHttpEquiv &&
                sn.attributes['http-equiv'] !== undefined) {
                return true;
            }
            else if (slimDOMOptions.headMetaAuthorship &&
                (lowerIfExists(sn.attributes.name) === 'author' ||
                    lowerIfExists(sn.attributes.name) === 'generator' ||
                    lowerIfExists(sn.attributes.name) === 'framework' ||
                    lowerIfExists(sn.attributes.name) === 'publisher' ||
                    lowerIfExists(sn.attributes.name) === 'progid' ||
                    lowerIfExists(sn.attributes.property).match(/^article:/) ||
                    lowerIfExists(sn.attributes.property).match(/^product:/))) {
                return true;
            }
            else if (slimDOMOptions.headMetaVerification &&
                (lowerIfExists(sn.attributes.name) === 'google-site-verification' ||
                    lowerIfExists(sn.attributes.name) === 'yandex-verification' ||
                    lowerIfExists(sn.attributes.name) === 'csrf-token' ||
                    lowerIfExists(sn.attributes.name) === 'p:domain_verify' ||
                    lowerIfExists(sn.attributes.name) === 'verify-v1' ||
                    lowerIfExists(sn.attributes.name) === 'verification' ||
                    lowerIfExists(sn.attributes.name) === 'shopify-checkout-api-token')) {
                return true;
            }
        }
    }
    return false;
}
function serializeNodeWithId(n, options) {
    const { doc, mirror, blockClass, blockSelector, maskTextClass, maskTextSelector, skipChild = false, inlineStylesheet = true, maskInputOptions = {}, maskTextFn, maskInputFn, slimDOMOptions, dataURLOptions = {}, inlineImages = false, recordCanvas = false, onSerialize, onIframeLoad, iframeLoadTimeout = 5000, onStylesheetLoad, stylesheetLoadTimeout = 5000, keepIframeSrcFn = () => false, newlyAddedElement = false, } = options;
    let { needsMask } = options;
    let { preserveWhiteSpace = true } = options;
    if (!needsMask &&
        n.childNodes) {
        const checkAncestors = needsMask === undefined;
        needsMask = needMaskingText(n, maskTextClass, maskTextSelector, checkAncestors);
    }
    const _serializedNode = serializeNode(n, {
        doc,
        mirror,
        blockClass,
        blockSelector,
        needsMask,
        inlineStylesheet,
        maskInputOptions,
        maskTextFn,
        maskInputFn,
        dataURLOptions,
        inlineImages,
        recordCanvas,
        keepIframeSrcFn,
        newlyAddedElement,
    });
    if (!_serializedNode) {
        console.warn(n, 'not serialized');
        return null;
    }
    let id;
    if (mirror.hasNode(n)) {
        id = mirror.getId(n);
    }
    else if (slimDOMExcluded(_serializedNode, slimDOMOptions) ||
        (!preserveWhiteSpace &&
            _serializedNode.type === NodeType.Text &&
            !_serializedNode.isStyle &&
            !_serializedNode.textContent.replace(/^\s+|\s+$/gm, '').length)) {
        id = IGNORED_NODE;
    }
    else {
        id = genId();
    }
    const serializedNode = Object.assign(_serializedNode, { id });
    mirror.add(n, serializedNode);
    if (id === IGNORED_NODE) {
        return null;
    }
    if (onSerialize) {
        onSerialize(n);
    }
    let recordChild = !skipChild;
    if (serializedNode.type === NodeType.Element) {
        recordChild = recordChild && !serializedNode.needBlock;
        delete serializedNode.needBlock;
        const shadowRoot = n.shadowRoot;
        if (shadowRoot && isNativeShadowDom(shadowRoot))
            serializedNode.isShadowHost = true;
    }
    if ((serializedNode.type === NodeType.Document ||
        serializedNode.type === NodeType.Element) &&
        recordChild) {
        if (slimDOMOptions.headWhitespace &&
            serializedNode.type === NodeType.Element &&
            serializedNode.tagName === 'head') {
            preserveWhiteSpace = false;
        }
        const bypassOptions = {
            doc,
            mirror,
            blockClass,
            blockSelector,
            needsMask,
            maskTextClass,
            maskTextSelector,
            skipChild,
            inlineStylesheet,
            maskInputOptions,
            maskTextFn,
            maskInputFn,
            slimDOMOptions,
            dataURLOptions,
            inlineImages,
            recordCanvas,
            preserveWhiteSpace,
            onSerialize,
            onIframeLoad,
            iframeLoadTimeout,
            onStylesheetLoad,
            stylesheetLoadTimeout,
            keepIframeSrcFn,
        };
        if (serializedNode.type === NodeType.Element &&
            serializedNode.tagName === 'textarea' &&
            serializedNode.attributes.value !== undefined) ;
        else {
            for (const childN of Array.from(n.childNodes)) {
                const serializedChildNode = serializeNodeWithId(childN, bypassOptions);
                if (serializedChildNode) {
                    serializedNode.childNodes.push(serializedChildNode);
                }
            }
        }
        if (isElement(n) && n.shadowRoot) {
            for (const childN of Array.from(n.shadowRoot.childNodes)) {
                const serializedChildNode = serializeNodeWithId(childN, bypassOptions);
                if (serializedChildNode) {
                    isNativeShadowDom(n.shadowRoot) &&
                        (serializedChildNode.isShadow = true);
                    serializedNode.childNodes.push(serializedChildNode);
                }
            }
        }
    }
    if (n.parentNode &&
        isShadowRoot(n.parentNode) &&
        isNativeShadowDom(n.parentNode)) {
        serializedNode.isShadow = true;
    }
    if (serializedNode.type === NodeType.Element &&
        serializedNode.tagName === 'iframe') {
        onceIframeLoaded(n, () => {
            const iframeDoc = n.contentDocument;
            if (iframeDoc && onIframeLoad) {
                const serializedIframeNode = serializeNodeWithId(iframeDoc, {
                    doc: iframeDoc,
                    mirror,
                    blockClass,
                    blockSelector,
                    needsMask,
                    maskTextClass,
                    maskTextSelector,
                    skipChild: false,
                    inlineStylesheet,
                    maskInputOptions,
                    maskTextFn,
                    maskInputFn,
                    slimDOMOptions,
                    dataURLOptions,
                    inlineImages,
                    recordCanvas,
                    preserveWhiteSpace,
                    onSerialize,
                    onIframeLoad,
                    iframeLoadTimeout,
                    onStylesheetLoad,
                    stylesheetLoadTimeout,
                    keepIframeSrcFn,
                });
                if (serializedIframeNode) {
                    onIframeLoad(n, serializedIframeNode);
                }
            }
        }, iframeLoadTimeout);
    }
    if (serializedNode.type === NodeType.Element &&
        serializedNode.tagName === 'link' &&
        typeof serializedNode.attributes.rel === 'string' &&
        (serializedNode.attributes.rel === 'stylesheet' ||
            (serializedNode.attributes.rel === 'preload' &&
                typeof serializedNode.attributes.href === 'string' &&
                extractFileExtension(serializedNode.attributes.href) === 'css'))) {
        onceStylesheetLoaded(n, () => {
            if (onStylesheetLoad) {
                const serializedLinkNode = serializeNodeWithId(n, {
                    doc,
                    mirror,
                    blockClass,
                    blockSelector,
                    needsMask,
                    maskTextClass,
                    maskTextSelector,
                    skipChild: false,
                    inlineStylesheet,
                    maskInputOptions,
                    maskTextFn,
                    maskInputFn,
                    slimDOMOptions,
                    dataURLOptions,
                    inlineImages,
                    recordCanvas,
                    preserveWhiteSpace,
                    onSerialize,
                    onIframeLoad,
                    iframeLoadTimeout,
                    onStylesheetLoad,
                    stylesheetLoadTimeout,
                    keepIframeSrcFn,
                });
                if (serializedLinkNode) {
                    onStylesheetLoad(n, serializedLinkNode);
                }
            }
        }, stylesheetLoadTimeout);
    }
    return serializedNode;
}
function snapshot(n, options) {
    const { mirror = new Mirror(), blockClass = 'rr-block', blockSelector = null, maskTextClass = 'rr-mask', maskTextSelector = null, inlineStylesheet = true, inlineImages = false, recordCanvas = false, maskAllInputs = false, maskTextFn, maskInputFn, slimDOM = false, dataURLOptions, preserveWhiteSpace, onSerialize, onIframeLoad, iframeLoadTimeout, onStylesheetLoad, stylesheetLoadTimeout, keepIframeSrcFn = () => false, } = options || {};
    const maskInputOptions = maskAllInputs === true
        ? {
            color: true,
            date: true,
            'datetime-local': true,
            email: true,
            month: true,
            number: true,
            range: true,
            search: true,
            tel: true,
            text: true,
            time: true,
            url: true,
            week: true,
            textarea: true,
            select: true,
            password: true,
        }
        : maskAllInputs === false
            ? {
                password: true,
            }
            : maskAllInputs;
    const slimDOMOptions = slimDOM === true || slimDOM === 'all'
        ?
            {
                script: true,
                comment: true,
                headFavicon: true,
                headWhitespace: true,
                headMetaDescKeywords: slimDOM === 'all',
                headMetaSocial: true,
                headMetaRobots: true,
                headMetaHttpEquiv: true,
                headMetaAuthorship: true,
                headMetaVerification: true,
            }
        : slimDOM === false
            ? {}
            : slimDOM;
    return serializeNodeWithId(n, {
        doc: n,
        mirror,
        blockClass,
        blockSelector,
        maskTextClass,
        maskTextSelector,
        skipChild: false,
        inlineStylesheet,
        maskInputOptions,
        maskTextFn,
        maskInputFn,
        slimDOMOptions,
        dataURLOptions,
        inlineImages,
        recordCanvas,
        preserveWhiteSpace,
        onSerialize,
        onIframeLoad,
        iframeLoadTimeout,
        onStylesheetLoad,
        stylesheetLoadTimeout,
        keepIframeSrcFn,
        newlyAddedElement: false,
    });
}
function visitSnapshot(node, onVisit) {
    function walk(current) {
        onVisit(current);
        if (current.type === NodeType.Document ||
            current.type === NodeType.Element) {
            current.childNodes.forEach(walk);
        }
    }
    walk(node);
}
function cleanupSnapshot() {
    _id = 1;
}

const commentre = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
function parse(css, options = {}) {
    let lineno = 1;
    let column = 1;
    function updatePosition(str) {
        const lines = str.match(/\n/g);
        if (lines) {
            lineno += lines.length;
        }
        const i = str.lastIndexOf('\n');
        column = i === -1 ? column + str.length : str.length - i;
    }
    function position() {
        const start = { line: lineno, column };
        return (node) => {
            node.position = new Position(start);
            whitespace();
            return node;
        };
    }
    class Position {
        constructor(start) {
            this.start = start;
            this.end = { line: lineno, column };
            this.source = options.source;
        }
    }
    Position.prototype.content = css;
    const errorsList = [];
    function error(msg) {
        const err = new Error(`${options.source || ''}:${lineno}:${column}: ${msg}`);
        err.reason = msg;
        err.filename = options.source;
        err.line = lineno;
        err.column = column;
        err.source = css;
        if (options.silent) {
            errorsList.push(err);
        }
        else {
            throw err;
        }
    }
    function stylesheet() {
        const rulesList = rules();
        return {
            type: 'stylesheet',
            stylesheet: {
                source: options.source,
                rules: rulesList,
                parsingErrors: errorsList,
            },
        };
    }
    function open() {
        return match(/^{\s*/);
    }
    function close() {
        return match(/^}/);
    }
    function rules() {
        let node;
        const rules = [];
        whitespace();
        comments(rules);
        while (css.length && css.charAt(0) !== '}' && (node = atrule() || rule())) {
            if (node) {
                rules.push(node);
                comments(rules);
            }
        }
        return rules;
    }
    function match(re) {
        const m = re.exec(css);
        if (!m) {
            return;
        }
        const str = m[0];
        updatePosition(str);
        css = css.slice(str.length);
        return m;
    }
    function whitespace() {
        match(/^\s*/);
    }
    function comments(rules = []) {
        let c;
        while ((c = comment())) {
            if (c) {
                rules.push(c);
            }
            c = comment();
        }
        return rules;
    }
    function comment() {
        const pos = position();
        if ('/' !== css.charAt(0) || '*' !== css.charAt(1)) {
            return;
        }
        let i = 2;
        while ('' !== css.charAt(i) &&
            ('*' !== css.charAt(i) || '/' !== css.charAt(i + 1))) {
            ++i;
        }
        i += 2;
        if ('' === css.charAt(i - 1)) {
            return error('End of comment missing');
        }
        const str = css.slice(2, i - 2);
        column += 2;
        updatePosition(str);
        css = css.slice(i);
        column += 2;
        return pos({
            type: 'comment',
            comment: str,
        });
    }
    function selector() {
        whitespace();
        while (css[0] == '}') {
            error('extra closing bracket');
            css = css.slice(1);
            whitespace();
        }
        const m = match(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);
        if (!m) {
            return;
        }
        const cleanedInput = m[0]
            .trim()
            .replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, '')
            .replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, (m) => {
            return m.replace(/,/g, '\u200C');
        });
        return customSplit(cleanedInput).map((s) => s.replace(/\u200C/g, ',').trim());
    }
    function customSplit(input) {
        const result = [];
        let currentSegment = '';
        let depthParentheses = 0;
        let depthBrackets = 0;
        for (const char of input) {
            if (char === '(') {
                depthParentheses++;
            }
            else if (char === ')') {
                depthParentheses--;
            }
            else if (char === '[') {
                depthBrackets++;
            }
            else if (char === ']') {
                depthBrackets--;
            }
            if (char === ',' && depthParentheses === 0 && depthBrackets === 0) {
                result.push(currentSegment);
                currentSegment = '';
            }
            else {
                currentSegment += char;
            }
        }
        if (currentSegment) {
            result.push(currentSegment);
        }
        return result;
    }
    function declaration() {
        const pos = position();
        const propMatch = match(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
        if (!propMatch) {
            return;
        }
        const prop = trim(propMatch[0]);
        if (!match(/^:\s*/)) {
            return error(`property missing ':'`);
        }
        const val = match(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/);
        const ret = pos({
            type: 'declaration',
            property: prop.replace(commentre, ''),
            value: val ? trim(val[0]).replace(commentre, '') : '',
        });
        match(/^[;\s]*/);
        return ret;
    }
    function declarations() {
        const decls = [];
        if (!open()) {
            return error(`missing '{'`);
        }
        comments(decls);
        let decl;
        while ((decl = declaration())) {
            if (decl !== false) {
                decls.push(decl);
                comments(decls);
            }
            decl = declaration();
        }
        if (!close()) {
            return error(`missing '}'`);
        }
        return decls;
    }
    function keyframe() {
        let m;
        const vals = [];
        const pos = position();
        while ((m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/))) {
            vals.push(m[1]);
            match(/^,\s*/);
        }
        if (!vals.length) {
            return;
        }
        return pos({
            type: 'keyframe',
            values: vals,
            declarations: declarations(),
        });
    }
    function atkeyframes() {
        const pos = position();
        let m = match(/^@([-\w]+)?keyframes\s*/);
        if (!m) {
            return;
        }
        const vendor = m[1];
        m = match(/^([-\w]+)\s*/);
        if (!m) {
            return error('@keyframes missing name');
        }
        const name = m[1];
        if (!open()) {
            return error(`@keyframes missing '{'`);
        }
        let frame;
        let frames = comments();
        while ((frame = keyframe())) {
            frames.push(frame);
            frames = frames.concat(comments());
        }
        if (!close()) {
            return error(`@keyframes missing '}'`);
        }
        return pos({
            type: 'keyframes',
            name,
            vendor,
            keyframes: frames,
        });
    }
    function atsupports() {
        const pos = position();
        const m = match(/^@supports *([^{]+)/);
        if (!m) {
            return;
        }
        const supports = trim(m[1]);
        if (!open()) {
            return error(`@supports missing '{'`);
        }
        const style = comments().concat(rules());
        if (!close()) {
            return error(`@supports missing '}'`);
        }
        return pos({
            type: 'supports',
            supports,
            rules: style,
        });
    }
    function athost() {
        const pos = position();
        const m = match(/^@host\s*/);
        if (!m) {
            return;
        }
        if (!open()) {
            return error(`@host missing '{'`);
        }
        const style = comments().concat(rules());
        if (!close()) {
            return error(`@host missing '}'`);
        }
        return pos({
            type: 'host',
            rules: style,
        });
    }
    function atmedia() {
        const pos = position();
        const m = match(/^@media *([^{]+)/);
        if (!m) {
            return;
        }
        const media = trim(m[1]);
        if (!open()) {
            return error(`@media missing '{'`);
        }
        const style = comments().concat(rules());
        if (!close()) {
            return error(`@media missing '}'`);
        }
        return pos({
            type: 'media',
            media,
            rules: style,
        });
    }
    function atcustommedia() {
        const pos = position();
        const m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
        if (!m) {
            return;
        }
        return pos({
            type: 'custom-media',
            name: trim(m[1]),
            media: trim(m[2]),
        });
    }
    function atpage() {
        const pos = position();
        const m = match(/^@page */);
        if (!m) {
            return;
        }
        const sel = selector() || [];
        if (!open()) {
            return error(`@page missing '{'`);
        }
        let decls = comments();
        let decl;
        while ((decl = declaration())) {
            decls.push(decl);
            decls = decls.concat(comments());
        }
        if (!close()) {
            return error(`@page missing '}'`);
        }
        return pos({
            type: 'page',
            selectors: sel,
            declarations: decls,
        });
    }
    function atdocument() {
        const pos = position();
        const m = match(/^@([-\w]+)?document *([^{]+)/);
        if (!m) {
            return;
        }
        const vendor = trim(m[1]);
        const doc = trim(m[2]);
        if (!open()) {
            return error(`@document missing '{'`);
        }
        const style = comments().concat(rules());
        if (!close()) {
            return error(`@document missing '}'`);
        }
        return pos({
            type: 'document',
            document: doc,
            vendor,
            rules: style,
        });
    }
    function atfontface() {
        const pos = position();
        const m = match(/^@font-face\s*/);
        if (!m) {
            return;
        }
        if (!open()) {
            return error(`@font-face missing '{'`);
        }
        let decls = comments();
        let decl;
        while ((decl = declaration())) {
            decls.push(decl);
            decls = decls.concat(comments());
        }
        if (!close()) {
            return error(`@font-face missing '}'`);
        }
        return pos({
            type: 'font-face',
            declarations: decls,
        });
    }
    const atimport = _compileAtrule('import');
    const atcharset = _compileAtrule('charset');
    const atnamespace = _compileAtrule('namespace');
    function _compileAtrule(name) {
        const re = new RegExp('^@' + name + '\\s*([^;]+);');
        return () => {
            const pos = position();
            const m = match(re);
            if (!m) {
                return;
            }
            const ret = { type: name };
            ret[name] = m[1].trim();
            return pos(ret);
        };
    }
    function atrule() {
        if (css[0] !== '@') {
            return;
        }
        return (atkeyframes() ||
            atmedia() ||
            atcustommedia() ||
            atsupports() ||
            atimport() ||
            atcharset() ||
            atnamespace() ||
            atdocument() ||
            atpage() ||
            athost() ||
            atfontface());
    }
    function rule() {
        const pos = position();
        const sel = selector();
        if (!sel) {
            return error('selector missing');
        }
        comments();
        return pos({
            type: 'rule',
            selectors: sel,
            declarations: declarations(),
        });
    }
    return addParent(stylesheet());
}
function trim(str) {
    return str ? str.replace(/^\s+|\s+$/g, '') : '';
}
function addParent(obj, parent) {
    const isNode = obj && typeof obj.type === 'string';
    const childParent = isNode ? obj : parent;
    for (const k of Object.keys(obj)) {
        const value = obj[k];
        if (Array.isArray(value)) {
            value.forEach((v) => {
                addParent(v, childParent);
            });
        }
        else if (value && typeof value === 'object') {
            addParent(value, childParent);
        }
    }
    if (isNode) {
        Object.defineProperty(obj, 'parent', {
            configurable: true,
            writable: true,
            enumerable: false,
            value: parent || null,
        });
    }
    return obj;
}

const tagMap = {
    script: 'noscript',
    altglyph: 'altGlyph',
    altglyphdef: 'altGlyphDef',
    altglyphitem: 'altGlyphItem',
    animatecolor: 'animateColor',
    animatemotion: 'animateMotion',
    animatetransform: 'animateTransform',
    clippath: 'clipPath',
    feblend: 'feBlend',
    fecolormatrix: 'feColorMatrix',
    fecomponenttransfer: 'feComponentTransfer',
    fecomposite: 'feComposite',
    feconvolvematrix: 'feConvolveMatrix',
    fediffuselighting: 'feDiffuseLighting',
    fedisplacementmap: 'feDisplacementMap',
    fedistantlight: 'feDistantLight',
    fedropshadow: 'feDropShadow',
    feflood: 'feFlood',
    fefunca: 'feFuncA',
    fefuncb: 'feFuncB',
    fefuncg: 'feFuncG',
    fefuncr: 'feFuncR',
    fegaussianblur: 'feGaussianBlur',
    feimage: 'feImage',
    femerge: 'feMerge',
    femergenode: 'feMergeNode',
    femorphology: 'feMorphology',
    feoffset: 'feOffset',
    fepointlight: 'fePointLight',
    fespecularlighting: 'feSpecularLighting',
    fespotlight: 'feSpotLight',
    fetile: 'feTile',
    feturbulence: 'feTurbulence',
    foreignobject: 'foreignObject',
    glyphref: 'glyphRef',
    lineargradient: 'linearGradient',
    radialgradient: 'radialGradient',
};
function getTagName(n) {
    let tagName = tagMap[n.tagName] ? tagMap[n.tagName] : n.tagName;
    if (tagName === 'link' && n.attributes._cssText) {
        tagName = 'style';
    }
    return tagName;
}
function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
const MEDIA_SELECTOR = /(max|min)-device-(width|height)/;
const MEDIA_SELECTOR_GLOBAL = new RegExp(MEDIA_SELECTOR.source, 'g');
const HOVER_SELECTOR = /([^\\]):hover/;
const HOVER_SELECTOR_GLOBAL = new RegExp(HOVER_SELECTOR.source, 'g');
function adaptCssForReplay(cssText, cache) {
    const cachedStyle = cache === null || cache === void 0 ? void 0 : cache.stylesWithHoverClass.get(cssText);
    if (cachedStyle)
        return cachedStyle;
    const ast = parse(cssText, {
        silent: true,
    });
    if (!ast.stylesheet) {
        return cssText;
    }
    const selectors = [];
    const medias = [];
    function getSelectors(rule) {
        if ('selectors' in rule && rule.selectors) {
            rule.selectors.forEach((selector) => {
                if (HOVER_SELECTOR.test(selector)) {
                    selectors.push(selector);
                }
            });
        }
        if ('media' in rule && rule.media && MEDIA_SELECTOR.test(rule.media)) {
            medias.push(rule.media);
        }
        if ('rules' in rule && rule.rules) {
            rule.rules.forEach(getSelectors);
        }
    }
    getSelectors(ast.stylesheet);
    let result = cssText;
    if (selectors.length > 0) {
        const selectorMatcher = new RegExp(selectors
            .filter((selector, index) => selectors.indexOf(selector) === index)
            .sort((a, b) => b.length - a.length)
            .map((selector) => {
            return escapeRegExp(selector);
        })
            .join('|'), 'g');
        result = result.replace(selectorMatcher, (selector) => {
            const newSelector = selector.replace(HOVER_SELECTOR_GLOBAL, '$1.\\:hover');
            return `${selector}, ${newSelector}`;
        });
    }
    if (medias.length > 0) {
        const mediaMatcher = new RegExp(medias
            .filter((media, index) => medias.indexOf(media) === index)
            .sort((a, b) => b.length - a.length)
            .map((media) => {
            return escapeRegExp(media);
        })
            .join('|'), 'g');
        result = result.replace(mediaMatcher, (media) => {
            return media.replace(MEDIA_SELECTOR_GLOBAL, '$1-$2');
        });
    }
    cache === null || cache === void 0 ? void 0 : cache.stylesWithHoverClass.set(cssText, result);
    return result;
}
function createCache() {
    const stylesWithHoverClass = new Map();
    return {
        stylesWithHoverClass,
    };
}
function buildNode(n, options) {
    var _a;
    const { doc, hackCss, cache } = options;
    switch (n.type) {
        case NodeType.Document:
            return doc.implementation.createDocument(null, '', null);
        case NodeType.DocumentType:
            return doc.implementation.createDocumentType(n.name || 'html', n.publicId, n.systemId);
        case NodeType.Element: {
            const tagName = getTagName(n);
            let node;
            if (n.isSVG) {
                node = doc.createElementNS('http://www.w3.org/2000/svg', tagName);
            }
            else {
                if (n.isCustom &&
                    ((_a = doc.defaultView) === null || _a === void 0 ? void 0 : _a.customElements) &&
                    !doc.defaultView.customElements.get(n.tagName))
                    doc.defaultView.customElements.define(n.tagName, class extends doc.defaultView.HTMLElement {
                    });
                node = doc.createElement(tagName);
            }
            const specialAttributes = {};
            for (const name in n.attributes) {
                if (!Object.prototype.hasOwnProperty.call(n.attributes, name)) {
                    continue;
                }
                let value = n.attributes[name];
                if (tagName === 'option' &&
                    name === 'selected' &&
                    value === false) {
                    continue;
                }
                if (value === null) {
                    continue;
                }
                if (value === true)
                    value = '';
                if (name.startsWith('rr_')) {
                    specialAttributes[name] = value;
                    continue;
                }
                const isTextarea = tagName === 'textarea' && name === 'value';
                const isRemoteOrDynamicCss = tagName === 'style' && name === '_cssText';
                if (isRemoteOrDynamicCss && hackCss && typeof value === 'string') {
                    value = adaptCssForReplay(value, cache);
                }
                if ((isTextarea || isRemoteOrDynamicCss) && typeof value === 'string') {
                    node.appendChild(doc.createTextNode(value));
                    n.childNodes = [];
                    continue;
                }
                try {
                    if (n.isSVG && name === 'xlink:href') {
                        node.setAttributeNS('http://www.w3.org/1999/xlink', name, value.toString());
                    }
                    else if (name === 'onload' ||
                        name === 'onclick' ||
                        name.substring(0, 7) === 'onmouse') {
                        node.setAttribute('_' + name, value.toString());
                    }
                    else if (tagName === 'meta' &&
                        n.attributes['http-equiv'] === 'Content-Security-Policy' &&
                        name === 'content') {
                        node.setAttribute('csp-content', value.toString());
                        continue;
                    }
                    else if (tagName === 'link' &&
                        (n.attributes.rel === 'preload' ||
                            n.attributes.rel === 'modulepreload') &&
                        n.attributes.as === 'script') {
                    }
                    else if (tagName === 'link' &&
                        n.attributes.rel === 'prefetch' &&
                        typeof n.attributes.href === 'string' &&
                        n.attributes.href.endsWith('.js')) {
                    }
                    else if (tagName === 'img' &&
                        n.attributes.srcset &&
                        n.attributes.rr_dataURL) {
                        node.setAttribute('rrweb-original-srcset', n.attributes.srcset);
                    }
                    else {
                        node.setAttribute(name, value.toString());
                    }
                }
                catch (error) {
                }
            }
            for (const name in specialAttributes) {
                const value = specialAttributes[name];
                if (tagName === 'canvas' && name === 'rr_dataURL') {
                    const image = document.createElement('img');
                    image.onload = () => {
                        const ctx = node.getContext('2d');
                        if (ctx) {
                            ctx.drawImage(image, 0, 0, image.width, image.height);
                        }
                    };
                    image.src = value.toString();
                    if (node.RRNodeType)
                        node.rr_dataURL = value.toString();
                }
                else if (tagName === 'img' && name === 'rr_dataURL') {
                    const image = node;
                    if (!image.currentSrc.startsWith('data:')) {
                        image.setAttribute('rrweb-original-src', n.attributes.src);
                        image.src = value.toString();
                    }
                }
                if (name === 'rr_width') {
                    node.style.width = value.toString();
                }
                else if (name === 'rr_height') {
                    node.style.height = value.toString();
                }
                else if (name === 'rr_mediaCurrentTime' &&
                    typeof value === 'number') {
                    node.currentTime = value;
                }
                else if (name === 'rr_mediaState') {
                    switch (value) {
                        case 'played':
                            node
                                .play()
                                .catch((e) => console.warn('media playback error', e));
                            break;
                        case 'paused':
                            node.pause();
                            break;
                    }
                }
                else if (name === 'rr_mediaPlaybackRate' &&
                    typeof value === 'number') {
                    node.playbackRate = value;
                }
                else if (name === 'rr_mediaMuted' && typeof value === 'boolean') {
                    node.muted = value;
                }
                else if (name === 'rr_mediaLoop' && typeof value === 'boolean') {
                    node.loop = value;
                }
                else if (name === 'rr_mediaVolume' && typeof value === 'number') {
                    node.volume = value;
                }
            }
            if (n.isShadowHost) {
                if (!node.shadowRoot) {
                    node.attachShadow({ mode: 'open' });
                }
                else {
                    while (node.shadowRoot.firstChild) {
                        node.shadowRoot.removeChild(node.shadowRoot.firstChild);
                    }
                }
            }
            return node;
        }
        case NodeType.Text:
            return doc.createTextNode(n.isStyle && hackCss
                ? adaptCssForReplay(n.textContent, cache)
                : n.textContent);
        case NodeType.CDATA:
            return doc.createCDATASection(n.textContent);
        case NodeType.Comment:
            return doc.createComment(n.textContent);
        default:
            return null;
    }
}
function buildNodeWithSN(n, options) {
    const { doc, mirror, skipChild = false, hackCss = true, afterAppend, cache, } = options;
    if (mirror.has(n.id)) {
        const nodeInMirror = mirror.getNode(n.id);
        const meta = mirror.getMeta(nodeInMirror);
        if (isNodeMetaEqual(meta, n))
            return mirror.getNode(n.id);
    }
    let node = buildNode(n, { doc, hackCss, cache });
    if (!node) {
        return null;
    }
    if (n.rootId && mirror.getNode(n.rootId) !== doc) {
        mirror.replace(n.rootId, doc);
    }
    if (n.type === NodeType.Document) {
        doc.close();
        doc.open();
        if (n.compatMode === 'BackCompat' &&
            n.childNodes &&
            n.childNodes[0].type !== NodeType.DocumentType) {
            if (n.childNodes[0].type === NodeType.Element &&
                'xmlns' in n.childNodes[0].attributes &&
                n.childNodes[0].attributes.xmlns === 'http://www.w3.org/1999/xhtml') {
                doc.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">');
            }
            else {
                doc.write('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">');
            }
        }
        node = doc;
    }
    mirror.add(node, n);
    if ((n.type === NodeType.Document || n.type === NodeType.Element) &&
        !skipChild) {
        for (const childN of n.childNodes) {
            const childNode = buildNodeWithSN(childN, {
                doc,
                mirror,
                skipChild: false,
                hackCss,
                afterAppend,
                cache,
            });
            if (!childNode) {
                console.warn('Failed to rebuild', childN);
                continue;
            }
            if (childN.isShadow && isElement(node) && node.shadowRoot) {
                node.shadowRoot.appendChild(childNode);
            }
            else if (n.type === NodeType.Document &&
                childN.type == NodeType.Element) {
                const htmlElement = childNode;
                let body = null;
                htmlElement.childNodes.forEach((child) => {
                    if (child.nodeName === 'BODY')
                        body = child;
                });
                if (body) {
                    htmlElement.removeChild(body);
                    node.appendChild(childNode);
                    htmlElement.appendChild(body);
                }
                else {
                    node.appendChild(childNode);
                }
            }
            else {
                node.appendChild(childNode);
            }
            if (afterAppend) {
                afterAppend(childNode, childN.id);
            }
        }
    }
    return node;
}
function visit(mirror, onVisit) {
    function walk(node) {
        onVisit(node);
    }
    for (const id of mirror.getIds()) {
        if (mirror.has(id)) {
            walk(mirror.getNode(id));
        }
    }
}
function handleScroll(node, mirror) {
    const n = mirror.getMeta(node);
    if ((n === null || n === void 0 ? void 0 : n.type) !== NodeType.Element) {
        return;
    }
    const el = node;
    for (const name in n.attributes) {
        if (!(Object.prototype.hasOwnProperty.call(n.attributes, name) &&
            name.startsWith('rr_'))) {
            continue;
        }
        const value = n.attributes[name];
        if (name === 'rr_scrollLeft') {
            el.scrollLeft = value;
        }
        if (name === 'rr_scrollTop') {
            el.scrollTop = value;
        }
    }
}
function rebuild(n, options) {
    const { doc, onVisit, hackCss = true, afterAppend, cache, mirror = new Mirror(), } = options;
    const node = buildNodeWithSN(n, {
        doc,
        mirror,
        skipChild: false,
        hackCss,
        afterAppend,
        cache,
    });
    visit(mirror, (visitedNode) => {
        if (onVisit) {
            onVisit(visitedNode);
        }
        handleScroll(visitedNode, mirror);
    });
    return node;
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./cypress/support/e2e.js ***!
  \********************************/


__webpack_require__(/*! @chromatic-com/cypress/support */ "./node_modules/@chromatic-com/cypress/dist/support.js");
__webpack_require__(/*! ./commands */ "./cypress/support/commands.js");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZTJlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN4QmE7O0FBRWIsb0JBQW9CLG1CQUFPLENBQUMsMEVBQWdCOztBQUU1Qyx3Q0FBd0MseURBQXlELGdDQUFnQywwQ0FBMEMsa0JBQWtCLDBCQUEwQixHQUFHLEVBQUUsZ0JBQWdCLGdHQUFnRyx5Q0FBeUMsNENBQTRDLElBQUksRUFBRSxlQUFlLDhGQUE4RixnQ0FBZ0MseUNBQXlDLGtCQUFrQiwyQkFBMkIsZ0NBQWdDLHVHQUF1RyxXQUFXLDRCQUE0QixrQ0FBa0MsMkNBQTJDLDJCQUEyQiwyQkFBMkIsNkNBQTZDLCtEQUErRCxtQ0FBbUMsMkNBQTJDLGtDQUFrQyx5Q0FBeUMseUNBQXlDLHVEQUF1RCwwQ0FBMEMseURBQXlELG9DQUFvQyw4Q0FBOEMscUJBQXFCLGdGQUFnRixHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ3RrRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0QkFBNEI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQsMERBQTBEO0FBQzFELDBEQUEwRCxvQ0FBb0Msc0JBQXNCO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQSx5Q0FBeUMsMEJBQTBCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGVBQWU7QUFDL0M7QUFDQTtBQUNBLG1DQUFtQyxrQkFBa0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsK0RBQStEO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0Qyx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFdBQVcsRUFBRSxTQUFTLEVBQUUsV0FBVztBQUM3RDtBQUNBO0FBQ0EsMEJBQTBCLFdBQVcsRUFBRSxTQUFTLEVBQUUsV0FBVztBQUM3RDtBQUNBO0FBQ0EsMEJBQTBCLFdBQVcsRUFBRSwrQkFBK0IsRUFBRSxXQUFXO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVztBQUNoRSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELFNBQVM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsY0FBYztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZLDBGQUEwRiw4Q0FBOEMsNEVBQTRFO0FBQ2hPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdDQUFnQztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRixJQUFJO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1RUFBdUUsa0NBQWtDLG9GQUFvRjtBQUN6TTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsaUJBQWlCLFdBQVcsSUFBSTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0JBQWdCO0FBQ2hDO0FBQ0E7QUFDQSx5QkFBeUIsTUFBTTtBQUMvQiwwQkFBMEIsT0FBTztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwSUFBMEksOERBQThELCtNQUErTTtBQUNuYSxVQUFVLFlBQVk7QUFDdEIsVUFBVSw0QkFBNEI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsSUFBSTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw0WkFBNFo7QUFDeGE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxQkFBcUIsR0FBRyxPQUFPLEdBQUcsT0FBTyxJQUFJLElBQUk7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsSUFBSTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxJQUFJO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixTQUFTLElBQUksWUFBWTtBQUMvQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0JBQXNCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsY0FBYztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0VBQXNFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixxQkFBcUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyRUFBMkU7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUU2Zjs7Ozs7OztVQ2ovRDdmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNVQUEsbUJBQUE7QUFDQUEsbUJBQUEsb0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jeXByZXNzL3N1cHBvcnQvY29tbWFuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BjaHJvbWF0aWMtY29tL2N5cHJlc3MvZGlzdC9zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ycndlYi1zbmFwc2hvdC9lcy9ycndlYi1zbmFwc2hvdC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9jeXByZXNzL3N1cHBvcnQvZTJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyBUaGlzIGV4YW1wbGUgY29tbWFuZHMuanMgc2hvd3MgeW91IGhvdyB0b1xuLy8gY3JlYXRlIHZhcmlvdXMgY3VzdG9tIGNvbW1hbmRzIGFuZCBvdmVyd3JpdGVcbi8vIGV4aXN0aW5nIGNvbW1hbmRzLlxuLy9cbi8vIEZvciBtb3JlIGNvbXByZWhlbnNpdmUgZXhhbXBsZXMgb2YgY3VzdG9tXG4vLyBjb21tYW5kcyBwbGVhc2UgcmVhZCBtb3JlIGhlcmU6XG4vLyBodHRwczovL29uLmN5cHJlc3MuaW8vY3VzdG9tLWNvbW1hbmRzXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy9cbi8vXG4vLyAtLSBUaGlzIGlzIGEgcGFyZW50IGNvbW1hbmQgLS1cbi8vIEN5cHJlc3MuQ29tbWFuZHMuYWRkKCdsb2dpbicsIChlbWFpbCwgcGFzc3dvcmQpID0+IHsgLi4uIH0pXG4vL1xuLy9cbi8vIC0tIFRoaXMgaXMgYSBjaGlsZCBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLmFkZCgnZHJhZycsIHsgcHJldlN1YmplY3Q6ICdlbGVtZW50J30sIChzdWJqZWN0LCBvcHRpb25zKSA9PiB7IC4uLiB9KVxuLy9cbi8vXG4vLyAtLSBUaGlzIGlzIGEgZHVhbCBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLmFkZCgnZGlzbWlzcycsIHsgcHJldlN1YmplY3Q6ICdvcHRpb25hbCd9LCAoc3ViamVjdCwgb3B0aW9ucykgPT4geyAuLi4gfSlcbi8vXG4vL1xuLy8gLS0gVGhpcyB3aWxsIG92ZXJ3cml0ZSBhbiBleGlzdGluZyBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLm92ZXJ3cml0ZSgndmlzaXQnLCAob3JpZ2luYWxGbiwgdXJsLCBvcHRpb25zKSA9PiB7IC4uLiB9KSIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJyd2ViU25hcHNob3QgPSByZXF1aXJlKCdycndlYi1zbmFwc2hvdCcpO1xuXG5DeXByZXNzLkNvbW1hbmRzLmFkZChcInRha2VTbmFwc2hvdFwiLGU9PntDeXByZXNzLmNvbmZpZyhcImlzVGV4dFRlcm1pbmFsXCIpJiZjeS5kb2N1bWVudCgpLnRoZW4ocz0+e2xldCByPXJyd2ViU25hcHNob3Quc25hcHNob3Qocyk7Y3kuZ2V0KFwiQG1hbnVhbFNuYXBzaG90c1wiKS50aGVuKG49PlsuLi5uLHtuYW1lOmUsc25hcHNob3Q6cn1dKS5hcyhcIm1hbnVhbFNuYXBzaG90c1wiKTt9KTt9KTtiZWZvcmVFYWNoKCgpPT57Q3lwcmVzcy5jb25maWcoXCJpc1RleHRUZXJtaW5hbFwiKSYmKGN5LndyYXAoW10pLmFzKFwibWFudWFsU25hcHNob3RzXCIpLGN5LnRhc2soXCJwcmVwYXJlQXJjaGl2ZXNcIix7YWN0aW9uOlwic2V0dXAtbmV0d29yay1saXN0ZW5lclwiLHBheWxvYWQ6e2FsbG93ZWREb21haW5zOkN5cHJlc3MuZW52KFwiYXNzZXREb21haW5zXCIpfX0pKTt9KTthZnRlckVhY2goKCk9PntDeXByZXNzLmVudihcImRpc2FibGVBdXRvU25hcHNob3RcIil8fCFDeXByZXNzLmNvbmZpZyhcImlzVGV4dFRlcm1pbmFsXCIpfHxjeS5kb2N1bWVudCgpLnRoZW4oZT0+e2xldCBzPXJyd2ViU25hcHNob3Quc25hcHNob3QoZSk7Y3kuZ2V0KFwiQG1hbnVhbFNuYXBzaG90c1wiKS50aGVuKChyPVtdKT0+e2N5LnVybCgpLnRoZW4obj0+e2N5LnRhc2soXCJwcmVwYXJlQXJjaGl2ZXNcIix7YWN0aW9uOlwic2F2ZS1hcmNoaXZlc1wiLHBheWxvYWQ6e3Rlc3RUaXRsZVBhdGg6W0N5cHJlc3Muc3BlYy5yZWxhdGl2ZVRvQ29tbW9uUm9vdCwuLi5DeXByZXNzLmN1cnJlbnRUZXN0LnRpdGxlUGF0aF0sZG9tU25hcHNob3RzOlsuLi5yLHtzbmFwc2hvdDpzfV0sY2hyb21hdGljU3Rvcnlib29rUGFyYW1zOnsuLi5DeXByZXNzLmVudihcImRpZmZUaHJlc2hvbGRcIikmJntkaWZmVGhyZXNob2xkOkN5cHJlc3MuZW52KFwiZGlmZlRocmVzaG9sZFwiKX0sLi4uQ3lwcmVzcy5lbnYoXCJkZWxheVwiKSYme2RlbGF5OkN5cHJlc3MuZW52KFwiZGVsYXlcIil9LC4uLkN5cHJlc3MuZW52KFwiZGlmZkluY2x1ZGVBbnRpQWxpYXNpbmdcIikmJntkaWZmSW5jbHVkZUFudGlBbGlhc2luZzpDeXByZXNzLmVudihcImRpZmZJbmNsdWRlQW50aUFsaWFzaW5nXCIpfSwuLi5DeXByZXNzLmVudihcImRpZmZUaHJlc2hvbGRcIikmJntkaWZmVGhyZXNob2xkOkN5cHJlc3MuZW52KFwiZGlmZlRocmVzaG9sZFwiKX0sLi4uQ3lwcmVzcy5lbnYoXCJmb3JjZWRDb2xvcnNcIikmJntmb3JjZWRDb2xvcnM6Q3lwcmVzcy5lbnYoXCJmb3JjZWRDb2xvcnNcIil9LC4uLkN5cHJlc3MuZW52KFwicGF1c2VBbmltYXRpb25BdEVuZFwiKSYme3BhdXNlQW5pbWF0aW9uQXRFbmQ6Q3lwcmVzcy5lbnYoXCJwYXVzZUFuaW1hdGlvbkF0RW5kXCIpfSwuLi5DeXByZXNzLmVudihcInByZWZlcnNSZWR1Y2VkTW90aW9uXCIpJiZ7cHJlZmVyc1JlZHVjZWRNb3Rpb246Q3lwcmVzcy5lbnYoXCJwcmVmZXJzUmVkdWNlZE1vdGlvblwiKX0sLi4uQ3lwcmVzcy5lbnYoXCJjcm9wVG9WaWV3cG9ydFwiKSYme2Nyb3BUb1ZpZXdwb3J0OkN5cHJlc3MuZW52KFwiY3JvcFRvVmlld3BvcnRcIil9fSxwYWdlVXJsOm4sdmlld3BvcnQ6e2hlaWdodDpDeXByZXNzLmNvbmZpZyhcInZpZXdwb3J0SGVpZ2h0XCIpLHdpZHRoOkN5cHJlc3MuY29uZmlnKFwidmlld3BvcnRXaWR0aFwiKX19fSk7fSk7fSk7fSk7fSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vdXQuanMubWFwXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdXBwb3J0LmpzLm1hcCIsInZhciBOb2RlVHlwZTtcclxuKGZ1bmN0aW9uIChOb2RlVHlwZSkge1xyXG4gICAgTm9kZVR5cGVbTm9kZVR5cGVbXCJEb2N1bWVudFwiXSA9IDBdID0gXCJEb2N1bWVudFwiO1xyXG4gICAgTm9kZVR5cGVbTm9kZVR5cGVbXCJEb2N1bWVudFR5cGVcIl0gPSAxXSA9IFwiRG9jdW1lbnRUeXBlXCI7XHJcbiAgICBOb2RlVHlwZVtOb2RlVHlwZVtcIkVsZW1lbnRcIl0gPSAyXSA9IFwiRWxlbWVudFwiO1xyXG4gICAgTm9kZVR5cGVbTm9kZVR5cGVbXCJUZXh0XCJdID0gM10gPSBcIlRleHRcIjtcclxuICAgIE5vZGVUeXBlW05vZGVUeXBlW1wiQ0RBVEFcIl0gPSA0XSA9IFwiQ0RBVEFcIjtcclxuICAgIE5vZGVUeXBlW05vZGVUeXBlW1wiQ29tbWVudFwiXSA9IDVdID0gXCJDb21tZW50XCI7XHJcbn0pKE5vZGVUeXBlIHx8IChOb2RlVHlwZSA9IHt9KSk7XG5cbmZ1bmN0aW9uIGlzRWxlbWVudChuKSB7XHJcbiAgICByZXR1cm4gbi5ub2RlVHlwZSA9PT0gbi5FTEVNRU5UX05PREU7XHJcbn1cclxuZnVuY3Rpb24gaXNTaGFkb3dSb290KG4pIHtcclxuICAgIGNvbnN0IGhvc3QgPSBuID09PSBudWxsIHx8IG4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG4uaG9zdDtcclxuICAgIHJldHVybiBCb29sZWFuKChob3N0ID09PSBudWxsIHx8IGhvc3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhvc3Quc2hhZG93Um9vdCkgPT09IG4pO1xyXG59XHJcbmZ1bmN0aW9uIGlzTmF0aXZlU2hhZG93RG9tKHNoYWRvd1Jvb3QpIHtcclxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc2hhZG93Um9vdCkgPT09ICdbb2JqZWN0IFNoYWRvd1Jvb3RdJztcclxufVxyXG5mdW5jdGlvbiBmaXhCcm93c2VyQ29tcGF0aWJpbGl0eUlzc3Vlc0luQ1NTKGNzc1RleHQpIHtcclxuICAgIGlmIChjc3NUZXh0LmluY2x1ZGVzKCcgYmFja2dyb3VuZC1jbGlwOiB0ZXh0OycpICYmXHJcbiAgICAgICAgIWNzc1RleHQuaW5jbHVkZXMoJyAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDsnKSkge1xyXG4gICAgICAgIGNzc1RleHQgPSBjc3NUZXh0LnJlcGxhY2UoJyBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7JywgJyAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDsgYmFja2dyb3VuZC1jbGlwOiB0ZXh0OycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNzc1RleHQ7XHJcbn1cclxuZnVuY3Rpb24gZXNjYXBlSW1wb3J0U3RhdGVtZW50KHJ1bGUpIHtcclxuICAgIGNvbnN0IHsgY3NzVGV4dCB9ID0gcnVsZTtcclxuICAgIGlmIChjc3NUZXh0LnNwbGl0KCdcIicpLmxlbmd0aCA8IDMpXHJcbiAgICAgICAgcmV0dXJuIGNzc1RleHQ7XHJcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBbJ0BpbXBvcnQnLCBgdXJsKCR7SlNPTi5zdHJpbmdpZnkocnVsZS5ocmVmKX0pYF07XHJcbiAgICBpZiAocnVsZS5sYXllck5hbWUgPT09ICcnKSB7XHJcbiAgICAgICAgc3RhdGVtZW50LnB1c2goYGxheWVyYCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChydWxlLmxheWVyTmFtZSkge1xyXG4gICAgICAgIHN0YXRlbWVudC5wdXNoKGBsYXllcigke3J1bGUubGF5ZXJOYW1lfSlgKTtcclxuICAgIH1cclxuICAgIGlmIChydWxlLnN1cHBvcnRzVGV4dCkge1xyXG4gICAgICAgIHN0YXRlbWVudC5wdXNoKGBzdXBwb3J0cygke3J1bGUuc3VwcG9ydHNUZXh0fSlgKTtcclxuICAgIH1cclxuICAgIGlmIChydWxlLm1lZGlhLmxlbmd0aCkge1xyXG4gICAgICAgIHN0YXRlbWVudC5wdXNoKHJ1bGUubWVkaWEubWVkaWFUZXh0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdGF0ZW1lbnQuam9pbignICcpICsgJzsnO1xyXG59XHJcbmZ1bmN0aW9uIHN0cmluZ2lmeVN0eWxlc2hlZXQocykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBydWxlcyA9IHMucnVsZXMgfHwgcy5jc3NSdWxlcztcclxuICAgICAgICByZXR1cm4gcnVsZXNcclxuICAgICAgICAgICAgPyBmaXhCcm93c2VyQ29tcGF0aWJpbGl0eUlzc3Vlc0luQ1NTKEFycmF5LmZyb20ocnVsZXMsIHN0cmluZ2lmeVJ1bGUpLmpvaW4oJycpKVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzdHJpbmdpZnlSdWxlKHJ1bGUpIHtcclxuICAgIGxldCBpbXBvcnRTdHJpbmdpZmllZDtcclxuICAgIGlmIChpc0NTU0ltcG9ydFJ1bGUocnVsZSkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpbXBvcnRTdHJpbmdpZmllZCA9XHJcbiAgICAgICAgICAgICAgICBzdHJpbmdpZnlTdHlsZXNoZWV0KHJ1bGUuc3R5bGVTaGVldCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBlc2NhcGVJbXBvcnRTdGF0ZW1lbnQocnVsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzQ1NTU3R5bGVSdWxlKHJ1bGUpICYmIHJ1bGUuc2VsZWN0b3JUZXh0LmluY2x1ZGVzKCc6JykpIHtcclxuICAgICAgICByZXR1cm4gZml4U2FmYXJpQ29sb25zKHJ1bGUuY3NzVGV4dCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaW1wb3J0U3RyaW5naWZpZWQgfHwgcnVsZS5jc3NUZXh0O1xyXG59XHJcbmZ1bmN0aW9uIGZpeFNhZmFyaUNvbG9ucyhjc3NTdHJpbmdpZmllZCkge1xyXG4gICAgY29uc3QgcmVnZXggPSAvKFxcWyg/OltcXHctXSspW15cXFxcXSkoOig/OltcXHctXSspXFxdKS9nbTtcclxuICAgIHJldHVybiBjc3NTdHJpbmdpZmllZC5yZXBsYWNlKHJlZ2V4LCAnJDFcXFxcJDInKTtcclxufVxyXG5mdW5jdGlvbiBpc0NTU0ltcG9ydFJ1bGUocnVsZSkge1xyXG4gICAgcmV0dXJuICdzdHlsZVNoZWV0JyBpbiBydWxlO1xyXG59XHJcbmZ1bmN0aW9uIGlzQ1NTU3R5bGVSdWxlKHJ1bGUpIHtcclxuICAgIHJldHVybiAnc2VsZWN0b3JUZXh0JyBpbiBydWxlO1xyXG59XHJcbmNsYXNzIE1pcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlkTm9kZU1hcCA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLm5vZGVNZXRhTWFwID0gbmV3IFdlYWtNYXAoKTtcclxuICAgIH1cclxuICAgIGdldElkKG4pIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgaWYgKCFuKVxyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgY29uc3QgaWQgPSAoX2EgPSB0aGlzLmdldE1ldGEobikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pZDtcclxuICAgICAgICByZXR1cm4gaWQgIT09IG51bGwgJiYgaWQgIT09IHZvaWQgMCA/IGlkIDogLTE7XHJcbiAgICB9XHJcbiAgICBnZXROb2RlKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWROb2RlTWFwLmdldChpZCkgfHwgbnVsbDtcclxuICAgIH1cclxuICAgIGdldElkcygpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmlkTm9kZU1hcC5rZXlzKCkpO1xyXG4gICAgfVxyXG4gICAgZ2V0TWV0YShuKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZU1ldGFNYXAuZ2V0KG4pIHx8IG51bGw7XHJcbiAgICB9XHJcbiAgICByZW1vdmVOb2RlRnJvbU1hcChuKSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmdldElkKG4pO1xyXG4gICAgICAgIHRoaXMuaWROb2RlTWFwLmRlbGV0ZShpZCk7XHJcbiAgICAgICAgaWYgKG4uY2hpbGROb2Rlcykge1xyXG4gICAgICAgICAgICBuLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB0aGlzLnJlbW92ZU5vZGVGcm9tTWFwKGNoaWxkTm9kZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhhcyhpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkTm9kZU1hcC5oYXMoaWQpO1xyXG4gICAgfVxyXG4gICAgaGFzTm9kZShub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZU1ldGFNYXAuaGFzKG5vZGUpO1xyXG4gICAgfVxyXG4gICAgYWRkKG4sIG1ldGEpIHtcclxuICAgICAgICBjb25zdCBpZCA9IG1ldGEuaWQ7XHJcbiAgICAgICAgdGhpcy5pZE5vZGVNYXAuc2V0KGlkLCBuKTtcclxuICAgICAgICB0aGlzLm5vZGVNZXRhTWFwLnNldChuLCBtZXRhKTtcclxuICAgIH1cclxuICAgIHJlcGxhY2UoaWQsIG4pIHtcclxuICAgICAgICBjb25zdCBvbGROb2RlID0gdGhpcy5nZXROb2RlKGlkKTtcclxuICAgICAgICBpZiAob2xkTm9kZSkge1xyXG4gICAgICAgICAgICBjb25zdCBtZXRhID0gdGhpcy5ub2RlTWV0YU1hcC5nZXQob2xkTm9kZSk7XHJcbiAgICAgICAgICAgIGlmIChtZXRhKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlTWV0YU1hcC5zZXQobiwgbWV0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaWROb2RlTWFwLnNldChpZCwgbik7XHJcbiAgICB9XHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLmlkTm9kZU1hcCA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLm5vZGVNZXRhTWFwID0gbmV3IFdlYWtNYXAoKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjcmVhdGVNaXJyb3IoKSB7XHJcbiAgICByZXR1cm4gbmV3IE1pcnJvcigpO1xyXG59XHJcbmZ1bmN0aW9uIG1hc2tJbnB1dFZhbHVlKHsgZWxlbWVudCwgbWFza0lucHV0T3B0aW9ucywgdGFnTmFtZSwgdHlwZSwgdmFsdWUsIG1hc2tJbnB1dEZuLCB9KSB7XHJcbiAgICBsZXQgdGV4dCA9IHZhbHVlIHx8ICcnO1xyXG4gICAgY29uc3QgYWN0dWFsVHlwZSA9IHR5cGUgJiYgdG9Mb3dlckNhc2UodHlwZSk7XHJcbiAgICBpZiAobWFza0lucHV0T3B0aW9uc1t0YWdOYW1lLnRvTG93ZXJDYXNlKCldIHx8XHJcbiAgICAgICAgKGFjdHVhbFR5cGUgJiYgbWFza0lucHV0T3B0aW9uc1thY3R1YWxUeXBlXSkpIHtcclxuICAgICAgICBpZiAobWFza0lucHV0Rm4pIHtcclxuICAgICAgICAgICAgdGV4dCA9IG1hc2tJbnB1dEZuKHRleHQsIGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGV4dCA9ICcqJy5yZXBlYXQodGV4dC5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0ZXh0O1xyXG59XHJcbmZ1bmN0aW9uIHRvTG93ZXJDYXNlKHN0cikge1xyXG4gICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpO1xyXG59XHJcbmNvbnN0IE9SSUdJTkFMX0FUVFJJQlVURV9OQU1FID0gJ19fcnJ3ZWJfb3JpZ2luYWxfXyc7XHJcbmZ1bmN0aW9uIGlzMkRDYW52YXNCbGFuayhjYW52YXMpIHtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgaWYgKCFjdHgpXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICBjb25zdCBjaHVua1NpemUgPSA1MDtcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgY2FudmFzLndpZHRoOyB4ICs9IGNodW5rU2l6ZSkge1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgY2FudmFzLmhlaWdodDsgeSArPSBjaHVua1NpemUpIHtcclxuICAgICAgICAgICAgY29uc3QgZ2V0SW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YTtcclxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxHZXRJbWFnZURhdGEgPSBPUklHSU5BTF9BVFRSSUJVVEVfTkFNRSBpbiBnZXRJbWFnZURhdGFcclxuICAgICAgICAgICAgICAgID8gZ2V0SW1hZ2VEYXRhW09SSUdJTkFMX0FUVFJJQlVURV9OQU1FXVxyXG4gICAgICAgICAgICAgICAgOiBnZXRJbWFnZURhdGE7XHJcbiAgICAgICAgICAgIGNvbnN0IHBpeGVsQnVmZmVyID0gbmV3IFVpbnQzMkFycmF5KG9yaWdpbmFsR2V0SW1hZ2VEYXRhLmNhbGwoY3R4LCB4LCB5LCBNYXRoLm1pbihjaHVua1NpemUsIGNhbnZhcy53aWR0aCAtIHgpLCBNYXRoLm1pbihjaHVua1NpemUsIGNhbnZhcy5oZWlnaHQgLSB5KSkuZGF0YS5idWZmZXIpO1xyXG4gICAgICAgICAgICBpZiAocGl4ZWxCdWZmZXIuc29tZSgocGl4ZWwpID0+IHBpeGVsICE9PSAwKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5mdW5jdGlvbiBpc05vZGVNZXRhRXF1YWwoYSwgYikge1xyXG4gICAgaWYgKCFhIHx8ICFiIHx8IGEudHlwZSAhPT0gYi50eXBlKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGlmIChhLnR5cGUgPT09IE5vZGVUeXBlLkRvY3VtZW50KVxyXG4gICAgICAgIHJldHVybiBhLmNvbXBhdE1vZGUgPT09IGIuY29tcGF0TW9kZTtcclxuICAgIGVsc2UgaWYgKGEudHlwZSA9PT0gTm9kZVR5cGUuRG9jdW1lbnRUeXBlKVxyXG4gICAgICAgIHJldHVybiAoYS5uYW1lID09PSBiLm5hbWUgJiZcclxuICAgICAgICAgICAgYS5wdWJsaWNJZCA9PT0gYi5wdWJsaWNJZCAmJlxyXG4gICAgICAgICAgICBhLnN5c3RlbUlkID09PSBiLnN5c3RlbUlkKTtcclxuICAgIGVsc2UgaWYgKGEudHlwZSA9PT0gTm9kZVR5cGUuQ29tbWVudCB8fFxyXG4gICAgICAgIGEudHlwZSA9PT0gTm9kZVR5cGUuVGV4dCB8fFxyXG4gICAgICAgIGEudHlwZSA9PT0gTm9kZVR5cGUuQ0RBVEEpXHJcbiAgICAgICAgcmV0dXJuIGEudGV4dENvbnRlbnQgPT09IGIudGV4dENvbnRlbnQ7XHJcbiAgICBlbHNlIGlmIChhLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQpXHJcbiAgICAgICAgcmV0dXJuIChhLnRhZ05hbWUgPT09IGIudGFnTmFtZSAmJlxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShhLmF0dHJpYnV0ZXMpID09PVxyXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoYi5hdHRyaWJ1dGVzKSAmJlxyXG4gICAgICAgICAgICBhLmlzU1ZHID09PSBiLmlzU1ZHICYmXHJcbiAgICAgICAgICAgIGEubmVlZEJsb2NrID09PSBiLm5lZWRCbG9jayk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZnVuY3Rpb24gZ2V0SW5wdXRUeXBlKGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHR5cGUgPSBlbGVtZW50LnR5cGU7XHJcbiAgICByZXR1cm4gZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcnItaXMtcGFzc3dvcmQnKVxyXG4gICAgICAgID8gJ3Bhc3N3b3JkJ1xyXG4gICAgICAgIDogdHlwZVxyXG4gICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICB0b0xvd2VyQ2FzZSh0eXBlKVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbn1cclxuZnVuY3Rpb24gZXh0cmFjdEZpbGVFeHRlbnNpb24ocGF0aCwgYmFzZVVSTCkge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgbGV0IHVybDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdXJsID0gbmV3IFVSTChwYXRoLCBiYXNlVVJMICE9PSBudWxsICYmIGJhc2VVUkwgIT09IHZvaWQgMCA/IGJhc2VVUkwgOiB3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZWdleCA9IC9cXC4oWzAtOWEtel0rKSg/OiQpL2k7XHJcbiAgICBjb25zdCBtYXRjaCA9IHVybC5wYXRobmFtZS5tYXRjaChyZWdleCk7XHJcbiAgICByZXR1cm4gKF9hID0gbWF0Y2ggPT09IG51bGwgfHwgbWF0Y2ggPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1hdGNoWzFdKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBudWxsO1xyXG59XG5cbmxldCBfaWQgPSAxO1xyXG5jb25zdCB0YWdOYW1lUmVnZXggPSBuZXcgUmVnRXhwKCdbXmEtejAtOS1fOl0nKTtcclxuY29uc3QgSUdOT1JFRF9OT0RFID0gLTI7XHJcbmZ1bmN0aW9uIGdlbklkKCkge1xyXG4gICAgcmV0dXJuIF9pZCsrO1xyXG59XHJcbmZ1bmN0aW9uIGdldFZhbGlkVGFnTmFtZShlbGVtZW50KSB7XHJcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiAnZm9ybSc7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwcm9jZXNzZWRUYWdOYW1lID0gdG9Mb3dlckNhc2UoZWxlbWVudC50YWdOYW1lKTtcclxuICAgIGlmICh0YWdOYW1lUmVnZXgudGVzdChwcm9jZXNzZWRUYWdOYW1lKSkge1xyXG4gICAgICAgIHJldHVybiAnZGl2JztcclxuICAgIH1cclxuICAgIHJldHVybiBwcm9jZXNzZWRUYWdOYW1lO1xyXG59XHJcbmZ1bmN0aW9uIGV4dHJhY3RPcmlnaW4odXJsKSB7XHJcbiAgICBsZXQgb3JpZ2luID0gJyc7XHJcbiAgICBpZiAodXJsLmluZGV4T2YoJy8vJykgPiAtMSkge1xyXG4gICAgICAgIG9yaWdpbiA9IHVybC5zcGxpdCgnLycpLnNsaWNlKDAsIDMpLmpvaW4oJy8nKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIG9yaWdpbiA9IHVybC5zcGxpdCgnLycpWzBdO1xyXG4gICAgfVxyXG4gICAgb3JpZ2luID0gb3JpZ2luLnNwbGl0KCc/JylbMF07XHJcbiAgICByZXR1cm4gb3JpZ2luO1xyXG59XHJcbmxldCBjYW52YXNTZXJ2aWNlO1xyXG5sZXQgY2FudmFzQ3R4O1xyXG5jb25zdCBVUkxfSU5fQ1NTX1JFRiA9IC91cmxcXCgoPzooJykoW14nXSopJ3woXCIpKC4qPylcInwoW14pXSopKVxcKS9nbTtcclxuY29uc3QgVVJMX1BST1RPQ09MX01BVENIID0gL14oPzpbYS16K10rOik/XFwvXFwvL2k7XHJcbmNvbnN0IFVSTF9XV1dfTUFUQ0ggPSAvXnd3d1xcLi4qL2k7XHJcbmNvbnN0IERBVEFfVVJJID0gL14oZGF0YTopKFteLF0qKSwoLiopL2k7XHJcbmZ1bmN0aW9uIGFic29sdXRlVG9TdHlsZXNoZWV0KGNzc1RleHQsIGhyZWYpIHtcclxuICAgIHJldHVybiAoY3NzVGV4dCB8fCAnJykucmVwbGFjZShVUkxfSU5fQ1NTX1JFRiwgKG9yaWdpbiwgcXVvdGUxLCBwYXRoMSwgcXVvdGUyLCBwYXRoMiwgcGF0aDMpID0+IHtcclxuICAgICAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGgxIHx8IHBhdGgyIHx8IHBhdGgzO1xyXG4gICAgICAgIGNvbnN0IG1heWJlUXVvdGUgPSBxdW90ZTEgfHwgcXVvdGUyIHx8ICcnO1xyXG4gICAgICAgIGlmICghZmlsZVBhdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFVSTF9QUk9UT0NPTF9NQVRDSC50ZXN0KGZpbGVQYXRoKSB8fCBVUkxfV1dXX01BVENILnRlc3QoZmlsZVBhdGgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgdXJsKCR7bWF5YmVRdW90ZX0ke2ZpbGVQYXRofSR7bWF5YmVRdW90ZX0pYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKERBVEFfVVJJLnRlc3QoZmlsZVBhdGgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgdXJsKCR7bWF5YmVRdW90ZX0ke2ZpbGVQYXRofSR7bWF5YmVRdW90ZX0pYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpbGVQYXRoWzBdID09PSAnLycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGB1cmwoJHttYXliZVF1b3RlfSR7ZXh0cmFjdE9yaWdpbihocmVmKSArIGZpbGVQYXRofSR7bWF5YmVRdW90ZX0pYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3RhY2sgPSBocmVmLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgY29uc3QgcGFydHMgPSBmaWxlUGF0aC5zcGxpdCgnLycpO1xyXG4gICAgICAgIHN0YWNrLnBvcCgpO1xyXG4gICAgICAgIGZvciAoY29uc3QgcGFydCBvZiBwYXJ0cykge1xyXG4gICAgICAgICAgICBpZiAocGFydCA9PT0gJy4nKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChwYXJ0ID09PSAnLi4nKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gocGFydCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGB1cmwoJHttYXliZVF1b3RlfSR7c3RhY2suam9pbignLycpfSR7bWF5YmVRdW90ZX0pYDtcclxuICAgIH0pO1xyXG59XHJcbmNvbnN0IFNSQ1NFVF9OT1RfU1BBQ0VTID0gL15bXiBcXHRcXG5cXHJcXHUwMDBjXSsvO1xyXG5jb25zdCBTUkNTRVRfQ09NTUFTX09SX1NQQUNFUyA9IC9eWywgXFx0XFxuXFxyXFx1MDAwY10rLztcclxuZnVuY3Rpb24gZ2V0QWJzb2x1dGVTcmNzZXRTdHJpbmcoZG9jLCBhdHRyaWJ1dGVWYWx1ZSkge1xyXG4gICAgaWYgKGF0dHJpYnV0ZVZhbHVlLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XHJcbiAgICB9XHJcbiAgICBsZXQgcG9zID0gMDtcclxuICAgIGZ1bmN0aW9uIGNvbGxlY3RDaGFyYWN0ZXJzKHJlZ0V4KSB7XHJcbiAgICAgICAgbGV0IGNoYXJzO1xyXG4gICAgICAgIGNvbnN0IG1hdGNoID0gcmVnRXguZXhlYyhhdHRyaWJ1dGVWYWx1ZS5zdWJzdHJpbmcocG9zKSk7XHJcbiAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgIGNoYXJzID0gbWF0Y2hbMF07XHJcbiAgICAgICAgICAgIHBvcyArPSBjaGFycy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGFycztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb3V0cHV0ID0gW107XHJcbiAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgIGNvbGxlY3RDaGFyYWN0ZXJzKFNSQ1NFVF9DT01NQVNfT1JfU1BBQ0VTKTtcclxuICAgICAgICBpZiAocG9zID49IGF0dHJpYnV0ZVZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHVybCA9IGNvbGxlY3RDaGFyYWN0ZXJzKFNSQ1NFVF9OT1RfU1BBQ0VTKTtcclxuICAgICAgICBpZiAodXJsLnNsaWNlKC0xKSA9PT0gJywnKSB7XHJcbiAgICAgICAgICAgIHVybCA9IGFic29sdXRlVG9Eb2MoZG9jLCB1cmwuc3Vic3RyaW5nKDAsIHVybC5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgICAgIG91dHB1dC5wdXNoKHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRvcnNTdHIgPSAnJztcclxuICAgICAgICAgICAgdXJsID0gYWJzb2x1dGVUb0RvYyhkb2MsIHVybCk7XHJcbiAgICAgICAgICAgIGxldCBpblBhcmVucyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGF0dHJpYnV0ZVZhbHVlLmNoYXJBdChwb3MpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGMgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goKHVybCArIGRlc2NyaXB0b3JzU3RyKS50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWluUGFyZW5zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgPT09ICcsJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2goKHVybCArIGRlc2NyaXB0b3JzU3RyKS50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYyA9PT0gJygnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluUGFyZW5zID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYyA9PT0gJyknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluUGFyZW5zID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvcnNTdHIgKz0gYztcclxuICAgICAgICAgICAgICAgIHBvcyArPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dHB1dC5qb2luKCcsICcpO1xyXG59XHJcbmZ1bmN0aW9uIGFic29sdXRlVG9Eb2MoZG9jLCBhdHRyaWJ1dGVWYWx1ZSkge1xyXG4gICAgaWYgKCFhdHRyaWJ1dGVWYWx1ZSB8fCBhdHRyaWJ1dGVWYWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYSA9IGRvYy5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBhLmhyZWYgPSBhdHRyaWJ1dGVWYWx1ZTtcclxuICAgIHJldHVybiBhLmhyZWY7XHJcbn1cclxuZnVuY3Rpb24gaXNTVkdFbGVtZW50KGVsKSB7XHJcbiAgICByZXR1cm4gQm9vbGVhbihlbC50YWdOYW1lID09PSAnc3ZnJyB8fCBlbC5vd25lclNWR0VsZW1lbnQpO1xyXG59XHJcbmZ1bmN0aW9uIGdldEhyZWYoKSB7XHJcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgYS5ocmVmID0gJyc7XHJcbiAgICByZXR1cm4gYS5ocmVmO1xyXG59XHJcbmZ1bmN0aW9uIHRyYW5zZm9ybUF0dHJpYnV0ZShkb2MsIHRhZ05hbWUsIG5hbWUsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgaWYgKG5hbWUgPT09ICdzcmMnIHx8XHJcbiAgICAgICAgKG5hbWUgPT09ICdocmVmJyAmJiAhKHRhZ05hbWUgPT09ICd1c2UnICYmIHZhbHVlWzBdID09PSAnIycpKSkge1xyXG4gICAgICAgIHJldHVybiBhYnNvbHV0ZVRvRG9jKGRvYywgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobmFtZSA9PT0gJ3hsaW5rOmhyZWYnICYmIHZhbHVlWzBdICE9PSAnIycpIHtcclxuICAgICAgICByZXR1cm4gYWJzb2x1dGVUb0RvYyhkb2MsIHZhbHVlKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG5hbWUgPT09ICdiYWNrZ3JvdW5kJyAmJlxyXG4gICAgICAgICh0YWdOYW1lID09PSAndGFibGUnIHx8IHRhZ05hbWUgPT09ICd0ZCcgfHwgdGFnTmFtZSA9PT0gJ3RoJykpIHtcclxuICAgICAgICByZXR1cm4gYWJzb2x1dGVUb0RvYyhkb2MsIHZhbHVlKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG5hbWUgPT09ICdzcmNzZXQnKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldEFic29sdXRlU3Jjc2V0U3RyaW5nKGRvYywgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobmFtZSA9PT0gJ3N0eWxlJykge1xyXG4gICAgICAgIHJldHVybiBhYnNvbHV0ZVRvU3R5bGVzaGVldCh2YWx1ZSwgZ2V0SHJlZigpKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRhZ05hbWUgPT09ICdvYmplY3QnICYmIG5hbWUgPT09ICdkYXRhJykge1xyXG4gICAgICAgIHJldHVybiBhYnNvbHV0ZVRvRG9jKGRvYywgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbmZ1bmN0aW9uIGlnbm9yZUF0dHJpYnV0ZSh0YWdOYW1lLCBuYW1lLCBfdmFsdWUpIHtcclxuICAgIHJldHVybiAodGFnTmFtZSA9PT0gJ3ZpZGVvJyB8fCB0YWdOYW1lID09PSAnYXVkaW8nKSAmJiBuYW1lID09PSAnYXV0b3BsYXknO1xyXG59XHJcbmZ1bmN0aW9uIF9pc0Jsb2NrZWRFbGVtZW50KGVsZW1lbnQsIGJsb2NrQ2xhc3MsIGJsb2NrU2VsZWN0b3IpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBibG9ja0NsYXNzID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoYmxvY2tDbGFzcykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBlSW5kZXggPSBlbGVtZW50LmNsYXNzTGlzdC5sZW5ndGg7IGVJbmRleC0tOykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc0xpc3RbZUluZGV4XTtcclxuICAgICAgICAgICAgICAgIGlmIChibG9ja0NsYXNzLnRlc3QoY2xhc3NOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChibG9ja1NlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50Lm1hdGNoZXMoYmxvY2tTZWxlY3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5mdW5jdGlvbiBjbGFzc01hdGNoZXNSZWdleChub2RlLCByZWdleCwgY2hlY2tBbmNlc3RvcnMpIHtcclxuICAgIGlmICghbm9kZSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gbm9kZS5FTEVNRU5UX05PREUpIHtcclxuICAgICAgICBpZiAoIWNoZWNrQW5jZXN0b3JzKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzTWF0Y2hlc1JlZ2V4KG5vZGUucGFyZW50Tm9kZSwgcmVnZXgsIGNoZWNrQW5jZXN0b3JzKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGVJbmRleCA9IG5vZGUuY2xhc3NMaXN0Lmxlbmd0aDsgZUluZGV4LS07KSB7XHJcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gbm9kZS5jbGFzc0xpc3RbZUluZGV4XTtcclxuICAgICAgICBpZiAocmVnZXgudGVzdChjbGFzc05hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghY2hlY2tBbmNlc3RvcnMpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIGNsYXNzTWF0Y2hlc1JlZ2V4KG5vZGUucGFyZW50Tm9kZSwgcmVnZXgsIGNoZWNrQW5jZXN0b3JzKTtcclxufVxyXG5mdW5jdGlvbiBuZWVkTWFza2luZ1RleHQobm9kZSwgbWFza1RleHRDbGFzcywgbWFza1RleHRTZWxlY3RvciwgY2hlY2tBbmNlc3RvcnMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSBub2RlLm5vZGVUeXBlID09PSBub2RlLkVMRU1FTlRfTk9ERVxyXG4gICAgICAgICAgICA/IG5vZGVcclxuICAgICAgICAgICAgOiBub2RlLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKGVsID09PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtYXNrVGV4dENsYXNzID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tBbmNlc3RvcnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbC5jbG9zZXN0KGAuJHttYXNrVGV4dENsYXNzfWApKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhtYXNrVGV4dENsYXNzKSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGNsYXNzTWF0Y2hlc1JlZ2V4KGVsLCBtYXNrVGV4dENsYXNzLCBjaGVja0FuY2VzdG9ycykpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1hc2tUZXh0U2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgaWYgKGNoZWNrQW5jZXN0b3JzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwuY2xvc2VzdChtYXNrVGV4dFNlbGVjdG9yKSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbC5tYXRjaGVzKG1hc2tUZXh0U2VsZWN0b3IpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5mdW5jdGlvbiBvbmNlSWZyYW1lTG9hZGVkKGlmcmFtZUVsLCBsaXN0ZW5lciwgaWZyYW1lTG9hZFRpbWVvdXQpIHtcclxuICAgIGNvbnN0IHdpbiA9IGlmcmFtZUVsLmNvbnRlbnRXaW5kb3c7XHJcbiAgICBpZiAoIXdpbikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBmaXJlZCA9IGZhbHNlO1xyXG4gICAgbGV0IHJlYWR5U3RhdGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJlYWR5U3RhdGUgPSB3aW4uZG9jdW1lbnQucmVhZHlTdGF0ZTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChyZWFkeVN0YXRlICE9PSAnY29tcGxldGUnKSB7XHJcbiAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFmaXJlZCkge1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXIoKTtcclxuICAgICAgICAgICAgICAgIGZpcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGlmcmFtZUxvYWRUaW1lb3V0KTtcclxuICAgICAgICBpZnJhbWVFbC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgICBmaXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYmxhbmtVcmwgPSAnYWJvdXQ6YmxhbmsnO1xyXG4gICAgaWYgKHdpbi5sb2NhdGlvbi5ocmVmICE9PSBibGFua1VybCB8fFxyXG4gICAgICAgIGlmcmFtZUVsLnNyYyA9PT0gYmxhbmtVcmwgfHxcclxuICAgICAgICBpZnJhbWVFbC5zcmMgPT09ICcnKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChsaXN0ZW5lciwgMCk7XHJcbiAgICAgICAgcmV0dXJuIGlmcmFtZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBsaXN0ZW5lcik7XHJcbiAgICB9XHJcbiAgICBpZnJhbWVFbC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgbGlzdGVuZXIpO1xyXG59XHJcbmZ1bmN0aW9uIG9uY2VTdHlsZXNoZWV0TG9hZGVkKGxpbmssIGxpc3RlbmVyLCBzdHlsZVNoZWV0TG9hZFRpbWVvdXQpIHtcclxuICAgIGxldCBmaXJlZCA9IGZhbHNlO1xyXG4gICAgbGV0IHN0eWxlU2hlZXRMb2FkZWQ7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHN0eWxlU2hlZXRMb2FkZWQgPSBsaW5rLnNoZWV0O1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHN0eWxlU2hlZXRMb2FkZWQpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWZpcmVkKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyKCk7XHJcbiAgICAgICAgICAgIGZpcmVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9LCBzdHlsZVNoZWV0TG9hZFRpbWVvdXQpO1xyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgZmlyZWQgPSB0cnVlO1xyXG4gICAgICAgIGxpc3RlbmVyKCk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBzZXJpYWxpemVOb2RlKG4sIG9wdGlvbnMpIHtcclxuICAgIGNvbnN0IHsgZG9jLCBtaXJyb3IsIGJsb2NrQ2xhc3MsIGJsb2NrU2VsZWN0b3IsIG5lZWRzTWFzaywgaW5saW5lU3R5bGVzaGVldCwgbWFza0lucHV0T3B0aW9ucyA9IHt9LCBtYXNrVGV4dEZuLCBtYXNrSW5wdXRGbiwgZGF0YVVSTE9wdGlvbnMgPSB7fSwgaW5saW5lSW1hZ2VzLCByZWNvcmRDYW52YXMsIGtlZXBJZnJhbWVTcmNGbiwgbmV3bHlBZGRlZEVsZW1lbnQgPSBmYWxzZSwgfSA9IG9wdGlvbnM7XHJcbiAgICBjb25zdCByb290SWQgPSBnZXRSb290SWQoZG9jLCBtaXJyb3IpO1xyXG4gICAgc3dpdGNoIChuLm5vZGVUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBuLkRPQ1VNRU5UX05PREU6XHJcbiAgICAgICAgICAgIGlmIChuLmNvbXBhdE1vZGUgIT09ICdDU1MxQ29tcGF0Jykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBOb2RlVHlwZS5Eb2N1bWVudCxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGVzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICBjb21wYXRNb2RlOiBuLmNvbXBhdE1vZGUsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBOb2RlVHlwZS5Eb2N1bWVudCxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGVzOiBbXSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIG4uRE9DVU1FTlRfVFlQRV9OT0RFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTm9kZVR5cGUuRG9jdW1lbnRUeXBlLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogbi5uYW1lLFxyXG4gICAgICAgICAgICAgICAgcHVibGljSWQ6IG4ucHVibGljSWQsXHJcbiAgICAgICAgICAgICAgICBzeXN0ZW1JZDogbi5zeXN0ZW1JZCxcclxuICAgICAgICAgICAgICAgIHJvb3RJZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIG4uRUxFTUVOVF9OT0RFOlxyXG4gICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplRWxlbWVudE5vZGUobiwge1xyXG4gICAgICAgICAgICAgICAgZG9jLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tDbGFzcyxcclxuICAgICAgICAgICAgICAgIGJsb2NrU2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICBpbmxpbmVTdHlsZXNoZWV0LFxyXG4gICAgICAgICAgICAgICAgbWFza0lucHV0T3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIG1hc2tJbnB1dEZuLFxyXG4gICAgICAgICAgICAgICAgZGF0YVVSTE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBpbmxpbmVJbWFnZXMsXHJcbiAgICAgICAgICAgICAgICByZWNvcmRDYW52YXMsXHJcbiAgICAgICAgICAgICAgICBrZWVwSWZyYW1lU3JjRm4sXHJcbiAgICAgICAgICAgICAgICBuZXdseUFkZGVkRWxlbWVudCxcclxuICAgICAgICAgICAgICAgIHJvb3RJZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY2FzZSBuLlRFWFRfTk9ERTpcclxuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZVRleHROb2RlKG4sIHtcclxuICAgICAgICAgICAgICAgIG5lZWRzTWFzayxcclxuICAgICAgICAgICAgICAgIG1hc2tUZXh0Rm4sXHJcbiAgICAgICAgICAgICAgICByb290SWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNhc2Ugbi5DREFUQV9TRUNUSU9OX05PREU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBOb2RlVHlwZS5DREFUQSxcclxuICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiAnJyxcclxuICAgICAgICAgICAgICAgIHJvb3RJZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIG4uQ09NTUVOVF9OT0RFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTm9kZVR5cGUuQ29tbWVudCxcclxuICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBuLnRleHRDb250ZW50IHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgcm9vdElkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBnZXRSb290SWQoZG9jLCBtaXJyb3IpIHtcclxuICAgIGlmICghbWlycm9yLmhhc05vZGUoZG9jKSlcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgZG9jSWQgPSBtaXJyb3IuZ2V0SWQoZG9jKTtcclxuICAgIHJldHVybiBkb2NJZCA9PT0gMSA/IHVuZGVmaW5lZCA6IGRvY0lkO1xyXG59XHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZVRleHROb2RlKG4sIG9wdGlvbnMpIHtcclxuICAgIHZhciBfYTtcclxuICAgIGNvbnN0IHsgbmVlZHNNYXNrLCBtYXNrVGV4dEZuLCByb290SWQgfSA9IG9wdGlvbnM7XHJcbiAgICBjb25zdCBwYXJlbnRUYWdOYW1lID0gbi5wYXJlbnROb2RlICYmIG4ucGFyZW50Tm9kZS50YWdOYW1lO1xyXG4gICAgbGV0IHRleHRDb250ZW50ID0gbi50ZXh0Q29udGVudDtcclxuICAgIGNvbnN0IGlzU3R5bGUgPSBwYXJlbnRUYWdOYW1lID09PSAnU1RZTEUnID8gdHJ1ZSA6IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGlzU2NyaXB0ID0gcGFyZW50VGFnTmFtZSA9PT0gJ1NDUklQVCcgPyB0cnVlIDogdW5kZWZpbmVkO1xyXG4gICAgaWYgKGlzU3R5bGUgJiYgdGV4dENvbnRlbnQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAobi5uZXh0U2libGluZyB8fCBuLnByZXZpb3VzU2libGluZykge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKChfYSA9IG4ucGFyZW50Tm9kZS5zaGVldCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNzc1J1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0Q29udGVudCA9IHN0cmluZ2lmeVN0eWxlc2hlZXQobi5wYXJlbnROb2RlLnNoZWV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQ2Fubm90IGdldCBDU1Mgc3R5bGVzIGZyb20gdGV4dCdzIHBhcmVudE5vZGUuIEVycm9yOiAke2Vycn1gLCBuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGV4dENvbnRlbnQgPSBhYnNvbHV0ZVRvU3R5bGVzaGVldCh0ZXh0Q29udGVudCwgZ2V0SHJlZigpKTtcclxuICAgIH1cclxuICAgIGlmIChpc1NjcmlwdCkge1xyXG4gICAgICAgIHRleHRDb250ZW50ID0gJ1NDUklQVF9QTEFDRUhPTERFUic7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzU3R5bGUgJiYgIWlzU2NyaXB0ICYmIHRleHRDb250ZW50ICYmIG5lZWRzTWFzaykge1xyXG4gICAgICAgIHRleHRDb250ZW50ID0gbWFza1RleHRGblxyXG4gICAgICAgICAgICA/IG1hc2tUZXh0Rm4odGV4dENvbnRlbnQsIG4ucGFyZW50RWxlbWVudClcclxuICAgICAgICAgICAgOiB0ZXh0Q29udGVudC5yZXBsYWNlKC9bXFxTXS9nLCAnKicpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBOb2RlVHlwZS5UZXh0LFxyXG4gICAgICAgIHRleHRDb250ZW50OiB0ZXh0Q29udGVudCB8fCAnJyxcclxuICAgICAgICBpc1N0eWxlLFxyXG4gICAgICAgIHJvb3RJZCxcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gc2VyaWFsaXplRWxlbWVudE5vZGUobiwgb3B0aW9ucykge1xyXG4gICAgY29uc3QgeyBkb2MsIGJsb2NrQ2xhc3MsIGJsb2NrU2VsZWN0b3IsIGlubGluZVN0eWxlc2hlZXQsIG1hc2tJbnB1dE9wdGlvbnMgPSB7fSwgbWFza0lucHV0Rm4sIGRhdGFVUkxPcHRpb25zID0ge30sIGlubGluZUltYWdlcywgcmVjb3JkQ2FudmFzLCBrZWVwSWZyYW1lU3JjRm4sIG5ld2x5QWRkZWRFbGVtZW50ID0gZmFsc2UsIHJvb3RJZCwgfSA9IG9wdGlvbnM7XHJcbiAgICBjb25zdCBuZWVkQmxvY2sgPSBfaXNCbG9ja2VkRWxlbWVudChuLCBibG9ja0NsYXNzLCBibG9ja1NlbGVjdG9yKTtcclxuICAgIGNvbnN0IHRhZ05hbWUgPSBnZXRWYWxpZFRhZ05hbWUobik7XHJcbiAgICBsZXQgYXR0cmlidXRlcyA9IHt9O1xyXG4gICAgY29uc3QgbGVuID0gbi5hdHRyaWJ1dGVzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBjb25zdCBhdHRyID0gbi5hdHRyaWJ1dGVzW2ldO1xyXG4gICAgICAgIGlmICghaWdub3JlQXR0cmlidXRlKHRhZ05hbWUsIGF0dHIubmFtZSwgYXR0ci52YWx1ZSkpIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlc1thdHRyLm5hbWVdID0gdHJhbnNmb3JtQXR0cmlidXRlKGRvYywgdGFnTmFtZSwgdG9Mb3dlckNhc2UoYXR0ci5uYW1lKSwgYXR0ci52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRhZ05hbWUgPT09ICdsaW5rJyAmJiBpbmxpbmVTdHlsZXNoZWV0KSB7XHJcbiAgICAgICAgY29uc3Qgc3R5bGVzaGVldCA9IEFycmF5LmZyb20oZG9jLnN0eWxlU2hlZXRzKS5maW5kKChzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzLmhyZWYgPT09IG4uaHJlZjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgY3NzVGV4dCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHN0eWxlc2hlZXQpIHtcclxuICAgICAgICAgICAgY3NzVGV4dCA9IHN0cmluZ2lmeVN0eWxlc2hlZXQoc3R5bGVzaGVldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjc3NUZXh0KSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBhdHRyaWJ1dGVzLnJlbDtcclxuICAgICAgICAgICAgZGVsZXRlIGF0dHJpYnV0ZXMuaHJlZjtcclxuICAgICAgICAgICAgYXR0cmlidXRlcy5fY3NzVGV4dCA9IGFic29sdXRlVG9TdHlsZXNoZWV0KGNzc1RleHQsIHN0eWxlc2hlZXQuaHJlZik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRhZ05hbWUgPT09ICdzdHlsZScgJiZcclxuICAgICAgICBuLnNoZWV0ICYmXHJcbiAgICAgICAgIShuLmlubmVyVGV4dCB8fCBuLnRleHRDb250ZW50IHx8ICcnKS50cmltKCkubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgY3NzVGV4dCA9IHN0cmluZ2lmeVN0eWxlc2hlZXQobi5zaGVldCk7XHJcbiAgICAgICAgaWYgKGNzc1RleHQpIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlcy5fY3NzVGV4dCA9IGFic29sdXRlVG9TdHlsZXNoZWV0KGNzc1RleHQsIGdldEhyZWYoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRhZ05hbWUgPT09ICdpbnB1dCcgfHwgdGFnTmFtZSA9PT0gJ3RleHRhcmVhJyB8fCB0YWdOYW1lID09PSAnc2VsZWN0Jykge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gbi52YWx1ZTtcclxuICAgICAgICBjb25zdCBjaGVja2VkID0gbi5jaGVja2VkO1xyXG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLnR5cGUgIT09ICdyYWRpbycgJiZcclxuICAgICAgICAgICAgYXR0cmlidXRlcy50eXBlICE9PSAnY2hlY2tib3gnICYmXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMudHlwZSAhPT0gJ3N1Ym1pdCcgJiZcclxuICAgICAgICAgICAgYXR0cmlidXRlcy50eXBlICE9PSAnYnV0dG9uJyAmJlxyXG4gICAgICAgICAgICB2YWx1ZSkge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLnZhbHVlID0gbWFza0lucHV0VmFsdWUoe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogbixcclxuICAgICAgICAgICAgICAgIHR5cGU6IGdldElucHV0VHlwZShuKSxcclxuICAgICAgICAgICAgICAgIHRhZ05hbWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIG1hc2tJbnB1dE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBtYXNrSW5wdXRGbixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlcy5jaGVja2VkID0gY2hlY2tlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGFnTmFtZSA9PT0gJ29wdGlvbicpIHtcclxuICAgICAgICBpZiAobi5zZWxlY3RlZCAmJiAhbWFza0lucHV0T3B0aW9uc1snc2VsZWN0J10pIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlcy5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkZWxldGUgYXR0cmlidXRlcy5zZWxlY3RlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGFnTmFtZSA9PT0gJ2NhbnZhcycgJiYgcmVjb3JkQ2FudmFzKSB7XHJcbiAgICAgICAgaWYgKG4uX19jb250ZXh0ID09PSAnMmQnKSB7XHJcbiAgICAgICAgICAgIGlmICghaXMyRENhbnZhc0JsYW5rKG4pKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnJyX2RhdGFVUkwgPSBuLnRvRGF0YVVSTChkYXRhVVJMT3B0aW9ucy50eXBlLCBkYXRhVVJMT3B0aW9ucy5xdWFsaXR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghKCdfX2NvbnRleHQnIGluIG4pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhc0RhdGFVUkwgPSBuLnRvRGF0YVVSTChkYXRhVVJMT3B0aW9ucy50eXBlLCBkYXRhVVJMT3B0aW9ucy5xdWFsaXR5KTtcclxuICAgICAgICAgICAgY29uc3QgYmxhbmtDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICAgICAgYmxhbmtDYW52YXMud2lkdGggPSBuLndpZHRoO1xyXG4gICAgICAgICAgICBibGFua0NhbnZhcy5oZWlnaHQgPSBuLmhlaWdodDtcclxuICAgICAgICAgICAgY29uc3QgYmxhbmtDYW52YXNEYXRhVVJMID0gYmxhbmtDYW52YXMudG9EYXRhVVJMKGRhdGFVUkxPcHRpb25zLnR5cGUsIGRhdGFVUkxPcHRpb25zLnF1YWxpdHkpO1xyXG4gICAgICAgICAgICBpZiAoY2FudmFzRGF0YVVSTCAhPT0gYmxhbmtDYW52YXNEYXRhVVJMKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnJyX2RhdGFVUkwgPSBjYW52YXNEYXRhVVJMO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRhZ05hbWUgPT09ICdpbWcnICYmIGlubGluZUltYWdlcykge1xyXG4gICAgICAgIGlmICghY2FudmFzU2VydmljZSkge1xyXG4gICAgICAgICAgICBjYW52YXNTZXJ2aWNlID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgICAgICBjYW52YXNDdHggPSBjYW52YXNTZXJ2aWNlLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGltYWdlID0gbjtcclxuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGltYWdlLmNyb3NzT3JpZ2luO1xyXG4gICAgICAgIGltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XHJcbiAgICAgICAgY29uc3QgcmVjb3JkSW5saW5lSW1hZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZWNvcmRJbmxpbmVJbWFnZSk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjYW52YXNTZXJ2aWNlLndpZHRoID0gaW1hZ2UubmF0dXJhbFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgY2FudmFzU2VydmljZS5oZWlnaHQgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgY2FudmFzQ3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnJyX2RhdGFVUkwgPSBjYW52YXNTZXJ2aWNlLnRvRGF0YVVSTChkYXRhVVJMT3B0aW9ucy50eXBlLCBkYXRhVVJMT3B0aW9ucy5xdWFsaXR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYENhbm5vdCBpbmxpbmUgaW1nIHNyYz0ke2ltYWdlLmN1cnJlbnRTcmN9ISBFcnJvcjogJHtlcnJ9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2xkVmFsdWVcclxuICAgICAgICAgICAgICAgID8gKGF0dHJpYnV0ZXMuY3Jvc3NPcmlnaW4gPSBvbGRWYWx1ZSlcclxuICAgICAgICAgICAgICAgIDogaW1hZ2UucmVtb3ZlQXR0cmlidXRlKCdjcm9zc29yaWdpbicpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGltYWdlLmNvbXBsZXRlICYmIGltYWdlLm5hdHVyYWxXaWR0aCAhPT0gMClcclxuICAgICAgICAgICAgcmVjb3JkSW5saW5lSW1hZ2UoKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZWNvcmRJbmxpbmVJbWFnZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGFnTmFtZSA9PT0gJ2F1ZGlvJyB8fCB0YWdOYW1lID09PSAndmlkZW8nKSB7XHJcbiAgICAgICAgY29uc3QgbWVkaWFBdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcclxuICAgICAgICBtZWRpYUF0dHJpYnV0ZXMucnJfbWVkaWFTdGF0ZSA9IG4ucGF1c2VkXHJcbiAgICAgICAgICAgID8gJ3BhdXNlZCdcclxuICAgICAgICAgICAgOiAncGxheWVkJztcclxuICAgICAgICBtZWRpYUF0dHJpYnV0ZXMucnJfbWVkaWFDdXJyZW50VGltZSA9IG4uY3VycmVudFRpbWU7XHJcbiAgICAgICAgbWVkaWFBdHRyaWJ1dGVzLnJyX21lZGlhUGxheWJhY2tSYXRlID0gbi5wbGF5YmFja1JhdGU7XHJcbiAgICAgICAgbWVkaWFBdHRyaWJ1dGVzLnJyX21lZGlhTXV0ZWQgPSBuLm11dGVkO1xyXG4gICAgICAgIG1lZGlhQXR0cmlidXRlcy5ycl9tZWRpYUxvb3AgPSBuLmxvb3A7XHJcbiAgICAgICAgbWVkaWFBdHRyaWJ1dGVzLnJyX21lZGlhVm9sdW1lID0gbi52b2x1bWU7XHJcbiAgICB9XHJcbiAgICBpZiAoIW5ld2x5QWRkZWRFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKG4uc2Nyb2xsTGVmdCkge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLnJyX3Njcm9sbExlZnQgPSBuLnNjcm9sbExlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuLnNjcm9sbFRvcCkge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLnJyX3Njcm9sbFRvcCA9IG4uc2Nyb2xsVG9wO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChuZWVkQmxvY2spIHtcclxuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IG4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgYXR0cmlidXRlcyA9IHtcclxuICAgICAgICAgICAgY2xhc3M6IGF0dHJpYnV0ZXMuY2xhc3MsXHJcbiAgICAgICAgICAgIHJyX3dpZHRoOiBgJHt3aWR0aH1weGAsXHJcbiAgICAgICAgICAgIHJyX2hlaWdodDogYCR7aGVpZ2h0fXB4YCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgaWYgKHRhZ05hbWUgPT09ICdpZnJhbWUnICYmICFrZWVwSWZyYW1lU3JjRm4oYXR0cmlidXRlcy5zcmMpKSB7XHJcbiAgICAgICAgaWYgKCFuLmNvbnRlbnREb2N1bWVudCkge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLnJyX3NyYyA9IGF0dHJpYnV0ZXMuc3JjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxldGUgYXR0cmlidXRlcy5zcmM7XHJcbiAgICB9XHJcbiAgICBsZXQgaXNDdXN0b21FbGVtZW50O1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAoY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKVxyXG4gICAgICAgICAgICBpc0N1c3RvbUVsZW1lbnQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogTm9kZVR5cGUuRWxlbWVudCxcclxuICAgICAgICB0YWdOYW1lLFxyXG4gICAgICAgIGF0dHJpYnV0ZXMsXHJcbiAgICAgICAgY2hpbGROb2RlczogW10sXHJcbiAgICAgICAgaXNTVkc6IGlzU1ZHRWxlbWVudChuKSB8fCB1bmRlZmluZWQsXHJcbiAgICAgICAgbmVlZEJsb2NrLFxyXG4gICAgICAgIHJvb3RJZCxcclxuICAgICAgICBpc0N1c3RvbTogaXNDdXN0b21FbGVtZW50LFxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBsb3dlcklmRXhpc3RzKG1heWJlQXR0cikge1xyXG4gICAgaWYgKG1heWJlQXR0ciA9PT0gdW5kZWZpbmVkIHx8IG1heWJlQXR0ciA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBtYXliZUF0dHIudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzbGltRE9NRXhjbHVkZWQoc24sIHNsaW1ET01PcHRpb25zKSB7XHJcbiAgICBpZiAoc2xpbURPTU9wdGlvbnMuY29tbWVudCAmJiBzbi50eXBlID09PSBOb2RlVHlwZS5Db21tZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzbi50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKHNsaW1ET01PcHRpb25zLnNjcmlwdCAmJlxyXG4gICAgICAgICAgICAoc24udGFnTmFtZSA9PT0gJ3NjcmlwdCcgfHxcclxuICAgICAgICAgICAgICAgIChzbi50YWdOYW1lID09PSAnbGluaycgJiZcclxuICAgICAgICAgICAgICAgICAgICAoc24uYXR0cmlidXRlcy5yZWwgPT09ICdwcmVsb2FkJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbi5hdHRyaWJ1dGVzLnJlbCA9PT0gJ21vZHVsZXByZWxvYWQnKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHNuLmF0dHJpYnV0ZXMuYXMgPT09ICdzY3JpcHQnKSB8fFxyXG4gICAgICAgICAgICAgICAgKHNuLnRhZ05hbWUgPT09ICdsaW5rJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHNuLmF0dHJpYnV0ZXMucmVsID09PSAncHJlZmV0Y2gnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHNuLmF0dHJpYnV0ZXMuaHJlZiA9PT0gJ3N0cmluZycgJiZcclxuICAgICAgICAgICAgICAgICAgICBleHRyYWN0RmlsZUV4dGVuc2lvbihzbi5hdHRyaWJ1dGVzLmhyZWYpID09PSAnanMnKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHNsaW1ET01PcHRpb25zLmhlYWRGYXZpY29uICYmXHJcbiAgICAgICAgICAgICgoc24udGFnTmFtZSA9PT0gJ2xpbmsnICYmIHNuLmF0dHJpYnV0ZXMucmVsID09PSAnc2hvcnRjdXQgaWNvbicpIHx8XHJcbiAgICAgICAgICAgICAgICAoc24udGFnTmFtZSA9PT0gJ21ldGEnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKS5tYXRjaCgvXm1zYXBwbGljYXRpb24tdGlsZShpbWFnZXxjb2xvcikkLykgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAnYXBwbGljYXRpb24tbmFtZScgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLnJlbCkgPT09ICdpY29uJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMucmVsKSA9PT0gJ2FwcGxlLXRvdWNoLWljb24nIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5yZWwpID09PSAnc2hvcnRjdXQgaWNvbicpKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHNuLnRhZ05hbWUgPT09ICdtZXRhJykge1xyXG4gICAgICAgICAgICBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZE1ldGFEZXNjS2V5d29yZHMgJiZcclxuICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKS5tYXRjaCgvXmRlc2NyaXB0aW9ufGtleXdvcmRzJC8pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzbGltRE9NT3B0aW9ucy5oZWFkTWV0YVNvY2lhbCAmJlxyXG4gICAgICAgICAgICAgICAgKGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5wcm9wZXJ0eSkubWF0Y2goL14ob2d8dHdpdHRlcnxmYik6LykgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkubWF0Y2goL14ob2d8dHdpdHRlcik6LykgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICdwaW50ZXJlc3QnKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZE1ldGFSb2JvdHMgJiZcclxuICAgICAgICAgICAgICAgIChsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICdyb2JvdHMnIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAnZ29vZ2xlYm90JyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gJ2Jpbmdib3QnKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZE1ldGFIdHRwRXF1aXYgJiZcclxuICAgICAgICAgICAgICAgIHNuLmF0dHJpYnV0ZXNbJ2h0dHAtZXF1aXYnXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzbGltRE9NT3B0aW9ucy5oZWFkTWV0YUF1dGhvcnNoaXAgJiZcclxuICAgICAgICAgICAgICAgIChsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICdhdXRob3InIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAnZ2VuZXJhdG9yJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gJ2ZyYW1ld29yaycgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICdwdWJsaXNoZXInIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAncHJvZ2lkJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5wcm9wZXJ0eSkubWF0Y2goL15hcnRpY2xlOi8pIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLnByb3BlcnR5KS5tYXRjaCgvXnByb2R1Y3Q6LykpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzbGltRE9NT3B0aW9ucy5oZWFkTWV0YVZlcmlmaWNhdGlvbiAmJlxyXG4gICAgICAgICAgICAgICAgKGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gJ2dvb2dsZS1zaXRlLXZlcmlmaWNhdGlvbicgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICd5YW5kZXgtdmVyaWZpY2F0aW9uJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gJ2NzcmYtdG9rZW4nIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAncDpkb21haW5fdmVyaWZ5JyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gJ3ZlcmlmeS12MScgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICd2ZXJpZmljYXRpb24nIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAnc2hvcGlmeS1jaGVja291dC1hcGktdG9rZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZnVuY3Rpb24gc2VyaWFsaXplTm9kZVdpdGhJZChuLCBvcHRpb25zKSB7XHJcbiAgICBjb25zdCB7IGRvYywgbWlycm9yLCBibG9ja0NsYXNzLCBibG9ja1NlbGVjdG9yLCBtYXNrVGV4dENsYXNzLCBtYXNrVGV4dFNlbGVjdG9yLCBza2lwQ2hpbGQgPSBmYWxzZSwgaW5saW5lU3R5bGVzaGVldCA9IHRydWUsIG1hc2tJbnB1dE9wdGlvbnMgPSB7fSwgbWFza1RleHRGbiwgbWFza0lucHV0Rm4sIHNsaW1ET01PcHRpb25zLCBkYXRhVVJMT3B0aW9ucyA9IHt9LCBpbmxpbmVJbWFnZXMgPSBmYWxzZSwgcmVjb3JkQ2FudmFzID0gZmFsc2UsIG9uU2VyaWFsaXplLCBvbklmcmFtZUxvYWQsIGlmcmFtZUxvYWRUaW1lb3V0ID0gNTAwMCwgb25TdHlsZXNoZWV0TG9hZCwgc3R5bGVzaGVldExvYWRUaW1lb3V0ID0gNTAwMCwga2VlcElmcmFtZVNyY0ZuID0gKCkgPT4gZmFsc2UsIG5ld2x5QWRkZWRFbGVtZW50ID0gZmFsc2UsIH0gPSBvcHRpb25zO1xyXG4gICAgbGV0IHsgbmVlZHNNYXNrIH0gPSBvcHRpb25zO1xyXG4gICAgbGV0IHsgcHJlc2VydmVXaGl0ZVNwYWNlID0gdHJ1ZSB9ID0gb3B0aW9ucztcclxuICAgIGlmICghbmVlZHNNYXNrICYmXHJcbiAgICAgICAgbi5jaGlsZE5vZGVzKSB7XHJcbiAgICAgICAgY29uc3QgY2hlY2tBbmNlc3RvcnMgPSBuZWVkc01hc2sgPT09IHVuZGVmaW5lZDtcclxuICAgICAgICBuZWVkc01hc2sgPSBuZWVkTWFza2luZ1RleHQobiwgbWFza1RleHRDbGFzcywgbWFza1RleHRTZWxlY3RvciwgY2hlY2tBbmNlc3RvcnMpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgX3NlcmlhbGl6ZWROb2RlID0gc2VyaWFsaXplTm9kZShuLCB7XHJcbiAgICAgICAgZG9jLFxyXG4gICAgICAgIG1pcnJvcixcclxuICAgICAgICBibG9ja0NsYXNzLFxyXG4gICAgICAgIGJsb2NrU2VsZWN0b3IsXHJcbiAgICAgICAgbmVlZHNNYXNrLFxyXG4gICAgICAgIGlubGluZVN0eWxlc2hlZXQsXHJcbiAgICAgICAgbWFza0lucHV0T3B0aW9ucyxcclxuICAgICAgICBtYXNrVGV4dEZuLFxyXG4gICAgICAgIG1hc2tJbnB1dEZuLFxyXG4gICAgICAgIGRhdGFVUkxPcHRpb25zLFxyXG4gICAgICAgIGlubGluZUltYWdlcyxcclxuICAgICAgICByZWNvcmRDYW52YXMsXHJcbiAgICAgICAga2VlcElmcmFtZVNyY0ZuLFxyXG4gICAgICAgIG5ld2x5QWRkZWRFbGVtZW50LFxyXG4gICAgfSk7XHJcbiAgICBpZiAoIV9zZXJpYWxpemVkTm9kZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihuLCAnbm90IHNlcmlhbGl6ZWQnKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGxldCBpZDtcclxuICAgIGlmIChtaXJyb3IuaGFzTm9kZShuKSkge1xyXG4gICAgICAgIGlkID0gbWlycm9yLmdldElkKG4pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc2xpbURPTUV4Y2x1ZGVkKF9zZXJpYWxpemVkTm9kZSwgc2xpbURPTU9wdGlvbnMpIHx8XHJcbiAgICAgICAgKCFwcmVzZXJ2ZVdoaXRlU3BhY2UgJiZcclxuICAgICAgICAgICAgX3NlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLlRleHQgJiZcclxuICAgICAgICAgICAgIV9zZXJpYWxpemVkTm9kZS5pc1N0eWxlICYmXHJcbiAgICAgICAgICAgICFfc2VyaWFsaXplZE5vZGUudGV4dENvbnRlbnQucmVwbGFjZSgvXlxccyt8XFxzKyQvZ20sICcnKS5sZW5ndGgpKSB7XHJcbiAgICAgICAgaWQgPSBJR05PUkVEX05PREU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZCA9IGdlbklkKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZXJpYWxpemVkTm9kZSA9IE9iamVjdC5hc3NpZ24oX3NlcmlhbGl6ZWROb2RlLCB7IGlkIH0pO1xyXG4gICAgbWlycm9yLmFkZChuLCBzZXJpYWxpemVkTm9kZSk7XHJcbiAgICBpZiAoaWQgPT09IElHTk9SRURfTk9ERSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKG9uU2VyaWFsaXplKSB7XHJcbiAgICAgICAgb25TZXJpYWxpemUobik7XHJcbiAgICB9XHJcbiAgICBsZXQgcmVjb3JkQ2hpbGQgPSAhc2tpcENoaWxkO1xyXG4gICAgaWYgKHNlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQpIHtcclxuICAgICAgICByZWNvcmRDaGlsZCA9IHJlY29yZENoaWxkICYmICFzZXJpYWxpemVkTm9kZS5uZWVkQmxvY2s7XHJcbiAgICAgICAgZGVsZXRlIHNlcmlhbGl6ZWROb2RlLm5lZWRCbG9jaztcclxuICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gbi5zaGFkb3dSb290O1xyXG4gICAgICAgIGlmIChzaGFkb3dSb290ICYmIGlzTmF0aXZlU2hhZG93RG9tKHNoYWRvd1Jvb3QpKVxyXG4gICAgICAgICAgICBzZXJpYWxpemVkTm9kZS5pc1NoYWRvd0hvc3QgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKChzZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudCB8fFxyXG4gICAgICAgIHNlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQpICYmXHJcbiAgICAgICAgcmVjb3JkQ2hpbGQpIHtcclxuICAgICAgICBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZFdoaXRlc3BhY2UgJiZcclxuICAgICAgICAgICAgc2VyaWFsaXplZE5vZGUudHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCAmJlxyXG4gICAgICAgICAgICBzZXJpYWxpemVkTm9kZS50YWdOYW1lID09PSAnaGVhZCcpIHtcclxuICAgICAgICAgICAgcHJlc2VydmVXaGl0ZVNwYWNlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJ5cGFzc09wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGRvYyxcclxuICAgICAgICAgICAgbWlycm9yLFxyXG4gICAgICAgICAgICBibG9ja0NsYXNzLFxyXG4gICAgICAgICAgICBibG9ja1NlbGVjdG9yLFxyXG4gICAgICAgICAgICBuZWVkc01hc2ssXHJcbiAgICAgICAgICAgIG1hc2tUZXh0Q2xhc3MsXHJcbiAgICAgICAgICAgIG1hc2tUZXh0U2VsZWN0b3IsXHJcbiAgICAgICAgICAgIHNraXBDaGlsZCxcclxuICAgICAgICAgICAgaW5saW5lU3R5bGVzaGVldCxcclxuICAgICAgICAgICAgbWFza0lucHV0T3B0aW9ucyxcclxuICAgICAgICAgICAgbWFza1RleHRGbixcclxuICAgICAgICAgICAgbWFza0lucHV0Rm4sXHJcbiAgICAgICAgICAgIHNsaW1ET01PcHRpb25zLFxyXG4gICAgICAgICAgICBkYXRhVVJMT3B0aW9ucyxcclxuICAgICAgICAgICAgaW5saW5lSW1hZ2VzLFxyXG4gICAgICAgICAgICByZWNvcmRDYW52YXMsXHJcbiAgICAgICAgICAgIHByZXNlcnZlV2hpdGVTcGFjZSxcclxuICAgICAgICAgICAgb25TZXJpYWxpemUsXHJcbiAgICAgICAgICAgIG9uSWZyYW1lTG9hZCxcclxuICAgICAgICAgICAgaWZyYW1lTG9hZFRpbWVvdXQsXHJcbiAgICAgICAgICAgIG9uU3R5bGVzaGVldExvYWQsXHJcbiAgICAgICAgICAgIHN0eWxlc2hlZXRMb2FkVGltZW91dCxcclxuICAgICAgICAgICAga2VlcElmcmFtZVNyY0ZuLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHNlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQgJiZcclxuICAgICAgICAgICAgc2VyaWFsaXplZE5vZGUudGFnTmFtZSA9PT0gJ3RleHRhcmVhJyAmJlxyXG4gICAgICAgICAgICBzZXJpYWxpemVkTm9kZS5hdHRyaWJ1dGVzLnZhbHVlICE9PSB1bmRlZmluZWQpIDtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZE4gb2YgQXJyYXkuZnJvbShuLmNoaWxkTm9kZXMpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZXJpYWxpemVkQ2hpbGROb2RlID0gc2VyaWFsaXplTm9kZVdpdGhJZChjaGlsZE4sIGJ5cGFzc09wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlcmlhbGl6ZWRDaGlsZE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVkTm9kZS5jaGlsZE5vZGVzLnB1c2goc2VyaWFsaXplZENoaWxkTm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzRWxlbWVudChuKSAmJiBuLnNoYWRvd1Jvb3QpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZE4gb2YgQXJyYXkuZnJvbShuLnNoYWRvd1Jvb3QuY2hpbGROb2RlcykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRDaGlsZE5vZGUgPSBzZXJpYWxpemVOb2RlV2l0aElkKGNoaWxkTiwgYnlwYXNzT3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VyaWFsaXplZENoaWxkTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzTmF0aXZlU2hhZG93RG9tKG4uc2hhZG93Um9vdCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNlcmlhbGl6ZWRDaGlsZE5vZGUuaXNTaGFkb3cgPSB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVkTm9kZS5jaGlsZE5vZGVzLnB1c2goc2VyaWFsaXplZENoaWxkTm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobi5wYXJlbnROb2RlICYmXHJcbiAgICAgICAgaXNTaGFkb3dSb290KG4ucGFyZW50Tm9kZSkgJiZcclxuICAgICAgICBpc05hdGl2ZVNoYWRvd0RvbShuLnBhcmVudE5vZGUpKSB7XHJcbiAgICAgICAgc2VyaWFsaXplZE5vZGUuaXNTaGFkb3cgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQgJiZcclxuICAgICAgICBzZXJpYWxpemVkTm9kZS50YWdOYW1lID09PSAnaWZyYW1lJykge1xyXG4gICAgICAgIG9uY2VJZnJhbWVMb2FkZWQobiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpZnJhbWVEb2MgPSBuLmNvbnRlbnREb2N1bWVudDtcclxuICAgICAgICAgICAgaWYgKGlmcmFtZURvYyAmJiBvbklmcmFtZUxvYWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRJZnJhbWVOb2RlID0gc2VyaWFsaXplTm9kZVdpdGhJZChpZnJhbWVEb2MsIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2M6IGlmcmFtZURvYyxcclxuICAgICAgICAgICAgICAgICAgICBtaXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tDbGFzcyxcclxuICAgICAgICAgICAgICAgICAgICBibG9ja1NlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIG5lZWRzTWFzayxcclxuICAgICAgICAgICAgICAgICAgICBtYXNrVGV4dENsYXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tUZXh0U2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgc2tpcENoaWxkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBpbmxpbmVTdHlsZXNoZWV0LFxyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tJbnB1dE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFza1RleHRGbixcclxuICAgICAgICAgICAgICAgICAgICBtYXNrSW5wdXRGbixcclxuICAgICAgICAgICAgICAgICAgICBzbGltRE9NT3B0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhVVJMT3B0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICBpbmxpbmVJbWFnZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkQ2FudmFzLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZXNlcnZlV2hpdGVTcGFjZSxcclxuICAgICAgICAgICAgICAgICAgICBvblNlcmlhbGl6ZSxcclxuICAgICAgICAgICAgICAgICAgICBvbklmcmFtZUxvYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgaWZyYW1lTG9hZFRpbWVvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdHlsZXNoZWV0TG9hZCxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXNoZWV0TG9hZFRpbWVvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAga2VlcElmcmFtZVNyY0ZuLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VyaWFsaXplZElmcmFtZU5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBvbklmcmFtZUxvYWQobiwgc2VyaWFsaXplZElmcmFtZU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgaWZyYW1lTG9hZFRpbWVvdXQpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQgJiZcclxuICAgICAgICBzZXJpYWxpemVkTm9kZS50YWdOYW1lID09PSAnbGluaycgJiZcclxuICAgICAgICB0eXBlb2Ygc2VyaWFsaXplZE5vZGUuYXR0cmlidXRlcy5yZWwgPT09ICdzdHJpbmcnICYmXHJcbiAgICAgICAgKHNlcmlhbGl6ZWROb2RlLmF0dHJpYnV0ZXMucmVsID09PSAnc3R5bGVzaGVldCcgfHxcclxuICAgICAgICAgICAgKHNlcmlhbGl6ZWROb2RlLmF0dHJpYnV0ZXMucmVsID09PSAncHJlbG9hZCcgJiZcclxuICAgICAgICAgICAgICAgIHR5cGVvZiBzZXJpYWxpemVkTm9kZS5hdHRyaWJ1dGVzLmhyZWYgPT09ICdzdHJpbmcnICYmXHJcbiAgICAgICAgICAgICAgICBleHRyYWN0RmlsZUV4dGVuc2lvbihzZXJpYWxpemVkTm9kZS5hdHRyaWJ1dGVzLmhyZWYpID09PSAnY3NzJykpKSB7XHJcbiAgICAgICAgb25jZVN0eWxlc2hlZXRMb2FkZWQobiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob25TdHlsZXNoZWV0TG9hZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXplZExpbmtOb2RlID0gc2VyaWFsaXplTm9kZVdpdGhJZChuLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pcnJvcixcclxuICAgICAgICAgICAgICAgICAgICBibG9ja0NsYXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrU2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgbmVlZHNNYXNrLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tUZXh0Q2xhc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFza1RleHRTZWxlY3RvcixcclxuICAgICAgICAgICAgICAgICAgICBza2lwQ2hpbGQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubGluZVN0eWxlc2hlZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFza0lucHV0T3B0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICBtYXNrVGV4dEZuLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tJbnB1dEZuLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaW1ET01PcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFVUkxPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubGluZUltYWdlcyxcclxuICAgICAgICAgICAgICAgICAgICByZWNvcmRDYW52YXMsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VydmVXaGl0ZVNwYWNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VyaWFsaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uSWZyYW1lTG9hZCxcclxuICAgICAgICAgICAgICAgICAgICBpZnJhbWVMb2FkVGltZW91dCxcclxuICAgICAgICAgICAgICAgICAgICBvblN0eWxlc2hlZXRMb2FkLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc2hlZXRMb2FkVGltZW91dCxcclxuICAgICAgICAgICAgICAgICAgICBrZWVwSWZyYW1lU3JjRm4sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChzZXJpYWxpemVkTGlua05vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBvblN0eWxlc2hlZXRMb2FkKG4sIHNlcmlhbGl6ZWRMaW5rTm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBzdHlsZXNoZWV0TG9hZFRpbWVvdXQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNlcmlhbGl6ZWROb2RlO1xyXG59XHJcbmZ1bmN0aW9uIHNuYXBzaG90KG4sIG9wdGlvbnMpIHtcclxuICAgIGNvbnN0IHsgbWlycm9yID0gbmV3IE1pcnJvcigpLCBibG9ja0NsYXNzID0gJ3JyLWJsb2NrJywgYmxvY2tTZWxlY3RvciA9IG51bGwsIG1hc2tUZXh0Q2xhc3MgPSAncnItbWFzaycsIG1hc2tUZXh0U2VsZWN0b3IgPSBudWxsLCBpbmxpbmVTdHlsZXNoZWV0ID0gdHJ1ZSwgaW5saW5lSW1hZ2VzID0gZmFsc2UsIHJlY29yZENhbnZhcyA9IGZhbHNlLCBtYXNrQWxsSW5wdXRzID0gZmFsc2UsIG1hc2tUZXh0Rm4sIG1hc2tJbnB1dEZuLCBzbGltRE9NID0gZmFsc2UsIGRhdGFVUkxPcHRpb25zLCBwcmVzZXJ2ZVdoaXRlU3BhY2UsIG9uU2VyaWFsaXplLCBvbklmcmFtZUxvYWQsIGlmcmFtZUxvYWRUaW1lb3V0LCBvblN0eWxlc2hlZXRMb2FkLCBzdHlsZXNoZWV0TG9hZFRpbWVvdXQsIGtlZXBJZnJhbWVTcmNGbiA9ICgpID0+IGZhbHNlLCB9ID0gb3B0aW9ucyB8fCB7fTtcclxuICAgIGNvbnN0IG1hc2tJbnB1dE9wdGlvbnMgPSBtYXNrQWxsSW5wdXRzID09PSB0cnVlXHJcbiAgICAgICAgPyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAnZGF0ZXRpbWUtbG9jYWwnOiB0cnVlLFxyXG4gICAgICAgICAgICBlbWFpbDogdHJ1ZSxcclxuICAgICAgICAgICAgbW9udGg6IHRydWUsXHJcbiAgICAgICAgICAgIG51bWJlcjogdHJ1ZSxcclxuICAgICAgICAgICAgcmFuZ2U6IHRydWUsXHJcbiAgICAgICAgICAgIHNlYXJjaDogdHJ1ZSxcclxuICAgICAgICAgICAgdGVsOiB0cnVlLFxyXG4gICAgICAgICAgICB0ZXh0OiB0cnVlLFxyXG4gICAgICAgICAgICB0aW1lOiB0cnVlLFxyXG4gICAgICAgICAgICB1cmw6IHRydWUsXHJcbiAgICAgICAgICAgIHdlZWs6IHRydWUsXHJcbiAgICAgICAgICAgIHRleHRhcmVhOiB0cnVlLFxyXG4gICAgICAgICAgICBzZWxlY3Q6IHRydWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgICAgICA6IG1hc2tBbGxJbnB1dHMgPT09IGZhbHNlXHJcbiAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOiBtYXNrQWxsSW5wdXRzO1xyXG4gICAgY29uc3Qgc2xpbURPTU9wdGlvbnMgPSBzbGltRE9NID09PSB0cnVlIHx8IHNsaW1ET00gPT09ICdhbGwnXHJcbiAgICAgICAgP1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzY3JpcHQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb21tZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaGVhZEZhdmljb246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBoZWFkV2hpdGVzcGFjZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGhlYWRNZXRhRGVzY0tleXdvcmRzOiBzbGltRE9NID09PSAnYWxsJyxcclxuICAgICAgICAgICAgICAgIGhlYWRNZXRhU29jaWFsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaGVhZE1ldGFSb2JvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBoZWFkTWV0YUh0dHBFcXVpdjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGhlYWRNZXRhQXV0aG9yc2hpcDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGhlYWRNZXRhVmVyaWZpY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgOiBzbGltRE9NID09PSBmYWxzZVxyXG4gICAgICAgICAgICA/IHt9XHJcbiAgICAgICAgICAgIDogc2xpbURPTTtcclxuICAgIHJldHVybiBzZXJpYWxpemVOb2RlV2l0aElkKG4sIHtcclxuICAgICAgICBkb2M6IG4sXHJcbiAgICAgICAgbWlycm9yLFxyXG4gICAgICAgIGJsb2NrQ2xhc3MsXHJcbiAgICAgICAgYmxvY2tTZWxlY3RvcixcclxuICAgICAgICBtYXNrVGV4dENsYXNzLFxyXG4gICAgICAgIG1hc2tUZXh0U2VsZWN0b3IsXHJcbiAgICAgICAgc2tpcENoaWxkOiBmYWxzZSxcclxuICAgICAgICBpbmxpbmVTdHlsZXNoZWV0LFxyXG4gICAgICAgIG1hc2tJbnB1dE9wdGlvbnMsXHJcbiAgICAgICAgbWFza1RleHRGbixcclxuICAgICAgICBtYXNrSW5wdXRGbixcclxuICAgICAgICBzbGltRE9NT3B0aW9ucyxcclxuICAgICAgICBkYXRhVVJMT3B0aW9ucyxcclxuICAgICAgICBpbmxpbmVJbWFnZXMsXHJcbiAgICAgICAgcmVjb3JkQ2FudmFzLFxyXG4gICAgICAgIHByZXNlcnZlV2hpdGVTcGFjZSxcclxuICAgICAgICBvblNlcmlhbGl6ZSxcclxuICAgICAgICBvbklmcmFtZUxvYWQsXHJcbiAgICAgICAgaWZyYW1lTG9hZFRpbWVvdXQsXHJcbiAgICAgICAgb25TdHlsZXNoZWV0TG9hZCxcclxuICAgICAgICBzdHlsZXNoZWV0TG9hZFRpbWVvdXQsXHJcbiAgICAgICAga2VlcElmcmFtZVNyY0ZuLFxyXG4gICAgICAgIG5ld2x5QWRkZWRFbGVtZW50OiBmYWxzZSxcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHZpc2l0U25hcHNob3Qobm9kZSwgb25WaXNpdCkge1xyXG4gICAgZnVuY3Rpb24gd2FsayhjdXJyZW50KSB7XHJcbiAgICAgICAgb25WaXNpdChjdXJyZW50KTtcclxuICAgICAgICBpZiAoY3VycmVudC50eXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudCB8fFxyXG4gICAgICAgICAgICBjdXJyZW50LnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY3VycmVudC5jaGlsZE5vZGVzLmZvckVhY2god2Fsayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2Fsayhub2RlKTtcclxufVxyXG5mdW5jdGlvbiBjbGVhbnVwU25hcHNob3QoKSB7XHJcbiAgICBfaWQgPSAxO1xyXG59XG5cbmNvbnN0IGNvbW1lbnRyZSA9IC9cXC9cXCpbXipdKlxcKisoW14vKl1bXipdKlxcKispKlxcLy9nO1xyXG5mdW5jdGlvbiBwYXJzZShjc3MsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgbGV0IGxpbmVubyA9IDE7XHJcbiAgICBsZXQgY29sdW1uID0gMTtcclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uKHN0cikge1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gc3RyLm1hdGNoKC9cXG4vZyk7XHJcbiAgICAgICAgaWYgKGxpbmVzKSB7XHJcbiAgICAgICAgICAgIGxpbmVubyArPSBsaW5lcy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGkgPSBzdHIubGFzdEluZGV4T2YoJ1xcbicpO1xyXG4gICAgICAgIGNvbHVtbiA9IGkgPT09IC0xID8gY29sdW1uICsgc3RyLmxlbmd0aCA6IHN0ci5sZW5ndGggLSBpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcG9zaXRpb24oKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB7IGxpbmU6IGxpbmVubywgY29sdW1uIH07XHJcbiAgICAgICAgcmV0dXJuIChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSBuZXcgUG9zaXRpb24oc3RhcnQpO1xyXG4gICAgICAgICAgICB3aGl0ZXNwYWNlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjbGFzcyBQb3NpdGlvbiB7XHJcbiAgICAgICAgY29uc3RydWN0b3Ioc3RhcnQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgICAgICB0aGlzLmVuZCA9IHsgbGluZTogbGluZW5vLCBjb2x1bW4gfTtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSBvcHRpb25zLnNvdXJjZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQb3NpdGlvbi5wcm90b3R5cGUuY29udGVudCA9IGNzcztcclxuICAgIGNvbnN0IGVycm9yc0xpc3QgPSBbXTtcclxuICAgIGZ1bmN0aW9uIGVycm9yKG1zZykge1xyXG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihgJHtvcHRpb25zLnNvdXJjZSB8fCAnJ306JHtsaW5lbm99OiR7Y29sdW1ufTogJHttc2d9YCk7XHJcbiAgICAgICAgZXJyLnJlYXNvbiA9IG1zZztcclxuICAgICAgICBlcnIuZmlsZW5hbWUgPSBvcHRpb25zLnNvdXJjZTtcclxuICAgICAgICBlcnIubGluZSA9IGxpbmVubztcclxuICAgICAgICBlcnIuY29sdW1uID0gY29sdW1uO1xyXG4gICAgICAgIGVyci5zb3VyY2UgPSBjc3M7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuc2lsZW50KSB7XHJcbiAgICAgICAgICAgIGVycm9yc0xpc3QucHVzaChlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN0eWxlc2hlZXQoKSB7XHJcbiAgICAgICAgY29uc3QgcnVsZXNMaXN0ID0gcnVsZXMoKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiAnc3R5bGVzaGVldCcsXHJcbiAgICAgICAgICAgIHN0eWxlc2hlZXQ6IHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogb3B0aW9ucy5zb3VyY2UsXHJcbiAgICAgICAgICAgICAgICBydWxlczogcnVsZXNMaXN0LFxyXG4gICAgICAgICAgICAgICAgcGFyc2luZ0Vycm9yczogZXJyb3JzTGlzdCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb3BlbigpIHtcclxuICAgICAgICByZXR1cm4gbWF0Y2goL157XFxzKi8pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2xvc2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoKC9efS8pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcnVsZXMoKSB7XHJcbiAgICAgICAgbGV0IG5vZGU7XHJcbiAgICAgICAgY29uc3QgcnVsZXMgPSBbXTtcclxuICAgICAgICB3aGl0ZXNwYWNlKCk7XHJcbiAgICAgICAgY29tbWVudHMocnVsZXMpO1xyXG4gICAgICAgIHdoaWxlIChjc3MubGVuZ3RoICYmIGNzcy5jaGFyQXQoMCkgIT09ICd9JyAmJiAobm9kZSA9IGF0cnVsZSgpIHx8IHJ1bGUoKSkpIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHJ1bGVzLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50cyhydWxlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJ1bGVzO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbWF0Y2gocmUpIHtcclxuICAgICAgICBjb25zdCBtID0gcmUuZXhlYyhjc3MpO1xyXG4gICAgICAgIGlmICghbSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN0ciA9IG1bMF07XHJcbiAgICAgICAgdXBkYXRlUG9zaXRpb24oc3RyKTtcclxuICAgICAgICBjc3MgPSBjc3Muc2xpY2Uoc3RyLmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIG07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB3aGl0ZXNwYWNlKCkge1xyXG4gICAgICAgIG1hdGNoKC9eXFxzKi8pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY29tbWVudHMocnVsZXMgPSBbXSkge1xyXG4gICAgICAgIGxldCBjO1xyXG4gICAgICAgIHdoaWxlICgoYyA9IGNvbW1lbnQoKSkpIHtcclxuICAgICAgICAgICAgaWYgKGMpIHtcclxuICAgICAgICAgICAgICAgIHJ1bGVzLnB1c2goYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYyA9IGNvbW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJ1bGVzO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY29tbWVudCgpIHtcclxuICAgICAgICBjb25zdCBwb3MgPSBwb3NpdGlvbigpO1xyXG4gICAgICAgIGlmICgnLycgIT09IGNzcy5jaGFyQXQoMCkgfHwgJyonICE9PSBjc3MuY2hhckF0KDEpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGkgPSAyO1xyXG4gICAgICAgIHdoaWxlICgnJyAhPT0gY3NzLmNoYXJBdChpKSAmJlxyXG4gICAgICAgICAgICAoJyonICE9PSBjc3MuY2hhckF0KGkpIHx8ICcvJyAhPT0gY3NzLmNoYXJBdChpICsgMSkpKSB7XHJcbiAgICAgICAgICAgICsraTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaSArPSAyO1xyXG4gICAgICAgIGlmICgnJyA9PT0gY3NzLmNoYXJBdChpIC0gMSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKCdFbmQgb2YgY29tbWVudCBtaXNzaW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN0ciA9IGNzcy5zbGljZSgyLCBpIC0gMik7XHJcbiAgICAgICAgY29sdW1uICs9IDI7XHJcbiAgICAgICAgdXBkYXRlUG9zaXRpb24oc3RyKTtcclxuICAgICAgICBjc3MgPSBjc3Muc2xpY2UoaSk7XHJcbiAgICAgICAgY29sdW1uICs9IDI7XHJcbiAgICAgICAgcmV0dXJuIHBvcyh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdjb21tZW50JyxcclxuICAgICAgICAgICAgY29tbWVudDogc3RyLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2VsZWN0b3IoKSB7XHJcbiAgICAgICAgd2hpdGVzcGFjZSgpO1xyXG4gICAgICAgIHdoaWxlIChjc3NbMF0gPT0gJ30nKSB7XHJcbiAgICAgICAgICAgIGVycm9yKCdleHRyYSBjbG9zaW5nIGJyYWNrZXQnKTtcclxuICAgICAgICAgICAgY3NzID0gY3NzLnNsaWNlKDEpO1xyXG4gICAgICAgICAgICB3aGl0ZXNwYWNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG0gPSBtYXRjaCgvXigoXCIoPzpcXFxcXCJ8W15cIl0pKlwifCcoPzpcXFxcJ3xbXiddKSonfFtee10pKykvKTtcclxuICAgICAgICBpZiAoIW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjbGVhbmVkSW5wdXQgPSBtWzBdXHJcbiAgICAgICAgICAgIC50cmltKClcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcL1xcKihbXipdfFtcXHJcXG5dfChcXCorKFteKi9dfFtcXHJcXG5dKSkpKlxcKlxcLysvZywgJycpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cIig/OlxcXFxcInxbXlwiXSkqXCJ8Jyg/OlxcXFwnfFteJ10pKicvZywgKG0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG0ucmVwbGFjZSgvLC9nLCAnXFx1MjAwQycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBjdXN0b21TcGxpdChjbGVhbmVkSW5wdXQpLm1hcCgocykgPT4gcy5yZXBsYWNlKC9cXHUyMDBDL2csICcsJykudHJpbSgpKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGN1c3RvbVNwbGl0KGlucHV0KSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTZWdtZW50ID0gJyc7XHJcbiAgICAgICAgbGV0IGRlcHRoUGFyZW50aGVzZXMgPSAwO1xyXG4gICAgICAgIGxldCBkZXB0aEJyYWNrZXRzID0gMDtcclxuICAgICAgICBmb3IgKGNvbnN0IGNoYXIgb2YgaW5wdXQpIHtcclxuICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcoJykge1xyXG4gICAgICAgICAgICAgICAgZGVwdGhQYXJlbnRoZXNlcysrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT09ICcpJykge1xyXG4gICAgICAgICAgICAgICAgZGVwdGhQYXJlbnRoZXNlcy0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT09ICdbJykge1xyXG4gICAgICAgICAgICAgICAgZGVwdGhCcmFja2V0cysrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT09ICddJykge1xyXG4gICAgICAgICAgICAgICAgZGVwdGhCcmFja2V0cy0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjaGFyID09PSAnLCcgJiYgZGVwdGhQYXJlbnRoZXNlcyA9PT0gMCAmJiBkZXB0aEJyYWNrZXRzID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50U2VnbWVudCk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2VnbWVudCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFNlZ21lbnQgKz0gY2hhcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VycmVudFNlZ21lbnQpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudFNlZ21lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGVjbGFyYXRpb24oKSB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gcG9zaXRpb24oKTtcclxuICAgICAgICBjb25zdCBwcm9wTWF0Y2ggPSBtYXRjaCgvXihcXCo/Wy0jXFwvXFwqXFxcXFxcd10rKFxcW1swLTlhLXpfLV0rXFxdKT8pXFxzKi8pO1xyXG4gICAgICAgIGlmICghcHJvcE1hdGNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJvcCA9IHRyaW0ocHJvcE1hdGNoWzBdKTtcclxuICAgICAgICBpZiAoIW1hdGNoKC9eOlxccyovKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoYHByb3BlcnR5IG1pc3NpbmcgJzonYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHZhbCA9IG1hdGNoKC9eKCg/OicoPzpcXFxcJ3wuKSo/J3xcIig/OlxcXFxcInwuKSo/XCJ8XFwoW15cXCldKj9cXCl8W159O10pKykvKTtcclxuICAgICAgICBjb25zdCByZXQgPSBwb3Moe1xyXG4gICAgICAgICAgICB0eXBlOiAnZGVjbGFyYXRpb24nLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eTogcHJvcC5yZXBsYWNlKGNvbW1lbnRyZSwgJycpLFxyXG4gICAgICAgICAgICB2YWx1ZTogdmFsID8gdHJpbSh2YWxbMF0pLnJlcGxhY2UoY29tbWVudHJlLCAnJykgOiAnJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBtYXRjaCgvXls7XFxzXSovKTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGVjbGFyYXRpb25zKCkge1xyXG4gICAgICAgIGNvbnN0IGRlY2xzID0gW107XHJcbiAgICAgICAgaWYgKCFvcGVuKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKGBtaXNzaW5nICd7J2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb21tZW50cyhkZWNscyk7XHJcbiAgICAgICAgbGV0IGRlY2w7XHJcbiAgICAgICAgd2hpbGUgKChkZWNsID0gZGVjbGFyYXRpb24oKSkpIHtcclxuICAgICAgICAgICAgaWYgKGRlY2wgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBkZWNscy5wdXNoKGRlY2wpO1xyXG4gICAgICAgICAgICAgICAgY29tbWVudHMoZGVjbHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlY2wgPSBkZWNsYXJhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNsb3NlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKGBtaXNzaW5nICd9J2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGVjbHM7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBrZXlmcmFtZSgpIHtcclxuICAgICAgICBsZXQgbTtcclxuICAgICAgICBjb25zdCB2YWxzID0gW107XHJcbiAgICAgICAgY29uc3QgcG9zID0gcG9zaXRpb24oKTtcclxuICAgICAgICB3aGlsZSAoKG0gPSBtYXRjaCgvXigoXFxkK1xcLlxcZCt8XFwuXFxkK3xcXGQrKSU/fFthLXpdKylcXHMqLykpKSB7XHJcbiAgICAgICAgICAgIHZhbHMucHVzaChtWzFdKTtcclxuICAgICAgICAgICAgbWF0Y2goL14sXFxzKi8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXZhbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvcyh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdrZXlmcmFtZScsXHJcbiAgICAgICAgICAgIHZhbHVlczogdmFscyxcclxuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMoKSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGF0a2V5ZnJhbWVzKCkge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHBvc2l0aW9uKCk7XHJcbiAgICAgICAgbGV0IG0gPSBtYXRjaCgvXkAoWy1cXHddKyk/a2V5ZnJhbWVzXFxzKi8pO1xyXG4gICAgICAgIGlmICghbSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHZlbmRvciA9IG1bMV07XHJcbiAgICAgICAgbSA9IG1hdGNoKC9eKFstXFx3XSspXFxzKi8pO1xyXG4gICAgICAgIGlmICghbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoJ0BrZXlmcmFtZXMgbWlzc2luZyBuYW1lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBtWzFdO1xyXG4gICAgICAgIGlmICghb3BlbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihgQGtleWZyYW1lcyBtaXNzaW5nICd7J2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZnJhbWU7XHJcbiAgICAgICAgbGV0IGZyYW1lcyA9IGNvbW1lbnRzKCk7XHJcbiAgICAgICAgd2hpbGUgKChmcmFtZSA9IGtleWZyYW1lKCkpKSB7XHJcbiAgICAgICAgICAgIGZyYW1lcy5wdXNoKGZyYW1lKTtcclxuICAgICAgICAgICAgZnJhbWVzID0gZnJhbWVzLmNvbmNhdChjb21tZW50cygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFjbG9zZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihgQGtleWZyYW1lcyBtaXNzaW5nICd9J2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zKHtcclxuICAgICAgICAgICAgdHlwZTogJ2tleWZyYW1lcycsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIHZlbmRvcixcclxuICAgICAgICAgICAga2V5ZnJhbWVzOiBmcmFtZXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhdHN1cHBvcnRzKCkge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgbSA9IG1hdGNoKC9eQHN1cHBvcnRzICooW157XSspLyk7XHJcbiAgICAgICAgaWYgKCFtKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3VwcG9ydHMgPSB0cmltKG1bMV0pO1xyXG4gICAgICAgIGlmICghb3BlbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihgQHN1cHBvcnRzIG1pc3NpbmcgJ3snYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN0eWxlID0gY29tbWVudHMoKS5jb25jYXQocnVsZXMoKSk7XHJcbiAgICAgICAgaWYgKCFjbG9zZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihgQHN1cHBvcnRzIG1pc3NpbmcgJ30nYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3Moe1xyXG4gICAgICAgICAgICB0eXBlOiAnc3VwcG9ydHMnLFxyXG4gICAgICAgICAgICBzdXBwb3J0cyxcclxuICAgICAgICAgICAgcnVsZXM6IHN0eWxlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXRob3N0KCkge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgbSA9IG1hdGNoKC9eQGhvc3RcXHMqLyk7XHJcbiAgICAgICAgaWYgKCFtKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvcGVuKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKGBAaG9zdCBtaXNzaW5nICd7J2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdHlsZSA9IGNvbW1lbnRzKCkuY29uY2F0KHJ1bGVzKCkpO1xyXG4gICAgICAgIGlmICghY2xvc2UoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoYEBob3N0IG1pc3NpbmcgJ30nYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3Moe1xyXG4gICAgICAgICAgICB0eXBlOiAnaG9zdCcsXHJcbiAgICAgICAgICAgIHJ1bGVzOiBzdHlsZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGF0bWVkaWEoKSB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gcG9zaXRpb24oKTtcclxuICAgICAgICBjb25zdCBtID0gbWF0Y2goL15AbWVkaWEgKihbXntdKykvKTtcclxuICAgICAgICBpZiAoIW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtZWRpYSA9IHRyaW0obVsxXSk7XHJcbiAgICAgICAgaWYgKCFvcGVuKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKGBAbWVkaWEgbWlzc2luZyAneydgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBjb21tZW50cygpLmNvbmNhdChydWxlcygpKTtcclxuICAgICAgICBpZiAoIWNsb3NlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKGBAbWVkaWEgbWlzc2luZyAnfSdgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvcyh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdtZWRpYScsXHJcbiAgICAgICAgICAgIG1lZGlhLFxyXG4gICAgICAgICAgICBydWxlczogc3R5bGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhdGN1c3RvbW1lZGlhKCkge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgbSA9IG1hdGNoKC9eQGN1c3RvbS1tZWRpYVxccysoLS1bXlxcc10rKVxccyooW157O10rKTsvKTtcclxuICAgICAgICBpZiAoIW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zKHtcclxuICAgICAgICAgICAgdHlwZTogJ2N1c3RvbS1tZWRpYScsXHJcbiAgICAgICAgICAgIG5hbWU6IHRyaW0obVsxXSksXHJcbiAgICAgICAgICAgIG1lZGlhOiB0cmltKG1bMl0pLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXRwYWdlKCkge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgbSA9IG1hdGNoKC9eQHBhZ2UgKi8pO1xyXG4gICAgICAgIGlmICghbSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNlbCA9IHNlbGVjdG9yKCkgfHwgW107XHJcbiAgICAgICAgaWYgKCFvcGVuKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKGBAcGFnZSBtaXNzaW5nICd7J2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGVjbHMgPSBjb21tZW50cygpO1xyXG4gICAgICAgIGxldCBkZWNsO1xyXG4gICAgICAgIHdoaWxlICgoZGVjbCA9IGRlY2xhcmF0aW9uKCkpKSB7XHJcbiAgICAgICAgICAgIGRlY2xzLnB1c2goZGVjbCk7XHJcbiAgICAgICAgICAgIGRlY2xzID0gZGVjbHMuY29uY2F0KGNvbW1lbnRzKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNsb3NlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKGBAcGFnZSBtaXNzaW5nICd9J2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zKHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhZ2UnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcnM6IHNlbCxcclxuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBkZWNscyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGF0ZG9jdW1lbnQoKSB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gcG9zaXRpb24oKTtcclxuICAgICAgICBjb25zdCBtID0gbWF0Y2goL15AKFstXFx3XSspP2RvY3VtZW50ICooW157XSspLyk7XHJcbiAgICAgICAgaWYgKCFtKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdmVuZG9yID0gdHJpbShtWzFdKTtcclxuICAgICAgICBjb25zdCBkb2MgPSB0cmltKG1bMl0pO1xyXG4gICAgICAgIGlmICghb3BlbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihgQGRvY3VtZW50IG1pc3NpbmcgJ3snYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN0eWxlID0gY29tbWVudHMoKS5jb25jYXQocnVsZXMoKSk7XHJcbiAgICAgICAgaWYgKCFjbG9zZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihgQGRvY3VtZW50IG1pc3NpbmcgJ30nYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3Moe1xyXG4gICAgICAgICAgICB0eXBlOiAnZG9jdW1lbnQnLFxyXG4gICAgICAgICAgICBkb2N1bWVudDogZG9jLFxyXG4gICAgICAgICAgICB2ZW5kb3IsXHJcbiAgICAgICAgICAgIHJ1bGVzOiBzdHlsZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGF0Zm9udGZhY2UoKSB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gcG9zaXRpb24oKTtcclxuICAgICAgICBjb25zdCBtID0gbWF0Y2goL15AZm9udC1mYWNlXFxzKi8pO1xyXG4gICAgICAgIGlmICghbSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb3BlbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihgQGZvbnQtZmFjZSBtaXNzaW5nICd7J2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGVjbHMgPSBjb21tZW50cygpO1xyXG4gICAgICAgIGxldCBkZWNsO1xyXG4gICAgICAgIHdoaWxlICgoZGVjbCA9IGRlY2xhcmF0aW9uKCkpKSB7XHJcbiAgICAgICAgICAgIGRlY2xzLnB1c2goZGVjbCk7XHJcbiAgICAgICAgICAgIGRlY2xzID0gZGVjbHMuY29uY2F0KGNvbW1lbnRzKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNsb3NlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKGBAZm9udC1mYWNlIG1pc3NpbmcgJ30nYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3Moe1xyXG4gICAgICAgICAgICB0eXBlOiAnZm9udC1mYWNlJyxcclxuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBkZWNscyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IGF0aW1wb3J0ID0gX2NvbXBpbGVBdHJ1bGUoJ2ltcG9ydCcpO1xyXG4gICAgY29uc3QgYXRjaGFyc2V0ID0gX2NvbXBpbGVBdHJ1bGUoJ2NoYXJzZXQnKTtcclxuICAgIGNvbnN0IGF0bmFtZXNwYWNlID0gX2NvbXBpbGVBdHJ1bGUoJ25hbWVzcGFjZScpO1xyXG4gICAgZnVuY3Rpb24gX2NvbXBpbGVBdHJ1bGUobmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnXkAnICsgbmFtZSArICdcXFxccyooW147XSspOycpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG0gPSBtYXRjaChyZSk7XHJcbiAgICAgICAgICAgIGlmICghbSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHJldCA9IHsgdHlwZTogbmFtZSB9O1xyXG4gICAgICAgICAgICByZXRbbmFtZV0gPSBtWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBvcyhyZXQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhdHJ1bGUoKSB7XHJcbiAgICAgICAgaWYgKGNzc1swXSAhPT0gJ0AnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChhdGtleWZyYW1lcygpIHx8XHJcbiAgICAgICAgICAgIGF0bWVkaWEoKSB8fFxyXG4gICAgICAgICAgICBhdGN1c3RvbW1lZGlhKCkgfHxcclxuICAgICAgICAgICAgYXRzdXBwb3J0cygpIHx8XHJcbiAgICAgICAgICAgIGF0aW1wb3J0KCkgfHxcclxuICAgICAgICAgICAgYXRjaGFyc2V0KCkgfHxcclxuICAgICAgICAgICAgYXRuYW1lc3BhY2UoKSB8fFxyXG4gICAgICAgICAgICBhdGRvY3VtZW50KCkgfHxcclxuICAgICAgICAgICAgYXRwYWdlKCkgfHxcclxuICAgICAgICAgICAgYXRob3N0KCkgfHxcclxuICAgICAgICAgICAgYXRmb250ZmFjZSgpKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJ1bGUoKSB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gcG9zaXRpb24oKTtcclxuICAgICAgICBjb25zdCBzZWwgPSBzZWxlY3RvcigpO1xyXG4gICAgICAgIGlmICghc2VsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcignc2VsZWN0b3IgbWlzc2luZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb21tZW50cygpO1xyXG4gICAgICAgIHJldHVybiBwb3Moe1xyXG4gICAgICAgICAgICB0eXBlOiAncnVsZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yczogc2VsLFxyXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6IGRlY2xhcmF0aW9ucygpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFkZFBhcmVudChzdHlsZXNoZWV0KCkpO1xyXG59XHJcbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XHJcbiAgICByZXR1cm4gc3RyID8gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKSA6ICcnO1xyXG59XHJcbmZ1bmN0aW9uIGFkZFBhcmVudChvYmosIHBhcmVudCkge1xyXG4gICAgY29uc3QgaXNOb2RlID0gb2JqICYmIHR5cGVvZiBvYmoudHlwZSA9PT0gJ3N0cmluZyc7XHJcbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IGlzTm9kZSA/IG9iaiA6IHBhcmVudDtcclxuICAgIGZvciAoY29uc3QgayBvZiBPYmplY3Qua2V5cyhvYmopKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBvYmpba107XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgICAgIGFkZFBhcmVudCh2LCBjaGlsZFBhcmVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGFkZFBhcmVudCh2YWx1ZSwgY2hpbGRQYXJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChpc05vZGUpIHtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCAncGFyZW50Jywge1xyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgdmFsdWU6IHBhcmVudCB8fCBudWxsLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iajtcclxufVxuXG5jb25zdCB0YWdNYXAgPSB7XHJcbiAgICBzY3JpcHQ6ICdub3NjcmlwdCcsXHJcbiAgICBhbHRnbHlwaDogJ2FsdEdseXBoJyxcclxuICAgIGFsdGdseXBoZGVmOiAnYWx0R2x5cGhEZWYnLFxyXG4gICAgYWx0Z2x5cGhpdGVtOiAnYWx0R2x5cGhJdGVtJyxcclxuICAgIGFuaW1hdGVjb2xvcjogJ2FuaW1hdGVDb2xvcicsXHJcbiAgICBhbmltYXRlbW90aW9uOiAnYW5pbWF0ZU1vdGlvbicsXHJcbiAgICBhbmltYXRldHJhbnNmb3JtOiAnYW5pbWF0ZVRyYW5zZm9ybScsXHJcbiAgICBjbGlwcGF0aDogJ2NsaXBQYXRoJyxcclxuICAgIGZlYmxlbmQ6ICdmZUJsZW5kJyxcclxuICAgIGZlY29sb3JtYXRyaXg6ICdmZUNvbG9yTWF0cml4JyxcclxuICAgIGZlY29tcG9uZW50dHJhbnNmZXI6ICdmZUNvbXBvbmVudFRyYW5zZmVyJyxcclxuICAgIGZlY29tcG9zaXRlOiAnZmVDb21wb3NpdGUnLFxyXG4gICAgZmVjb252b2x2ZW1hdHJpeDogJ2ZlQ29udm9sdmVNYXRyaXgnLFxyXG4gICAgZmVkaWZmdXNlbGlnaHRpbmc6ICdmZURpZmZ1c2VMaWdodGluZycsXHJcbiAgICBmZWRpc3BsYWNlbWVudG1hcDogJ2ZlRGlzcGxhY2VtZW50TWFwJyxcclxuICAgIGZlZGlzdGFudGxpZ2h0OiAnZmVEaXN0YW50TGlnaHQnLFxyXG4gICAgZmVkcm9wc2hhZG93OiAnZmVEcm9wU2hhZG93JyxcclxuICAgIGZlZmxvb2Q6ICdmZUZsb29kJyxcclxuICAgIGZlZnVuY2E6ICdmZUZ1bmNBJyxcclxuICAgIGZlZnVuY2I6ICdmZUZ1bmNCJyxcclxuICAgIGZlZnVuY2c6ICdmZUZ1bmNHJyxcclxuICAgIGZlZnVuY3I6ICdmZUZ1bmNSJyxcclxuICAgIGZlZ2F1c3NpYW5ibHVyOiAnZmVHYXVzc2lhbkJsdXInLFxyXG4gICAgZmVpbWFnZTogJ2ZlSW1hZ2UnLFxyXG4gICAgZmVtZXJnZTogJ2ZlTWVyZ2UnLFxyXG4gICAgZmVtZXJnZW5vZGU6ICdmZU1lcmdlTm9kZScsXHJcbiAgICBmZW1vcnBob2xvZ3k6ICdmZU1vcnBob2xvZ3knLFxyXG4gICAgZmVvZmZzZXQ6ICdmZU9mZnNldCcsXHJcbiAgICBmZXBvaW50bGlnaHQ6ICdmZVBvaW50TGlnaHQnLFxyXG4gICAgZmVzcGVjdWxhcmxpZ2h0aW5nOiAnZmVTcGVjdWxhckxpZ2h0aW5nJyxcclxuICAgIGZlc3BvdGxpZ2h0OiAnZmVTcG90TGlnaHQnLFxyXG4gICAgZmV0aWxlOiAnZmVUaWxlJyxcclxuICAgIGZldHVyYnVsZW5jZTogJ2ZlVHVyYnVsZW5jZScsXHJcbiAgICBmb3JlaWdub2JqZWN0OiAnZm9yZWlnbk9iamVjdCcsXHJcbiAgICBnbHlwaHJlZjogJ2dseXBoUmVmJyxcclxuICAgIGxpbmVhcmdyYWRpZW50OiAnbGluZWFyR3JhZGllbnQnLFxyXG4gICAgcmFkaWFsZ3JhZGllbnQ6ICdyYWRpYWxHcmFkaWVudCcsXHJcbn07XHJcbmZ1bmN0aW9uIGdldFRhZ05hbWUobikge1xyXG4gICAgbGV0IHRhZ05hbWUgPSB0YWdNYXBbbi50YWdOYW1lXSA/IHRhZ01hcFtuLnRhZ05hbWVdIDogbi50YWdOYW1lO1xyXG4gICAgaWYgKHRhZ05hbWUgPT09ICdsaW5rJyAmJiBuLmF0dHJpYnV0ZXMuX2Nzc1RleHQpIHtcclxuICAgICAgICB0YWdOYW1lID0gJ3N0eWxlJztcclxuICAgIH1cclxuICAgIHJldHVybiB0YWdOYW1lO1xyXG59XHJcbmZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHIpIHtcclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTtcclxufVxyXG5jb25zdCBNRURJQV9TRUxFQ1RPUiA9IC8obWF4fG1pbiktZGV2aWNlLSh3aWR0aHxoZWlnaHQpLztcclxuY29uc3QgTUVESUFfU0VMRUNUT1JfR0xPQkFMID0gbmV3IFJlZ0V4cChNRURJQV9TRUxFQ1RPUi5zb3VyY2UsICdnJyk7XHJcbmNvbnN0IEhPVkVSX1NFTEVDVE9SID0gLyhbXlxcXFxdKTpob3Zlci87XHJcbmNvbnN0IEhPVkVSX1NFTEVDVE9SX0dMT0JBTCA9IG5ldyBSZWdFeHAoSE9WRVJfU0VMRUNUT1Iuc291cmNlLCAnZycpO1xyXG5mdW5jdGlvbiBhZGFwdENzc0ZvclJlcGxheShjc3NUZXh0LCBjYWNoZSkge1xyXG4gICAgY29uc3QgY2FjaGVkU3R5bGUgPSBjYWNoZSA9PT0gbnVsbCB8fCBjYWNoZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FjaGUuc3R5bGVzV2l0aEhvdmVyQ2xhc3MuZ2V0KGNzc1RleHQpO1xyXG4gICAgaWYgKGNhY2hlZFN0eWxlKVxyXG4gICAgICAgIHJldHVybiBjYWNoZWRTdHlsZTtcclxuICAgIGNvbnN0IGFzdCA9IHBhcnNlKGNzc1RleHQsIHtcclxuICAgICAgICBzaWxlbnQ6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIGlmICghYXN0LnN0eWxlc2hlZXQpIHtcclxuICAgICAgICByZXR1cm4gY3NzVGV4dDtcclxuICAgIH1cclxuICAgIGNvbnN0IHNlbGVjdG9ycyA9IFtdO1xyXG4gICAgY29uc3QgbWVkaWFzID0gW107XHJcbiAgICBmdW5jdGlvbiBnZXRTZWxlY3RvcnMocnVsZSkge1xyXG4gICAgICAgIGlmICgnc2VsZWN0b3JzJyBpbiBydWxlICYmIHJ1bGUuc2VsZWN0b3JzKSB7XHJcbiAgICAgICAgICAgIHJ1bGUuc2VsZWN0b3JzLmZvckVhY2goKHNlbGVjdG9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoSE9WRVJfU0VMRUNUT1IudGVzdChzZWxlY3RvcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcnMucHVzaChzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJ21lZGlhJyBpbiBydWxlICYmIHJ1bGUubWVkaWEgJiYgTUVESUFfU0VMRUNUT1IudGVzdChydWxlLm1lZGlhKSkge1xyXG4gICAgICAgICAgICBtZWRpYXMucHVzaChydWxlLm1lZGlhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCdydWxlcycgaW4gcnVsZSAmJiBydWxlLnJ1bGVzKSB7XHJcbiAgICAgICAgICAgIHJ1bGUucnVsZXMuZm9yRWFjaChnZXRTZWxlY3RvcnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFNlbGVjdG9ycyhhc3Quc3R5bGVzaGVldCk7XHJcbiAgICBsZXQgcmVzdWx0ID0gY3NzVGV4dDtcclxuICAgIGlmIChzZWxlY3RvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdG9yTWF0Y2hlciA9IG5ldyBSZWdFeHAoc2VsZWN0b3JzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHNlbGVjdG9yLCBpbmRleCkgPT4gc2VsZWN0b3JzLmluZGV4T2Yoc2VsZWN0b3IpID09PSBpbmRleClcclxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIubGVuZ3RoIC0gYS5sZW5ndGgpXHJcbiAgICAgICAgICAgIC5tYXAoKHNlbGVjdG9yKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBlc2NhcGVSZWdFeHAoc2VsZWN0b3IpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5qb2luKCd8JyksICdnJyk7XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2Uoc2VsZWN0b3JNYXRjaGVyLCAoc2VsZWN0b3IpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3U2VsZWN0b3IgPSBzZWxlY3Rvci5yZXBsYWNlKEhPVkVSX1NFTEVDVE9SX0dMT0JBTCwgJyQxLlxcXFw6aG92ZXInKTtcclxuICAgICAgICAgICAgcmV0dXJuIGAke3NlbGVjdG9yfSwgJHtuZXdTZWxlY3Rvcn1gO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKG1lZGlhcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgbWVkaWFNYXRjaGVyID0gbmV3IFJlZ0V4cChtZWRpYXNcclxuICAgICAgICAgICAgLmZpbHRlcigobWVkaWEsIGluZGV4KSA9PiBtZWRpYXMuaW5kZXhPZihtZWRpYSkgPT09IGluZGV4KVxyXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi5sZW5ndGggLSBhLmxlbmd0aClcclxuICAgICAgICAgICAgLm1hcCgobWVkaWEpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGVzY2FwZVJlZ0V4cChtZWRpYSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmpvaW4oJ3wnKSwgJ2cnKTtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShtZWRpYU1hdGNoZXIsIChtZWRpYSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbWVkaWEucmVwbGFjZShNRURJQV9TRUxFQ1RPUl9HTE9CQUwsICckMS0kMicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2FjaGUgPT09IG51bGwgfHwgY2FjaGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhY2hlLnN0eWxlc1dpdGhIb3ZlckNsYXNzLnNldChjc3NUZXh0LCByZXN1bHQpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVDYWNoZSgpIHtcclxuICAgIGNvbnN0IHN0eWxlc1dpdGhIb3ZlckNsYXNzID0gbmV3IE1hcCgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzdHlsZXNXaXRoSG92ZXJDbGFzcyxcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gYnVpbGROb2RlKG4sIG9wdGlvbnMpIHtcclxuICAgIHZhciBfYTtcclxuICAgIGNvbnN0IHsgZG9jLCBoYWNrQ3NzLCBjYWNoZSB9ID0gb3B0aW9ucztcclxuICAgIHN3aXRjaCAobi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBOb2RlVHlwZS5Eb2N1bWVudDpcclxuICAgICAgICAgICAgcmV0dXJuIGRvYy5pbXBsZW1lbnRhdGlvbi5jcmVhdGVEb2N1bWVudChudWxsLCAnJywgbnVsbCk7XHJcbiAgICAgICAgY2FzZSBOb2RlVHlwZS5Eb2N1bWVudFR5cGU6XHJcbiAgICAgICAgICAgIHJldHVybiBkb2MuaW1wbGVtZW50YXRpb24uY3JlYXRlRG9jdW1lbnRUeXBlKG4ubmFtZSB8fCAnaHRtbCcsIG4ucHVibGljSWQsIG4uc3lzdGVtSWQpO1xyXG4gICAgICAgIGNhc2UgTm9kZVR5cGUuRWxlbWVudDoge1xyXG4gICAgICAgICAgICBjb25zdCB0YWdOYW1lID0gZ2V0VGFnTmFtZShuKTtcclxuICAgICAgICAgICAgbGV0IG5vZGU7XHJcbiAgICAgICAgICAgIGlmIChuLmlzU1ZHKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlID0gZG9jLmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCB0YWdOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChuLmlzQ3VzdG9tICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKChfYSA9IGRvYy5kZWZhdWx0VmlldykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmN1c3RvbUVsZW1lbnRzKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFkb2MuZGVmYXVsdFZpZXcuY3VzdG9tRWxlbWVudHMuZ2V0KG4udGFnTmFtZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jLmRlZmF1bHRWaWV3LmN1c3RvbUVsZW1lbnRzLmRlZmluZShuLnRhZ05hbWUsIGNsYXNzIGV4dGVuZHMgZG9jLmRlZmF1bHRWaWV3LkhUTUxFbGVtZW50IHtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIG5vZGUgPSBkb2MuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzcGVjaWFsQXR0cmlidXRlcyA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gbi5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLmF0dHJpYnV0ZXMsIG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBuLmF0dHJpYnV0ZXNbbmFtZV07XHJcbiAgICAgICAgICAgICAgICBpZiAodGFnTmFtZSA9PT0gJ29wdGlvbicgJiZcclxuICAgICAgICAgICAgICAgICAgICBuYW1lID09PSAnc2VsZWN0ZWQnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUuc3RhcnRzV2l0aCgncnJfJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGVjaWFsQXR0cmlidXRlc1tuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNUZXh0YXJlYSA9IHRhZ05hbWUgPT09ICd0ZXh0YXJlYScgJiYgbmFtZSA9PT0gJ3ZhbHVlJztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzUmVtb3RlT3JEeW5hbWljQ3NzID0gdGFnTmFtZSA9PT0gJ3N0eWxlJyAmJiBuYW1lID09PSAnX2Nzc1RleHQnO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzUmVtb3RlT3JEeW5hbWljQ3NzICYmIGhhY2tDc3MgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gYWRhcHRDc3NGb3JSZXBsYXkodmFsdWUsIGNhY2hlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICgoaXNUZXh0YXJlYSB8fCBpc1JlbW90ZU9yRHluYW1pY0NzcykgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoZG9jLmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbi5jaGlsZE5vZGVzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuLmlzU1ZHICYmIG5hbWUgPT09ICd4bGluazpocmVmJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgbmFtZSwgdmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUgPT09ICdvbmxvYWQnIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPT09ICdvbmNsaWNrJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lLnN1YnN0cmluZygwLCA3KSA9PT0gJ29ubW91c2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdfJyArIG5hbWUsIHZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0YWdOYW1lID09PSAnbWV0YScgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgbi5hdHRyaWJ1dGVzWydodHRwLWVxdWl2J10gPT09ICdDb250ZW50LVNlY3VyaXR5LVBvbGljeScgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9PT0gJ2NvbnRlbnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdjc3AtY29udGVudCcsIHZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGFnTmFtZSA9PT0gJ2xpbmsnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChuLmF0dHJpYnV0ZXMucmVsID09PSAncHJlbG9hZCcgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uYXR0cmlidXRlcy5yZWwgPT09ICdtb2R1bGVwcmVsb2FkJykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgbi5hdHRyaWJ1dGVzLmFzID09PSAnc2NyaXB0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0YWdOYW1lID09PSAnbGluaycgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgbi5hdHRyaWJ1dGVzLnJlbCA9PT0gJ3ByZWZldGNoJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2Ygbi5hdHRyaWJ1dGVzLmhyZWYgPT09ICdzdHJpbmcnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uYXR0cmlidXRlcy5ocmVmLmVuZHNXaXRoKCcuanMnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0YWdOYW1lID09PSAnaW1nJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuLmF0dHJpYnV0ZXMuc3Jjc2V0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uYXR0cmlidXRlcy5ycl9kYXRhVVJMKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdycndlYi1vcmlnaW5hbC1zcmNzZXQnLCBuLmF0dHJpYnV0ZXMuc3Jjc2V0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBzcGVjaWFsQXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzcGVjaWFsQXR0cmlidXRlc1tuYW1lXTtcclxuICAgICAgICAgICAgICAgIGlmICh0YWdOYW1lID09PSAnY2FudmFzJyAmJiBuYW1lID09PSAncnJfZGF0YVVSTCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3R4ID0gbm9kZS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3R4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5SUk5vZGVUeXBlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJyX2RhdGFVUkwgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGFnTmFtZSA9PT0gJ2ltZycgJiYgbmFtZSA9PT0gJ3JyX2RhdGFVUkwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW1hZ2UuY3VycmVudFNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZSgncnJ3ZWItb3JpZ2luYWwtc3JjJywgbi5hdHRyaWJ1dGVzLnNyYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdycl93aWR0aCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlLndpZHRoID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUgPT09ICdycl9oZWlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gJ3JyX21lZGlhQ3VycmVudFRpbWUnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuY3VycmVudFRpbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUgPT09ICdycl9tZWRpYVN0YXRlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncGxheWVkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGxheSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLndhcm4oJ21lZGlhIHBsYXliYWNrIGVycm9yJywgZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3BhdXNlZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lID09PSAncnJfbWVkaWFQbGF5YmFja1JhdGUnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucGxheWJhY2tSYXRlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lID09PSAncnJfbWVkaWFNdXRlZCcgJiYgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLm11dGVkID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lID09PSAncnJfbWVkaWFMb29wJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUubG9vcCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gJ3JyX21lZGlhVm9sdW1lJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52b2x1bWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobi5pc1NoYWRvd0hvc3QpIHtcclxuICAgICAgICAgICAgICAgIGlmICghbm9kZS5zaGFkb3dSb290KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAobm9kZS5zaGFkb3dSb290LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zaGFkb3dSb290LnJlbW92ZUNoaWxkKG5vZGUuc2hhZG93Um9vdC5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTm9kZVR5cGUuVGV4dDpcclxuICAgICAgICAgICAgcmV0dXJuIGRvYy5jcmVhdGVUZXh0Tm9kZShuLmlzU3R5bGUgJiYgaGFja0Nzc1xyXG4gICAgICAgICAgICAgICAgPyBhZGFwdENzc0ZvclJlcGxheShuLnRleHRDb250ZW50LCBjYWNoZSlcclxuICAgICAgICAgICAgICAgIDogbi50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgY2FzZSBOb2RlVHlwZS5DREFUQTpcclxuICAgICAgICAgICAgcmV0dXJuIGRvYy5jcmVhdGVDREFUQVNlY3Rpb24obi50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgY2FzZSBOb2RlVHlwZS5Db21tZW50OlxyXG4gICAgICAgICAgICByZXR1cm4gZG9jLmNyZWF0ZUNvbW1lbnQobi50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYnVpbGROb2RlV2l0aFNOKG4sIG9wdGlvbnMpIHtcclxuICAgIGNvbnN0IHsgZG9jLCBtaXJyb3IsIHNraXBDaGlsZCA9IGZhbHNlLCBoYWNrQ3NzID0gdHJ1ZSwgYWZ0ZXJBcHBlbmQsIGNhY2hlLCB9ID0gb3B0aW9ucztcclxuICAgIGlmIChtaXJyb3IuaGFzKG4uaWQpKSB7XHJcbiAgICAgICAgY29uc3Qgbm9kZUluTWlycm9yID0gbWlycm9yLmdldE5vZGUobi5pZCk7XHJcbiAgICAgICAgY29uc3QgbWV0YSA9IG1pcnJvci5nZXRNZXRhKG5vZGVJbk1pcnJvcik7XHJcbiAgICAgICAgaWYgKGlzTm9kZU1ldGFFcXVhbChtZXRhLCBuKSlcclxuICAgICAgICAgICAgcmV0dXJuIG1pcnJvci5nZXROb2RlKG4uaWQpO1xyXG4gICAgfVxyXG4gICAgbGV0IG5vZGUgPSBidWlsZE5vZGUobiwgeyBkb2MsIGhhY2tDc3MsIGNhY2hlIH0pO1xyXG4gICAgaWYgKCFub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAobi5yb290SWQgJiYgbWlycm9yLmdldE5vZGUobi5yb290SWQpICE9PSBkb2MpIHtcclxuICAgICAgICBtaXJyb3IucmVwbGFjZShuLnJvb3RJZCwgZG9jKTtcclxuICAgIH1cclxuICAgIGlmIChuLnR5cGUgPT09IE5vZGVUeXBlLkRvY3VtZW50KSB7XHJcbiAgICAgICAgZG9jLmNsb3NlKCk7XHJcbiAgICAgICAgZG9jLm9wZW4oKTtcclxuICAgICAgICBpZiAobi5jb21wYXRNb2RlID09PSAnQmFja0NvbXBhdCcgJiZcclxuICAgICAgICAgICAgbi5jaGlsZE5vZGVzICYmXHJcbiAgICAgICAgICAgIG4uY2hpbGROb2Rlc1swXS50eXBlICE9PSBOb2RlVHlwZS5Eb2N1bWVudFR5cGUpIHtcclxuICAgICAgICAgICAgaWYgKG4uY2hpbGROb2Rlc1swXS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50ICYmXHJcbiAgICAgICAgICAgICAgICAneG1sbnMnIGluIG4uY2hpbGROb2Rlc1swXS5hdHRyaWJ1dGVzICYmXHJcbiAgICAgICAgICAgICAgICBuLmNoaWxkTm9kZXNbMF0uYXR0cmlidXRlcy54bWxucyA9PT0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnKSB7XHJcbiAgICAgICAgICAgICAgICBkb2Mud3JpdGUoJzwhRE9DVFlQRSBodG1sIFBVQkxJQyBcIi0vL1czQy8vRFREIFhIVE1MIDEuMCBUcmFuc2l0aW9uYWwvL0VOXCIgXCJcIj4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvYy53cml0ZSgnPCFET0NUWVBFIGh0bWwgUFVCTElDIFwiLS8vVzNDLy9EVEQgSFRNTCA0LjAgVHJhbnNpdGlvbmFsLy9FTlwiIFwiXCI+Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbm9kZSA9IGRvYztcclxuICAgIH1cclxuICAgIG1pcnJvci5hZGQobm9kZSwgbik7XHJcbiAgICBpZiAoKG4udHlwZSA9PT0gTm9kZVR5cGUuRG9jdW1lbnQgfHwgbi50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KSAmJlxyXG4gICAgICAgICFza2lwQ2hpbGQpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkTiBvZiBuLmNoaWxkTm9kZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlID0gYnVpbGROb2RlV2l0aFNOKGNoaWxkTiwge1xyXG4gICAgICAgICAgICAgICAgZG9jLFxyXG4gICAgICAgICAgICAgICAgbWlycm9yLFxyXG4gICAgICAgICAgICAgICAgc2tpcENoaWxkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGhhY2tDc3MsXHJcbiAgICAgICAgICAgICAgICBhZnRlckFwcGVuZCxcclxuICAgICAgICAgICAgICAgIGNhY2hlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFjaGlsZE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignRmFpbGVkIHRvIHJlYnVpbGQnLCBjaGlsZE4pO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNoaWxkTi5pc1NoYWRvdyAmJiBpc0VsZW1lbnQobm9kZSkgJiYgbm9kZS5zaGFkb3dSb290KSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChuLnR5cGUgPT09IE5vZGVUeXBlLkRvY3VtZW50ICYmXHJcbiAgICAgICAgICAgICAgICBjaGlsZE4udHlwZSA9PSBOb2RlVHlwZS5FbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBodG1sRWxlbWVudCA9IGNoaWxkTm9kZTtcclxuICAgICAgICAgICAgICAgIGxldCBib2R5ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGh0bWxFbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQubm9kZU5hbWUgPT09ICdCT0RZJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSA9IGNoaWxkO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWxFbGVtZW50LnJlbW92ZUNoaWxkKGJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBodG1sRWxlbWVudC5hcHBlbmRDaGlsZChib2R5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYWZ0ZXJBcHBlbmQpIHtcclxuICAgICAgICAgICAgICAgIGFmdGVyQXBwZW5kKGNoaWxkTm9kZSwgY2hpbGROLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBub2RlO1xyXG59XHJcbmZ1bmN0aW9uIHZpc2l0KG1pcnJvciwgb25WaXNpdCkge1xyXG4gICAgZnVuY3Rpb24gd2Fsayhub2RlKSB7XHJcbiAgICAgICAgb25WaXNpdChub2RlKTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgaWQgb2YgbWlycm9yLmdldElkcygpKSB7XHJcbiAgICAgICAgaWYgKG1pcnJvci5oYXMoaWQpKSB7XHJcbiAgICAgICAgICAgIHdhbGsobWlycm9yLmdldE5vZGUoaWQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKG5vZGUsIG1pcnJvcikge1xyXG4gICAgY29uc3QgbiA9IG1pcnJvci5nZXRNZXRhKG5vZGUpO1xyXG4gICAgaWYgKChuID09PSBudWxsIHx8IG4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG4udHlwZSkgIT09IE5vZGVUeXBlLkVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBlbCA9IG5vZGU7XHJcbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gbi5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgaWYgKCEoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4uYXR0cmlidXRlcywgbmFtZSkgJiZcclxuICAgICAgICAgICAgbmFtZS5zdGFydHNXaXRoKCdycl8nKSkpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gbi5hdHRyaWJ1dGVzW25hbWVdO1xyXG4gICAgICAgIGlmIChuYW1lID09PSAncnJfc2Nyb2xsTGVmdCcpIHtcclxuICAgICAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZSA9PT0gJ3JyX3Njcm9sbFRvcCcpIHtcclxuICAgICAgICAgICAgZWwuc2Nyb2xsVG9wID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHJlYnVpbGQobiwgb3B0aW9ucykge1xyXG4gICAgY29uc3QgeyBkb2MsIG9uVmlzaXQsIGhhY2tDc3MgPSB0cnVlLCBhZnRlckFwcGVuZCwgY2FjaGUsIG1pcnJvciA9IG5ldyBNaXJyb3IoKSwgfSA9IG9wdGlvbnM7XHJcbiAgICBjb25zdCBub2RlID0gYnVpbGROb2RlV2l0aFNOKG4sIHtcclxuICAgICAgICBkb2MsXHJcbiAgICAgICAgbWlycm9yLFxyXG4gICAgICAgIHNraXBDaGlsZDogZmFsc2UsXHJcbiAgICAgICAgaGFja0NzcyxcclxuICAgICAgICBhZnRlckFwcGVuZCxcclxuICAgICAgICBjYWNoZSxcclxuICAgIH0pO1xyXG4gICAgdmlzaXQobWlycm9yLCAodmlzaXRlZE5vZGUpID0+IHtcclxuICAgICAgICBpZiAob25WaXNpdCkge1xyXG4gICAgICAgICAgICBvblZpc2l0KHZpc2l0ZWROb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGFuZGxlU2Nyb2xsKHZpc2l0ZWROb2RlLCBtaXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbm9kZTtcclxufVxuXG5leHBvcnQgeyBJR05PUkVEX05PREUsIE1pcnJvciwgTm9kZVR5cGUsIGFkYXB0Q3NzRm9yUmVwbGF5LCBidWlsZE5vZGVXaXRoU04sIGNsYXNzTWF0Y2hlc1JlZ2V4LCBjbGVhbnVwU25hcHNob3QsIGNyZWF0ZUNhY2hlLCBjcmVhdGVNaXJyb3IsIGVzY2FwZUltcG9ydFN0YXRlbWVudCwgZXh0cmFjdEZpbGVFeHRlbnNpb24sIGZpeFNhZmFyaUNvbG9ucywgZ2VuSWQsIGdldElucHV0VHlwZSwgaWdub3JlQXR0cmlidXRlLCBpczJEQ2FudmFzQmxhbmssIGlzQ1NTSW1wb3J0UnVsZSwgaXNDU1NTdHlsZVJ1bGUsIGlzRWxlbWVudCwgaXNOYXRpdmVTaGFkb3dEb20sIGlzTm9kZU1ldGFFcXVhbCwgaXNTaGFkb3dSb290LCBtYXNrSW5wdXRWYWx1ZSwgbmVlZE1hc2tpbmdUZXh0LCByZWJ1aWxkLCBzZXJpYWxpemVOb2RlV2l0aElkLCBzbmFwc2hvdCwgc3RyaW5naWZ5UnVsZSwgc3RyaW5naWZ5U3R5bGVzaGVldCwgdG9Mb3dlckNhc2UsIHRyYW5zZm9ybUF0dHJpYnV0ZSwgdmlzaXRTbmFwc2hvdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gVGhpcyBleGFtcGxlIHN1cHBvcnQvZTJlLmpzIGlzIHByb2Nlc3NlZCBhbmRcbi8vIGxvYWRlZCBhdXRvbWF0aWNhbGx5IGJlZm9yZSB5b3VyIHRlc3QgZmlsZXMuXG4vL1xuLy8gVGhpcyBpcyBhIGdyZWF0IHBsYWNlIHRvIHB1dCBnbG9iYWwgY29uZmlndXJhdGlvbiBhbmRcbi8vIGJlaGF2aW9yIHRoYXQgbW9kaWZpZXMgQ3lwcmVzcy5cbi8vXG4vLyBZb3UgY2FuIGNoYW5nZSB0aGUgbG9jYXRpb24gb2YgdGhpcyBmaWxlIG9yIHR1cm4gb2ZmXG4vLyBhdXRvbWF0aWNhbGx5IHNlcnZpbmcgc3VwcG9ydCBmaWxlcyB3aXRoIHRoZVxuLy8gJ3N1cHBvcnRGaWxlJyBjb25maWd1cmF0aW9uIG9wdGlvbi5cbi8vXG4vLyBZb3UgY2FuIHJlYWQgbW9yZSBoZXJlOlxuLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL2NvbmZpZ3VyYXRpb25cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi8vIEltcG9ydCBjb21tYW5kcy5qcyB1c2luZyBFUzIwMTUgc3ludGF4OlxuaW1wb3J0IFwiQGNocm9tYXRpYy1jb20vY3lwcmVzcy9zdXBwb3J0XCI7XG5pbXBvcnQgJy4vY29tbWFuZHMnXG5cbi8vIEFsdGVybmF0aXZlbHkgeW91IGNhbiB1c2UgQ29tbW9uSlMgc3ludGF4OlxuLy8gcmVxdWlyZSgnLi9jb21tYW5kcycpIl0sIm5hbWVzIjpbInJlcXVpcmUiXSwic291cmNlUm9vdCI6IiJ9