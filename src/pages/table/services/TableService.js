import client from "../../../shared/http-client/Client";


const TableService = () => {
    const getTables = async () => {
        const response = await client.get("/api/tables");
        return response;
    }

    async function getTable(id){
        const response = await client.get(`/api/tables/${id}`);
        return response;
    }

    async function createTable(data){
        const response = await client.post(`/api/tables`, data);
        return response;  
    }

    async function updateTable(data){
        const response = await client.put(`/api/tables`, data);
        return response;
    }

    async function deleteTable(id){
        const response = await client.delete(`/api/menus/${id}`)
        return response;
    }

    return {
        getTables,
        getTable,
        createTable,
        updateTable,
        deleteTable
    }
}

export default TableService;