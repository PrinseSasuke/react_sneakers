function Drawer({ onClose, items = [], onRemove }) {
  return (
    <div className="drawer">
      <h2 className="h2">
        Корзина{" "}
        <img src="/img/delete.svg" alt="delete card" onClick={onClose} />
      </h2>
      <ul className="cartCards">
        {items.map((obj) => (
          <li className="cartCardsItem">
            <div className="itemImg">
              <img src={`${obj.imageUrl}`} alt="" width={70} height={70} />
            </div>
            <div className="itemWrapper">
              <div className="itemName">{obj.name}</div>
              <span className="price">{obj.price} руб.</span>
            </div>
            <button
              className="itemDeleteButton"
              onClick={() => onRemove(obj.id)}
            >
              <img src="/img/delete.svg" alt="delete card" />
            </button>
          </li>
        ))}
      </ul>
      <ul className="orderInfo">
        <li>
          <span>Итого: </span>
          <div></div>
          <b>21 498 руб.</b>
        </li>
        <li>
          <span>Налог 5%: </span>
          <div></div>
          <b>1074 руб. </b>
        </li>
        <li>
          <button className="btn orderCompleteButton">
            Оформить заказ{" "}
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7H14.7143"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.71436 1L14.7144 7L8.71436 13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}
export default Drawer;
