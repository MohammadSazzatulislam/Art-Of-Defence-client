import React from "react";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div className="mb-10 w-3/4 mx-auto my-20">
      <Helmet>
        <title>Art Of Defensee-Blog</title>
      </Helmet>
      <div>
        <h1 className="font-semibold text-2xl my-4 ">
          1. Difference between SQL and NoSQL ?
        </h1>
        <p>
          SQL is the programming language used to interface with relational
          databases. (Relational databases model data as records in rows and
          tables with logical links between them). NoSQL is a class of DBMs that
          are non-relational and generally do not use SQL.
        </p>
      </div>
      <div>
        <h1 className="font-semibold text-2xl my-4 ">
          2. What is JWT, and how does it work? ?
        </h1>
        <p>
          What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard
          (RFC 7519) for securely transmitting information between parties as
          JSON object. It is compact, readable and digitally signed using a
          private key/ or a public key pair by the Identity Provider(IdP).
        </p>
      </div>
      <div>
        <h1 className="font-semibold text-2xl my-4 ">
          3. What is the difference between javascript and NodeJS ?
        </h1>
        <p>
          JavaScript is a simple programming language that can be used with any
          browser that has the JavaScript Engine installed. Node. js, on the
          other hand, is an interpreter or execution environment for the
          JavaScript programming language.
        </p>
      </div>
      <div>
        <h1 className="font-semibold text-2xl my-4 ">
          4. How does NodeJS handle multiple requests at the same time ?
        </h1>
        <p>
          How NodeJS handle multiple client requests? NodeJS receives multiple
          client requests and places them into EventQueue. NodeJS is built with
          the concept of event-driven architecture. NodeJS has its own EventLoop
          which is an infinite loop that receives requests and processes them.
        </p>
      </div>
    </div>
  );
};

export default Blog;
