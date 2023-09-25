import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from '../screens/Welcome';
import { Aplication } from '../screens/Aplication';
import { Infos } from '../screens/Infos';


const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes(){
    return (
        <Navigator>
            <Screen 
                name='Welcome'
                component={Welcome}
                options={{
                    title: 'Tela A',
                    headerShown: false
                }}
            />

            <Screen 
                name='Aplication'
                component={Aplication}
                options={{
                    title: 'Finance',
                    headerTitleAlign: 'center' 
                }}
            />

            <Screen 
                name='Infos'
                component={Infos}
                options={{
                    title: 'Informações',
                    headerTitleAlign: 'center' 
                }}
            />
        </Navigator>
    )
}