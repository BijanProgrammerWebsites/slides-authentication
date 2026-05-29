import { ReactElement } from "react";

import { Slide } from "@revealjs/react";

import complexUrlImage from "@/assets/images/http/complex-url.webp";
import httpMethodsImage from "@/assets/images/http/http-methods.webp";
import httpRequestImage from "@/assets/images/http/http-request.webp";
import httpResponseImage from "@/assets/images/http/http-response.webp";
import httpStatusCodesImage from "@/assets/images/http/http-status-codes.webp";
import httpVsWebSocketImage from "@/assets/images/http/http-vs-websocket.webp";
import httpImage from "@/assets/images/http/http.webp";
import indexHtmlImage from "@/assets/images/http/index-html.webp";
import jsonBodyImage from "@/assets/images/http/json-body.webp";
import multipartBodyImage from "@/assets/images/http/multipart-body.webp";
import paramsImage from "@/assets/images/http/params.webp";
import postRequestImage from "@/assets/images/http/post-request.svg";
import postResponseImage from "@/assets/images/http/post-response.webp";
import requestAndResponseImage from "@/assets/images/http/request-and-response.webp";
import resourcesImage from "@/assets/images/http/resources.webp";
import simpleUrlImage from "@/assets/images/http/simple-url.webp";
import theWebImage from "@/assets/images/http/the-web.svg";
import webDocumentImage from "@/assets/images/http/web-document.svg";

import ImageSlide, { ImageSize } from "@/slides/image/image.slide";

export default function HttpChapter(): ReactElement {
  const heading = "HTTP" as const;

  return (
    <Slide>
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={httpImage.src}
        imageSize={ImageSize.MEDIUM}
        caption="Hypertext Transfer Protocol"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={theWebImage.src}
        imageSize={ImageSize.MEDIUM}
        caption="The Web"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={webDocumentImage.src}
        imageSize={ImageSize.MEDIUM}
        caption="Web Document"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={requestAndResponseImage.src}
        imageSize={ImageSize.MEDIUM}
        caption="Request & Response"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={simpleUrlImage.src}
        imageSize={ImageSize.MEDIUM}
        caption="URL (Uniform Resource Locator)"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={complexUrlImage.src}
        imageSize={ImageSize.MEDIUM}
        caption="Complex URL"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={indexHtmlImage.src}
        caption="Requesting index.html"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={resourcesImage.src}
        caption="Requesting Other Resources Like CSS, JS, Images, Fonts and ..."
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={httpRequestImage.src}
        imageSize={ImageSize.MEDIUM}
        caption="Request"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={httpResponseImage.src}
        imageSize={ImageSize.MEDIUM}
        caption="Response"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={httpMethodsImage.src}
        imageSize={ImageSize.MEDIUM}
        caption="HTTP Methods"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={postRequestImage.src}
        imageSize={ImageSize.MEDIUM}
        caption="POST Request"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={postResponseImage.src}
        imageSize={ImageSize.MEDIUM}
        caption="POST Response"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={paramsImage.src}
        imageSize={ImageSize.MEDIUM}
        caption="Params"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={jsonBodyImage.src}
        imageSize={ImageSize.MEDIUM}
        caption="JSON Body"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={multipartBodyImage.src}
        imageSize={ImageSize.MEDIUM}
        caption="Multipart Body"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={httpStatusCodesImage.src}
        caption="HTTP Status Codes"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={httpVsWebSocketImage.src}
        caption="HTTP vs WebSocket"
      />
    </Slide>
  );
}
