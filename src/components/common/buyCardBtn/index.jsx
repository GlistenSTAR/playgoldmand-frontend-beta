import cb from 'classnames'

const BuyCardButton = () => {
  return (
    <div
      className={cb("bg-buy_card_color border-white rounded-buy_card_radius border-3 bg-no-repeat",
        "w-60 h-12 fixed bottom-32 z-50 left-center bg-buy_card_content text-center flex",
        "justify-center items-center text-white font-bold cursor-pointer"
    )}>
      BUY CARDS
    </div>
  );
}

export default BuyCardButton;