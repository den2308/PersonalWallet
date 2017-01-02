import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';


HomeLayout = React.createClass({

    /*mixins: [ReactMeteorData],
    getMeteorData(){
        let data = {};
        data.wallets = [];
        data.wallets = Wallets.find().fetch();

        return data;
    },


    var wallets = this.data.wallets.map(function (record) {
                return <Wallet key={record._id} wallet={record}/>
             });
   */

    render() {
            
        return  (
            <div className="mainList">
                 <div className="header">
                    <nav className="navbar navbar-default">
                    
                        <div className="container-fluid">
                                    <div className="dropdown">
                                        <button className="dropbtn">
                                        <i className="fa fa-bars" aria-hidden="true">Menu</i>     
                                        </button>
                                        <div className="dropdown-content">
                                        <a href="/wallets">Wallet</a>
                                        <a href="/spendList">Spending</a>
                                        </div>
                                    </div>
                                    <p className="navbar-text navbar-right">
                                        <a href="#" className="">
                                            <i className="fa fa-sign-in" aria-hidden="true">Login</i>
                                        </a> 
                                    </p>
                                    <a href="/" className="fa fa-home">Home</a>
                            </div>
                    </nav>
                </div>

                <div className="wlletsList">
                    
                        <div className="wallets">

                        
                            
                        </div>
                </div>
            </div>
        );
    }

});
Meteor.startup(() => {
    render(<HomeLayout />, document.getElementById('render-target'));
});

