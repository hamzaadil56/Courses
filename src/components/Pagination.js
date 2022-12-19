import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded() {
  return (
    <Stack spacing={2}>
      <Pagination
        nextPageText="Next"
        prevPageText="Prev"
        count={4}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
}
