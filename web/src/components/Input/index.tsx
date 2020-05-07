import React, {
    memo,
    useRef,
    forwardRef,
    useState,
    InputHTMLAttributes,
    useCallback,
    useEffect,
} from 'react';

import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error } from './styles';

interface Inputprops extends InputHTMLAttributes<HTMLInputElement> {
    ref?: React.Ref<HTMLInputElement>;
    error?: string;
    name: string;
    icon: React.ComponentType<IconBaseProps>;
    register?: any;
}

const Input: React.FC<Inputprops> = forwardRef(
    ({ register, error, icon: Icon, ...rest }, ref?) => {
        const inputRef = useRef<HTMLInputElement>(null);

        useEffect(() => {
            register && register(inputRef.current);
        }, [inputRef, register]);

        const [isFocused, setIsFocused] = useState(false);
        const [isFilled, setIsFilled] = useState(false);

        const handleInputFocus = useCallback(() => {
            setIsFocused(true);
        }, []);

        const handleInputBlur = useCallback(() => {
            setIsFocused(false);
            setIsFilled(!!inputRef.current?.value);
        }, []);

        return (
            <Container
                isErrored={!!error}
                isFilled={isFilled}
                isFocused={isFocused}
            >
                {Icon && <Icon size={20} />}

                <input
                    {...rest}
                    ref={inputRef}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                />

                {error && (
                    <Error title={error}>
                        <FiAlertCircle size={20} />
                    </Error>
                )}
            </Container>
        );
    },
);

export default memo(Input);
