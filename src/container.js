import { IocContainer } from "./core/iocContainer.js";
import { ProjectsModel } from "./models/projectsModel.js";
import { ModalDialogService } from "./services/modalDialogService.js";
import { MessagingService } from "./services/messagingService.js";
import { ModalFactory } from "./factories/modalFactory.js";
import { SidebarController } from "./controllers/sidebarController.js";
import { AddProjectController } from "./controllers/modals/addProjectController.js";
import { SidebarView } from "./views/sidebarView.js";
import { AddProjectView } from "./views/modals/addProjectView.js";

const container = new IocContainer();

container.registerSingleton(ProjectsModel);

container.registerSingleton(ModalDialogService);
container.registerSingleton(MessagingService);

container.registerSingleton(ModalFactory);

container.registerTransient(SidebarController)
container.registerTransient(AddProjectController)

container.registerTransient(SidebarView);
container.registerTransient(AddProjectView);

export { container }
