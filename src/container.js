import { IocContainer } from "./core/iocContainer.js";

import { ProjectsModel } from "./models/projectsModel.js";

import { ModalDialogService } from "./services/modalDialogService.js";
import { MessagingService } from "./services/messagingService.js";

import { ModalFactory } from "./factories/modalFactory.js";
import { MainViewFactory } from "./factories/mainViewFactory.js";

import { SidebarController } from "./controllers/sidebarController.js";
import { MainViewController } from "./controllers/mainViewController.js";
import { AddProjectController } from "./controllers/modals/addProjectController.js";
import { ProjectController } from "./controllers/projectController.js";

import { SidebarView } from "./views/sidebarView.js";
import { AddProjectView } from "./views/modals/addProjectView.js";
import { ProjectView } from "./views/projectView.js";

const container = new IocContainer();

container.registerSingleton(ProjectsModel);

container.registerSingleton(ModalDialogService);
container.registerSingleton(MessagingService);

container.registerSingleton(ModalFactory);
container.registerSingleton(MainViewFactory);

container.registerSingleton(SidebarController);
container.registerSingleton(MainViewController);
container.registerTransient(AddProjectController)
container.registerTransient(ProjectController);

container.registerTransient(SidebarView);
container.registerTransient(AddProjectView);
container.registerTransient(ProjectView);

export { container }
