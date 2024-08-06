import React from "react";
export default function SideDrawer({ coupons, setOpenDrawer, setCouponSelected, setSelectedCoupon, selectedCoupon, MAIN_BACKEND_API_URL }: {
    coupons: any[] | undefined;
    setOpenDrawer: Function;
    setCouponSelected: Function;
    setSelectedCoupon: Function;
    selectedCoupon: boolean;
    MAIN_BACKEND_API_URL: string;
}): React.JSX.Element;
