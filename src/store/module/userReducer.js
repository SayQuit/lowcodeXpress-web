const userInitialState = null

function userReducer(state = userInitialState, action) {
    switch (action.type) {
        case 'setUser': {
            return {
                ...action.user
            }
        }
        default: {
            return state
        }
    }
}
export default userReducer


