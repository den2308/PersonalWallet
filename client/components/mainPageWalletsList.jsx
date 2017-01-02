import React, {Component, PropTypes} from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';

WalletsListMainPage = React.createClass({

        mixins: [ReactMeteorData],
        getMeteorData(){
            let data = {};
            data.wallets = [];
            data.wallets = Wallets.find().fetch();

            return data;
                        },

    render(){
        var wallets = this.data.wallets.map(function (record) {
                return <Wallet key={record._id} wallet={record}/>
             });

        return(

           <div className="walletsmainList">
           <div className="addSpending">
                        <a href="/addSpend">
                            <button type="submit" className="btn btn-success">
                            
                                <i className="fa fa-plus fa-4x" aria-hidden="true">Add</i>
                            
                            </button>
                        </a>
                    </div>

                {wallets}

            </div>
        );
    
    }
})