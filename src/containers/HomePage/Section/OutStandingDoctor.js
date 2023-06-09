import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import { FormattedMessage } from "react-intl";
class OutStandingDoctor extends Component {
  render() {
    return (
      <div className="section-share section-outstanding-doctor">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Bác sĩ nỏi bật tuần qua</span>
            <button className="btn-section">tìm kiếm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-bg">
                    <div className="bg-img section-outstanding-doctor" />
                  </div>
                  <div className="position text-center">
                    <div>Giáo sư, Tiến sĩ Nam Học</div>
                    <div>Nam Học 1</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-bg">
                    <div className="bg-img section-outstanding-doctor" />
                  </div>
                  <div className="position text-center">
                    <div>Giáo sư, Tiến sĩ Nam Học</div>
                    <div>Nam Học 2</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-bg">
                    <div className="bg-img section-outstanding-doctor" />
                  </div>
                  <div className="position text-center">
                    <div>Giáo sư, Tiến sĩ Nam Học</div>
                    <div>Nam Học 3</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-bg">
                    <div className="bg-img section-outstanding-doctor" />
                  </div>
                  <div className="position text-center">
                    <div>Giáo sư, Tiến sĩ Nam Học</div>
                    <div>Nam Học 4</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-bg">
                    <div className="bg-img section-outstanding-doctor" />
                  </div>
                  <div className="position text-center">
                    <div>Giáo sư, Tiến sĩ Nam Học</div>
                    <div>Nam Học 5</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-bg">
                    <div className="bg-img section-outstanding-doctor" />
                  </div>
                  <div className="position text-center">
                    <div>Giáo sư, Tiến sĩ Nam Học</div>
                    <div>Nam Học 6</div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
