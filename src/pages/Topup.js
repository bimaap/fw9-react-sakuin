
import HeaderDashboard from "../components/HeaderDashboard"
import NavbarDashboard from "../components/NavbarDashboard"

const Topup = () => {
    return(
        <div className="d-flex flex-column vh-100">
            <HeaderDashboard />
            <div className="d-flex saku-body-dashboard bc-white gap-3">
                <NavbarDashboard active={'topup'} />
                <div className="saku-body-content flex-fill">
                    <div className="saku-content-dashboard d-flex flex-column">
                        <div className="bc-secondary saku-card  d-flex flex-column">
                            <div className="d-flex flex-column gap-4 saku-content-full">
                                <span className="saku-h4">How To Top Up</span>
                                <div className="d-flex flex-column gap-3">
                                    <div className="d-flex align-items-center bc-primary p-3 gap-3 rounded">
                                        <span className="saku-h4 c-dark">1.</span>
                                        <span className="saku-h5">Go to the nearest ATM or you can use E-Banking.</span>
                                    </div>
                                    <div className="d-flex align-items-center bc-primary p-3 gap-3 rounded">
                                        <span className="saku-h4 c-dark">2.</span>
                                        <span className="saku-h5">Type your security number on the ATM or E-Banking.</span>
                                    </div>
                                    <div className="d-flex align-items-center bc-primary p-3 gap-3 rounded">
                                        <span className="saku-h4 c-dark">3.</span>
                                        <span className="saku-h5">Select “Transfer” in the menu</span>
                                    </div>
                                    <div className="d-flex align-items-center bc-primary p-3 gap-3 rounded">
                                        <span className="saku-h4 c-dark">4.</span>
                                        <span className="saku-h5">Type the virtual account number that we provide you at the top.</span>
                                    </div>
                                    <div className="d-flex align-items-center bc-primary p-3 gap-3 rounded">
                                        <span className="saku-h4 c-dark">5.</span>
                                        <span className="saku-h5">Type the amount of the money you want to top up.</span>
                                    </div>
                                    <div className="d-flex align-items-center bc-primary p-3 gap-3 rounded">
                                        <span className="saku-h4 c-dark">6.</span>
                                        <span className="saku-h5">Read the summary details</span>
                                    </div>
                                    <div className="d-flex align-items-center bc-primary p-3 gap-3 rounded">
                                        <span className="saku-h4 c-dark">7.</span>
                                        <span className="saku-h5">Press transfer / top up</span>
                                    </div>
                                    <div className="d-flex align-items-center bc-primary p-3 gap-3 rounded">
                                        <span className="saku-h4 c-dark">8.</span>
                                        <span className="saku-h5">You can see your money in Zwallet within 3 hours.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="saku-footer-dashboard bc-dark">
                <NavbarDashboard active={'topup'} />
            </div>
        </div>
    )
}

export default Topup