/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaSteam } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";

export default function SocialMedia({
  isTop,
  setLang,
  steamPage,
}: {
  isTop: boolean;
  setLang: (...any: any) => void;
  steamPage: string;
}) {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 999,
        top: "40%",
        left: isTop ? -999 : 20,
        transition: ".3s",
        display: "flex",
        flexDirection: "column",
        gap: 25,
      }}
    >
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        <li
          onClick={() => setLang("pt")}
          style={{ fontSize: "2rem", cursor: "pointer" }}
        >
          🇧🇷
        </li>
        <li
          onClick={() => setLang("en")}
          style={{ fontSize: "2rem", cursor: "pointer" }}
        >
          🇺🇸
        </li>
      </ul>
      <span className="icon icon-linkedin">
        <a
          href="https://www.linkedin.com/company/voxels-entertainment-and-games-ltda/?viewAsMember=true"
          target="_blank"
          aria-label="Linkedin Page"
        >
          <FaLinkedin size="2.3rem" color={"#fff"} />
        </a>
      </span>
      <span className="icon icon-youtube">
        <a
          href="https://www.youtube.com/@voxelsentertainmentandgame9389"
          target="_blank"
          aria-label="Youtube Channel"
        >
          <FaYoutube size="2.3rem" color={"#fff"} />
        </a>
      </span>
      {steamPage ? (
        <span className="icon icon-steam">
          <a href={steamPage} target="_blank" aria-label="Steam Page">
            <FaSteam size="2.3rem" color={"#fff"} />
          </a>
        </span>
      ) : null}
      {/* <span className="icon icon-insta">
        <a href="/" aria-label="Instagram Page">
          <FaInstagram size="2.3rem" color={"#fff"} />
        </a>
      </span> */}
    </div>
  );
}
