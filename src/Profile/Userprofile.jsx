import { FaUsers } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiGitRepositoryFill } from "react-icons/ri";
import { IoMdOpen } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";
import { IoLinkSharp } from "react-icons/io5";
import { useState } from "react";
import useuserstore from "../Store/userStore";
import "./Userprofile.css";

function Userprofile() {
  const [img, setImg] = useState(null);
  const [login, setLogin] = useState(null);
  const [company, setCompany] = useState(null);
  const [url, setUrl] = useState(null);
  const [location, setLocation] = useState(null);
  const [repos, setRepos] = useState(null);
  const [followers, setfollowers] = useState(null);
  const [following, setFollowing] = useState(null);

  const username = useuserstore((state) => state.username);

  if (username != null) {
    (async () => {
      try {
        const api_url = `https://api.github.com/users/${username}`;
        const response = await fetch(api_url);
        const output = await response.json();
        console.log(output);

        setImg(output.avatar_url);
        setLogin(output.login);
        setCompany(output.company);
        setUrl(output.html_url);
        setLocation(output.location);
        setRepos(output.repos);
        setfollowers(output.followers);
        setFollowing(output.following);
      } catch (error) {
        console.log("There was an error fetching data");
      }
    })();
  } else {
    console.log("Enter username");
  }
  console.log(username);

  const [repositories, setRepositories] = useState([]);
  const [follows, setfollows] = useState([]);

  if (username != null) {
    (async () => {
      try {
        const fetch_url = `https://api.github.com/users/${username}/repos`;
        const input = await fetch(fetch_url);
        const json = await input.json();
        setRepositories(json);
      } catch (error) {
        console.log("There was an error");
      }
    })();
  } else {
    console.log("Error");
  }

  if (username != null) {
    (async () => {
      try {
        const fetch_url = `https://api.github.com/users/${username}/followers`;
        const output = await fetch(fetch_url);
        const display = await output.json();
        setfollows(display);
      } catch (error) {
        console.log(
          "There was an error fetching the followers check your internet connection",
        );
      }
    })();
  }

  return (
    <section className="user-repo">
      <div className="userprofile-container">
        <div className="container-items">
          <div className="github-icon">
            <img src={img} alt="" />
          </div>
          <h1>{login}</h1>
          <p>{company}</p>

          <a href={url} target="blank" className="github-link">
            {" "}
            <IoMdOpen /> View On Github
          </a>

          <p>
            <MdOutlineLocationOn /> {location}
          </p>
          <p>
            <RiGitRepositoryFill />
            {repos} Repositories
          </p>
          <p>
            <FaUsers />
            {followers} Followers
          </p>
          <p>
            <FaUsers />
            {following} Following
          </p>
        </div>


        <div className="repos">
          <h2>Repositories (30)</h2>
          <div className="repos-container">
            {repositories.map((repo) => (
              <section className="repos" key={repo.id}>
                <div className="title">
                  <h3>{repo.name}</h3>
                  <p>{repo.description}</p>
                </div>

                <div className="repo-items">
                  <p>
                    <GoRepoForked />
                    {repo.forks_count}
                    Forks
                  </p>
                  <p>
                    <FaStar />
                    {repo.stargazers_count} stars
                  </p>
                </div>
              </section>
            ))}
          </div>
        </div>

        
        <div className="followers-container">
          <h2>Followers(30)</h2>

          <div className="followers-items">
            {follows.map((follow) => (
              <div className="followers" key={follow.id}>
                <img src={follow.avatar_url} alt="" />
                <h3>{follow.login}</h3>
                <p>
                  <a href={follow.html_url} target="blank">
                    <IoLinkSharp /> link
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Userprofile;
