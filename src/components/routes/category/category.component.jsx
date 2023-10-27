import { useParams } from "react-router-dom";
import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";
import { useState, useEffect, Fragment } from "react";
import ProductCard from "../../product-card/product-card.component";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../../store/categories/categories.selector.js";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle as="h2">{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
