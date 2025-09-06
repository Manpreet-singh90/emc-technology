import Link from "next/link";
import ABOUT_IMAGE from '@/assets/about/about.jpg'
import ImageWrapper from "@/components/atoms/image";

export default function About1() {
    return (
        <>
            <div className="about1-section-area container-home1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-img1 image-anime reveal">
                                <ImageWrapper src={ABOUT_IMAGE} alt="about" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading1">
                                <div className="head">
                                    <h5>About Company</h5>
                                    <div className="space16" />
                                    <h3 className="text-anime-style-2">The company LLC "ELECTRO-MECHANICAL CONSTRUCTION TECHNOLOGY"</h3>
                                </div>
                                <div className="space20" />
                                <div className="perag-bg  ">
                                    <p>
                                        {`in Uzbekistan since its foundation has been supplying equipment, installation and commissioning, maintenance, computer diagnostics, repair work, supply of spare parts for chillers, central air conditioners, VRF systems, refrigeration chambers, heating systems, automatic control systems, as well as other industrial-type equipment. The goal of our company is the high-quality performance of the above works. Our company is provided with all the necessary means to provide services at a high level. We also have highly qualified administrative and technical staff. We always try to use new technologies, increasing the level of knowledge and training staff and thus provide the best, high-quality work.`}
                                    </p>
                                    <div className="space32" />
                                    <div className="btn-area1">
                                        <Link href="/my-property" className="vl-btn1">
                                            See Properties
                                            <span className="arrow1 ms-2">
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                            <span className="arrow2 ms-2">
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-4">
                            <div className="about-img2 image-anime reveal">
                                <img src="/assets/img/all-images/about/about-img2.png" alt="housa" />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}
