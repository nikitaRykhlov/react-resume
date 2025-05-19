import React from "react";
import '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../assets/styles/HonorsAndAwards.scss';
import {faChartSimple, faCode, faMoneyBill} from "@fortawesome/free-solid-svg-icons";

function HonorsAndAwards() {
    return (
        <div className="container" id="haa">
            <div className="honors-and-awards-container">
                <h2>Honors & Awards</h2>
                <div className="honors-and-awards-grid">
                    <div className="honor-or-award">
                        <FontAwesomeIcon icon={faMoneyBill} size="3x"/>
                        <h3>Sales Growth Excellence Award</h3>
                        <h4>Associated with <a href="https://www.linkedin.com/company/kuper-ru" target="_blank"
                                               rel="noreferrer">Kuper</a></h4>
                        <p>Achieved a 427% increase in B2B sales volume within six months by launching a scalable
                            wholesale orders platform powered by Redis and S3. The platform's robust architecture and
                            caching mechanisms enabled seamless handling of high transaction volumes.</p>
                    </div>

                    <div className="honor-or-award">
                        <FontAwesomeIcon icon={faCode} size="3x"/>
                        <h3>Code Quality Champion Award</h3>
                        <h4>Associated with <a href="https://www.linkedin.com/company/elmabpm" target="_blank"
                                               rel="noreferrer">ELMA365</a></h4>
                        <p>Achieved 97% test coverage through rigorous Test-Driven Development (TDD) practices,
                            minimizing runtime errors and enhancing system stability. Demonstrated expertise in unit,
                            integration, and end-to-end testing to ensure maintainable and reliable code.</p>
                    </div>

                    <div className="honor-or-award">
                        <FontAwesomeIcon icon={faChartSimple} size="3x"/>
                        <h3>Operational Efficiency Excellence Award</h3>
                        <h4>Associated with <a href="https://www.linkedin.com/company/elmabpm" target="_blank"
                                               rel="noreferrer">ELMA365</a></h4>
                        <p>Recognized for reducing document generation time by 25.5% , significantly improving
                            operational efficiency. Optimized backend workflows and implemented performance enhancements
                            using Golang and microservices architecture.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HonorsAndAwards;