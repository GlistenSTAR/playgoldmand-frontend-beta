import cb from 'classnames'

const Inuse = () => (
    <div className={cb("bg-in_use_color border-white rounded-in_use_radius border-2 bg-no-repeat",
        "w-1/2 h-1/10 fixed bottom-in_use_bottom z-50 left-in_use_center bg-buy_card_content text-center flex",
        "justify-center items-center text-white cursor-pointer md:text-9/10 sm:text-7/10 text-0"
    )}>
        CHANCE
    </div>
)

export default Inuse;