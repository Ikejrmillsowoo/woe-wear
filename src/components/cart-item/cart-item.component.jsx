import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name as="span">{name}</Name>
        <span className="price">
          {quantity} x ${price}{" "}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
