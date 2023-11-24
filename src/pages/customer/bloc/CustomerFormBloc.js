import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CustomerFormBloc = (customerRepository) => {

  const [loading, setLoading] = useState(false);

  let {
    getCustomer,
    createCustomer,
    updateCustomer,
  } = customerRepository();

    let params = useParams();
    const navigate = useNavigate();

    const getDataById = async() => {
        const response = await getCustomer(params.id)
        return response;
      }
      
    
      const handleUpdate = async(values) => {
        try{
          setLoading(true);
        const res =  await updateCustomer(values)
        console.log("SUBMIT RES: ",res);
        navigate("/customers")
        setLoading(false)
        }catch(error){
          console.log(error);
        }
      }
    
      const handleAdd = async (values) => {
        try{
          setLoading(true)
          console.log("LOADING: ", loading);
           let res = await createCustomer(values)
          navigate("/customers");
          setLoading(false)
        } catch (error) {
          console.error(error);
        }
    }

    return {
        params,
        getDataById,
        handleAdd,
        handleUpdate,
        loading
    }
}

export default CustomerFormBloc;