import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes(){
    return (
        <Navigator>
            <Screen 
                name='screenA'
                component={ScreenA}
                options={{
                    title: 'Tela A',
                    headerTitleAlign: 'center'
                }}
            />

            <Screen 
                name='screenB'
                component={ScreenB}
                options={{
                    title: 'Tela B',
                    headerTitleAlign: 'center' 
                }}
            />
        </Navigator>
    )
}