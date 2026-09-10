import "src/css/styles.css";
import { SidebarView } from "src/views/sidebarView.js";

// Convert images to css masks to enable recoloring of svg images
document.querySelectorAll("img.auto-mask-icon")
    .forEach(img => {
        const imageSource = img.getAttribute("src");
        img.style.maskImage = `url(${imageSource})`;
    });

const sidebarView = new SidebarView();
sidebarView.selectDefaultView();
