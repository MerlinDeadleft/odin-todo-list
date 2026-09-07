import "./css/styles.css";

// Convert images to css masks to enable recoloring of svg images
document.querySelectorAll("img.auto-mask-icon")
    .forEach(img => {
        const imageSource = img.getAttribute("src");
        img.style.maskImage = `url(${imageSource})`;
    });