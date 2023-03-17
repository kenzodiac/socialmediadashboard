import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import React, { useState } from 'react';
import '../App.css'
import OverviewComponent from './OverviewComponent';
import FollowersComponent from './FollowersComponent';

import facebookIcon from '../Images/icon-facebook.svg'
import instaIcon from '../Images/icon-instagram.svg'
import twitterIcon from '../Images/icon-twitter.svg'
import ytIcon from '../Images/icon-youtube.svg'
import upIcon from '../Images/icon-up.svg'
import downIcon from '../Images/icon-down.svg'

export default function MainStageComponent(){
    
    const [theme, setTheme] = useState('light');

    const switchTheme = () => {
        if (theme === 'dark') {
            document.documentElement.setAttribute("data-theme", "light");
            document.body.setAttribute("style", "background-color: hsl(0, 0%, 100%);");
            setTheme('light');
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            document.body.setAttribute("style", "background-color: hsl(230, 17%, 14%);");
            setTheme('dark');
        }
    }

    return(
        <div className="background">
            <div className="background-overlay-top">
            <Container style={{maxWidth: "1100px"}}>
                {/* Header */}
                <Row style={{minHeight: "90px"}}>
                    <Col xs={12} sm={8} className="pt-4" style={{minHeight: "90px"}}>
                        <div className="site-title">Social Media Dashboard</div>
                        <div className="total-followers">Total Followers: 23,004</div>
                        <div className="hr-style"></div>
                    </Col>
                    <Col xs={12} sm={4} className="toggle-area">
                        <div className="total-followers pe-2">Dark Mode</div>
                        {/* <Form.Switch onClick={switchTheme}/> */}
                        <label class="switch">
                            <input type="checkbox" onClick={switchTheme}/>
                            <span class="slider round"></span>
                        </label>
                    </Col>
                </Row>

                {/* Followers Area */}
                <Row className="g-4">
                    <Col lg={3} md={4} sm={6} xs={12} className="">
                        <FollowersComponent border={'card-border fb'} logo={facebookIcon} socialHandle={'@nathanf'} totNum={'1987'} arrow={upIcon} todayNum={'12'} color={'followers-change increase'}/>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12} className="">
                        <FollowersComponent border={'card-border twit'} logo={twitterIcon} socialHandle={'@nathanf'} totNum={'1044'} arrow={upIcon} todayNum={'99'} color={'followers-change increase'}/>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12} className="">
                        <FollowersComponent border={'card-border insta'} logo={instaIcon} socialHandle={'@realnathanf'} totNum={'11k'} arrow={upIcon} todayNum={'1099'} color={'followers-change increase'}/>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12} className="">
                        <FollowersComponent border={'card-border yt'} logo={ytIcon} socialHandle={'Nathan F'} totNum={'8239'} arrow={downIcon} todayNum={'144'} color={'followers-change decrease'}/>
                    </Col>
                </Row>

                {/* Overview Header */}
                <Row style={{height: "90px"}}>
                    <span className="overview-today">Overview - Today</span>
                </Row>

                {/* Overview Area */}

                <Row className="g-4 marginBottom">
                    <Col className="overview-cols" lg={3} md={4} sm={6} xs={12}>
                        <OverviewComponent title={'Page Views'} logo={facebookIcon} num={'87'} arrow={upIcon} color={'followers-change percent increase'} percentNum={'3'}/>
                    </Col>
                    <Col className="overview-cols" lg={3} md={4} sm={6} xs={12}>
                        <OverviewComponent title={'Likes'} logo={facebookIcon} num={'52'} arrow={downIcon} color={'followers-change percent decrease'} percentNum={'2'}/>
                    </Col>
                    <Col className="overview-cols" lg={3} md={4} sm={6} xs={12}>
                        <OverviewComponent title={'Likes'} logo={instaIcon} num={'5462'} arrow={upIcon} color={'followers-change percent increase'} percentNum={'2257'}/>
                    </Col>
                    <Col className="overview-cols" lg={3} md={4} sm={6} xs={12}>
                        <OverviewComponent title={'Profile Views'} logo={instaIcon} num={'52k'} arrow={upIcon} color={'followers-change percent increase'} percentNum={'1375'}/>
                    </Col>
                    <Col className="overview-cols" lg={3} md={4} sm={6} xs={12}>
                        <OverviewComponent title={'Retweets'} logo={twitterIcon} num={'117'} arrow={upIcon} color={'followers-change percent increase'} percentNum={'303'}/>
                    </Col>
                    <Col className="overview-cols" lg={3} md={4} sm={6} xs={12}>
                        <OverviewComponent title={'Likes'} logo={twitterIcon} num={'507'} arrow={upIcon} color={'followers-change percent increase'} percentNum={'553'}/>
                    </Col>
                    <Col className="overview-cols" lg={3} md={4} sm={6} xs={12}>
                        <OverviewComponent title={'Likes'} logo={ytIcon} num={'107'} arrow={downIcon} color={'followers-change percent decrease'} percentNum={'19'}/>
                    </Col>
                    <Col className="overview-cols" lg={3} md={4} sm={6} xs={12}>
                        <OverviewComponent title={'Total Views'} logo={ytIcon} num={'1407'} arrow={downIcon} color={'followers-change percent decrease'} percentNum={'12'}/>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    );
}