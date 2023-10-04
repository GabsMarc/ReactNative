import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'
import { Welcome } from '../screens/main/Welcome';
import { Aplication } from '../screens/main/Aplication';
import { Infos } from '../screens/main/Infos';
import { Help } from '../screens/secondary/Help';
import { Home } from '../screens/secondary/Home';



const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes(){
    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: '#740be3',
                tabBarInactiveTintColor: 'gray',
                headerShown: false 
            }}
            >
            <Screen 
                name='Home'
                component={Home}
                options={{
                    tabBarLabel: 'Teste',
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons 
                            name='home'
                            color={color}
                            size={size}
                        />
                    )                  
                }}                
            />
            <Screen 
                name='Help'
                component={Help}
                options={{
                    tabBarLabel: 'Ajuda' ,
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons 
                            name='help'
                            color={color}
                            size={size}
                        />
                    )                
                }}                
            />

        </Navigator>
    )
}