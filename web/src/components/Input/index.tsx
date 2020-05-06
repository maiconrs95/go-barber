import React, {
    useRef,
    useState,
    InputHTMLAttributes,
    useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface Inputprops extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<Inputprops> = ({ icon: Icon, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [isFielled, setIsFielled] = useState(false);

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
            />
        </Container>
    );
};

export default Input;
