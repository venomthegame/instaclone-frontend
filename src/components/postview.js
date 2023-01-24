import React, { useEffect, useState } from 'react';
import Header from './header';
import InstaCard from './instacard';
import { Link, Route, Routes } from "react-router-dom";

import UploadView from './uploadview';
import { useNavigate } from "react-router-dom";

export default function Postview() {
    const navigate = useNavigate;
    const [userData, setUserData] = useState([]);
    const [Indicators, setIndicators] = useState(true);

    useEffect(() => {
        fetch("https://instaserver1.onrender.com/posts")
            .then(res => { return res.json() })
            .then(data => {
                console.log(data);
                setUserData(data);
            }).catch(err => {
                console.log(err);
            })
    }, [Indicators]);
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={
                    userData.map(user => {
                        const key = new Date().getTime() - Math.random().toString();
                        return <InstaCard user={user} key={key} />
                    })}
                />
                <Route path="/uploadview" element={<UploadView setIndicators={setIndicators} />} />
            </Routes>
        </>
    )
}