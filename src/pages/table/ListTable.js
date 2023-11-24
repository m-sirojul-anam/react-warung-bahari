import React, { Component } from "react";
import { connect } from "react-redux";
import { showDashboard, showLogin } from "../redux";
import { showTableForm } from "../redux/table/TableAction";

const ListTable = (props) => {

    const handleAddTable = () => {
        props.setShowTableForm(true)
        props.showLogin(false)
        props.showDashboard(false)
    }

    return(
        <>
            <div className="container-md m-2 mx-auto">
            <h1 className="text-center"> List Data Table </h1>
                <div className="d-grid gap-2 col-4 mx-auto shadow-lg my-5">
                    <button id="add_data" className="btn btn-primary" type="button" onClick={()=>na}><i className="bi bi-plus-lg"></i> Add Data Table</button>
                </div>
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
                    {props.listTable.map((data, i) => {
                                return(
                                    <tr className="text-white" key={i}>
                                        <td id="number">{i+1}</td>
                                        <td id="first">{data.number}</td>
                                        {data.status === 'Unavailable' ? (
                                            <td id="last" style={{ color: 'red' }}>{data.status}</td>
                                        ) : (
                                            <td id="last" style={{ color: 'blue' }}>{data.status}</td>
                                        )}
                                        <td><button className="btn btn-danger">Delete</button></td>
                                    </tr>
                                )}
                            )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

    const mapStateToProps = (state) => {
        return {listTable : state.table.data}
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            showLogin : (set) => dispatch(showLogin(set)),
            showDashboard: (set) => dispatch(showDashboard(set)),
            setShowTableForm: (set)=> dispatch(showTableForm(set))
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(ListTable)