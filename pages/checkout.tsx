
import {NextPageAuth} from "@/src/shared/types/auth.types";
import Checkout from "@/src/components/screens/checkout/Checkout";

const CheckoutPage: NextPageAuth = () => {
    return (
        <Checkout />
    );
}
CheckoutPage.isOnlyUser = true
export default CheckoutPage;