import { StyleSheet, Text, View } from 'react-native';
import { Heading } from 'native-base';

const Header = ({ title, color, fontSize, fontWeight }) => {
  return (
    <Heading color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {title}
    </Heading>
  );
};

export default Header;

const styles = StyleSheet.create({});
