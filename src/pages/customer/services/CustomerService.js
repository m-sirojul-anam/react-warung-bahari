import client from "../../../shared/http-client/Client";


const CustomerService = () => {
    const getCustomers = async () => {
        const response = await client.get("/api/customers");
        return response;
    }

    async function getCustomer(id){
        const response = await client.get(`/api/customers/${id}`);
        return response;
    }

    async function createCustomer(data){
        const response = await client.post(`/api/customers`, data);
        return response;  
    }

    async function updateCustomer(data){
        const response = await client.put(`/api/customers`, data);
        return response;
    }

    async function deleteCustomer(id){
        const response = await client.delete(`/api/customers/${id}`)
        return response;
    }

    return {
        getCustomers,
        getCustomer,
        createCustomer,
        updateCustomer,
        deleteCustomer
    }
}

export default CustomerService;