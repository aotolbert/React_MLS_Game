import React from "react";

export const Header = ( props ) => (
    <div className="container-fluid sticky-top">
        <div className="row sticky-top">
                <div className="sticky-top sm-col-12 w-100">
                        <nav className="navbar navbar-dark bg-success mr-auto ml-auto">
                          <h2 className="text-light">MLS Player Selection Game</h2>
                          <h2 className="text-light">Current Score: {props.current}  High Score: {props.high}</h2>
                        </nav>
                      </div>

        </div>
    </div>
  );
  