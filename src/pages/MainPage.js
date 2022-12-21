import React from 'react';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import MainForm from 'components/client/MainForm';
import 'styles/layout.css';
import 'styles/layout_1440.css';
import 'styles/layout_780.css';

const MainPage = () => {
    return (
        <div className="main">
            <Header />
            <MainForm />
            <Footer />
        </div>
    );
};

export default MainPage;