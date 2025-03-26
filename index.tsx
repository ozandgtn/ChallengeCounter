import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

function App(): JSX.Element {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <React.Fragment>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="INCREMENT" onPress={increment} />
                <Button title="DECREMENT" onPress={decrement} />
                <Text style={{ fontSize: 48, marginTop: 20 }}>Count: {count}</Text>
            </View>
        </React.Fragment>
    );
}

export default App;
