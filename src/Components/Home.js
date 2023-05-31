import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <img
        src="https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMDY1OTc2fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
        alt="404"
      />
      <div className="content">
        <h2>Welcome</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, esse.
          Sed veritatis, consequuntur recusandae sequi animi odit reiciendis
          iusto, perferendis exercitationem rerum mollitia quis possimus?
          Accusantium eligendi vitae totam assumenda?
        </p>
        <span className="test">
       <Link to="/contact"> <button className="btn-home">Contact</button></Link>
        </span>
      </div>
    </div>
  );
};

export default Home;
