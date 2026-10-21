import "src/css/styles.css";
import { container } from "./container.js";
import { SidebarController } from "./controllers/sidebarController.js";
import { ProjectsModel } from "./models/projectsModel.js";

// Convert images to css masks to enable recoloring of svg images
document.querySelectorAll("img.auto-mask-icon")
    .forEach(img => {
        const imageSource = img.getAttribute("src");
        img.style.maskImage = `url(${imageSource})`;
    });

/** @type{ProjectsModel} */
const projectsModel = container.resolveDependencies(ProjectsModel);
projectsModel.addProject();

const sidebarController = container.resolveDependencies(SidebarController);
sidebarController.activate();
