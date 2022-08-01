
import React from "react"
import { Dropdown } from 'react-bootstrap'
import profilePicture from '../assets/images/prof/4.png'
import { AiOutlineBell} from "react-icons/ai";

// import { decodeToken } from "react-jwt";

import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../redux/asyncActions/profile";

const HeaderDashboard = () => {
    const [notiv, setNotiv] = React.useState(false)
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();

    const data = useSelector((state) => state.profile.data);

    React.useEffect(() => {
        dispatch(getProfile(token));
    }, [dispatch, token]);

    // console.log(success);
    return(
        <>
            <div className="saku-header-dashboard w-fill bc-primary d-flex justify-content-between align-items-center">
                <span className="saku-header-left saku-h1 c-dark">sakuin</span>
                <div className="saku-header-right d-flex align-items-center gap-3">
                    <img src={profilePicture} alt='user' className='profile-picture'/>
                    <div className="d-flex flex-column">
                        <span className="saku-h4">{data?.full_name}</span>
                        <span className="saku-h5">{data?.phone_number}</span>
                    </div>
                    <AiOutlineBell className="saku-h3" onClick={()=>setNotiv(!notiv)}></AiOutlineBell>
                </div>
                {notiv?<div className="saku-notification">
                    <Dropdown.Menu show>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    </Dropdown.Menu>
                </div>:null}
            </div>
        </>
    )
}

export default HeaderDashboard