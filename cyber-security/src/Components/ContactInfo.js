import React, { Component } from "react";

export default class ContactInfo extends Component {

    render() {

        return (
            <div class="hero-unit" style={{backgroundColor: "#103d22", textAlign: "center"}}>
                <h1 style={{color:"white"}}>Contact us!</h1>
                <p style={{color: "#103d22"}}>Tagline</p>
                <p>
                    <a class="btn btn-primary btn-large">
                    https://discord.gg/jQhJhY4g
                    </a>
                    <a class="btn btn-primary btn-large">
                        zachary.madewell@selu.edu
                    </a>
                    <a class="btn btn-primary btn-large">
                        225-369-7732
                    </a>
                </p>
            </div>
        )
    }
}