import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./signin.styles.css";
import google from "../assets/google.png";
import login from "../assets/login.jpg";

const Signin = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();



  const googleAuth = () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/google`,
      "_self"
    );
  };

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/signin",
        { email, password },
        config
      );

      toast({
        title: "Signin Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      //   setUser(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
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
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Log in Form</h1>
      <div className="form_container">
        <div className="left">
          <img className="img" src={login} alt="login" />
        </div>
      <div className="right">
        <VStack spacing="10px">
          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              className="input"
              value={email}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem" className="show">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
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
            isLoading={loading}
          >
            Signin
          </Button>
          <p className="text">or</p>
          <button className="google_btn" onClick={googleAuth}>
            <img src={google} alt="google icon" />
            <span>Sign in with Google</span>
          </button>
          <p className="text">
            New Here ? <Link to="/signup">Sign Up</Link>
          </p>
        </VStack>
      </div>
    </div>
    </div>

  );
};

export default Signin;