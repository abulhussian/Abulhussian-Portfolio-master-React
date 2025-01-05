import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full sm:pt-0 pt-12 bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        netlify
        name="sign-up"
        action="https://getform.io/f/avrewmoa"
        className="sm:mt-32 flex flex-col max-w-[600px] w-full justify-center"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline text-gray-300 border-b-4 border-[#ccd6f6]">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email -
            abulhussian1229@gmail.com
          </p>
        </div>
        <input
          type="text"
          className=" bg-[#ccd6f6] p-2"
          placeholder="Name"
          name="name"
        ></input>
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        ></input>
        <textarea
          name="message"
          className=" bg-[#ccd6f6] p-2"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <butto className="text-white border-2 font-semibold  hover:text-[#0a192f] hover:bg-[#ccd6f6] hover:border-[#ccd6f6] px-4 py-3 my-8 cursor-pointer mx-auto flex items-center ">
          Let's Collaborate
        </butto>
      </form>
    </div>
  );
};

export default Contact;
