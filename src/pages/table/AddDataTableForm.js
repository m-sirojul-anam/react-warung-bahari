import React, { useState } from "react";
import { connect } from "react-redux";
import { addDataTable, showDashboard } from "../redux";
import { showTableForm } from "../redux/table/TableAction";

const AddDataTableForm = (props) => {
    const [disableBtn, setDisableBtn] = useState(true)
    const [formTable, setFormTable] = useState({id: "", number: "", status: "Available"})

    const handleCancel = () => {
        props.showDashboard(true)
        props.cancelTableForm(false)
    }

    const handleSubmit = (e) => {
        props.addDataTable(this.state.formTable)
        props.showDashboard(true)
        e.preventDefault();
    }

    const handleChange = (e) => {
        if(e.target.name === 'id'){
            setFormTable({...this.state.formTable, id: e.target.value})
          }else if(e.target.name === 'number'){
            setFormTable({...this.state.formTable, number: e.target.value})
          } else if(e.target.name === 'status'){
            setFormTable({...this.state.formTable, status: e.target.value})
          } else {
            setFormTable({[e.target.name] : e.target.value})
          }
    }

    return(
    
        <>
            <div className="center-food" style={{ marginBottom: "10%" }}>
                <h1>Add Data Table</h1>
                <form onSubmit={handleSubmit}>
                    <div className="text-field">
                        <input type="number" name='id' onChange={handleChange}  />
                        <span></span>
                        <label>Id</label>
                    </div>
                    <div className="text-field">
                        <input type="text" name='number' onChange={handleChange} required/>
                        <span></span>
                        <label>Number Table</label>
                    </div>
                        <label>Status</label>
                    <div className="text-field">
                        <select name="status" className="form-select" aria-label="Default select example" 
                        onChange={handleChange} style={{ border:"none" }}>
                            <option value={formTable.status}>Available</option>
                            <option value="Unavailable">Unavailable</option>
                        </select>
                    </div>
                    <button type="submit" className="btn-add btn-cancel" onClick={handleCancel}>Cancel</button>
                    <button type="submit" className="btn-add">Add</button>
                    <div className="signup-link">
                    </div>
                </form>
            </div>
        </>
    )
    
}

const mapStateToProps = (state) => {
    return {
        dataId: state.table.data,
        dataNumber: state.table.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addDataTable: (data) => dispatch(addDataTable(data)),
        cancelTableForm: set => dispatch(showTableForm(set)),
        showDashboard: (set) => dispatch(showDashboard(set))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDataTableForm)