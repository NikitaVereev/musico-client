import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import UploadField from '@/src/components/ui/form-elements/upload-field/UploadField';
import AdminNavigation from '@/src/components/ui/admin-navigation/AdminNavigation';
import cn from 'classnames';
import Field from '@/src/components/ui/form-elements/Field';
import styles from '@/src/components/screens/admin/product/ProductManipulation.module.scss';
import Button from '@/src/components/ui/button/Button';
import Link from 'next/link';
import { useAuth } from '@/src/hooks/useAuth';
import { useRouter } from 'next/router';
import {useProduct} from "@/src/components/screens/admin/product/create-product/useProduct";
import CreateFeatures from "@/pages/manage/create-product/create-features";

interface CreateImageProps {
    subType: string;
}

const CreateImage: FC<CreateImageProps> = ({subType}) => {
    const { push } = useRouter();
    const {
        handleSubmit,
        register,
        formState: { errors },
        setValue,
        getValues,
        control,
    } = useForm({
        mode: 'onChange',
    });
    const { user } = useAuth();
    const { onSubmitImage } = useProduct(setValue);
    const ggg = localStorage.getItem('ggg');

    if (user?.admin === false) {
        return <div>Нету(</div>;
    }

    return (
        <div>
            <div className="wrapper">
                <AdminNavigation />
                <h1>Создание продукта</h1>
                <h2>{ggg} dsjfk</h2>
                <form
                    onSubmit={handleSubmit(onSubmitImage)}
                    style={{ padding: 30 }}
                    className={cn('marginTop, animate-scaleIn')}
                >
                    <Controller
                        control={control}
                        name="fileUrl"
                        defaultValue=""
                        render={({ field: { value, onChange }, fieldState: { error } }) => (
                            <UploadField
                                onChange={onChange}
                                value={value}
                                placeholder="Изображение"
                                error={error}
                                //@ts-ignore
                                folder={ggg}
                            />
                        )}
                    />



                </form>
                <CreateFeatures />
            </div>
        </div>
    );
};

export default CreateImage;