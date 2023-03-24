import React from "react";
import { BsTwitter } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { FaLink } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const UserCard = ({ data }) => {
  console.log(data);
  return (
    <>
      {data !== "" ? (
        <div className="user_detail_container">
          <div className="user_image">
            <img
              src={`${
                data?.avatar_url ||
                "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              }`}
              alt=""
            />
          </div>
          <div className="user_detail">
            <div className="user_detail__name_and_joined_date">
              <h2>{data?.name || "not found"}</h2>
              <p>Joined {data?.created_at?.slice(0, 10) || "not updated"}</p>
            </div>
            <h3 className="user_detail__username">
              {data?.login || "not updated"}
            </h3>
            <p className="user_detail__bio">{data?.bio || "not updated"}</p>
            <div className="user_detail__work">
              <div className="data">
                <span className="key">Repos</span>
                <span className="value">{data?.public_repos || 0}</span>
              </div>
              <div className="data">
                <span className="key">Followers</span>
                <span className="value">{data?.followers || 0}</span>
              </div>{" "}
              <div className="data">
                <span className="key">Following</span>
                <span className="value">{data?.following || 0} </span>
              </div>
            </div>
            <div className="user_detail__address">
              <p className="location">
                <i>
                  <ImLocation />
                </i>
                {data?.location || "not updated"}
              </p>
              <p className="soical_handle">
                <i>
                  <BsTwitter />
                </i>
                {data?.twitter_username || "not updated"}
              </p>
            </div>
            <div className="user_detail_work_and_company">
              <a href="https://github.com" className="user_detail__blog">
                <i>
                  <FaLink />
                </i>
                {data?.blog || "not updated"}
              </a>
              <p>
                <i>
                  <HiOutlineBuildingOffice2 />
                </i>
                {data?.company || "not updated"}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="center">please search any username </div>
      )}
    </>
  );
};

export default UserCard;
