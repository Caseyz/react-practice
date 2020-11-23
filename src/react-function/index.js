
/**
 * 文本类型转为对象
 * @param {文本节点} text 
 */
function createTextElement(text) {
    return {
        type: 'TEXT',
        props: {
            nodeValue: text,
            children: []
        }
    }
}

/**
 * 
 * @param {容器类型} type 
 * @param {属性} props 
 * @param  {子标签} children 
 */
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

/**
 * 
 * @param {虚拟dom} vdom 
 * @param {容器dom对象} container 
 */
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