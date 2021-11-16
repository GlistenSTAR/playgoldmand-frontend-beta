import Image from "next/image";
import cb from "classnames";

const Status = () => {
  return (
    <div className={cb("flex item-center pr-10")}>
      <div className={cb("flex row", "items-center px-4 bg-blue")}>
        <div
          className={cb(
            "w-10 h-10 rounded-full border-white border-2",
            "text-white text-center status_avatar"
          )}
        >
          <Image
            src={'/img/icons/stone.png'}
            alt="stone icon"
            width="30"
            height="28"
          />
        </div>
        <p className="text-white ml-4">50.0200</p>
      </div>

      <div className={cb("flex row", "items-center px-4 bg-blue")}>
        <div
          className={cb(
            "w-10 h-10 rounded-full border-white border-2",
            "text-white text-center status_avatar"
          )}
        >
          <Image
            src={'/img/icons/energy.png'}
            alt="stone icon"
            width="25"
            height="28"
          />
        </div>
        <p className="text-white ml-4">1088.0000</p>
      </div>

      <div className={cb("flex row", "items-center px-4 bg-blue")}>
        <div
          className={cb(
            "w-10 h-10 rounded-full border-white border-2",
            "text-white text-center status_avatar"
          )}
        >
          <Image
            src={'/img/icons/heart.png'}
            alt="stone icon"
            width="34"
            height="28"
            className="pt-2"
          />
        </div>
        <p className="text-white ml-4">411.0000</p>
      </div>
    </div>
  );
};

export default Status;
