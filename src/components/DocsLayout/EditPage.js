import React from "react";
import { Anchor, Box, Text } from "grommet";

const EditPage = ({ file }) => {
  const GITHUB_BASE =
    "https://github.com/centrifuge/documentation/tree/develop/docs";
  const githubLink = `${GITHUB_BASE}/${file}`;

  return (
    <Box>
      <Anchor href={githubLink}>
        <Text style={{ fontFamily: "Space Mono" }}>Edit this page</Text>
      </Anchor>
    </Box>
  );
};

export default EditPage;
