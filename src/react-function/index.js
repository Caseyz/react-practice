
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
            // 事件处理 属性兼容
            dom[el] = vdom.props[el]
        })

    vdom.props.children.map(el => {
        render(el, dom)
    })

    container.appendChild(dom)
}



// 下一个单元任务
// render会初始化第一个任务
let nextUnitOfWork = null

// 调度我们的diff或者渲染任务
function workLoop(IdleDeadline) {
    // 又下一个任务，并且当前帧还没有结束
    while (nextUnitOfWork && IdleDeadline.timeRemaining() > 1) {
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
    }
    requestIdleCallback()
}

// 启动空闲时间处理
requestIdleCallback(workLoop)

// 获取下一个任务
function performUnitOfWork(fiber){
    // 根据当前任务获取下一个任务
}



export default {
    createElement,
    render
}