import { Link } from "react-router-dom";

export function About() {
  return (
    <div>
      <Link to={"/"}>Calculator</Link>
      <h1>ABOUT</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        omnis aperiam asperiores quis explicabo modi earum eum, ullam laboriosam
        alias repudiandae. Reprehenderit eius aperiam vel perspiciatis ad quas
        officiis in.
      </p>
    </div>
  );
}

export default About;
