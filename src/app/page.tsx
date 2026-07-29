"use client";

import { ReactElement } from "react";

import dynamic from "next/dynamic";

import AuthenticationVsAuthorizationChapter from "@/chapter/authentication-vs-authorization/authentication-vs-authorization.chapter";
import CookiesChapter from "@/chapter/cookies/cookies.chapter";
import SecurityConcernsChapter from "@/chapter/security-concerns/security-concerns.chapter";
import SignInChapter from "@/chapter/sign-in/sign-in.chapter";
import SignOutChapter from "@/chapter/sign-out/sign-out.chapter";
import StoringUserDataChapter from "@/chapter/storing-user-data/storing-user-data.chapter";
import TypesOfAuthenticationChapter from "@/chapter/types-of-authentication/types-of-authentication.chapter";

import ClosingSlide from "@/slides/closing/closing.slide";
import CoverSlide from "@/slides/cover/cover.slide";
import TableOfContentsSlide from "@/slides/table-of-contents/table-of-contents.slide";

const RevealProvider = dynamic(() => import("@/providers/reveal.provider"), {
  ssr: false,
});

export default function Home(): ReactElement {
  return (
    <RevealProvider>
      <CoverSlide heading="Authentication" basePath="/auth" />
      <TableOfContentsSlide
        contents={[
          "Authentication vs Authorization",
          "Types of Authentication",
          "Storing User Data",
          "Cookies",
          "Sign In",
          "Sign Out",
          "Security Concerns",
        ]}
      />
      <AuthenticationVsAuthorizationChapter />
      <TypesOfAuthenticationChapter />
      <StoringUserDataChapter />
      <CookiesChapter />
      <SignInChapter />
      <SignOutChapter />
      <SecurityConcernsChapter />
      <ClosingSlide />
    </RevealProvider>
  );
}
