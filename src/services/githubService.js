import axios from "axios";

const SEARCH_ENDPOINT = "https://api.github.com/search/repositories";

const getReactRepositories = (page = 0) => {
  return axios
    .get(SEARCH_ENDPOINT, {
      params: {
        q: "react",
        sort: "stars",
        order: "desc",
        per_page: 30,
        page: page + 1,
      },
    })
    .then((result) => result.data.items)
    .then((repos) =>
      repos.map(
        ({
          forks,
          name,
          description,
          language,
          stargazers_count,
          html_url,
        }) => ({
          forks,
          name,
          description,
          language,
          stars: stargazers_count,
          url: html_url,
        })
      )
    );
};

export default getReactRepositories;
