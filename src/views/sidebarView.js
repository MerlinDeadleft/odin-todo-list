import CollapseIcon from "../assets/icons/arrow-collapse-left.svg";
import ExpandIcon from "../assets/icons/arrow-expand-right.svg";
import { ViewTypes } from "../utils/enums.js";

class SidebarView {
    sidebar;
    collapseSidebarButton;
    collapseSidebarIcon;
    sidebarCollapsed;
    addProjectButton;

    viewButtons;
    currentSelectedViewButton = null;

    constructor() {
        this.sidebar = document.querySelector("#sidebar");
        this.collapseSidebarButton = document.querySelector("#sidebar-collapse-button");
        this.collapseSidebarIcon = document.querySelector("#sidebar-collapse-icon");
        this.sidebarCollapsed = false;

        this.collapseSidebarButton.addEventListener("click", _ => this.handleCollapseSidebarButtonClicked());

        this.viewButtons = document.querySelectorAll(".view-button");
        this.viewButtons.forEach(viewButton => {
            viewButton.addEventListener("click", clickEvent => this.handleViewButtonClicked(clickEvent));

            if(this.currentSelectedViewButton === null && viewButton.dataset.viewType === ViewTypes.PROJECT) {
                viewButton.click();
            }
        });

        this.addProjectButton = document.querySelector("#add-project-button");
        this.addProjectButton.addEventListener("click", _ => this.handleAddProjectButtonClicked());
    }

    handleCollapseSidebarButtonClicked() {
        this.sidebarCollapsed = !this.sidebarCollapsed;

        if(this.sidebarCollapsed) {
            this.sidebar.dataset.collapsed = "";
            this.collapseSidebarIcon.style.maskImage = `url(${ExpandIcon})`;
            this.collapseSidebarIcon.setAttribute("title", "Expand Sidebar");
        } else {
            delete this.sidebar.dataset.collapsed;
            this.collapseSidebarIcon.style.maskImage = `url(${CollapseIcon})`;
            this.collapseSidebarIcon.setAttribute("title", "Collapse Sidebar");
        }
    }

    /**
     * @param {Event} clickEvent 
     */
    handleViewButtonClicked(clickEvent) {
        if(this.currentSelectedViewButton === clickEvent.target) return;

        if(this.currentSelectedViewButton !== null) {
            delete this.currentSelectedViewButton.dataset.selected;
            this.currentSelectedViewButton = null;
        }

        this.currentSelectedViewButton = clickEvent.target;
        this.currentSelectedViewButton.dataset.selected = "";

        //TODO: Dispatch view changed event
    }

    handleAddProjectButtonClicked(){
        //TODO: Dispatch show add project modal
    }
}

export { SidebarView }
