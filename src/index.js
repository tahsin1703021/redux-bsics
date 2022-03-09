import store from "./store";
import * as functions from './bugs';


// const unsubscribe = store.subscribe(()=> {
//         console.log('state changed', store.getState());
// });

store.subscribe(()=> console.log('state changed', store.getState()));


store.dispatch(functions.add_bug('BUG1'));
store.dispatch(functions.add_bug('BUG2'));
store.dispatch(functions.add_bug('BUG3'));
store.dispatch(functions.remove_bug(3));
// unsubscribe();

store.dispatch(functions.resolve_bug(2));


console.log(store.getState());