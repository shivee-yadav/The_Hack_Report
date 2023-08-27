import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./signup.styles.css";
import google from "../assets/google.png";
import signup from "../assets/signup.jpg";


const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();
  const [picLoading, setPicLoading] = useState(false);

  const googleAuth = () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/google`,
      "_self"
    );
  };


  const submitHandler = async () => {
    setPicLoading(true);
    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
    if (password !== confirmpassword) {
      toast({
        title: "Passwords Do Not Match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    console.log(name, email, password, pic);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/signup",
        {
          name,
          email,
          password,
          pic,
        },
        config
      );
      console.log(data);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setPicLoading(false);
      navigate("/");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
    }
  };

  const postDetails = (pics) => {
    setPicLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    console.log(pics);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "piyushproj");
      fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setPicLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setPicLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Sign Up Form</h1>
      <div className="form_container">
        <div className="left">
          <img className="img" src={signup} alt="login" />
        </div>
        <div className="right">
          <h2 className="from_heading">Create Account</h2>
          <VStack>
            <FormControl id="first-name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                className="input"
                placeholder="Enter Your Name"
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input
              className="input"
                type="email"
                placeholder="Enter Your Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                className="input"
                  type={show ? "text" : "password"}
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem" className="show" > 
                  <Button h="2rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup size="md">
                <Input
                className="input"
                  type={show ? "text" : "password"}
                  placeholder="Confirm password"
                  onChange={(e) => setConfirmpassword(e.target.value)}
                />
                <InputRightElement width="4.5rem" className="show">
                  <Button h="2rem" size="sm"  onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Button
              className="btn"
              colorScheme="blue"
              width="100%"
              style={{ marginTop: 15 }}
              onClick={submitHandler}
              isLoading={picLoading}
            >
              Sign Up
            </Button>
            <p className="text">or</p>
          <button className="google_btn" onClick={googleAuth}>
            <img src={google} alt="google icon" />
            <span>Sign in with Google</span>
          </button>
          <p className="text">
            Already Have  an Account ? <Link to="/signin">Sign In</Link>
          </p>
          </VStack>
        </div>
      </div>
    </div>

  );
};

export default Signup;