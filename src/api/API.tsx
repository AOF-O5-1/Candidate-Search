

const searchGithub = async () => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;

    const response = await fetch(
      `https://api.github.com/users?since=${start}&per_page=60`, // Fetch 60 users per request
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Invalid API response, check the network tab");
    }

    const users = await response.json();
    console.log("Users List:", users);

    // Fetch detailed user data for each user
    const detailedUsers = await Promise.all(
      users.map(async (user: { login: string }) => {
        return await searchGithubUser(user.login);
      })
    );

    console.log("Detailed Users:", detailedUsers);
    return detailedUsers;
  } catch (err) {
    console.error("An error occurred", err);
    return [];
  }
};
  
  const searchGithubUser = async (username: string) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      });
  
      if (!response.ok) {
        throw new Error("Invalid API response, check the network tab");
      }
  
      const data = await response.json();
      console.log(`User Data for ${username}:`, data);
      return data;
    } catch (err) {
      console.error("An error occurred", err);
      return {};
    }
  };
  
  
  export { searchGithub, searchGithubUser };
  