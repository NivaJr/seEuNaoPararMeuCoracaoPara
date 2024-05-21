import { View } from 'react-native';
import { Pressable, Text } from 'react-native';
import { Link } from 'expo-router';


export default function Page() {
  return (
    <View>
        <Link href="./pages/home" asChild>
            <Pressable>
                <Text>Nivaldo é bonito</Text>
            </Pressable>
        </Link>
    </View>
  );

};



