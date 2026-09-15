import { Box } from "@mui/material";
import type { Product } from "../../models/Product";
import ProductCard from "./ProductCard";

type Props = {
  products: Product[];
}


export default function ProductList({ products }: Props) {
  return (
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, justifyContent: "space-between" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
  );
}
