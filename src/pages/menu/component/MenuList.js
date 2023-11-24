import { useEffect } from "react";
import { useNavigate } from "react-router-dom"


export const MenuList = ({bloc}) => {
    const navigate = useNavigate();

const { list,
        getMenu,
        handleDelete,
        loading
    } = bloc();

    useEffect(()=>{
        getMenu();
    }, [])

    return(
        <>
            <div className="container-md m-2 mx-auto">
                    <h1 className="text-center"> List Data Menu </h1>
                    <div className="d-grid gap-2 col-4 mx-auto shadow-lg my-5">
                        <button id="add_data" className="btn btn-primary" type="button" onClick={()=>navigate("form")}><i className="bi bi-plus-lg"></i> Add Data Menu</button>
                    </div>
                    {
                        loading ? <h2>Loading...</h2> :
                    
                    <table className="table">
                        <thead className="table-dark table-header">
                        <tr className="text-white">
                            <td>#</td>
                            <td>Product Name</td>
                            <td>Product Price</td>
                            <td>Action</td>
                        </tr>
                        </thead>
                        <tbody id="table_body">
                            
                                {
                                list.map((data, i) => {
                                    return(
                                        <tr className="text-white" key={i}>
                                            <td id="number">{data.id}</td>
                                            <td id="first">{data.name}</td>
                                            <td id="last">{data.price}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => {handleDelete(data)}}>Delete</button>
                                                <button className="btn btn-primary" onClick={()=> navigate(`/menus/${data.id}`)}>Update</button>
                                            </td>
                                        </tr>
                                    )}
                                )}
                        </tbody>
                    </table>
                    }
                </div>
        </>
    )
}