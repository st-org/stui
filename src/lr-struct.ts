import {extractMainTouch} from './common'
export function createLRStruct() {
    const element = document.createElement('div')
    const main = document.createElement('main')
    const button = document.createElement('button')
    const side = document.createElement('aside')
    const sideContent = document.createElement('div')
    const sash = document.createElement('div')
    element.classList.add('lr-struct')
    button.classList.add('show-icon', 'menu')
    sideContent.classList.add('content')
    sash.classList.add('sash')
    element.append(main)
    element.append(button)
    element.append(side)
    side.append(sideContent)
    side.append(sash)
    let sashing = false
    let sashX = 0
    let sideWidth = side.offsetWidth
    button.addEventListener('click', () => {
        side.classList.add('active')
    })
    main.addEventListener('click', () => {
        side.classList.remove('active')
    })
    sash.addEventListener('mousedown', e => {
        e.preventDefault()
        sashing = true
        sashX = e.clientX
        sideWidth = side.offsetWidth
        element.classList.add('sashing')
    })
    sash.addEventListener('touchstart', e => {
        if (e.cancelable) {
            e.preventDefault()
        }
        sashing = true
        const touch = extractMainTouch(e)
        if (touch === undefined) {
            return
        }
        sashX = touch.clientX
        sideWidth = side.offsetWidth
        element.classList.add('sashing')
    }, {passive: false})
    addEventListener('mousemove', e => {
        if (!sashing || !element.isConnected) {
            return
        }
        e.preventDefault()
        element.style.setProperty('--length-width-side', `${Math.min(Math.max(sideWidth + e.clientX - sashX, 30), element.offsetWidth)}px`)
        if (side.offsetWidth <= 50) {
            sideContent.classList.add('vanished')
        } else {
            sideContent.classList.remove('vanished')
        }
    })
    sash.addEventListener('touchmove', e => {
        if (!sashing) {
            return
        }
        if (e.cancelable) {
            e.preventDefault()
        }
        const touch = extractMainTouch(e)
        if (touch === undefined) {
            return
        }
        element.style.setProperty('--length-width-side', `${Math.min(Math.max(sideWidth + touch.clientX - sashX, 30), element.offsetWidth)}px`)
        if (side.offsetWidth <= 50) {
            sideContent.classList.add('vanished')
        } else {
            sideContent.classList.remove('vanished')
        }
    }, {passive: false})
    const end = () => {
        if (sashing !== true || !element.isConnected) {
            return
        }
        sashing = false
        element.classList.remove('sashing')
    }
    addEventListener('mouseup', end)
    addEventListener('touchend', end)
    return {
        element,
        main,
        sideContent
    }
}