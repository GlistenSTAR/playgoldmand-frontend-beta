const LinkComponent = ({ links }) => (
    <div className="flex flex-col flex-wrap sm:flex-row">
        <div className="w-full md:w-4/12 pr-2 mb-6">
            <div className="shadow rounded-2xl p-4 bg-white dark:bg-gray-800">
                <div className="flex items-center">
                    <span className="rounded-xl relative p-4 bg-purple-400">
                        <img
                            src="/img/icons/discord.png"
                            width={30}
                        />
                    </span>
                    <p className="text-md text-black dark:text-white ml-2"> Social Link1 </p>
                </div>
                <div className="flex flex-col justify-start">
                    <p className="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
                        34,500
                        <span className="text-sm">$</span>
                    </p>
                </div>
            </div>
        </div>
        <div className="w-full md:w-4/12 pr-2 mb-6">
            <div className="shadow rounded-2xl p-4 bg-white dark:bg-gray-800">
                <div className="flex items-center">
                    <span className="rounded-xl relative p-4 bg-purple-400">
                        <img
                            src="/img/icons/telegram.png"
                            width={30}
                        />
                    </span>
                    <p className="text-md text-black dark:text-white ml-2"> Social Link2 </p>
                </div>
                <div className="flex flex-col justify-start">
                    <p className="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
                        10,000
                        <span className="text-sm">$</span>
                    </p>
                </div>
            </div>
        </div>
        <div className="w-full md:w-4/12">
            <div className="shadow rounded-2xl p-4 bg-white dark:bg-gray-800">
                <div className="flex items-center">
                    <span className="rounded-xl relative p-4 bg-purple-400">
                        <img
                            src="/img/icons/reddit.png"
                            width={30}
                        />
                    </span>
                    <p className="text-md text-black dark:text-white md:ml-4"> Social Link3 </p>
                </div>
                <div className="flex flex-col justify-start">
                    <p className="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
                        3500
                        <span className="text-sm">$</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default LinkComponent;
