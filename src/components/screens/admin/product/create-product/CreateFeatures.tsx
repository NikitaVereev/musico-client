import {FC} from 'react';
import FieldsAcoustic from "@/src/components/screens/admin/product/create-product/sub-type-fields/FieldsAcoustic";
import FieldsClassic from "@/src/components/screens/admin/product/create-product/sub-type-fields/FieldsClassic";
import FieldsElectric from "@/src/components/screens/admin/product/create-product/sub-type-fields/FieldsElectric";
import FieldsKlava from "@/src/components/screens/admin/product/create-product/sub-type-fields/FieldsKlava";
import FieldsUkulele from "@/src/components/screens/admin/product/create-product/sub-type-fields/FieldsUkulele";


const CreateFeatures: FC = () => {
    const subType = localStorage.getItem('subType');
    const productId = localStorage.getItem('ggg')

    return (
        <>


                {
                    subType === 'Клавишные' ? <FieldsKlava productId={productId} /> :
                      subType === 'Акустическая' ? <FieldsAcoustic productId={productId} /> :
                        subType === 'Классическая' ? <FieldsClassic productId={productId} /> :
                          subType === 'Электрогитара' ? <FieldsElectric productId={productId} /> :
                            subType === 'Укулеле' && <FieldsUkulele productId={productId} />
                }

        </>
    );
}

export default CreateFeatures;