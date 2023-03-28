import React, { Component } from "react";
import ContactForm from "./ContactForm";

class ContactTwo extends Component {
    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left pb--30">
                                <h2 className="title">Contact Us.</h2>
                                <p className="description">Please complete the form provided or select the means of contact that you consider most appropriate for your inquiry. Feel free to choose the option that best suits your communication needs. We will be happy to answer your questions or attend to your requests in the most efficient way possible. Thanks for your interest</p>
                            </div>
                            <div className="form-wrapper">
                                <ContactForm />
                            </div>
                        </div>
                        {/* <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src="/assets/images/about/about-5.jpg" alt="trydo"/>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactTwo;