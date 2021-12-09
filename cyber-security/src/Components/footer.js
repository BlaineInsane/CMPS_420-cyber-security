import React, { Component } from "react";

export default class footer extends Component {

    render() {

        return (
                <footer class="text-center text-lg-start" style={{backgroundColor: "gold"}}>
                    <div class="container d-flex justify-content-center py-5">
                    </div>
                    <div class="text-center text-white p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                        © 2020 Copyright:
                        <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                    </div>
                </footer>
        )
    }
}