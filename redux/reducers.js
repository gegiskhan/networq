const initialState = {
    html: ``,
    css: ``,
    js: ``
}

const CodeCombiner = (state = initialState, action) => {
    switch(action.type){
        case 'HTML_SUBMIT': return Object.assign({}, state, {html: action.html})
        case 'CSS_SUBMIT': return Object.assign({}, state, {css: action.css})
        case 'JS_SUBMIT': return Object.assign({}, state, {js: action.js})
        default: return state
    }
}

export default CodeCombiner