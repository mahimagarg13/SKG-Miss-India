import React from 'react';
import "../Pages/Style.css";
export default function Errorpage() {
    return (
        <div className="term-condition text-center">
            <p className="error-heading">404 Not Found Page</p>
            <h2>Oops! page not found</h2>
            <h5>The link you followed is probably broken or the page has been removed.</h5>
          <h5><a href="/">Go back to Homepage</a></h5>
        </div>
    )
}
