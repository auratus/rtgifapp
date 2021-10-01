import React from "react";
import "./footer.css"

function Footer(){
    return (
        <>
<footer id="main_footer">
        <div id="child_footer">
            <section>
                <h3>OTHER LINKS :</h3><br/>
                <ul id="add_links">
                    <a href="https://www.rtquiz.gq/PrivacyPolicy.html" id="privacy" target="_blank"><i className="far fa-hand-point-right" id="pp_icon"></i>
                        <li id="pp">&nbsp;&nbsp;PRIVACY POLICY</li>
                    </a>
                    
                    <a href="https://www.rtquiz.gq/disclaimer.html" id="disclaimer" target="_blank"><i className="far fa-hand-point-right"
                            id="dis_icon"></i>
                        <li id="dis">&nbsp;&nbsp;DISCLAIMER</li>
                    </a>
                    
                </ul>
            </section>

            <section>
                <h3>SOCIAL LINKS :</h3><br/>
                <ul>
                    <a title="Instagram" href="https://www.instagram.com/rohitsahu2663" target="_blank">
                        <li id="insta"><i className="fab fa-instagram" id="insta_icon"></i>&nbsp;&nbsp;INSTAGRAM</li>
                    </a>
                    <a title="Facebook" href="https://www.facebook.com/profile.php?id=100032448461635" target="_blank">
                        <li id="face"><i className="fab fa-facebook" id="facebook_icon"></i>&nbsp;&nbsp;FACEBOOK</li>
                    </a>
                    <a title="Twitter" href="https://twitter.com/RohitSa91980236" target="_blank">
                        <li id="twitter"><i className="fab fa-twitter" id="twitter_icon"></i>&nbsp;&nbsp;TWITTER</li>
                    </a>
                   
                </ul>
            </section>

            <section id="con_tact">
                <h3>CONTACT US :</h3><br/>
                <h4 id="add"><span id="address_icon"><i className="fas fa-map-marker-alt" ></i></span>&nbsp;&nbsp;ADDRESS : </h4><br/>
                <p id="add_ress">401,ABC PLAZA,XYZ ROAD,JABALPUR,M.P,482001</p>
                <br/>
                <a href="tel:9109274958" id="mobile_text"><span id="mo_num"><i
                            className="fas fa-phone-square-alt"></i></span>&nbsp;&nbsp;9109274958</a>
                <br/>
                <a href="mailto:rohitsahu721@yahoo.com" id="email_text"><span id="e_id"><i
                            className="fas fa-envelope-open-text"></i></span>&nbsp;&nbsp;rohitsahu721@yahoo.com</a>
            </section>

        </div>

        <div id="foot_des">

            <p>Overall client rating is 5 out of 5 stars for Website Development Services in Jabalpur.</p>

        </div>

        <div id="foot_end">

            <section id="c_right">
                <p>&#xA9; , <span id="hi_rt"><a href="index.html">ROHIT TECHNICAL</a></span> , ALL RIGHTS RESERVED</p>
            </section>


        </div>
    </footer>
        </>
    )
}

export default Footer;