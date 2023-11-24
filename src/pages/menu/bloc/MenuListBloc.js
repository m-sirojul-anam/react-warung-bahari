import { useState } from "react";

const MenuListBloc = (menuRepository) => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    let {
        getMenus,
        deleteMenu
    } = menuRepository()

    const getMenu = async () => {
        try{
            setLoading(true);
            const response = await getMenus();
            console.log("DATA", response);
            setList(response.data.data)
            setLoading(false);
        }catch(error) {
            console.error(error);
        }
    }

    const handleDelete = async (e) => {
        if(window.confirm(`Are you sure to delete this ${e.name}`)){
        await deleteMenu(e.id)
        getMenu();
        }else{
            getMenu();
        }
    }

    return {
        list,
        getMenu,
        handleDelete,
        loading
    }

}

export default MenuListBloc;