import React, { Component, Fragment } from "react";
import Scrollspy from 'react-scrollspy';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp, FiX, FiMenu } from "react-icons/fi";
import FooterTwo from "../component/footer/FooterTwo";
import Helmet from "../component/common/Helmet";
import TeamOne from "../blocks/team/TeamOne";
import { FiHeadphones } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
// import { FiMapPin } from "react-icons/fi";
import ContactTwo from "../elements/contact/ContactTwo";


const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: 'BARCINO MEATS',
        description: '`Importing and delivering Spains finest meats throughout the UK and Ireland`',
        buttonText: 'Contact Us',
        buttonLink: '#contact',
     
    }
]



const ServiceListOne = [
    {
        icon: "icon-001-pork.png",
        title: 'Pork',
        description: 'Lorem ipsum dolor sit amet.'
    },
    {
        icon: "icon-001-pork.png",
        title: 'Charcuterie',
        description: 'Lorem ipsum dolor sit amet.'
    },
    {
        icon: "icon-001-pork.png",
        title: 'Beef',
        description: 'Lorem ipsum dolor sit amet.'
    },
    {
        icon: "icon-001-pork.png",
        title: 'Iberico Pork',
        description: 'Lorem ipsum dolor sit amet.'
    },
    {
        icon: "icon-001-pork.png",
        title: 'Goat',
        description: 'Lorem ipsum dolor sit amet.'
    },
    {
        icon: "icon-001-pork.png",
        title: 'Lamb',
        description: 'Lorem ipsum dolor sit amet.'
    },
    {
        icon: "icon-001-pork.png",
        title: 'Mutton',
        description: 'Lorem ipsum dolor sit amet.'
    },
 

]

class InteriorLanding extends Component {
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);

        //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function () {
            console.log('All assets are loaded');
        })
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }
    stickyHeader() { }
    render() {
        window.addEventListener('scroll', function () {
            var value = window.scrollY;
            if (value > 50) {
                document.querySelector('.header--fixed').classList.add('sticky')
            } else {
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });

        var elements = document.querySelectorAll('.has-droupdown > a');
        for (var i in elements) {
            if (elements.hasOwnProperty(i)) {
                elements[i].onclick = function () {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        return (
            <Fragment>
                <Helmet pageTitle="BARCINO" />

                {/* Start Header Area  */}
                <header className="header-area formobile-menu header--fixed default-color">
                    <div className="header-wrapper" id="header-wrapper">
                        <div className="header-left">
                            <div className="logo">
                                <a href="/">
                                    <img className="logo-1" src="/assets/images/logo/logo-light.png" alt="Logo Images" />
                                    <img className="logo-2" src="/assets/images/logo/logo-all-dark.png" alt="Logo Images" />
                                </a>
                            </div>
                        </div>
                        <div className="header-right">
                            <nav className="mainmenunav d-lg-block">
                                <Scrollspy className="mainmenu" items={['home', 'service', 'about', 'team']} currentClassName="is-current" offset={-200}>
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="/#service">Products</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#team">Team</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </Scrollspy>
                            </nav>

                            {/* Start Humberger Menu  */}
                            <div className="humberger-menu d-block d-lg-none pl--20">
                                <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                            </div>
                            {/* End Humberger Menu  */}
                            <div className="close-menu d-block d-lg-none">
                                <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                            </div>
                        </div>
                    </div>
                </header>
                {/* End Header Area  */}

                {/* Start Slider Area   */}
                <div className="slider-activation slider-creative-agency" id="home">
                    <div className="bg_image bg_image--36" data-black-overlay="4">
                        {SlideList.map((value, index) => (
                            <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center" key={index}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className={`inner ${value.textPosition}`}>
                                                {value.category ? <span>{value.category}</span> : ''}
                                                {value.title ? <h1 className="title theme-gradient">{value.title}</h1> : ''}
                                                {value.description ? <p className="description">{value.description}</p> : ''}
                                                {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* End Slider Area   */}

                {/* Start Service Area  */}
                <div className="service-area creative-service-wrapper ptb--120 bg_color--1" id="service">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="feature-area">
                                    <span>PRODUCTS</span>
                                    <h3 className="title mt--20 fontWeight500 lineheight--1-8">Specialising in Pork but also offering a comprehensive range of Charcuterie, Poultry, wide range of beef products, iberico pork,  Goat, Lamb and Mutton that Spain has to offer.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row service-one-wrapper mt--30">
                            {ServiceListOne.map((val, i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href="/service-details">
                                        <div className="service service__style--1">
                                            <div className="icon">
                                                <img src={`/assets/images/icons/${val.icon}`} alt="Service Icon" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title">{val.title}</h4>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area  */}

                {/* Start Content Box  */}
                <div className="rn-content-box-area rn-content-box-style--1 pb--120 bg_color--1" id="about">
                    <div className="row row--0 align-items-center">
                        <div className="col-lg-12 col-xl-6">
                            <div className="thumbnail">
                                <img src="/assets/images/bg/bg-image-41.jpg" alt="Meat Images" />
                            </div>
                        </div>
                        <div className="col-lg-12 col-xl-6 mt_lg--50 mt_md--30 mt_sm--30">
                            <div className="content">
                                {/* <p className="subtitle"><span>Modern</span> Design For Interior</p> */}
                                <span>ABOUT</span>
                                <h2 className="fontWeight500">Barcino was born when our Directors came together in early 2022.
                                </h2>
                                <p>With over 50 years of experience sourcing, buying and selling meat from Spain to the UK it was decided to pool this wealth of expertise together and form Barcino Meats Ltd</p>

                                <p>Offices in both the UK and Spain enables us to react quickly and efficiently to the demands of our Customers.</p>

                                <p>Supplying daily into the UK Retail, Manufacturing and Wholesale sectors.
                                </p>
                                <h2 className="fontWeight500">Leaders in innovation and Services.
                                </h2>

                                <p>The ability to deliver one pallet or one hundred trucks cost effectively anywhere throughout the UK or Ireland- Fresh or Frozen.</p>

                                <p>We take care of all Import documentation so you can rest assured there will be no unnecessary delays through Customs.</p>

                                <p>Food Safety is fundamental to our business that’s why our dedicated in house Technical Team work closely with all our Suppliers- we are BRC accredited too adding further confidence for our customers.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                {/* End Content Box  */}

                {/* Start Team Area  */}
                <div className="rn-team-wrapper pb--120 bg_color--1" id="team">
                    <div className="rn-team-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="section-title text-left mt--50 mb--30">
                                        <span>TEAM</span>
                                        <p>Personal presentation text pending</p>
                                    </div>
                                </div>
                            </div>
                            <TeamOne column="col-lg-3 col-md-6 col-sm-6 col-12" teamStyle="team-style--bottom" item="1" />
                        </div>
                    </div>
                </div>
                {/* End Team Area  */}
                {/* Start Breadcrump Area */}
                 <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--17"  data-black-overlay="2" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    {/* <h2 className="title theme-gradient">Contact With Us</h2> */}
                                    {/* <p>Please complete the form provided or select the means of contact that you consider most appropriate for your inquiry. Feel free to choose the option that best suits your communication needs. We will be happy to answer your questions or attend to your requests in the most efficient way possible. Thanks for your interest.</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}




                {/* Start Contact Page Area  */}
                <div className="rn-contact-page ptb--120 bg_color--1">
                    <ContactTwo />
                </div>
                {/* End Contact Page Area  */}
                {/* Start Contact Top Area  */}
                <div className="rn-contact-top-area ptb--120 bg_color--5">
                    <div className="container">
                       
                        <div className="row">
                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiHeadphones />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Contact With Phone Number</h4>
                                        <p><a href="tel:+34 681 254 207">+34 681 254 207</a></p>
                                        <p><a href="tel:+44 07540125824">+44 07540125824</a></p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMail />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Email Address</h4>
                                        <p><a href="mailto:pedro@barcinomeats.co.uk">pedro@barcinomeats.co.uk</a></p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            {/* <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMapPin />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Location</h4>
                                        <p>5678 Bangla Main Road, cities 580 <br /> GBnagla, example 54786</p>
                                    </div>
                                </div>
                            </div> */}
                            {/* End Single Address  */}

                        </div>
                    </div>
                </div>
                {/* End Contact Top Area  */}

                {/* Start Footer Style  */}
                <FooterTwo />
                {/* End Footer Style  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </Fragment>
        )
    }
}

export default InteriorLanding;