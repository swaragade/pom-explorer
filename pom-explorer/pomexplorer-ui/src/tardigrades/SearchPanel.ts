"use strict";

import { tardigradeEngine } from "../../node_modules/tardigrade/target/engine/engine";
import { ElementNode, TemplateNode, TextNode, Cardinal, PointInfo } from "../../node_modules/tardigrade/target/engine/model";
import { tardigradeParser } from "../../node_modules/tardigrade/target/engine/parser";
import { createElement, domChain, indexOf } from "../../node_modules/tardigrade/target/engine/runtime";



export interface SearchPanelTemplateDto {
    _root?: string;
    input?: any;
"@input"?: any;

}

export interface SearchPanelTemplateElement {
    _root(): HTMLElement;
    input(): HTMLInputElement;
}

class SearchPanelTemplate {
    ensureLoaded() {
    }

    constructor() {
        

        tardigradeEngine.addTemplate("SearchPanel", new ElementNode(null, <Cardinal>0, [""], "div", {}, [new ElementNode(null, <Cardinal>0, [""], "div", {"class": "mdl-textfield mdl-js-textfield mdl-textfield--floating-label"}, [new ElementNode("input", <Cardinal>0, [""], "input", {"class": "mdl-textfield__input", "type": "text", "id": "searchBox"}, []), new ElementNode(null, <Cardinal>0, [""], "label", {"class": "mdl-textfield__label", "for": "searchBox"}, [new TextNode("Project search...")])]), new ElementNode(null, <Cardinal>0, [""], "div", {"class": "mdl-button mdl-button--icon"}, [new ElementNode(null, <Cardinal>0, [""], "i", {"class": "material-icons"}, [new TextNode("search")])])]));
    }

    buildHtml(dto: SearchPanelTemplateDto) {
        return tardigradeEngine.buildHtml("SearchPanel", dto);
    }

    buildElement(dto: SearchPanelTemplateDto) {
        return createElement(this.buildHtml(dto));
    }

    createElement(dto: SearchPanelTemplateDto): SearchPanelTemplateElement {
        return this.of(this.buildElement(dto));
    }

    of(rootElement: HTMLElement): SearchPanelTemplateElement {
        let domlet = {
            _root() { return rootElement; },

            input(): HTMLInputElement{
return <HTMLInputElement>tardigradeEngine.getPoint(rootElement, "SearchPanel", { "input": 0 });
}
        };

        return domlet;
    }
}

export var searchPanelTemplate = new SearchPanelTemplate();