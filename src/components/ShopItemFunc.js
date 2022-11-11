import PropTypes from "prop-types";

const propTypes = {
  item: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    descriptionFull: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};

const ShopItemFunc = ({
  item: { brand, title, description, descriptionFull, price, currency },
}) => (
  <div class="main-content">
    <h2>{brand}</h2>
    <h1>{title}</h1>
    <h3>{description}</h3>
    <div class="description">{descriptionFull}</div>
    <div class="highlight-window mobile">
      <div class="highlight-overlay"></div>
    </div>
    <div class="divider"></div>
    <div class="purchase-info">
      <div class="price">
        {price.toFixed(2)}
        {currency}
      </div>
      <button>Добавить в корзину</button>
    </div>
  </div>
);

ShopItemFunc.propTypes = propTypes;

export default ShopItemFunc;
