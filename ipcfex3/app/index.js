import { Button, View } from 'react-native';
import { Pressable, Text } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';
import Saude from './pages/saude';


export default function Page() {
    const [const1, setConst1] = useState(true)
    const [const2, setConst2] = useState(false)
  return (
    <View>
        {
            const1 &&
            <Saude/>
        }
        {
            const2 &&
            <View>
                <Text>teste 2</Text>
            </View>
            //comentario
        }
        <Link href="./pages/home" asChild>
            <View>
                <Pressable >
                    <Text>Nivaldo é bonito</Text>
                </Pressable>
                <Button title='Butão' onPress={()=>{
                    setConst1(!const1)
                    setConst2(!const2)
                    console.log(const1, const2)
                }}>
                    
                </Button>
            </View>
        </Link>
    </View>
  );

};



