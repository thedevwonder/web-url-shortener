import axios from "axios";
import React, { useState } from "react";
import { UrlInput } from "../components";
import { Container, Grid, Header } from "semantic-ui-react";

const UrlShortener = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const fetchShortUrl = async () => {
    setIsLoading(true);
    const params = new URLSearchParams();
    const body = { url };
    params.append("JSONString", JSON.stringify(body));
    const { data } = await axios.post(
      "https://muddy-wood-3781.fly.dev/short",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    setShortUrl(data.data);
    setIsLoading(false);
  };
  const copyHandler = async (event) => {
    await navigator.clipboard.writeText(shortUrl);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  const PlayButton = () => {
    return (
      <span
        class="material-symbols-outlined text-white"
        style={{ cursor: "pointer" }}
        onClick={fetchShortUrl}
      >
        play_arrow
      </span>
    );
  };
  const PauseButton = () => {
    return (
      <span class="material-symbols-outlined text-white">pause_circle</span>
    );
  };

  const ContentCopy = () => {
    return (
      <span
        class="material-symbols-outlined text-white"
        onClick={copyHandler}
        style={{ cursor: "pointer" }}
      >
        content_copy
      </span>
    );
  };

  const Copied = () => {
    return (
      <span
        class="material-symbols-outlined"
        style={{ color: "rgb(34 197 94)" }}
      >
        done
      </span>
    );
  };
  return (
    <div>
      <br />
      <br />
      <Container>
        <Header style={{ color: "white" }} textAlign="center">
          URL Shortener
        </Header>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={2} textAlign="right" style={{ top: "0.5em" }}>
              {isLoading ? <PauseButton /> : <PlayButton />}
            </Grid.Column>
            <Grid.Column width={12}>
              <UrlInput url={url} setUrl={setUrl} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2} textAlign="right" style={{ top: "0.5em" }}>
              {isCopied ? <Copied /> : <ContentCopy />}
            </Grid.Column>
            <Grid.Column width={2} textAlign="right">
              <span style={{ color: "rgb(203 213 225)" }}>{shortUrl}</span>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default UrlShortener;
