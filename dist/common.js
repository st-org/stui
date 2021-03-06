export function extractMainTouch(e) {
    let force = 0;
    let main;
    for (const touch of e.targetTouches) {
        if (touch.force > force) {
            force = touch.force;
            main = touch;
        }
    }
    return main;
}
export function createNamedStretchedElement(name, content) {
    const element = document.createElement('div');
    const nameEle = document.createElement('div');
    element.style.display = 'grid';
    element.style.margin = 'var(--length-gap) 0';
    nameEle.style.fontSize = 'var(--length-font-code)';
    nameEle.textContent = name;
    element.append(nameEle);
    element.append(content);
    return element;
}
