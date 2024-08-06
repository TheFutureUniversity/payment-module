import Image from 'next/image'
import React, { useState } from 'react'
import SideDrawer from './SideDrawer'
import { Sheet, SheetTrigger } from "../ui/couponSheet"

export default function SelectCoupon({ coupons, originalOrderAmount, setCouponDiscount, setFinalCouponSelected, MAIN_BACKEND_API_URL }: { coupons: any[] | undefined, originalOrderAmount: number, setCouponDiscount: Function, setFinalCouponSelected: Function, MAIN_BACKEND_API_URL: string, }) {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const [couponSelected, setCouponSelected] = useState<boolean>(false);
    const [selectedCoupon, setSelectedCoupon] = useState<any>();
    const calculateDiscount = (couponData: any,) => {
        originalOrderAmount = originalOrderAmount;
        let amount_after_discount = (originalOrderAmount - ((originalOrderAmount * couponData?.discountPercent) / 100));
        let maxDiscount = ((originalOrderAmount * couponData?.discountPercent) / 100);
        if (amount_after_discount > couponData?.maxDiscountPrice) {
            maxDiscount = couponData?.maxDiscountPrice;
        }
        setCouponDiscount(maxDiscount);
        return maxDiscount;
    }
    React.useEffect(() => {
        setFinalCouponSelected(selectedCoupon)
    }, [selectedCoupon])
    return (
        <>
            {couponSelected ? (
                <>
                    <div className="flex-col justify-start items-start gap-1 inline-flex">
                        <div className="justify-start items-center gap-1 inline-flex">
                            <Image
                                src="/coupons/applyCoupon.svg"
                                alt="Coupon Applied"
                                width={20}
                                height={20}
                                className="relative" />
                            <div className="text-[#434651] text-sm font-semibold font-['Inter']">Coupon Applied</div>
                        </div>
                        <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg border border-dashed border-[#aaaaaa] flex-col justify-center items-start gap-2 flex">
                            <div className="self-stretch justify-between items-center inline-flex">
                                <div className="text-center"><span className="text-[#0a2133] text-xl font-semibold font-['Poppins']">'{`${selectedCoupon?.code}`}'</span><span className="text-[#0a2133]/80 text-lg font-medium font-['Poppins']">{` applied`}</span></div>
                                <div
                                    onClick={() => {
                                        setCouponSelected(false)
                                        setCouponDiscount(0)
                                        setFinalCouponSelected(undefined)
                                        setSelectedCoupon(undefined)
                                    }}
                                    className="cursor-pointer text-[#fa3d53] text-base font-semibold font-['Poppins']">REMOVE</div>
                            </div>
                            <div className="w-fit text-[#71ad53]/80 text-sm font-semibold font-['Poppins'] uppercase">You got extra ₹{calculateDiscount(selectedCoupon)} Off</div>
                        </div>
                    </div>
                </>
            ) : (

                <Sheet open={openDrawer} onOpenChange={setOpenDrawer}>
                    <SheetTrigger asChild type='button'>
                        <div
                            // onClick={() => setOpenDrawer(!openDrawer)}
                            className="cursor-pointer h-auto px-3 py-2.5 bg-white rounded-lg border border-dashed border-[#aaaaaa] justify-start items-center gap-2.5 inline-flex">
                            <Image alt="Percentage icon for coupon" width={6} height={6} src="/coupons/applyCoupon.svg" className="w-6 h-6 relative" />
                            <div className="text-[#434651] text-sm font-semibold font-['Inter']">Apply Coupon</div>
                        </div>
                    </SheetTrigger>
                    <SideDrawer
                        MAIN_BACKEND_API_URL={MAIN_BACKEND_API_URL}
                        selectedCoupon={selectedCoupon}
                        setSelectedCoupon={setSelectedCoupon}
                        setOpenDrawer={setOpenDrawer}
                        setCouponSelected={setCouponSelected}
                        coupons={coupons}
                    />
                </Sheet>
            )}


        </>

    )
}