import {Col,Row} from "reactstrap";
import Home from "../pages/home/Home";
import AppRoutes from "../routes/AppRoutes";
import Header from "./Header";
import Sidebar from "./Sidebar";

const ColumnLayout = () => {
    return(
        <>
            <Row>
                <Col>
                    <Header/>
                </Col>
            </Row>
            <Row>
                <AppRoutes />
            </Row>
        </>
    )
}

export default ColumnLayout;