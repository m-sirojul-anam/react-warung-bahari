import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const TableList = ({bloc}) => {
    const navigate = useNavigate();

    const {
        list,
        getTable,
        handleDelete,
        loading
    } = bloc();

    useEffect(()=>{
        getTable();
    }, [])

    return(
        <>
            <div className="container-md m-2 mx-auto">
            <h1 className="text-center"> List Data Table </h1>
                <div className="d-grid gap-2 col-4 mx-auto shadow-lg my-5">
                    <button id="add_data" className="btn btn-primary" type="button" onClick={()=>navigate("form")}><i className="bi bi-plus-lg"></i> Add Data Table</button>
                </div>
                {loading ? <h1>Loading...</h1> : 
                <table className="table">
                    <thead className="table-dark table-header">
                    <tr className="text-white">
                        <td>#</td>
                        <td>Number</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                    </thead>
                    <tbody id="table_body">
                    {list.map((data, i) => {
                                return(
                                    <tr className="text-white" key={i}>
                                        <td id="number">{data.id}</td>
                                        <td id="first">{data.nomor}</td>
                                        {data.status === 'Unavailable' ? (
                                            <td id="last" style={{ color: 'red' }}>{data.status}</td>
                                        ) : (
                                            <td id="last" style={{ color: 'blue' }}>{data.status}</td>
                                        )}
                                        <td>
                                                <button className="btn btn-danger" onClick={() => {handleDelete(data)}}>Delete</button>
                                                <button className="btn btn-primary" onClick={()=> navigate(`/tables/${data.id}`)}>Update</button>
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