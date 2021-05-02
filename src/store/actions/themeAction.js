export const ChangeTheme = (val1) =>{
    return (dispatch) =>{
        dispatch({type: 'CHANGE_THEME', val: val1});
    }
}