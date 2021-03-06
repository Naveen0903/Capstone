import React from "react";

const ClientCard = () => {

    return(
            <div className="card-body text-center mt-4">
            <h4 className="card-title">Sunlimetech</h4>
            <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
            <ul className="list-inline">
                <li className="list-inline-item">
                    <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-facebook"></i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-twitter"></i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-skype"></i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-google"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default ClientCard;