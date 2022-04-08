// import axios from "axios";
// import { useEffect, useState } from "react";
import "./sidebar.css";
// import { Link } from "react-router-dom";

export default function Sidebar() {
  // const [cat, setCat] = useState([]);

  // useEffect(() => {
  //   const getCats = async () => {
  //     const res = await axios.get("/categories");
  //     setCat(res.data);
  //   };
  //   getCats();
  // }, []);
  return (
    <div className="sidebar" id="about">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <p>
        Raise your hand if you’ve ever felt like writing an About Me page was the hardest thing to do.

When you open up your page, you’re hit with the same boring words about you and your pets no one but you care about, and you can’t help wondering how the pros write about me pages that leap at you and grab you with both hands.

It’s daunting enough talking about yourself to the neighbors – never mind putting together an about page to be seen by your hundreds (or hundreds of thousands) of unique visitors!

Well, there’s good news: Writing a great about me page doesn’t have to be that daunting. With the right information at your disposal, you could easily create an engaging about me page — and without doling out huge sums to a copywriter too!
        </p>
      </div>
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cat.map((c) => (
            <li className="sidebarListItem">
              {c.name}
              <Link className="link" to="/posts?cat=Life">
                     Life
                  </Link>
            </li>
          ))}
        </ul>
      </div> */}
      <div className="sidebarItem">
        <span className="sidebarTitleS">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
