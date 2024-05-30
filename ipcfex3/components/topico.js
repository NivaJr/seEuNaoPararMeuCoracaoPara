import { TouchableOpacity } from "react-native";

export default function TopicoSaude({title, icon, link}){
    return(
        <View>
            <TouchableOpacity>
                    {icon}
                    <Text>{title}</Text>
                    
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    estiloTopico: {
        display: 'flex',
        flexDirection:'row',
        justifyContent:'center',
        position:'relative',
        
    }
})