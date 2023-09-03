import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  Preview,
} from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link className="nav-link" to={title}>
          {title.toUpperCase()}
        </Link>
        {/* <span>{title.toUpperCase()}</span> */}
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
