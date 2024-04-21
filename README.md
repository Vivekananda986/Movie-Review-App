# Movie Review App

This full-stack application offers a seamless experience for movie enthusiasts to explore, watch trailers, and share their thoughts through reviews.

## Description

The Movie Review App is a dynamic platform that combines cutting-edge technologies to deliver an immersive movie-watching experience. With React powering the frontend, Spring Boot driving the backend, and MongoDB handling the database operations, users can seamlessly navigate through movie details, trailers, and reviews.

## Key Features

- **Movie Details:** Dive deep into comprehensive movie details, including posters, titles, release dates, and trailers.
- **User Interaction:** Engage with the platform through intuitive UI elements, including login, registration, and review posting functionalities.
- **Community Reviews:** Share your insights and opinions by posting reviews for your favorite movies.

## Technologies Used

### Frontend
- React
- Bootstrap
### Backend
- Spring Boot 3.1.2

### Database
- MongoDB

### Dependencies

- axios: for API calls
- react-material-ui-carousel: for carousel components
- @mui/material, @emotion/react, @emotion/styled: for styling components
- react-router-dom: for client-side routing

## API-endpoints 
- Get api/v1/movieid: Endpoint to get the movie details by passing imdbid.
- POST /api/v1/reviews: Endpoint for posting reviews. Facilitates seamless integration between frontend and backend, ensuring real-time updates.

### Installation

1. Clone the repository: `git clone https://github.com/your-username/movie-review-app.git`
2. Navigate to the project directory: `cd movie-review-app`
3. Install dependencies: `npm install`

### Running the Application

1. Start the backend server: `mvn spring-boot:run`
2. Start the frontend development server: `npm start`
3. Open your browser and navigate to `http://localhost:3000`

