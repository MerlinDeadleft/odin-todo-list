function createMaskedIconImage(image, height = 50) {
    const icon = document.createElement("img");
    icon.classList.add("auto-mask-icon");
    icon.src = image;
    icon.height = height;
    icon.alt = "";
    icon.style.maskImage = `url(${image})`;

    return icon;
}

export { createMaskedIconImage }
