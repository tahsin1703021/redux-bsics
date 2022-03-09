const ADD_BUG = 'ADD_BUG';
const DELETE_BUG = 'DELETE_BUG';
const RESOLVE_BUG = 'RESOLVE_BUG';

//actions

export function add_bug(name){
    return {
        type: ADD_BUG,
        payload: {
            name
        }
    }
};
export function remove_bug(id){
    return {
        type: DELETE_BUG,
        payload: {
            id
        }
    }
};
export function resolve_bug(id){
    return {
        type: RESOLVE_BUG,
        payload: {
            id
        }
    }
};
//reducer
let bugId = 0;

export default function reducer(state = [], action) {
   
    switch(action.type){
        case ADD_BUG:
            return[
                ...state, 
                {id: ++bugId, name: action.payload.name, resolved: false}
            ];
        case DELETE_BUG:
            return state.filter((bug) => bug.id !== action.payload.id);
        case RESOLVE_BUG:
            const resolved_bug = state.find(bug => bug.id == action.payload.id);
            resolved_bug.resolved = !resolved_bug.resolved;
            return state;
        default:
            return state;
    }

}