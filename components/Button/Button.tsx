import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { buttonStyles } from './ButtonStyles';

interface ButtonProps extends TouchableOpacityProps {
    label: string;
}

function Button({ label, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={buttonStyles.button} {...rest}>
            <Text style={buttonStyles.buttonText}>{label}</Text>
        </TouchableOpacity>
    );
}

export default Button;