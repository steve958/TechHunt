import React from "react";
import "./SingleCandidateReportModal.scss"

const SingleCandidateReportModal = (props) => {
    console.log(props.reportData)
    return (<>
        <div className="single-candidate-report-modal-container">

            <div className="single-candidate-report-modal-wrapper">
                <button onClick={() => {
                    props.setModal(false)
                }}>Close</button>
                <div className="report-modal-first-forinfo">
                    <h1>{props.reportData.candidateName}</h1>
                    <h2>{props.reportData.companyName}</h2>
                    <h2>{props.reportData.status}</h2>
                </div>
                <div className="report-modal-second-fornote">
                    <h3>{props.reportData.note}</h3>
                </div>

            </div>


        </div>
    </>);
}

export default SingleCandidateReportModal;