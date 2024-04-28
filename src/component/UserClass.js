import React from "react";
import { GithubApi } from "./Const";
// import { AboutUs } from "./AboutUs";

export class UserClass extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      count: 0,
      githubdata: {},
      gitrepos1: [],
    };
    console.log("constructor loading");
 }

 async componentDidMount() {
    try {
      const data = await fetch(GithubApi);
      let json = await data.json();
      this.setState({ githubdata: json });

     
      const username = json.login;
      const repos = await fetch(`https://api.github.com/users/${username}/repos`);
      let json1 = await repos.json();
      this.setState({ gitrepos1: json1 });
      console.log(json1);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
 }

 render() {
    const { name, location, avatar_url, bio, twitter_username } = this.state.githubdata;
    const { count } = this.state;

    return (
      <div>
        <h4>Github Data</h4>
        <img src={avatar_url} alt={name} />
        <h3>Name: {name}</h3>
        <h5>Bio: {bio}</h5>
        <h5>
          <a href={`https://twitter.com/${twitter_username}`} target="_blank" rel="noopener noreferrer">
            Twitter handle: {twitter_username}
          </a>
        </h5>
        <h6 className="">Location: {location}</h6>
        <h5>Repository list made by user</h5>
        <ul>
          {this.state.gitrepos1.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
        <h6>Count: {count}</h6>
        <button onClick={() => this.setState({ count: count + 1 })}>Increase Count</button>
      </div>
    );
 }
}
