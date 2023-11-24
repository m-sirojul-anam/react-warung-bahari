import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export const CustomerForm = ({bloc}) => {

    const nav = useNavigate();

    const {params,
        getDataById,
        handleAdd,
        handleUpdate,
        loading} = bloc();

    useEffect(()=>{
        if(params.id){
            getCustomer();
        }
    },[])

    const getCustomer = async() => {
        const response = await getDataById();
            formik.values.nama = response.data.nama;
            formik.values.email = response.data.email;
            formik.values.alamat = response.data.alamat;
            formik.setFieldValue(response);
      }

    const formik = useFormik({
        initialValues: {
            id: params.id,
            nama: "",
            email: "",
            alamat: ""
        },
        validationSchema: Yup.object({
            nama: Yup.string().required("*Tidak Boleh Kosong!")
            .min(5, "*Minimum 5 Characters"),
            email: Yup.string().required("*Email tidak boleh kosong"),
            alamat: Yup.string().required("*Alamat Tidak Boleh Kosong")
            .min(10, "*Minimum 10 Character")
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
                    <h1>Add Data Customer</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="text-field">
                            <input type="text" name='id' onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={formik.values.id}/>
                            <span></span>
                            <label>id</label>
                        </div>
                        <div className="text-field">
                            <input type="text" name='nama' onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={formik.values.nama}/>
                            <span></span>
                            <label>Customer Name</label>
                        </div>
                        {
                            formik.errors.nama && formik.touched.nama && (
                                <span style={{ color: 'red', position: 'absolute', marginTop: '-35px', paddingBottom: '50px' }}>{formik.errors.nama}</span>
                            )
                        }
                        
                        <div className="text-field">
                            <input type="text" name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={formik.values.email}/>
                            <span></span>
                            <label>Customer Email</label>
                        </div>
                        {
                            formik.errors.email && formik.touched.email && (
                                <span style={{ color: 'red', position: 'absolute', marginTop: '-35px', paddingBottom: '50px' }}>{formik.errors.email}</span>
                            )
                        }

                        <div className="text-field">
                            <input type="text" name='alamat' onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={formik.values.alamat}/>
                            <span></span>
                            <label>Customer Address</label>
                        </div>
                        {
                            formik.errors.alamat && formik.touched.alamat && (
                                <span style={{ color: 'red', position: 'absolute', marginTop: '-35px', paddingBottom: '50px' }}>{formik.errors.alamat}</span>
                            )
                        }

                        <button type="submit" className="btn-add btn-cancel" onClick={()=>nav("/customers")}>Cancel</button>
                        <button type="submit" className="btn-add">Add</button>
                        <div className="signup-link">
                        </div>
                    </form>
                </div>
            }       
            </>
        )
}