import { all } from './lib/css';
export function init(options = {}) {
    const root = options.root ?? window;
    const { document } = root;
    if (document.head.querySelector('meta[charset]') === null) {
        const meta = document.createElement('meta');
        meta.setAttribute('charset', 'utf8');
        document.head.append(meta);
    }
    if (document.head.querySelector('meta[name="viewport"]') === null) {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0';
        document.head.append(meta);
    }
    const style = document.createElement('style');
    style.textContent = all;
    document.head.append(style);
    if (options.css !== undefined) {
        const style = document.createElement('style');
        style.textContent = options.css;
        document.head.append(style);
    }
}
