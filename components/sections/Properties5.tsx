import { PATHS } from "@/constants/paths";
import { SERVICES } from "@/constants/service";
import Image from "next/image";
import Link from "next/link";

export default function Properties5() {
    return (
        <>
            {/*===== PROPERTIES AREA STARTS =======*/}
            <div
                className="property4 sp2"
                style={{
                    backgroundImage: "url(assets/img/all-images/bg/team-bg1.png)",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="container">
                    <div className="row align-items-center space-margin60">
                        <div className="col-lg-6">
                            <div className="heading2">
                                <h5>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
                                        <path d="M2.5 20H4.5M4.5 20H10.5M4.5 20V11.452C4.5 10.918 4.5 10.651 4.565 10.402C4.62256 10.1819 4.71725 9.97322 4.845 9.78497C4.99 9.57197 5.191 9.39497 5.593 9.04397L10.394 4.84197C11.14 4.18997 11.513 3.86397 11.932 3.73997C12.302 3.62997 12.697 3.62997 13.067 3.73997C13.487 3.86397 13.861 4.18997 14.607 4.84397L19.407 9.04397C19.809 9.39597 20.01 9.57197 20.155 9.78397C20.283 9.9753 20.3763 10.1813 20.435 10.402C20.5 10.651 20.5 10.918 20.5 11.452V20M10.5 20H14.5M10.5 20V16C10.5 15.4695 10.7107 14.9608 11.0858 14.5858C11.4609 14.2107 11.9696 14 12.5 14C13.0304 14 13.5391 14.2107 13.9142 14.5858C14.2893 14.9608 14.5 15.4695 14.5 16V20M20.5 20H14.5M20.5 20H22.5" stroke="#ED8438" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    EMC Technology
                                </h5>
                                <div className="space18" />
                                <h2>Featured Services For You</h2>
                            </div>
                        </div>
                        <div className="col-lg-3" />
                        <div className="col-lg-3">
                            <div className="btn-area1 text-end">
                                <div className="space20 d-lg-none d-block" />
                                <Link href={PATHS.SERVICES} className="vl-btn1">
                                    Explore More Services
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

                <div className="service1-inner" style={{ padding: "0px 0px 0px 0px !important" }}>
                    <div className="row">
                        {SERVICES.slice(0, 3).map((service, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6">
                                <Link href={`${PATHS.SERVICE_DETAILS}/${service.id}`}>
                                    <div className="service-single-boxarea">
                                        <div className="img1">
                                            <Image src={service.image} alt={service.category} style={{ maxHeight: '400px' }} />
                                        </div>
                                        <div className="content-area">
                                            <div className="icons">{service.icon}</div>
                                            <div className="content">
                                                <Link href={`${PATHS.SERVICE_DETAILS}/${service.id}`}>{service.category}</Link>
                                                <div className="space16" />
                                                <p>{service.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/*===== PROPERTIES AREA ENDS =======*/}
        </>
    );
}
