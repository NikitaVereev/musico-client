import { FC } from 'react';
import ReactSelect, {OnChangeValue} from "react-select";
import {IOption, ISelect} from "@/src/components/screens/admin/product/create-product/select-type.interface";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated()

const SelectType: FC<ISelect> = ({
    placeholder,
    error,
    isMulti,
    options,
    field,
    isLoading
                        }) => {

    const onChange = (newValue: unknown | OnChangeValue<IOption, boolean>) => {
        field.onChange(
            isMulti
            ? (newValue as IOption[]).map((item => item.value))
                : (newValue as IOption).value
        )
    }

    const getValue = () => {
        if (field.value) {
            return isMulti
                ? options.filter((option) => field.value.indexOf(option.value) >= 0)
                : options.find((option) => option.value === field.value)
        } else {
            return isMulti ? [] : ''
        }
    }

    return (
        <div >
            <label>
                <span>{placeholder}</span>
                <ReactSelect
                    classNamePrefix="custom-select"
                    options={options}
                    value={getValue()}
                    isMulti={isMulti}
                    onChange={onChange}
                    components={animatedComponents}
                    isLoading={isLoading}
                />
            </label>
            {error && <div >{error.message}</div>}
        </div>
    )
}

export default SelectType;