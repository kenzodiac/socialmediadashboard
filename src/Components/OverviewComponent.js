import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Form } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
//import desktopDivider from '../Images/pattern-divider-desktop.svg'
import '../App.css'

export default function OverviewComponent(props){
    return(
        <div className="overview-cards">
            <div className="d-flex justify-content-between align-items-center">
                <span className="overview-card-title">{props.title}</span>
                <img src={props.logo} alt="" className=""/>
            </div>
            <div className="d-flex justify-content-between align-items-end" style={{height: "55px"}}>
                <div className="overview-num">{props.num}</div>
                <div className="d-flex align-items-center">
                    <img src={props.arrow} alt="" className="me-1"/> <span className={props.color}>{props.percentNum} %</span>
                </div>
            </div>
        </div>
    );
}