const tokenInitialState = null

function tokenReducer(state = tokenInitialState, action) {
    switch (action.type) {
        case 'setToken': {
            return action.token
        }
        default: {
            return state
        }
    }
}
export default tokenReducer


