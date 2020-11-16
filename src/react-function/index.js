
// 文本类型转为对象
function createTextElement(text) {
    return {
        type: 'TEXT',
        props: {
            nodeValue: text,
            children: []
        }
    }
}

function createElement(type, props, ...children) {
    delete props.__source
    return {
        type,
        props: {
            ...props,
            children: children.map(el => (typeof el === 'object' ? el : createTextElement(children)))
        }
    }
}

function render(vdom, container) {
    // container.innerHTML = `<pre>${JSON.stringify(vdom, null, 2)}</pre>`
    let dom = vdom.type === "TEXT"
        ? document.createTextNode('')
        : document.createElement(vdom.type)

    Object.keys(vdom.props)
        .filter(el => el !== 'children')
        .forEach(el => {
            dom[el] = vdom.props[el]
        })

    vdom.props.children.map(el => {
        render(el, dom)
    })

    container.appendChild(dom)
}

export default {
    createElement,
    render
}