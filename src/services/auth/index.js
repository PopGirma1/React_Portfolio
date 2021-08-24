export const getLocalValue = (id) => {
    /*
    * return local storage item, and if there is no item, return null
    * only the checked items will have a value,
    * */
    const tokenString = localStorage.getItem(id);
    const value = JSON.parse(tokenString);
    return value ? value : null
};
export const setLocalValue = (id) => {
    /*
    * setItem for checked ones and remove from localstorage for unchecked items
    * */
    const item = localStorage.getItem(id);
    if (item) {
        localStorage.removeItem(id);
    } else {
        localStorage.setItem(id, JSON.stringify(true));
    }

};
