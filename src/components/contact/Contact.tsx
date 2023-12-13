import { ChangeEvent, FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<null | string>(null);
  const [sucess, setSucess] = useState<null | string>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const publikKey = import.meta.env.VITE_EMAIL_PUBLIK_KEY;
  const serviceId = import.meta.env.VITE_SURVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSucess(null);
    if (form.current != null) {
      emailjs.sendForm(serviceId, templateId, form.current, publikKey).then(
        () => {
          setSucess("mesage was sent successfully");
          setName("");
          setEmail("");
          setMessage("");
        },
        () => {
          setError("somthing went wrong please try again later");
        }
      );
    }
  };
  return (
    <div
      className="text-white h-[100vh] w-3/4 mx-auto"
      style={{ scrollSnapAlign: "start" }}
      id="contact"
    >
      <div className="xsm:hidden md:block my-12 relative top-[20px] pt-5 text-3xl w-full text-center">
        <h1>Contact</h1>
      </div>
      <div className="flex gap-7 w-full justify-between h-full items-center">
        <form
          ref={form}
          onSubmit={(e) => sendEmail(e)}
          className="flex flex-col gap-7 flex-1 items-end p-[20px]"
        >
          <div className="flex flex-col gap-3 w-full">
            <label htmlFor="user-name">Name</label>
            <input
              type="text"
              name="user_name"
              className="p-4 outline-none border border-gray-400 rounded-[8px] bg-transparent"
              id="user-name"
              placeholder="User Name"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              value={name}
            />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label htmlFor="user-email">Email</label>
            <input
              type="email"
              name="user_email"
              id="user-email"
              className="p-4 outline-none border border-gray-400 rounded-[8px] bg-transparent"
              placeholder="Your Email"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              value={email}
            />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label htmlFor="user-message">Message</label>
            <textarea
              name="message"
              id="user-message"
              className="p-4 outline-none border border-gray-400 rounded-[8px] bg-transparent w-full"
              placeholder="Your Message"
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(e.target.value)
              }
              value={message}
            />
          </div>
          <input
            type="submit"
            value="Send"
            className="p-3 bg-blue-400 text-white rounded-md min-w-[100px]"
          />
          {error && (
            <div className="text-red-700 w-full p-2 rounded-md bg-red-200 flex items-center gap-4">
              <iframe
                src="https://lottie.host/embed/5197075e-057c-41c6-9ce4-04ebb611e449/ra0SWPaxiA.json"
                width={60}
                height={60}
              ></iframe>
              <p>{error}</p>
            </div>
          )}
          {sucess && (
            <div className="text-green-700 w-full p-1 rounded-md bg-green-200  flex items-center gap-4">
              <iframe
                src="https://lottie.host/embed/c4d9ccc1-98a9-4fb6-acd8-289c69eeee90/UVjDBsX6Zm.json"
                width={60}
                height={60}
              ></iframe>
              <p>{sucess}</p>
            </div>
          )}
        </form>

        <div className="xsm:hidden lg:flex  flex-2 w-[500px] h-[500px]">
          <iframe
            src="https://lottie.host/embed/666a7949-fdf5-4b14-a362-854e5dd0ef57/FpI3lwRnz4.json"
            style={{ width: "100%", height: "100%" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
