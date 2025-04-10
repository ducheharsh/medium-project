import { useNavigate } from "react-router-dom";
import { Heading } from "../components/Heading";
import { Subheading } from "../components/subheading";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { userType } from "@harsh_duche/mediumtypes";
import { ErrorMessage } from "../components/ErrorMessage";
import { Spinner } from "../components/spinner";

export function SignUp() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/blogs");
    }
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <div>
          <LeftCol />
        </div>
        <div className="hidden md:block ">
          <Quote />
        </div>
      </div>
    );
  }
}

function LeftCol() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [issues, setIssues] = useState([]);
  const navigate = useNavigate();

  return (
    <div className="col-span-1 flex justify-center items-center h-screen">
      <div className=" flex flex-col justify-center h-1/2 w-full md:w-1/2 m-6 ">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-1 text-center">
            <Heading label="Create an account" />
          </div>
          <div className="flex hover:cursor-pointer hover:underline">
            <a
              className="pl-1 flex font-semibold hover:underline"
              onClick={() => {
                navigate("/Signin");
              }}
            >
              <div className="pr-1">
                <Subheading label="Aleready have an account? " />
              </div>
              <Subheading label="Login" />
            </a>
          </div>
        </div>
        <div className="py-7 w-full">
          <Input
            id="1"
            label="Name"
            placeholder="John Doe"
            onChange={(e: any) => {
              setName(e.target.value);
            }}
          />
          <Input
            id="2"
            label="Email"
            placeholder="john@gmail.com"
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            id="3"
            label="Password"
            type="password"
            placeholder="shhhhhh"
            onChange={(e: any) => {
              setPassword(e.target.value);
            }}
          />
          <div className="py-3">
            {issues.length > 0
              ? issues.map((x: any) => (
                <ErrorMessage message={x.message} code={x.path?.[0]} />
              ))
              : null}
          </div>
          <Button
            label="Sumbit"
            onClick={async () => {
              const data: userType = {
                name: name,
                email: email,
                password: password
              };
              try {
                await axios
                  .post(
                    "https://backend.ducheharsh.workers.dev/api/v1/user/signup",
                    data,
                  )
                  .then((msg: any) => {
                    if (msg.data.error) {
                      alert(msg.data.error);
                    } else {
                      console.log(msg),
                        alert("User Created Successfully");
                      const pretoken = msg.data.token;
                      const token = "Bearer " + pretoken;
                      localStorage.setItem("token", token);
                      localStorage.setItem("name", name);
                      localStorage.setItem("email", email);
                      navigate("/Blogs");
                      setIssues([]);
                    }
                  });
              } catch (err: any) {
                console.log(err);
                setIssues(err.response.data.error.issues);
              }
            }
            }
          />
        </div>
      </div>
    </div>
  );
}

function Quote() {
  return (
    <div className="col-span-1 flex flex-col items-center justify-center bg-slate-100 ">
      <div className="flex flex-col justify-center h-screen max-w-xl m-4 font-bold text-3xl">
        "The customer support I recived was execptional The support the went
        above and beyond to address my concern"
        <div className="text-xl mt-3 font-semibold">Julias Winfiled</div>
        <div className="text-lg  font-semibold text-slate-500">
          CEO, Acm Inc
        </div>
      </div>
    </div>
  );
}
