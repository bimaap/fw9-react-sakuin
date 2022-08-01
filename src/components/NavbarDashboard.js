
import React from "react"
import { AiOutlineBell, AiOutlineArrowUp, AiOutlinePlus, AiOutlineUser, AiOutlineLogout} from "react-icons/ai";
import { Link } from 'react-router-dom'
import { logout } from "../redux/reducers/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const HeaderDashboard = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogout = () => {
        dispatch(logout());
        navigate("/login");
    };
    
    return(
        <>
            <div className="saku-navbar-dashboard d-flex flex-column bc-primary justify-content-between saku-card">
                <div className="saku-navbar-main d-flex flex-column gap-5">
                    <Link className={`text-decoration-none d-flex align-items-center gap-2 ${props.active === 'dashboard' && 'saku-active'}`} to='/dashboard'>
                        <AiOutlineBell className="saku-h3 c-dark"/>
                        <span className="saku-h4 c-dark">Dashboard</span>
                    </Link>
                    <Link className={`text-decoration-none d-flex align-items-center gap-2 ${props.active === 'transfer' && 'saku-active'}`} to='/dashboard/transfer'>
                        <AiOutlineArrowUp className="saku-h3 c-dark"/>
                        <span className="saku-h4 c-dark">Transfer</span>
                    </Link>
                    <Link className={`text-decoration-none d-flex align-items-center gap-2 ${props.active === 'topup' && 'saku-active'}`} to='/dashboard/topup'>
                        <AiOutlinePlus className="saku-h3 c-dark"/>
                        <span className="saku-h4 c-dark">Top Up</span>
                    </Link>
                    <Link className={`text-decoration-none d-flex align-items-center gap-2 ${props.active === 'profile' && 'saku-active'}`} to='/dashboard/profile'>
                        <AiOutlineUser className="saku-h3 c-dark"/>
                        <span className="saku-h4 c-dark">Profile</span>
                    </Link>
                    <Link className={`text-decoration-none d-flex align-items-center gap-2 saku-navbar-logout2`} to='/' onClick={() => onLogout()}>
                        <AiOutlineLogout className="saku-h3 c-dark"/>
                        <span className="saku-h4 c-dark">Logout</span>
                    </Link>
                </div>
                <Link className={`text-decoration-none d-flex align-items-center gap-2 saku-navbar-logout1`} to='/' onClick={() => onLogout()}>
                    <AiOutlineLogout className="saku-h3 c-dark"/>
                    <span className="saku-h4 c-dark">Logout</span>
                </Link>
            </div>
        </>
    )
}

export default HeaderDashboard