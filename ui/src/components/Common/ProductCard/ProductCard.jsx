import React from "react";
import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { green, grey } from "@mui/material/colors";

function ProductCard({ imageSrc, title, price, name }) {
  return (
    <Card sx={{ bgcolor: "transparent", width: "100%", margin: "auto" }}>
      <CardMedia image={imageSrc} title={title} sx={{ height: 200 }} />
      <CardContent>
        <Typography variant="h6" component="div" color={green[500]}>
          {name}
        </Typography>
        <Typography variant="body2" color={grey[500]}>
          Price: IDR{price}
        </Typography>
        <Button variant="outlined" color="success" sx={{ mt: 2 }}>
          Buy now
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
