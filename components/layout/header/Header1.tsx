import Link from "next/link";
import LOGO from '@/assets/logo/logo.svg'
import ImageWrapper from "@/components/atoms/image";
import Image from "next/image";
import { PATHS } from "@/constants/paths";

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }: any) {
    return (
        <header className="homepage1-body">
            <div id="vl-header-sticky" className={`vl-header-area vl-transparent-header  ${scroll ? "header-sticky top-0 position-fixed w-100" : ""}`}>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-md-6 col-6">
                            <div className="vl-logo">
                                <Link href="/">
                                    {/* <img src="/assets/img/logo/logo1.png" alt="housa" /> */}
                                    <Image src={LOGO} alt="logo" style={{ maxHeight: '80px', height: '80px' }} />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8 d-none d-lg-block">
                            <div className="vl-main-menu text-center">
                                <nav className="vl-mobile-menu-active">
                                    <ul>
                                        <li className="has-dropdown">
                                            <Link href="/">
                                                Home
                                                {/* <span>
                                                    <i className="fa-solid fa-angle-down d-lg-inline d-none" />
                                                </span> */}
                                            </Link>
                                            {/* <div className="vl-mega-menu">
                                                <div className="vl-home-menu">
                                                    <div className="row gx-3 row-cols-1 row-cols-md-1 row-cols-lg-4">
                                                        <div className="col">
                                                            <div className="vl-home-thumb">
                                                                <div className="img1">
                                                                    <img src="/assets/img/all-images/demo/demo-img1.png" alt="housa" />
                                                                </div>
                                                                <Link href="/">Housa - Homepage 01</Link>
                                                                <div className="btn-area1">
                                                                    <Link href="/" className="vl-btn1">
                                                                        View Demo
                                                                        <span className="arrow1 ms-2">
                                                                            <i className="fa-solid fa-arrow-right" />
                                                                        </span>
                                                                        <span className="arrow2 ms-2">
                                                                            <i className="fa-solid fa-arrow-right" />
                                                                        </span>
                                                                    </Link>
                                                                </div>
                                                                <div className="space20 d-lg-none d-block" />
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="vl-home-thumb">
                                                                <div className="img1">
                                                                    <img src="/assets/img/all-images/demo/demo-img2.png" alt="housa" />
                                                                </div>
                                                                <Link href="/index2">Housa - Homepage 02</Link>
                                                                <div className="btn-area1">
                                                                    <Link href="/index2" className="vl-btn1">
                                                                        View Demo
                                                                        <span className="arrow1 ms-2">
                                                                            <i className="fa-solid fa-arrow-right" />
                                                                        </span>
                                                                        <span className="arrow2 ms-2">
                                                                            <i className="fa-solid fa-arrow-right" />
                                                                        </span>
                                                                    </Link>
                                                                </div>
                                                                <div className="space20 d-lg-none d-block" />
                                                            </div>
                                                        </div>
                                                        <div className="col ">
                                                            <div className="vl-home-thumb">
                                                                <div className="img1">
                                                                    <img src="/assets/img/all-images/demo/demo-img3.png" alt="housa" />
                                                                </div>
                                                                <Link href="/index3">Housa - Homepage 03</Link>
                                                                <div className="btn-area1">
                                                                    <Link href="/index3" className="vl-btn1">
                                                                        View Demo
                                                                        <span className="arrow1 ms-2">
                                                                            <i className="fa-solid fa-arrow-right" />
                                                                        </span>
                                                                        <span className="arrow2 ms-2">
                                                                            <i className="fa-solid fa-arrow-right" />
                                                                        </span>
                                                                    </Link>
                                                                </div>
                                                                <div className="space20 d-lg-none d-block" />
                                                            </div>
                                                        </div>
                                                        <div className="col ">
                                                            <div className="vl-home-thumb">
                                                                <div className="img1">
                                                                    <img src="/assets/img/all-images/demo/demo-img4.png" alt="housa" />
                                                                </div>
                                                                <Link href="/index4">Housa - Homepage 04</Link>
                                                                <div className="btn-area1">
                                                                    <Link href="/index4" className="vl-btn1">
                                                                        View Demo
                                                                        <span className="arrow1 ms-2">
                                                                            <i className="fa-solid fa-arrow-right" />
                                                                        </span>
                                                                        <span className="arrow2 ms-2">
                                                                            <i className="fa-solid fa-arrow-right" />
                                                                        </span>
                                                                    </Link>
                                                                </div>
                                                                <div className="space20 d-lg-none d-block" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </li>
                                        <li className="has-dropdown">
                                            <Link href="/about-us">
                                                About Us
                                                {/* <span>
                                                    <i className="fa-solid fa-angle-down d-lg-inline d-none" />
                                                </span> */}
                                            </Link>
                                            {/* <ul className="sub-menu">
                                                <li>
                                                    <Link href="/about-us">About Us</Link>
                                                </li>
                                                <li>
                                                    <Link href="/our-service">Our Services</Link>
                                                </li>
                                                <li>
                                                    <Link href="/pricing">Pricing</Link>
                                                </li>
                                                <li>
                                                    <Link href="/contact">Contact Us</Link>
                                                </li>
                                                <li>
                                                    <Link href="/faq">FAQ's</Link>
                                                </li>
                                                <li>
                                                    <Link href="/privacy-policy">Privacy Policy</Link>
                                                </li>
                                            </ul> */}
                                        </li>

                                        <li className="has-dropdown">
                                            <Link href="#">
                                                Our Services
                                                <span>
                                                    <i className="fa-solid fa-angle-down d-lg-inline d-none" />
                                                </span>
                                            </Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link href={PATHS.SERVICES}>Industrial HVAC Solutions</Link>
                                                </li>
                                                <li>
                                                    <Link href={PATHS.SERVICES}>Electro-Mechanical & Precision Tools Supply</Link>
                                                </li>
                                                <li>
                                                    <Link href={PATHS.SERVICES}>Monitoring and Automation Engineering & Parts Supply</Link>
                                                </li>
                                                <li>
                                                    <Link href={PATHS.SERVICES}>Water Treatment Systems</Link>
                                                </li>
                                                <li>
                                                    <Link href={PATHS.SERVICES}>Industries Served </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <Link href={PATHS.CERTIFICATES}>
                                                Certificates
                                                {/* <span>
                                                    <i className="fa-solid fa-angle-down d-lg-inline d-none" />
                                                </span> */}
                                            </Link>
                                            {/* <ul className="sub-menu">
                                                <li>
                                                    <Link href="/property-halfmap-grid">Property Half Grid</Link>
                                                </li>
                                                <li>
                                                    <Link href="/property-halfmap-list">Property Half Map List</Link>
                                                </li>
                                                <li>
                                                    <Link href="/topmap-grid">Property Top Map Grid</Link>
                                                </li>
                                                <li>
                                                    <Link href="/topmap-list">Property Top Map List</Link>
                                                </li>
                                                <li>
                                                    <Link href="/sidebar-grid">Find Sidebar Grid</Link>
                                                </li>
                                                <li>
                                                    <Link href="/sidebar-list">Find Sidebar List</Link>
                                                </li>
                                            </ul> */}
                                        </li>
                                        <li>
                                            <Link href="#">
                                                Purchase
                                            </Link>
                                        </li>
                                        {/* <li>
                                            <Link href="#">
                                                Properties
                                                <span>
                                                    <i className="fa-solid fa-angle-down d-lg-inline d-none" />
                                                </span>
                                            </Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link href="/property-details-v1">Property Details 01</Link>
                                                </li>
                                                <li>
                                                    <Link href="/property-details-v2">Property Details 02</Link>
                                                </li>
                                                <li>
                                                    <Link href="/property-details-v3">Property Details 03</Link>
                                                </li>
                                                <li>
                                                    <Link href="/property-details-v4">Property Details 04</Link>
                                                </li>
                                            </ul>
                                        </li> */}
                                        {/* <li>
                                            <Link href="#">
                                                Dashboard
                                                <span>
                                                    <i className="fa-solid fa-angle-down d-lg-inline d-none" />
                                                </span>
                                            </Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link href="/dashboard">Dashboard</Link>
                                                </li>
                                                <li>
                                                    <Link href="/my-property">My Properties</Link>
                                                </li>
                                                <li>
                                                    <Link href="/message">Message</Link>
                                                </li>
                                                <li>
                                                    <Link href="/my-favorites">My Favourites</Link>
                                                </li>
                                                <li>
                                                    <Link href="/reviews">Reviews</Link>
                                                </li>
                                                <li>
                                                    <Link href="/my-profile">My Propfile</Link>
                                                </li>
                                                <li>
                                                    <Link href="/add-property">Add Property</Link>
                                                </li>
                                            </ul>
                                        </li> */}
                                        {/* <li>
                                            <Link href="#">
                                                Blogs
                                                <span>
                                                    <i className="fa-solid fa-angle-down d-lg-inline d-none" />
                                                </span>
                                            </Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link href="/blog">Blog Default</Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-grid">Blog Grid</Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-detail">Blog Post Details</Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-detail-2">Blog Post Details 2</Link>
                                                </li>
                                            </ul>
                                        </li> */}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6">
                            <div className="vl-hero-btn d-none d-lg-block text-end">
                                <div className="btn-area1 mt-0">
                                    <Link href="/contact" className="vl-btn1 mt-0">
                                        Contact US
                                        <span className="arrow1 ms-2">
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                        <span className="arrow2 ms-2">
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="vl-header-action-item d-block d-lg-none">
                                <button type="button" className="vl-offcanvas-toggle px-1">
                                    <i className="fa-solid fa-bars-staggered" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
