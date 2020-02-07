import React from 'react'
import Header from './Header'
import Body from './Body'
import BodyContent from './BodyContent'
import BodyComponent from './BodyComponent'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Wrapper from './Wrapper'
import './Dashboard.scss'
import { useSelector } from 'react-redux';
import UserModal from '../usermodal/UserModal';
import Table from '../../components/table/Table';

function Dashboard() {
    const sideBarState = useSelector((state) => state.sideBarState);
    const user = useSelector(state => state.user);

    const userLoginState = user.isLogin;
    const userModalState = user.showModal;

    let className = sideBarState ? "dashboard hide-sidebar" : "dashboard";

    const tableHeadings = ["ID", "Sản phẩm", "Giá", ""];

    //fake data
    const productData = [
        {
            id: 1,
            name: "Bó rau muống",
            price: 5000
        },
        {
            id: 2,
            name: "Cọng rau thơm",
            price: 10000
        },
        {
            id: 3,
            name: "Nồi cơm điện",
            price: 100000
        }
    ]

    return (
        <div className={className}>
            <Sidebar logoTitle="TRANG CHỦ" path="/" />
            <Wrapper>
                <Header />
                <Body activeContent={0}>
                    <BodyContent>
                        <BodyComponent title="Danh mục sản phẩm">
                            <Table headings={tableHeadings} data={productData} />
                        </BodyComponent>
                    </BodyContent>

                    <Footer copyRightText="© 2019" />
                </Body>
            </Wrapper>
            {!userLoginState && userModalState ?  <UserModal /> : undefined}
           
        </div>
    )
}

/* 
<table>
    <tr>
        <th></th>
        <th></th>
    </tr>

    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table> */

export default Dashboard
