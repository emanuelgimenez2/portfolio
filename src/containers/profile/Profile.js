import React, { useState, useEffect, lazy, Suspense } from "react";
import { ApolloClient, InMemoryCache, HttpLink, gql } from "@apollo/client";
import { openSource } from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);
export default function Profile() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }

  function getProfileData() {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: "https://api.github.com/graphql",
      headers: {
        authorization: `Bearer ${openSource.githubConvertedToken}`,
      },
    }),
    cache: new InMemoryCache(),
  });

  client
    .query({
      query: gql`
        {
          user(login: "${openSource.githubUserName}") {
            name
            bio
            isHireable
            avatarUrl
            location
          }
        }
      `,
    })
    .then((result) => {
      setProfileFunction(result.data.user);
    })
    .catch((error) => {
      console.error(error);
      setProfileFunction("Error");
      console.log(
        "Because of this Error Contact Section is Showed instead of Profile"
      );
      openSource.showGithubProfile = "false";
    });
}

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      getProfileData();
    }
  }, []);

  if (
    openSource.showGithubProfile === "false" &&
    !(typeof prof === "string" || prof instanceof String)
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}
