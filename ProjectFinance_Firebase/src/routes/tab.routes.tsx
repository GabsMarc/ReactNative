import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'
import { Help } from '../screens/secondary/Help';
import Home from '../screens/secondary/Home';



const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes(){
    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    elevation: 0,
                    backgroundColor: '#740be3'
                }
            }}
            >
            <Screen 
                name='Home'
                component={Home}
                options={{
                    tabBarLabel: 'Início',
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