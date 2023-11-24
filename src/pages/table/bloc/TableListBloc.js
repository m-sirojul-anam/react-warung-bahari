import { useState } from "react";

const TableListBloc = (menuRepository) => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    let {
        getTables,
        deleteTable
    } = menuRepository()

    const getTable = async () => {
        try{
            setLoading(true);
            const response = await getTables();
            console.log("DATA", response);
            setList(response.data.data)
            setLoading(false);
        }catch(error) {
            console.error(error);
        }
    }

    const handleDelete = async (e) => {
        if(window.confirm(`Are you sure to delete this ${e.name}`)){
        await deleteTable(e.id)
        getTables();
        }else{
            getTables();
        }
    }

    return {
        list,
        getTable,
        handleDelete,
        loading
    }

}

export default TableListBloc;