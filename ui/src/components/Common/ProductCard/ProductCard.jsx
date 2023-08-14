import React from "react";
import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import { formatRupiah } from "../../../utils/formatRupiah";

function ProductCard({ imageSrc, title, price, link }) {
  return (
    <Card sx={{ bgcolor: "transparent", width: "100%", margin: "auto" }}>
      <CardMedia image={imageSrc} title={title} sx={{ height: 200 }} />
      <CardContent>
        <Typography variant="h6" component="div" color={green[500]}>
          {title}
        </Typography>
        <Typography variant="body2" color={grey[500]}>
          Price: {formatRupiah(price)}
        </Typography>
        <Button variant="outlined" color="success" sx={{ mt: 2, textDecoration: "none" }} href={link}>
          Buy now
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
