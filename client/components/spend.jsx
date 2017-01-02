import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

Spend = React.createClass({
   
render(){
    return(
        <div className="spend">
             
             <form>
                <div className="form-group row">
                    <label for="inputEmail3" className="col-sm-2 form-control-label">Wallet</label>
                    <div className="col-sm-10">

                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu3">
                                
                                <li className="dropdown-header">Wallet1</li>

                            </ul>                    

                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputPassword3" className="col-sm-2 form-control-label">Money</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputPassword3" placeholder="Money" />
                    </div>
                </div>
               
                <div className="form-group row">
                    <label className="col-sm-2">Checkbox</label>
                    <div className="col-sm-10">
                    <div className="checkbox">
                        <label>
                        <input type="checkbox" /> Check me out
                        </label>
                    </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-secondary">Add spend</button>
                    </div>
                </div>
                </form>

        </div>
    );
}
});