import React from "react";
import IconEmail from "./icons/IconEmail";
import Iconfacebook from "./icons/Iconfacebook";
import IconPhone from "./icons/IconPhone";
import IconZalo from "./icons/IconZalo";
import IconIg from "./icons/IconIg";
import IconLinkedin from "./icons/IconLinkedin";
import IconTiktok from "./icons/IconTiktok";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full  border  border-gray-400 bg-white dark:bg-black">
      <div className="px-[150px] py-16 ">
        <h1 className="text-primary font-bold text-3xl  mb-6">deliany</h1>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-y-5">
            <h2 className="text-black dark:text-white text-xl font-semibold">
              CÔNG TY CỔ PHẦN CLOUD FOOD SYSTEM
            </h2>
            <p className="text-text1 text-base font-normal dark:text-strock">
              Số 54 Đông Du, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh,
              Việt Nam
            </p>
            <div className="flex gap-x-14 items-center">
              <span className="text-text2 font-normal text-sm dark:text-strock">
                Mã số thuế:
              </span>
              <span className="font-semibold text-sm text-text1 dark:text-white ">
                0316962500
              </span>
            </div>
            <div className="flex gap-x-5 items-center">
              <span className="text-text2 font-normal text-sm dark:text-strock">
                Đăng ký lần đầu:
              </span>
              <span className="font-semibold text-sm text-text1 dark:text-white">
                25/09/2021
              </span>
            </div>
          </div>
          <div className="grid grid-cols-[0.7fr,1.3fr,1fr] gap-x-5">
            <div className="flex flex-col gap-y-1">
              <h3 className="text-xl font-semibold text-text1 dark:text-white mb-3">
                deliany
              </h3>
              <span className="font-medium text-base text-text2 dark:text-text2">
                Tuyển dụng
              </span>
              <span className="font-medium text-base text-text2 dark:text-text2">
                Blog
              </span>
              <span className="font-medium text-base text-text2 dark:text-text2">
                Khuyến mãi
              </span>
            </div>
            <div className="flex flex-col gap-y-1">
              <h3 className="text-xl font-semibold text-text1 dark:text-white mb-3">
                Chính sách
              </h3>
              <span className="font-medium text-base text-text2 dark:text-text2">
                Chính sách giao hàng
              </span>
              <span className="font-medium text-base text-text2 dark:text-text2">
                Chính sách thanh toán
              </span>
              <span className="font-medium text-base text-text2 dark:text-text2">
                Chính sách đổi trả
              </span>
              <span className="font-medium text-base text-text2 dark:text-text2">
                Chính sách kiểm hàng
              </span>
              <span className="font-medium text-base text-text2 dark:text-text2">
                Chính sách bảo mật thông tin
              </span>
            </div>
            <div className="flex flex-col gap-y-1">
              <h3 className="text-xl font-semibold text-text1 dark:text-white mb-3">
                Liên hệ
              </h3>
              <div className="flex gap-x-2 items-center">
                <IconEmail></IconEmail>{" "}
                <span className="font-medium text-base text-text2 dark:text-text2">
                  denialy@gmail.com
                </span>
              </div>
              <div className="flex gap-x-2 items-center">
                <IconPhone></IconPhone>{" "}
                <span className="font-medium text-base text-text2 dark:text-text2">
                  1900000000
                </span>
              </div>
              <div className="flex gap-x-2 items-center">
                <IconZalo></IconZalo>{" "}
                <span className="font-medium text-base text-text2 dark:text-text2">
                  zalo.com.vn
                </span>
              </div>
              <div className="flex items-center gap-x-2 mt-4 dark:text-white">
                <Link to="">
                  <Iconfacebook></Iconfacebook>
                </Link>
                <Link>
                  <IconIg></IconIg>
                </Link>
                <Link>
                  <IconLinkedin></IconLinkedin>
                </Link>
                <Link>
                  <IconTiktok></IconTiktok>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
