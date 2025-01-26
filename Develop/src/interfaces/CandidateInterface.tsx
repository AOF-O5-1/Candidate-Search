export interface Candidate {
    login: string; // GitHub username
    id: number; // Unique GitHub user ID
    avatar_url: string; // URL of the avatar image
    html_url: string; // URL to the GitHub profile
    name?: string; // Full name of the user (optional, may be null)
    company?: string; // Company of the user (optional, may be null)
    location?: string; // Location of the user (optional, may be null)
    email?: string; // Email address of the user (optional, may be null)
    bio?: string; // Bio/description of the user (optional, may be null)
    public_repos: number; // Number of public repositories
    followers: number; // Number of followers
    following: number; // Number of following
  }