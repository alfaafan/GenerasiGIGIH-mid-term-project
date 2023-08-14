import React from "react";

import Typography from "@mui/material/Typography";
import { Grid, Link, Skeleton } from "@mui/material";
import { green } from "@mui/material/colors";

export default function VideoCard({ loading, video }) {
  return (
    <Grid sx={{ marginRight: 0.5, my: 5 }}>
      {loading ? (
        <>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Grid sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Grid>
        </>
      ) : (
        <>
          <Link href={`/${video.id}`}>
            <img style={{ width: 320, height: 180 }} alt={video.title} src={video.thumbnailUrl} />
          </Link>
          <Grid sx={{ pr: 2, width: 320 }}>
            <Link href={`/${video.id}`} color={"inherit"} underline="none" gutterBottom variant="body1" sx={{ ":hover": { color: green[600] } }}>
              {video.title || "No Title"}
            </Link>
            <Typography display="block" variant="caption" color="#c2c2c2">
              {video.channel || "Unknown Channel"}
            </Typography>
          </Grid>
        </>
      )}
    </Grid>
  );
}
