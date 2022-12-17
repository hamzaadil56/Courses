import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";

export default function ColorTabs() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        className="course-tabs"
        onChange={handleChange}
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab
          className="tab"
          value="one"
          icon={<BookmarkIcon />}
          label="Overview"
        />

        <Tab
          className="tab"
          value="two"
          icon={<ViewInArIcon />}
          label="Curriculum"
        />
        <Tab
          className="tab"
          value="three"
          icon={<PersonIcon />}
          label="Instructor"
        />
        <Tab
          className="tab"
          value="four"
          icon={<ForumIcon />}
          label="Reviews"
        />
      </Tabs>
    </Box>
  );
}
