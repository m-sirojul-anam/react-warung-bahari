import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export const MenuForm = ({bloc}) => {

    const nav = useNavigate();

    const {params,
        getDataById,
        handleAdd,
        handleUpdate,
        loading} = bloc();

    useEffect(()=>{
        if(params.id){
            getMenu();
        }
    },[])

    console.log(params);
    const getMenu = async() => {
        const response = await getDataById();
            formik.values.name = response.data.name;
            formik.values.price = response.data.price;
            formik.setFieldValue(response);
      }

    const formik = useFormik({
        initialValues: {
            id: params.id,
            name: "",
            price: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("*Tidak Boleh Kosong!")
            .min(5, "*Minimum 5 Characters"),
            price: Yup.string().required("*Tidak Boleh Kosong!")
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
                    <h1>Add Data Menu</h1>
                    <form onSubmit={formik.handleSubmit}>
                    <div className="text-field">
                            <input type="text" name='id' onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={formik.values.id}/>
                            <span></span>
                            <label>id</label>
                        </div>
                    <div className="text-field">
                            <input type="text" name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={formik.values.name}/>
                            <span></span>
                            <label>Menu Name</label>
                        </div>
                        {
                            formik.errors.name && formik.touched.name && (
                                <span style={{ color: 'red', position: 'absolute', marginTop: '-35px', paddingBottom: '50px' }}>{formik.errors.name}</span>
                            )
                        }
                        
                        <div className="text-field">
                            <input type="text" name='price' onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={formik.values.price}/>
                            <span></span>
                            <label>Menu Price</label>
                        </div>
                        {
                            formik.errors.price && formik.touched.price && (
                                <span style={{ color: 'red', position: 'absolute', marginTop: '-35px', paddingBottom: '50px' }}>{formik.errors.price}</span>
                            )
                        }
                        <button type="submit" className="btn-add btn-cancel" onClick={()=>nav("/menus")}>Cancel</button>
                        <button type="submit" className="btn-add">Add</button>
                        <div className="signup-link">
                        </div>
                    </form>
                </div>
            }       
            </>
        )
}