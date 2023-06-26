
import {NextPageAuth} from "@/src/shared/types/auth.types";
import Checkout from "@/src/components/screens/checkout/Checkout";
import {useAuth} from "@/src/hooks/useAuth";
import {useQuery} from "@tanstack/react-query";
import {OrderService} from "@/src/services/order.service";

const CheckoutPage: NextPageAuth = () => {

    return (

        <Checkout/>
    );
}
CheckoutPage.isOnlyUser = true
export default CheckoutPage;