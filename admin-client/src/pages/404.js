import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <>
         <h1>Page not found</h1>
         <Link to='/'>Back to Home</Link>
        </>
    );
}