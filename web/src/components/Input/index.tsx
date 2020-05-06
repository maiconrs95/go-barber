import React, {
    useRef,
    useEffect,
    useState,
    InputHTMLAttributes,
    useCallback,
} from 'react';
import { useField } from '@unform/core';

import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface Inputprops extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<Inputprops> = ({ name, icon: Icon, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const { fieldName, defaultValue, error, registerField } = useField(name);

    const [isFocused, setIsFocused] = useState(false);
    const [isFielled, setIsFielled] = useState(false);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [registerField, fieldName]);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
        setIsFielled(!!inputRef.current?.value);
    }, []);

    return (
        <Container isFielled={isFielled} isFocused={isFocused}>
            {Icon && <Icon size={20} />}

            <input
                {...rest}
                ref={inputRef}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                defaultValue={defaultValue}
            />
        </Container>
    );
};

export default Input;
