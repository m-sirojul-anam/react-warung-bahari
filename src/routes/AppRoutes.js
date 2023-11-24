import { Outlet, Route, Routes } from "react-router-dom";
import { PageNotFound } from "../layout/PageNotFound";
import CustomerListBloc from "../pages/customer/bloc/CustomerListBloc";
import { CustomerList } from "../pages/customer/component/CustomerList";
import Home from "../pages/home/Home";
import MenuFormBloc from "../pages/menu/bloc/MenuFormBloc";
import MenuListBloc from "../pages/menu/bloc/MenuListBloc";
import { MenuForm } from "../pages/menu/component/MenuForm";
import { MenuList } from "../pages/menu/component/MenuList";
import MenuService from "../pages/menu/services/MenuService";
import TableFormBloc from "../pages/table/bloc/TableFormBloc";
import TableListBloc from "../pages/table/bloc/TableListBloc";
import { TableForm } from "../pages/table/component/TableForm";
import { TableList } from "../pages/table/component/TableList";
import TableService from "../pages/table/services/TableService";
import CustomerService from "../pages/customer/services/CustomerService";
import { CustomerForm } from "../pages/customer/component/CustomerForm";
import CustomerFormBloc from "../pages/customer/bloc/CustomerFormBloc";


const AppRoutes = () => {
    return(

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="menus" element={<Outlet />}>
                <Route index element={<MenuList bloc={() => MenuListBloc(MenuService)}/>} />
                <Route path="form" element={<MenuForm bloc={() => MenuFormBloc(MenuService)}/>} />
                <Route path=":id" element={<MenuForm bloc={() => MenuFormBloc(MenuService)}/>} />
            </Route>
            <Route path="tables" element={<Outlet />}>
                <Route index element={<TableList bloc={() => TableListBloc(TableService)}/>} />
                <Route path="form" element={<TableForm bloc={() => TableFormBloc(TableService)}/>} />
                <Route path=":id" element={<TableForm bloc={() => TableFormBloc(TableService)}/>} />
            </Route>
            <Route path="customers" element={<Outlet />}>
                <Route index element={<CustomerList bloc={() => CustomerListBloc(CustomerService)}/>} />
                <Route path="form" element={<CustomerForm bloc={() => CustomerFormBloc(CustomerService)}/>} />
                <Route path=":id" element={<CustomerForm bloc={() => CustomerFormBloc(CustomerService)}/>} />
            </Route>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>

    )
}

export default AppRoutes;