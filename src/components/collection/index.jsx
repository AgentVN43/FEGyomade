import React from 'react'

export default function Collection() {
    return (
        <section>
            <div className="cs_height_140 cs_height_lg_80" />
            <div className="cs_card cs_style_2">
                <div className="container">
                    <div className="row cs_gap_y_30 align-items-center">
                        <div className="col-lg-6">
                            <div className="cs_card_info">
                                <h2 className="cs_card_title cs_fs_50 cs_bold">
                                    Explore latest handcraft exclusive collection
                                </h2>
                                <p className="cs_card_subtitle">
                                    We believe that winter fashion should be both functional and
                                    fabulous. Our <br /> Winter Fashion Collection reflects our
                                    commitment to quality, comfort, and <br /> style. Embrace the
                                    season with confidence.
                                </p>
                                <a
                                    href="shop.html"
                                    className="cs_btn cs_style_1 cs_fs_16 cs_medium"
                                >
                                    Shop Now
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img
                                src="assets/img/card1.jpg"
                                alt="Card Image"
                                className="w-100"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="cs_height_120 cs_height_lg_70" />
        </section>
    )
}
