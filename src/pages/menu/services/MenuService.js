import client from "../../../shared/http-client/Client";


const MenuService = () => {
    const getMenus = async () => {
        const response = await client.get("/api/menus");
        return response;
    }

    async function getMenu(id){
        const response = await client.get(`/api/menus/${id}`);
        return response;
    }

    async function createMenu(data){
        const response = await client.post(`/api/menus`, data);
        return response;  
    }

    async function updateMenu(data){
        const response = await client.put(`/api/menus`, data);
        return response;
    }

    async function deleteMenu(id){
        const response = await client.delete(`/api/menus/${id}`)
        return response;
    }

    return {
        getMenus,
        getMenu,
        createMenu,
        updateMenu,
        deleteMenu
    }
}

export default MenuService;