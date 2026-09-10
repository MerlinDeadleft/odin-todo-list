import CollapseIcon from "src/assets/icons/arrow-collapse-left.svg";
import ExpandIcon from "src/assets/icons/arrow-expand-right.svg";
import { ViewTypes } from "src/utils/enums.js";
import { EventDispatcher } from "src/core/EventDispatcher.js";

class SidebarView {
    #sidebar;
    #collapseSidebarButton;
    #collapseSidebarIcon;
    #sidebarCollapsed;
    #addProjectButton;

    #currentSelectedViewButton = null;

    onChangeViewClicked = new EventDispatcher();
    onAddProjectButtonClicked = new EventDispatcher();

    constructor() {
        this.#sidebar = document.querySelector("#sidebar");
        this.#collapseSidebarButton = document.querySelector("#sidebar-collapse-button");
        this.#collapseSidebarIcon = document.querySelector("#sidebar-collapse-icon");
        this.#sidebarCollapsed = false;
        this.#addProjectButton = document.querySelector("#add-project-button");

        this.#sidebar.addEventListener("click", clickEvent => this.#handleSidebarButtonClicked(clickEvent));
    }

    selectDefaultView() {
        const defaultProjectButton = document.querySelector(`.view-button[data-view-type='${ViewTypes.PROJECT}']`);
        defaultProjectButton.click();
    }

    /**
     * @param {Event} clickEvent 
     */
    #handleSidebarButtonClicked(clickEvent) {
        if(clickEvent.target === this.#collapseSidebarButton) {
            this.#handleCollapseSidebarButtonClicked();
        } else if(clickEvent.target === this.#addProjectButton) {
            this.#handleAddProjectButtonClicked();
        } else {
            this.#handleViewButtonClicked(clickEvent);
        }
    }

    #handleCollapseSidebarButtonClicked() {
        this.#sidebarCollapsed = !this.#sidebarCollapsed;

        if(this.#sidebarCollapsed) {
            this.#sidebar.dataset.collapsed = "";
            this.#collapseSidebarIcon.style.maskImage = `url(${ExpandIcon})`;
            this.#collapseSidebarIcon.setAttribute("title", "Expand Sidebar");
        } else {
            delete this.#sidebar.dataset.collapsed;
            this.#collapseSidebarIcon.style.maskImage = `url(${CollapseIcon})`;
            this.#collapseSidebarIcon.setAttribute("title", "Collapse Sidebar");
        }
    }

    /**
     * @param {Event} clickEvent 
     */
    #handleViewButtonClicked(clickEvent) {
        if(!clickEvent.target.classList.contains("view-button") || this.#currentSelectedViewButton === clickEvent.target) return;

        if(this.#currentSelectedViewButton !== null) {
            delete this.#currentSelectedViewButton.dataset.selected;
            this.#currentSelectedViewButton = null;
        }

        this.#currentSelectedViewButton = clickEvent.target;
        this.#currentSelectedViewButton.dataset.selected = "";

        this.onChangeViewClicked.dispatchEvent(this.#currentSelectedViewButton.dataset.viewType, this.#currentSelectedViewButton.dataset.projectId);
    }

    #handleAddProjectButtonClicked() {
        this.onAddProjectButtonClicked.dispatchEvent();
    }
}

export { SidebarView }
