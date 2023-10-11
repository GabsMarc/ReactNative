import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from '../screens/main/Welcome';
import { Aplication } from '../screens/main/Aplication';
import { Infos } from '../screens/main/Infos';


const { Screen, Navigator, Group } = createNativeStackNavigator();

export function StackRoutes(){
    return (
        <Navigator>
            <Group
              screenOptions={{
                headerShown: false 
              }}  
            >

                <Screen 
                    name='Welcome'
                    component={Welcome}
                    options={{
                        title: 'Tela A'
                    }}
                />

                <Screen 
                    name='Aplication'
                    component={Aplication}
                    options={{
                        title: 'Finance',                   
                    }}
                />

                <Screen 
                    name='Infos'
                    component={Infos}
                    options={{
                        title: 'Informações'
                    }}
                />
            </Group>
        </Navigator>
    )
}