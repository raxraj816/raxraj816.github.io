import "./topbar.scss";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            RajWorld.
          </a>
        </div>
        <div className="right">
          <div className="hamburger">
            <a
              href="https://github.com/raxraj816"
              rel="noreferrer"
              target="_blank"
            >
              <img src="assets/github.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
