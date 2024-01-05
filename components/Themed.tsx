import { Text as TextPrimitive, TextProps } from 'react-native';

export const Text = (props: TextProps) => {
  return (
    <TextPrimitive
      {...props}
      style={{ ...(props.style as any), fontFamily: 'geist' }}
    />
  );
};

export const TextSb = (props: TextProps) => {
  return (
    <TextPrimitive
      {...props}
      style={{ ...(props.style as any), fontFamily: 'geist-sb' }}
    />
  );
};

export const TextB = (props: TextProps) => {
  return (
    <TextPrimitive
      {...props}
      style={{ ...(props.style as any), fontFamily: 'geist-b' }}
    />
  );
};
