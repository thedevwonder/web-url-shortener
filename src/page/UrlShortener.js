import axios from "axios";
import React, { useRef, useState } from "react";
import { default as copy_image } from "../copy_content.png";

const UrlShortener = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const textAreaRef = useRef(null);

  const fetchShortUrl = async () => {
    const { data } = await axios.post("https://url.yashasva.in/short", { url });
    setShortUrl(data.data);
  };
  const copyHandler = async (event) => {
    await navigator.clipboard.writeText(shortUrl);
  };
  return (
    <div>
      <div class="mt-14 mx-auto absolute left-2 right-2">
        <h1 class="text-white text-5xl font-mono">Make Your Url Short</h1>
      </div>

      <div class="relative w-[270px] md:w-1/2 mx-auto">
        <input
          type="text"
          class="mt-[200px] w-full h-12 rounded-md outline-none placeholder:italic placeholder:placeholder:text-slate-400 text-left pl-[10px]"
          placeholder="enter a url"
          name="url"
          onChange={(event) => setUrl(event.target.value)}
        />
        <button
          class="absolute bg-blue-500 text-white h-10 w-24 rounded-lg text-sm right-1 bottom-1"
          onClick={() => fetchShortUrl()}
        >
          Shorten URL
        </button>
      </div>
      <div class="relative mx-auto bg-green-600 w-[270px] xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 h-7 my-10 rounded-md">
        <div
          class="w-[270px] lg:w-1/4 md:w-1/2 sm:w-1/2 text-base text-gray-200 absolute -left-2 md:left-4"
          ref={textAreaRef}
        >
          <p>{shortUrl}</p>
        </div>
        <div
          class="absolute -right-4 top-0 items-center cursor-pointer"
          onClick={copyHandler}
        >
          <img src={copy_image} alt="copy content" class="w-1/2" />
        </div>
      </div>
      <div class="bottom-8 mx-auto absolute left-2 right-2">
        <span className="text-white font-mono">
          &#169; Developed by Yashasva Paras. Follow on{" "}
          <a
            href="https://github.com/thedevwonder"
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-solid"
          >
            https://github.com/thedevwonder
          </a>
        </span>
      </div>
    </div>
  );
};

export default UrlShortener;
