import { IocContainer } from "./core/iocContainer.js";
import { ProjectsModel } from "./models/projectsModel.js";
import { ModalDialogService } from "./services/modalDialogService.js";
import { ModalFactory } from "./factories/modalFactory.js";
import { SidebarController } from "./controllers/sidebarController.js";
import { AddProjectController } from "./controllers/addProjectController.js";
import { SidebarView } from "./views/sidebarView.js";
import { AddProjectView } from "./views/addProjectView.js";

const container = new IocContainer();

container.registerSingleton(ProjectsModel);

container.registerSingleton(ModalDialogService);

container.registerSingleton(ModalFactory);

container.registerTransient(SidebarController)
container.registerTransient(AddProjectController)

container.registerTransient(SidebarView);
container.registerTransient(AddProjectView);

export { container }
