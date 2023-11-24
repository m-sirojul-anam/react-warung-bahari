import { useState } from "react";

const CustomerListBloc = (customerRepository) => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    let {
        getCustomers,
        deleteCustomer
    } = customerRepository()

    const getCustomer = async () => {
        try{
            setLoading(true);
            const response = await getCustomers();
            console.log("DATA", response);
            setList(response.data.data)
            setLoading(false);
        }catch(error) {
            console.error(error);
        }
    }

    const handleDelete = async (e) => {
        if(window.confirm(`Are you sure to delete this ${e.name}`)){
        await deleteCustomer(e.id)
        getCustomer();
        }else{
            getCustomer();
        }
    }

    return {
        list,
        getCustomer,
        handleDelete,
        loading
    }

}

export default CustomerListBloc;