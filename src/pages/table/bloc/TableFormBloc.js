import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TableFormBloc = (tableRepository) => {

  const [loading, setLoading] = useState(false);

  let {
    getTable,
    createTable,
    updateTable,
  } = tableRepository();

    let params = useParams();
    const navigate = useNavigate();

    const getDataById = async() => {
        const response = await getTable(params.id)
        return response;
      }
      
    
      const handleUpdate = async(values) => {
        try{
          setLoading(true);
        const res =  await updateTable(values)
        console.log("SUBMIT RES: ",res);
        navigate("/tables")
        setLoading(false)
        }catch(error){
          console.log(error);
        }
      }
    
      const handleAdd = async (values) => {
        try{
          setLoading(true)
          console.log("LOADING: ", loading);
           let res = await createTable(values)
          navigate("/tables");
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

export default TableFormBloc;