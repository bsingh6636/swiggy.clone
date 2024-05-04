import React, { useState, useEffect } from "react";
import { GithubApi } from "./Const";

export default function AboutUs() {
    const [count, setCount] = useState(0);
    const [githubData, setGithubData] = useState({});
    const [gitRepos, setGitRepos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(GithubApi);
                const json = await data.json();
                setGithubData(json);

                const username = json.login;
                const repos = await fetch(`https://api.github.com/users/${username}/repos`);
                const json1 = await repos.json();
                setGitRepos(json1);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex justify-center">
            <div className="bg-gradient-to-r from-teal-500 to-indigo-600 text-white p-5 rounded-lg shadow-lg">
                <img className="rounded-full h-52 w-52 mx-auto border-4 border-white" src={githubData.avatar_url} alt={githubData.name} />
                <h4 className="text-2xl font-bold my-4">Data Fetched from GitHub API</h4>
                <h3 className="text-xl font-semibold">Name: {githubData.name}</h3>
                <h5 className="text-lg">Bio: {githubData.bio}</h5>
                <h5 className="text-lg">
                    <a href={`https://twitter.com/${githubData.twitter_username}`} target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-300">
                        Twitter handle: {githubData.twitter_username}
                    </a>
                </h5>
                <h6 className="text-gray-200">Location: {githubData.location}</h6>
                <h5 className="text-lg mt-4">Repository list made by user</h5>
                <ul className="list-disc list-inside text-gray-200">
                    {gitRepos.map((repo) => (
                        <li key={repo.id}>{repo.name}</li>
                    ))}
                </ul>
                <button 
                    onClick={() => {
                        setCount(count + 1);
                        window.open('https://github.com/bsingh6636?tab=repositories', '_blank');
                    }} 
                    className="bg-blue-200 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded mt-4"
                >
                    Go to my GitHub Repository
                </button>
            </div>
        </div>
    );
}
