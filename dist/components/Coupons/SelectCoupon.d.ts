import React from 'react';
export default function SelectCoupon({ coupons, originalOrderAmount, setCouponDiscount, setFinalCouponSelected, MAIN_BACKEND_API_URL }: {
    coupons: any[] | undefined;
    originalOrderAmount: number;
    setCouponDiscount: Function;
    setFinalCouponSelected: Function;
    MAIN_BACKEND_API_URL: string;
}): React.JSX.Element;
