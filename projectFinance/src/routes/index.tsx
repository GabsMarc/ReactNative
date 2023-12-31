import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './stack.routes';
import { TabRoutes } from './tab.routes';

export function Routes(){
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    )
}

export function TabNavegation(){
    return (
        <NavigationContainer>
            <TabRoutes />
        </NavigationContainer>
    )
}