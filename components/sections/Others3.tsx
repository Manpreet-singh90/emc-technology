import Link from "next/link";
import TEAM_IMAGE from '@/assets/about/team.jpg'
import ImageWrapper from "@/components/atoms/image";
import { PATHS } from "@/constants/paths";

export default function Others3() {
    return (
        <>
            <div className="space30" />
            {/*===== OTHERS AREA STARTS =======*/}
            <div className="miision1">
                <div className="containr-fluid">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="heading1 text-center space-margin60">
                                <h5>Mission &amp; Vision</h5>
                                <div className="space16" />
                                <h2>Our Mission &amp; Vision</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="images1">
                                <ImageWrapper src={TEAM_IMAGE} alt="team" className="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mission-heading heading1">
                                <h2>Transforming Building Efficiency Systems</h2>
                                <div className="space16" />
                                <p>WLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>
                                <div className="space32" />
                                <h3>Our Mission</h3>
                                <div className="space16" />
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown </p>
                                <div className="space32" />
                                <h3>Our Vision</h3>
                                <div className="space16" />
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,s</p>
                                <div className="space32" />
                                <div className="btn-area1">
                                    <Link href={PATHS.CONTACT} className="vl-btn1">
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
                        </div>
                    </div>
                </div>
            </div>
            {/*===== OTHERS AREA ENDS =======*/}
            <div className="space30" />
        </>
    );
}
