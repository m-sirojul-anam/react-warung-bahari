import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export const TableForm = ({bloc}) => {

    const navigate = useNavigate();

    const {params,
        getDataById,
        handleAdd,
        handleUpdate,
        loading} = bloc();

    useEffect(()=>{
        if(params.id){
            getTable();
        }
    },[])

    console.log(params);
    const getTable = async() => {
        const response = await getDataById();
        console.log("RESPONSE TABLE FORM :", response);
            formik.values.nomor = response.data.nomor;
            formik.values.status = response.data.status;
            formik.setFieldValue(response);
      }

    const formik = useFormik({
        initialValues: {
            id: params.id,
            nomor: "",
            status: "",
        },
        validationSchema: Yup.object({
            nomor: Yup.string().required("*Tidak Boleh Kosong!")
            .min(3, "*Minimum 3 Characters")
        }),
        onSubmit: () => {
            if(params.id){
                handleUpdate(formik.values)
            } else {
                handleAdd(formik.values)
            }
        }
    })


        return(
            <>
            {
                loading ? <h1>Loading...</h1> :
            
                <div className="center-food">
                    <h1>Add Data Table</h1>
                    <form onSubmit={formik.handleSubmit}>
                    <div className="text-field">
                            <input type="text" name='id' onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={formik.values.id}/>
                            <span></span>
                            <label>id</label>
                        </div>
                    <div className="text-field">
                            <input type="text" name='nomor' onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={formik.values.nomor}/>
                            <span></span>
                            <label>Nomor Table</label>
                        </div>
                        {
                            formik.errors.nomor && formik.touched.nomor && (
                                <span style={{ color: 'red', position: 'absolute', marginTop: '-35px', paddingBottom: '50px' }}>{formik.errors.nomor}</span>
                            )
                        }
                        
                        <div className="text-field">
                            <input type="text" name='status' onChange={formik.handleChange} defaultValue={formik.values.status}/>
                            <span></span>
                            <label>Status Table</label>
                        </div>
                        <button type="submit" className="btn-add btn-cancel" onClick={()=>navigate("/tables")}>Cancel</button>
                        <button type="submit" className="btn-add">Add</button>
                        <div className="signup-link">
                        </div>
                    </form>
                </div>
            }       
            </>
        )
}