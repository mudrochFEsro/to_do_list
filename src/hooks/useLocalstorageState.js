import {useState, useEffect} from "react";
function UseLocalstorageState(key,defaultValue) {
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key)) || String(defaultValue);
        } catch (e){
            val = defaultValue;
        }
        return val
    })
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    },[key,state])
    return [state, setState]
}
export default UseLocalstorageState;