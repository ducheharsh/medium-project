import { useNavigate } from "react-router-dom";
import { Heading } from "../components/Heading";
import { Subheading } from "../components/subheading";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import axios from "axios";
import { useState } from "react";
import { userType } from "@harsh_duche/mediumtypes";


export function SignUp() {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div>
        <LeftCol />
      </div>
      <div>
        <Quote />
      </div>
    </div>
  );
}

function LeftCol() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="col-span-1 flex justify-center items-center h-screen">
      <div className=" flex flex-col justify-center h-1/2 w-1/2 ">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-1">
            <Heading label="Create an account" />
          </div>
          <div className="flex hover:cursor-pointer hover:underline">
            <Subheading label="Aleready have an account? " />
            <a
              className="ml-1"
              onClick={() => {
                navigate("/Signin");
              }}
            >
              <Subheading label="Login" />
            </a>
          </div>
        </div>
        <div className="p-7 w-full">
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
            placeholder="shhhhhh"
            onChange={(e: any) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            label="Sumbit"
            onClick={async() => {
            const data:userType ={
                name:name, 
                email:email,
                password:password,
              }
            try{
             await axios.post("https://backend.ducheharsh.workers.dev/api/v1/user/signup",data)
              .then((msg:any)=>{
                if (msg.data.error){
                  alert(msg.data.error)
                  
                }else{
                console.log(msg),
                alert("User Created Successfully")
                const pretoken = msg.data.token
                const token = "Bearer " + pretoken
                localStorage.setItem("token", token)
                navigate("/Blogs")
                }
              })
            }catch(err){
              console.log(err)
            }
} }
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
        <div className="text-lg  font-semibold text-slate-500">CEO, Acm Inc</div>
      </div>
    </div>
  );
}