# Candidate Search

Candidate Search is a web application that fetches and displays potential candidates using the GitHub API. Users can review, save, or reject candidates based on their profiles.

## Features

- Fetches candidate profiles from GitHub API
- Displays candidate details including name, location, email, company, and bio
- Allows users to save or reject candidates
- Loads additional candidates once the initial list is exhausted

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/candidate-search.git
   cd candidate-search

2. Install dependecies

npm install

3. Create a .env file and add your GitHub token:

VITE_GITHUB_TOKEN=your_github_personal_access_token

4. Start the application 

npm run dev

## Usage

1. View candidate profiles.
2. Click the (+) button to save a candidate.
3. Click the (-) button to reject a candidate.
4. Click the (load More Candidates) button to refresh candidates
5. If all candidates are reviewed, new candidates will be fetched.

## Technologies Used  

- React
- TypeScript
- GitHub API
- vite

## License 

This project is licensed under the MIT License.

## Contact 

GitHub: https://github.com/AOF-O5-1
Email: marcusfajemisin@gmail.com
