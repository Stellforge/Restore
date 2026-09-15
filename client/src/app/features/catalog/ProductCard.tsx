import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import type { Product } from "../../models/Product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Card elevation={3}
      sx={{ width: 200, borderRadius: 2, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <CardMedia
        sx={{ height: 240, backgroundSize: "cover" }}
        title={product.name}
        image={product.pictureUrl}
      />
      <CardContent>
        <Typography variant="subtitle2" gutterBottom sx ={{ color: 'secondary.main' }}>
          {product.name}
        </Typography>
        <Typography variant="h6" sx ={{ color: 'secondary.main' }}>
          ${(product.price / 100).toFixed(2)}
        </Typography>
      </CardContent>
     <CardActions sx={{justifyContent: "space-between" }}>
      <Button> Add to cart</Button>
      <Button> View details</Button>
     </CardActions>
    </Card>
  );
}
