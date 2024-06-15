import { useState } from "react";
export function GetShoppingList() {
    const [listKey, setListKey] = useState('');
    const [listData, setListData] = useState([]);

    const list = listData.map(item => {
        return <li>{item}</li>
    });
    

    function getListByKey() {
        console.log(listKey);
        const list = ['grapes', 'bowls', 'onions'];
        setListData(list);
    }
    
    return <>

    <input value={listKey}></input>
    <button onClick={getListByKey}>Retrieve List</button>
    <ul>
        {list}
    
    </ul>
    </>;
}
