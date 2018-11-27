import { Spring, config } from 'react-spring';

const Intro = (props) => (
  <div className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-6" style={{paddingTop:"3rem"}}>
          <h1 className="title has-text-weight-bold" style={{fontSize:"2.8rem",  marginBottom: "0.5rem"}}>
            Hi, we're Penn Labs:
          </h1>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={500} config={config.molasses}>
            {props => (
              <div style={props}>
                <h2 className="subtitle" style={{fontSize:"2rem"}}>
                  a team of student <strong>software engineers</strong>, <strong>product designers</strong>, and <strong>business developers.</strong>
                </h2>
                <p style={{fontSize:"1.2rem"}}>
                  Our ultimate goal is improving the Penn community. 
                  In addition to creating high-quality products, we give back to the community with 
                  educational resources and technical support.
                </p>
              </div>)}
          </Spring>
          <br />
          <Spring from={{ opacity: 0 }} to={{ opacity: 1, borderColor: "#209CEE", color: "#209CEE" }} delay={500} config={config.molasses}>
            {props => (
              <div style={props}>
                <a href="/products" className="button is-light is-medium"> View Products </a>
              </div>
            )}
          </Spring>
        </div>
        <div className="column is-5" style={{paddingLeft:"4rem", marginLeft:"2rem"}}>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={500} config={config.molasses}>
            {props => (
              <div style={props}>
                <figure className="image">
                  <img style={{width: "350px"}} src="/static/img/test-hero.png" />
                </figure>
              </div>)}
          </Spring>
        </div>
      </div>
    </div>
  </div>);

export default Intro;
