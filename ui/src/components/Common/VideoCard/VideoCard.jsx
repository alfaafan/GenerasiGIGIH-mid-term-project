import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid, Skeleton } from "@mui/material";

export default function VideoCard({ loading, data }) {
  return (
    //
    <Grid container gap={3}>
      {data.map((item, index) => (
        <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
          {loading ? <Skeleton variant="rectangular" width={210} height={118} /> : <img style={{ width: 210, height: 118 }} alt={item.title} src={item.src} />}
          {loading ? (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          ) : (
            <Box sx={{ pr: 2 }}>
              <Typography gutterBottom variant="body2">
                {item.title}
              </Typography>
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
