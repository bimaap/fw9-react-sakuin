
import React from "react"
import { AiOutlineArrowUp, AiOutlinePlus, AiOutlineArrowDown} from "react-icons/ai";

const ContentDashboard = () => {
    return(
        <>
            <div className="saku-content-dashboard d-flex flex-column">
                <div className="saku-content-dashboard-top bc-dark d-flex align-items-center justify-content-between saku-card">
                    <div className="d-flex flex-column justify-content-between h-fill">
                        <span className="saku-h4 c-secondary">Balance</span>
                        <span className="saku-h2 c-primary">Rp120.000</span>
                        <span className="saku-h4 c-secondary">+62 813-9387-7946</span>
                    </div>
                    <div className="d-flex flex-column gap-4">
                        <button className="d-flex align-items-center gap-2">
                            <AiOutlineArrowUp className="saku-h3"/>
                            <span className="saku-h4">Transfer</span>
                        </button>
                        <button className="d-flex align-items-center gap-2">
                            <AiOutlinePlus className="saku-h3"/>
                            <span className="saku-h4">Top Up</span>
                        </button>
                    </div>
                </div>
                <div className="saku-content-dashboard-btm d-flex">
                    <div className="saku-content-dashboard-left bc-secondary saku-card gap-2 d-flex flex-column">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-column">
                                <AiOutlineArrowDown className="saku-h3 c-dark"/>
                                <span className="saku-h5 c-dark">Income</span>
                                <span className="saku-h4 c-dark">Rp2.120.000</span>
                            </div>
                            <div className="d-flex flex-column">
                                <AiOutlineArrowUp className="saku-h3 c-dark"/>
                                <span className="saku-h5 c-dark">Expense</span>
                                <span className="saku-h4 c-dark">Rp1.560.000</span>
                            </div>
                        </div>
                        <div className="bc-primary h-fill">
                            
                        </div>
                    </div>
                    <div className="saku-content-dashboard-right bc-secondary saku-card">b</div>
                </div>
            </div>
        </>
    )
}

export default ContentDashboard