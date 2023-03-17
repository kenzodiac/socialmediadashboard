import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Form } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
//import desktopDivider from '../Images/pattern-divider-desktop.svg'
import '../App.css'

export default function FollowersComponent(props){
    return(
        <div className="card-properties">
            <div className={props.border} style={{width: "100%"}}></div>
            <div className="d-flex flex-column align-items-center justify-content-evenly" style={{height: "100%"}}>
                <div className="total-followers d-flex align-items-center">
                    <img src={props.logo} alt="" className="me-2"/> {props.socialHandle}
                </div>
                <div className="text-center">
                    <span className="followers-big-num">{props.totNum}</span><br/>
                    <span className="followers-txt">FOLLOWERS</span>
                </div>
                <div className="d-flex align-items-center">
                    <img src={props.arrow} alt="" className="me-1"/> <span className={props.color}>{props.todayNum} Today</span>
                </div>
            </div>
        </div>
    );
}