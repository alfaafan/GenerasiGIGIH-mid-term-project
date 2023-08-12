import * as React from "react";

import Typography from "@mui/material/Typography";
import { Box, Grid, Link, Skeleton } from "@mui/material";
import { green } from "@mui/material/colors";

export default function VideoCard({ loading, data }) {
  return (
    <Grid container gap={2}>
      {data.map((item, index) => (
        <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
          {loading ? (
            <Skeleton variant="rectangular" width={210} height={118} />
          ) : (
            <Link href={`/${item.id}`}>
              <img style={{ width: 210, height: 118 }} alt={item.title} src={item.src} />
            </Link>
          )}
          {loading ? (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          ) : (
            <Box sx={{ pr: 2 }}>
              <Link href={`/${item.id}`} color={"inherit"} underline="none" gutterBottom variant="body2" sx={{ ":hover": { color: green[600] } }}>
                {item.title}
              </Link>
              <Typography display="block" variant="caption" color="#c2c2c2">
                {item.channel}
              </Typography>
              <Typography variant="caption" color="#c2c2c2">
                {`${item.views} • ${item.createdAt}`}
              </Typography>
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}
