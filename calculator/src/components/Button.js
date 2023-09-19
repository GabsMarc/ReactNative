import React from "react";
import { Dimensions, StyleSheet, TouchableHighlight, Text } from "react-native";

export default props => {

    const stylesButton = [styles.button]

    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.triple) stylesButton.push(styles.buttonTriple)
    if (props.operation) stylesButton.push(styles.operationButton)

    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>
                {props.label}
            </Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create ({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#F0F0F0',
        textAlign: "center",
        borderWidth: 1,
        borderColor: '#888',
        color: "#000000"
    },
    operationButton: {
        color: '#FFF',
        backgroundColor: '#bc02f0'
    },
    buttonDouble: {
        width: (Dimensions.get("window").width / 4 * 2),
    },
    buttonTriple: {
        width: (Dimensions.get("window").width / 4 * 3),
    }
})