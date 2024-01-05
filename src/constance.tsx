import { createBrowserRouter } from "react-router-dom";
import ProjectsDetails from "./components/projectsDetails";
import { v4 as uuidv4 } from "uuid";
import App from "./App";
// e-commerce
import hero from "../public/electornics/hero.png";
import productsDetails from "../public/electornics/products-details.png";
import products from "../public/electornics/products.png";
// import secondSection from "../public/electornics/second-section.png";
import signUp from "../public/electornics/sign-up.png";
// dashBoard
import dashBoardDark from "../public/dashboard/DashBoard-dark.png";
import dashBoardLight from "../public/dashboard/Dashboard-light.png";
import logInDark from "../public/dashboard/LogIn-dark.png";
// import productsDark from "../public/dashboard/Product-dark.png";
import addProduct from "../public/dashboard/add-product.png";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/details/:name",
    element: <ProjectsDetails />,
  },
]);

export const data = {
  "e-commerce": {
    Overview: [
      {
        paragraph: `
    The 'Electronics' e-commerce web app is a showcase of my expertise in high-quality front-end web development.
    Developed in collaboration with a backend partner, this project not only highlights technical skills 
    but also demonstrates effective communication, problem-solving, and social interaction. Serving as a solid foundation, it rigorously tests our abilities,
    making it a dynamic addition to my portfolio, emphasizing growth, innovation, and dedication to delivering results.`,
        id: uuidv4(),
      },
      {
        image: hero,
        id: uuidv4(),
      },
    ],
    Challanges: [
      {
        paragraph: ` The main challenge was ensuring top-level security for our e-commerce web app.
       Given its nature, we prioritized building the platform with the highest security standards.`,
        id: uuidv4(),
      },
      {
        paragraph: `Managing product details with various options (RAM, storage, colors), each with its unique quantity, posed a challenge. 
        Navigating this complexity was crucial for a seamless and user-friendly experience.`,
        id: uuidv4(),
      },
      {
        image: signUp,
        id: uuidv4(),
      },
    ],
    Solutions: [
      {
        paragraph: `
       To bolster the security of our app, we opted for JWT tokens. 
      This decision provides a secure method for keeping users logged in without requiring them to input their email and password repeatedly`,
        id: uuidv4(),
      },
      {
        paragraph: `To make product options easier, we made the interface simpler.
         Now, there is only one button (RAM and storage). 
         Users can see the colors available for each option easily by selecting the option they want . 
         Also, we set limits on the quantity for each combination, so users can't order more than what we have in our database.`,
        id: uuidv4(),
      },
      {
        image: productsDetails,
        id: uuidv4(),
      },
    ],
    "Creating Process": [
      {
        paragraph: `I may not be an expert designer, but I have a good understanding of design principles and practices.
         I start by creating a wireframe for the app and then translate it into a real web application using Figma.
          This helps simplify the coding process for me.`,
        id: uuidv4(),
      },
      {
        paragraph: `In my coding process, I strive to give my best as it's becoming my main job.
         To ensure success, I leverage modern tools such as Next.js for the frontend, along with a variety of libraries like Formik, Tailwind CSS, Stripe.js, Redux Toolkit, and more.
         These tools not only expedite the coding process but also contribute to a more efficient and effective development workflow.`,
        id: uuidv4(),
      },
      {
        image: products,
        id: uuidv4(),
      },
    ],
    Conclusion: [
      {
        paragraph: `In this project, I've gained valuable insights, starting with collaboration alongside a backend partner. 
        I delved into project structuring, worked extensively with backend APIs, seamlessly integrated multiple libraries within the same project, and honed my debugging skills.`,
        id: uuidv4(),
      },
      {
        image: hero,
        id: uuidv4(),
      },
    ],
  },
  dashboard: {
    Overview: [
      {
        paragraph: `Just as we collaborated with the previous project, we created a dashboard to go along with it.
       This dashboard gives owners easy control to add, delete, and update products and categories. It's a user-friendly tool that empowers owners to manage everything seamlessly.
        Plus, it provides charts to keep owners informed about sales, visitors, and the platforms they come from.`,
        id: uuidv4(),
      },
      {
        image: dashBoardDark,
        id: uuidv4(),
      },
    ],
    "Challanges & Solutions": [
      {
        paragraph: `since the security is a main aspect in
         any dashboard we decide to keep things safe, so we use 
         the protected route approach and the user can see data they are authorized 
         to see based on their role to keep things as safe as possible, and use the JWT approach to log the user in.`,
        id: uuidv4(),
      },
      {
        image: logInDark,
        id: uuidv4(),
      },
    ],
    "Creating Process": [
      {
        paragraph: `To speed things up, I obtained a visually appealing UI for the dashboard. 
      I made necessary changes to tailor it to my needs, ensuring a user-friendly interface for quick and efficient use.`,
        id: uuidv4(),
      },
      {
        paragraph: `In this project, I went for React with Vite to handle different approaches. 
      Following good project practices, I added useful libraries like Material-UI, Formik, React Router DOM, Nivo for charts, and others. 
      These libraries speed things up and make the project more practical, just like real-world apps that don't start from scratch each time.`,
        id: uuidv4(),
      },
      {
        image: addProduct,
        id: uuidv4(),
      },
    ],
    Conclusion: [
      {
        paragraph: `In this project, I've gained valuable insights, starting with collaboration alongside a backend partner. 
      I delved into project structuring, worked extensively with backend APIs, seamlessly integrated multiple libraries within the same project, and honed my debugging skills.`,
        id: uuidv4(),
      },
      {
        image: dashBoardLight,
        id: uuidv4(),
      },
    ],
  },
};
