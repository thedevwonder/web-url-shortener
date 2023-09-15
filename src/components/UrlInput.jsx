const UrlInput = ({ url, setUrl }) => {
  const changeUrlHandler = (event) => {
    setUrl(event?.target?.value);
  };
  return (
    <input
      type="text"
      class="inline-block h-12 w-full rounded-md text-slate-300 placeholder:italic placeholder:placeholder:text-slate-400 text-left pl-[10px] bg-slate-600"
      placeholder="enter a url"
      name="url"
      onChange={(event) => changeUrlHandler(event)}
      value={url}
      style={{ color: "rgb(203 213 225)" }}
    />
  );
};

export default UrlInput;
