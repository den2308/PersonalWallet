import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';


Wallet = React.createClass({
    mixins:[ReactMeteorData],
    getMeteorData(){
        return {};
    },

    render() {
        return(

            
        <div className="panel-group">
            <div className="panel panel-default">
                    <div className="panel-heading hover-link" data-toggle="collapse" data-parent="false" data-target="#collapseTableOne" class="collapsed" aria-expanded="false">
                    <h4 className="panel-title">
                        {this.props.wallet.name}
                    </h4>
                    </div>
                        <div id="collapseTableOne" className="panel-collapse collapse in">
                        <div class="panel-body">
                            <table className="table table-striped table-condensed table-hover">
                            <thead>
                            <tr>
                            <th>№</th>
                            <th>Money left</th>
                            <th>User</th>
                            <th>Data</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr> 
                            <td>1</td>
                            <td>2000</td>
                            <td>Dan</td>
                            <td>05.06.2016</td>
                            <td className="text-right">
                                <div className="dropdown">
                                <a data-toggle="dropdown" href="#">Actions</a>
                                <ul className="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="dLabel">
                                    <li><a href="#">Action</a></li>
                                </ul>
                                </div>
                            </td>
                            </tr>          
                            </tbody>
                            </table>
                            </div>
                        </div>
                </div>          
            </div>  

   
        );
    }     
});
