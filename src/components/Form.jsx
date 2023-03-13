import { useMediaQuery } from "@chakra-ui/react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Form = () => {
  const [isLargerThan768] = useMediaQuery(`(min-width: 800px)`);

  const [state, handleSubmit] = useForm("mjvdrdrz");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <Flex justifyContent="center" alignItems="center">
      <form
        className="form"
        style={isLargerThan768 ? { width: "40%" } : { width: "90%" }}
        onSubmit={handleSubmit}
      >
        <Text
          textAlign="center"
          fontSize="20px"
          fontWeight="bold"
          bg="transparent"
          padding="20px"
        >
          Send me a message!
        </Text>
        <FormLabel bg="transparent" htmlFor="text">
          Name
        </FormLabel>
        <Input
          placeContent="First name"
          focusBorderColor="black"
          type="text"
          name="text"
          id="text"
        />
        <ValidationError prefix="text" field="text" errors={state.errors} />
        <FormLabel bg="transparent" htmlFor="email">
          Email
        </FormLabel>
        <Input
          placeContent="Email"
          focusBorderColor="black"
          type="email"
          name="email"
          id="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <FormLabel bg="transparent" htmlFor="message">
          Message
        </FormLabel>
        <Textarea
          h="250px"
          focusBorderColor="black"
          name="message"
          id="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Flex
          w="100%"
          bg="transparent"
          paddingTop="20px"
          justifyContent="flex-end"
        >
          <Button
            w="250px"
            fontSize="15px"
            bg="white"
            border="1px solid black"
            type="submit"
            disabled={state.submitting}
          >
            Send Message
          </Button>
          <Box />
        </Flex>
      </form>
    </Flex>
  );

  // const [state, handleSubmit] = useForm("mjvdrdrz");
  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }
  // return (
  //   <Flex justifyContent="center">
  //     <form onSubmit={handleSubmit} style={{ border: "1px solid red" }}>
  //       <Flex justifyContent="center" flexDir="column" padding="20px">
  //         <FormLabel className="label" htmlFor="name">
  //           Name
  //         </FormLabel>
  //         <Input type="name" id="name" name="name" />
  //         <FormLabel className="label" htmlFor="email">
  //           Email Address
  //         </FormLabel>
  //         <input id="email" type="email" name="email" />
  //         <ValidationError prefix="Email" field="email" errors={state.errors} />
  //         <FormLabel htmlFor="message" className="label">
  //           Contact
  //         </FormLabel>
  //         <Textarea id="message" name="message" />
  //         <ValidationError
  //           prefix="Message"
  //           field="message"
  //           errors={state.errors}
  //         />
  //         {/* <button type="submit" disabled={state.submitting}>
  //           Submit
  //         </button> */}
  //         <Button type="submit" disabled={state.submitting}>
  //           Send
  //         </Button>
  //       </Flex>
  //     </form>
  //   </Flex>
  // );
};

export default Form;
