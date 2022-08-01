
import profilePicture from '../assets/images/prof/4.png'
import HeaderDashboard from "../components/HeaderDashboard"
import NavbarDashboard from "../components/NavbarDashboard"

const TransactionHistory = () => {
    return(
        <div className="d-flex flex-column vh-100">
            <HeaderDashboard />
            <div className="d-flex saku-body-dashboard bc-white gap-3">
                <NavbarDashboard active={'dashboard'} />
                <div className="saku-body-content flex-fill">
                    <div className="saku-content-dashboard d-flex flex-column">
                        <div className="bc-secondary saku-card  d-flex flex-column gap-3">
                            <div className="d-flex flex-column gap-2 saku-content-full">
                                <span className="saku-h4">Transaction History</span>
                                <div className="d-flex justify-content-between bc-primary p-2 rounded">
                                    <div className="d-flex gap-2">
                                        <img src={profilePicture} alt='user' className='profile-picture'/>
                                        <div className="d-flex flex-column justify-content-center">
                                            <span className="saku-h4">Samuel Suhi</span>
                                            <span className="saku-h5">Transfer</span>
                                        </div>
                                    </div>
                                    <span className="saku-h4 d-flex align-items-center">+Rp50.000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="saku-footer-dashboard bc-dark">
                <NavbarDashboard active={'dashboard'} />
            </div>
        </div>
    )
}

export default TransactionHistory