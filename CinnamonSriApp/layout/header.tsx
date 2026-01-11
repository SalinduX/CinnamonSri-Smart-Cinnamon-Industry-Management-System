import { StyleSheet, Text, View } from 'react-native'

interface IHeader {
    Left?: React.ReactNode;
    centertext?: string;
    Center?: React.ReactNode;
    Right?: React.ReactNode;    
}

const Header = ({Left,centertext, Center,Right}:IHeader) => {
  return (
    <View>
            {Left?Left:<View />}
            {Center?(
                Center
                ):centertext? (
                <Text>
                    {centertext}</Text> 
                ):(
                <View />
                )}
            {Right?Right:<View />}
        <View>
        <Text>Header</Text>
        </View>
        <View>
        <Text>Header</Text>
        </View>
        <View>
        <Text>Header</Text>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})