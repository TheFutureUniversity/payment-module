import React from 'react';
export default function CouponTicket({ coupons, setOpenDrawer, setCouponSelected, setSelectedCoupon, setShowYayModal, showYayModal, selectedCoupon }: {
    coupons: any[] | undefined;
    setOpenDrawer: Function;
    setCouponSelected: Function;
    setSelectedCoupon: Function;
    setShowYayModal: Function;
    showYayModal: boolean;
    selectedCoupon: boolean;
}): React.JSX.Element;
