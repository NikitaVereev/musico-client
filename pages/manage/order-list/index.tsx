import {NextPageAuth} from "@/src/shared/types/auth.types";
import ListOrder from "@/src/components/screens/admin/order/list-order/ListOrder";
import {useQuery} from "@tanstack/react-query";
import {OrderService} from "@/src/services/order.service";

const OrderListPage: NextPageAuth = () => {
    const { data: orders, isLoading } = useQuery(['all orders by admin'], () => OrderService.getAllOrdersByAdmin());

    if(isLoading) return <div className="loaded">Загрузка</div>
    return (
        <ListOrder orders={orders} isLoading={isLoading} />
    );
}

OrderListPage.isOnlyAdmin = true

export default OrderListPage;