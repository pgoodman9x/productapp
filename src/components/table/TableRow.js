import React from 'react';
import Button from '../button/Button';
import CartIcon from '../../assets/images/ico_cart.png';
import EditIcon from '../../assets/images/ico_writing.png';
import RemoveIcon from '../../assets/images/ico_trash.png';
import { useSelector, useDispatch } from 'react-redux';
import { loginState } from '../../redux/actions/index';
import Dialog from '../dialog/Dialog';

function TableRow({ data, edit }) {
    const userLoginState = useSelector(state => state.user.isLogin);
    const dispatch = useDispatch();

    const handleClick = () => {
        if (!userLoginState) {
            dispatch(loginState(false, {}, true));
        } else {

        }
    }
    return (
        <tr data-id={data.id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.price}</td>
            {
                edit !== undefined ? <td>
                    {
                        !edit ?
                            <Button text="Mua" iconPath={CartIcon} className="c-btn03" onClick={() => handleClick()} />
                            :
                            <div class="table-control">
                                <Button text="Sửa" iconPath={EditIcon} className="c-btn03 green" />
                                <Button text="Xóa" iconPath={RemoveIcon} className="c-btn03 red" />
                            </div>
                    }
                </td> : undefined
            }

        </tr>
    )
}
/* 
function useDialog( component ) {
    const [status, setstatus] = useState('hide');

    useEffect(() => {
        setstatus('show');
    }, [component])

    return (
        {
            status && 
            <Dialog>
                {component}
            </Dialog>
        }
    )
}
 */

export default TableRow
